import React, { Component } from "react";
import { Layout } from "antd";
import SideNav from './SideNav';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Page9 from './Page9';
import Page10 from './Page10';

const { Content, Footer } = Layout;

export default class PageLayout extends Component {
  state = {
    page: '0',
  };

  onClick = page => {
    if (page.key) {
      this.setState({ page: page.key});
    } else {
      this.setState({ page: "0"});
    }
  };
  getDisplays = () => {
    let a = [];
    for (var i = 0; i <= 10; i++) {
      a.push(parseInt(this.state.page) === i ? null : 'none');
    };
    return a;
  }

  render () {
    const displays = this.getDisplays();
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SideNav onClick={this.onClick} page={this.page} />
        <Layout style={{ backgroundColor: '#DDEBF9' }}>
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
            <Page4 />
          </Content>
          <Content style={{ display: displays[5]}}>
            <Page5 />
          </Content>
          <Content style={{ display: displays[6]}}>
            <Page6 />
          </Content>
          <Content style={{ display: displays[7]}}>
            <Page7 />
          </Content>
          <Content style={{ display: displays[8]}}>
            <Page8 />
          </Content>
          <Content style={{ display: displays[9]}}>
            <Page9 />
          </Content>
          <Content style={{ display: displays[10]}}>
            <Page10 />
          </Content>
          <Footer style={{ textAlign: 'center', backgroundColor: '#DDEBF9' }}>
            Theguyhere, Miles ©2021
          </Footer>
        </Layout>
      </Layout>
    )
  }
}
