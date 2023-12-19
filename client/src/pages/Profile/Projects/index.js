// Projects.js
import { Button, message, Table } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteProject, GetAllProjects } from "../../../apicalls/projects";
import { SetLoading } from "../../../redux/loadersSlice";
import { getDateFormat } from "../../../utils/helpers";
import ProjectForm from "./ProjectForm";
import "./Projects.css"; // Import the CSS file for styling

function Projects() {
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [projects, setProjects] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await GetAllProjects({ owner: user._id });
      if (response.success) {
        setProjects(response.data);
      } else {
        throw new Error(response.error);
      }
      dispatch(SetLoading(false));
    } catch (error) {
      message.error(error.message);
      dispatch(SetLoading(false));
    }
  };

  const onDelete = async (id) => {
    try {
      dispatch(SetLoading(true));
      const response = await DeleteProject(id);
      if (response.success) {
        message.success(response.message);
        getData();
      } else {
        throw new Error(response.error);
      }
      dispatch(SetLoading(false));
    } catch (error) {
      message.error(error.message);
      dispatch(SetLoading(false));
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => text.toUpperCase(),
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (text) => getDateFormat(text),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <div className="projects-action-icons">
          <i
            className="ri-delete-bin-line"
            onClick={() => onDelete(record._id)}
          ></i>
          <i
            className="ri-pencil-line"
            onClick={() => {
              setSelectedProject(record);
              setShow(true);
            }}
          ></i>
        </div>
      ),
    },
  ];

  return (
    <div className="projects-container">
      <div className="flex justify-end">
        <Button
          type="default"
          className="projects-add-button"
          onClick={() => {
            setSelectedProject(null);
            setShow(true);
          }}
        >
          Add Project
        </Button>
      </div>
      <Table columns={columns} dataSource={projects} className="projects-table" />
      {show && (
        <ProjectForm
          show={show}
          setShow={setShow}
          reloadData={getData}
          project={selectedProject}
        />
      )}
    </div>
  );
}

export default Projects;
