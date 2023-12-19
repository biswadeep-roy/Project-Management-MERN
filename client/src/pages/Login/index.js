import React, { useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { Link } from "react-router-dom";
import Divider from "../../components/Divider";
import { LoginUser } from "../../apicalls/users";
import { useDispatch, useSelector } from "react-redux";
import { SetButtonLoading } from "../../redux/loadersSlice";
import { getAntdFormInputRules } from "../../utils/helpers";
import "./Login.css";

function Login() {
  const { buttonLoading } = useSelector((state) => state.loaders);
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(SetButtonLoading(true));
      const response = await LoginUser(values);
      dispatch(SetButtonLoading(false));
      if (response.success) {
        localStorage.setItem("token", response.data);
        message.success(response.message);
        window.location.href = "/";
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(SetButtonLoading(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="login-container">
      <div className="bg-primary h-screen flex flex-col justify-center items-center">
        <div>
          <h1 className="text-7xl text-white">Zoe-Tracker</h1>
          <span className="text-white mt-5">
            One place to track all your business records
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="login-form">
          <h1 className="login-form-title">LOGIN TO YOUR ACCOUNT</h1>
          <Divider className="login-divider" />
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Email" name="email" rules={getAntdFormInputRules}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={getAntdFormInputRules}
            >
              <Input type="password" />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              block
              loading={buttonLoading}
              className="login-button"
            >
              {buttonLoading ? "Loading" : "Login"}
            </Button>

            <div className="login-link">
              <span>Don't have an account?</span>
              <Link to="/register">Register</Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
