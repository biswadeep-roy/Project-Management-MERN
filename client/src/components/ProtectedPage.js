import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetLoggedInUser } from "../apicalls/users";
import { SetNotifications, SetUser } from "../redux/usersSlice";
import { SetLoading } from "../redux/loadersSlice";
import { GetAllNotifications } from "../apicalls/notifications";
import { Avatar, Badge, Space } from "antd";
import Notifications from "./Notifications";

function ProtectedPage({ children }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, notifications } = useSelector((state) => state.users);
  const getUser = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await GetLoggedInUser();
      dispatch(SetLoading(false));
      if (response.success) {
        dispatch(SetUser(response.data));
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(SetLoading(false));
      message.error(error.message);
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  const getNotifications = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await GetAllNotifications();
      dispatch(SetLoading(false));
      if (response.success) {
        dispatch(SetNotifications(response.data));
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(SetLoading(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser();
    } else {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (user) {
      getNotifications();
    }
  }, [user]);

  return (
    user && (
      <div>
        <div className="flex justify-between items-center bg-primary text-white px-5 py-4">
          <h1 className="text-2xl cursor-pointer" onClick={() => navigate("/")}>
            Zoe-Tracker
          </h1>

          <div className="flex items-center bg-white px-5 py-2 rounded">
            <span
              className=" text-primary cursor-pointer underline mr-2"
              onClick={() => navigate("/profile")}
            >
              {user?.firstName}
            </span>
            <Badge
              count={
                notifications.filter((notification) => !notification.read)
                  .length
              }
              className="cursor-pointer"
            >
              <Avatar
                shape="square"
                size="large"
                icon={
                  <i className="ri-notification-line text-white rounded-full"></i>
                }
                onClick={() => {
                  setShowNotifications(true);
                }}
              />
            </Badge>

            <i
              className="ri-logout-box-r-line ml-10 text-primary"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            ></i>
          </div>
        </div>
        <div className="px-5 py-3">{children}</div>

        {showNotifications && (
          <Notifications
            showNotifications={showNotifications}
            setShowNotifications={setShowNotifications}
            reloadNotifications={getNotifications}
          />
        )}
      </div>
    )
  );
}

export default ProtectedPage;
