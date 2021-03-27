import React from "react";
import { Layout, Typography } from "antd";
import SideNav from './SideNav';

const { Content, Footer } = Layout;
const { Title } = Typography;

export default props => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideNav />
      <Layout>
        <Title style={{ textAlign: 'center' }}>CryptOR</Title>
        <Content>
          {props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Theguyhere ©2021
        </Footer>
      </Layout>
    </Layout>
  )
}
