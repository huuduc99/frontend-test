import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import authService from "../../services/auth.service";

const Login = () => {
  const onFinish = (values: any) => {
    const response = authService.login(values).then(res => {
      localStorage.setItem('user', res.toString());
      window.location.replace('/');
    });

    console.log('response', response);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
      <p className="light-orange text-3xl mb-5">Login</p>
      <p className="text-base mb-5">name: <span className="font-bold">admin</span>, password: <span className="font-bold">admin</span></p>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" className="bg-light-orange">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
