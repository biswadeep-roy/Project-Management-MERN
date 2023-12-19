import React from "react";
import { Tabs } from "antd";
import Projects from "./Projects";

function Profile() {
  return (
    <Tabs defaultActiveKey="1">
      <Tabs.TabPane tab="Projects" key="1">
        <Projects />
      </Tabs.TabPane>
      <Tabs.TabPane tab="General" key="2">
        General
      </Tabs.TabPane>
    </Tabs>
  );
}

export default Profile;
