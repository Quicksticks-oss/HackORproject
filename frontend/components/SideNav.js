import React, { Component } from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import {
  CodeOutlined,
  DesktopOutlined,
  EyeOutlined,
  QuestionOutlined
} from '@ant-design/icons';
import '../src/index.scss';

const { SubMenu } = Menu;
const { Sider } = Layout;

export default class SideNav extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={this.onCollapse}
        width="20vw"
      >
        <img
          src="./assets/hackor.png"
          width="75"
          height="75"
          className="logo"
        />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<CodeOutlined />}>
            What is Blockchain
          </Menu.Item>
          <SubMenu
            key="sub1"
            icon={<DesktopOutlined />}
            title="Blockchain Technologies"
          >
            <Menu.Item key="2">Hash Functions</Menu.Item>
            <Menu.Item key="3">Public-Private Keys</Menu.Item>
            <Menu.Item key="4">The Internet</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<EyeOutlined />} title="Blockchain Anatomy">
            <Menu.Item key="5">Blocks</Menu.Item>
            <Menu.Item key="6">Blockchains</Menu.Item>
            <Menu.Item key="7">Nodes</Menu.Item>
            <Menu.Item key="8">Consensus</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<QuestionOutlined />}>
            Why Blockchain
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}
