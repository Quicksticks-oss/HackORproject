import React from "react";
import ReactDOM from "react-dom";
import {
  Layout,
  Menu,
  Image,
  Typography
} from "antd";
import "antd/dist/antd.css";
import "./index.scss";
import {
  CodeOutlined,
  DesktopOutlined,
  EyeOutlined
} from '@ant-design/icons';

const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

ReactDOM.render(
  <>
    <Layout style={{ minHeight: '100vh' }}>
      <Sider style={{ width: '20vw'}}>
        <img
          src="./assets/hackor.png"
          width="50"
          height="50"
        />
        <Title level={3} style={{ textAlign: 'center' }}>CryptOR</Title>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<CodeOutlined />}>
            What is Blockchain
          </Menu.Item>
          <SubMenu key="sub1" icon={<DesktopOutlined />} title="Blockchain Technologies">
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
          <Menu.Item key="9">
            Why Blockchain
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Title style={{ textAlign: 'center' }}>CryptOR</Title>
        <Content></Content>
        <Footer style={{ textAlign: 'center' }}>
          Theguyhere ©2018
        </Footer>
      </Layout>
    </Layout>
  </>,
  document.getElementById("root")
);
