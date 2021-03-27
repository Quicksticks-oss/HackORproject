import React, { Component } from "react";
import { Layout, Typography } from "antd";
import SideNav from './SideNav';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

const { Content, Footer } = Layout;
const { Title } = Typography;

export default class PageLayout extends Component {
  state = {
    page: '0',
  };

  onClick = page => this.setState({ page: page.key});

  getDisplays = () => {
    let a = [];
    for (var i = 0; i < 10; i++) {
      a.push(parseInt(this.state.page) === i ? null : 'none');
    };
    return a;
  }

  render () {
    const displays = this.getDisplays();
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SideNav onClick={this.onClick} page={this.page} />
        <Layout>
          <Content style={{ display: displays[0]}}>
            <Home />
          </Content>
          <Content style={{ display: displays[1]}}>
            <Page1 />
          </Content>
          <Content style={{ display: displays[2]}}>
            <Page2 />
          </Content>
          <Content style={{ display: displays[3]}}>
            <Page3 />
          </Content>
          <Content style={{ display: displays[4]}}>
          </Content>
          <Content style={{ display: displays[5]}}>
          </Content>
          <Content style={{ display: displays[6]}}>
          </Content>
          <Content style={{ display: displays[7]}}>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Theguyhere ©2021
          </Footer>
        </Layout>
      </Layout>
    )
  }
}
