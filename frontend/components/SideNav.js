import React, { Component } from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import {
  CodeOutlined,
  DesktopOutlined,
  EyeOutlined,
  QuestionOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;

export default class SideNav extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => this.setState({ collapsed });

  render() {
    const { collapsed } = this.state;
    return (
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={this.onCollapse}
        width="20vw"
      >
        <a onClick={this.props.onClick}>
          <img
            src="./assets/CryptOR.png"
            width="75"
            height="75"
            className="logo"
          />
        </a>
        <Menu theme="dark" defaultSelectedKeys={[this.props.page]} mode="inline">
          <Menu.Item
            key="1"
            icon={<CodeOutlined />}
            onClick={this.props.onClick}
            className="menuitem"
          >
            What is Blockchain
          </Menu.Item>
          <SubMenu
            key="sub1"
            icon={<DesktopOutlined />}
            title="Blockchain Technologies"
            className="menuitem"
          >
            <Menu.Item key="2" onClick={this.props.onClick} className="subitem">
              Hash Functions
            </Menu.Item>
            <Menu.Item key="3" onClick={this.props.onClick} className="subitem">
              Public-Private Keys
            </Menu.Item>
            <Menu.Item key="4" onClick={this.props.onClick} className="subitem">
              The Internet
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            icon={<EyeOutlined />}
            title="Blockchain Anatomy"
            className="menuitem"
          >
            <Menu.Item key="5" onClick={this.props.onClick} className="subitem">
              Blocks
            </Menu.Item>
            <Menu.Item key="6" onClick={this.props.onClick} className="subitem">
              Blockchains
            </Menu.Item>
            <Menu.Item key="7" onClick={this.props.onClick} className="subitem">
              Nodes
            </Menu.Item>
            <Menu.Item key="8" onClick={this.props.onClick} className="subitem">
              Consensus
            </Menu.Item>
          </SubMenu>
          <Menu.Item
            key="9"
            icon={<QuestionOutlined />}
            onClick={this.props.onClick}
            className="menuitem"
          >
            Why Blockchain
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}
