import React from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {

  return (
    <>
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
      <h1>I am App Component!!!</h1>
      <button onClick={() => {
        electron.notificationApi.sendNotification('My custom notification!');
      }}>Notify</button>
    </>
  )
}
