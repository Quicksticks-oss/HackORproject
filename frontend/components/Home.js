import React, { Component } from 'react';
import { Typography } from 'antd';

const { Paragraph, Title } = Typography;

export default class Home extends Component {
  render() {
    return (
      <>
        <Title className="title">CryptOR</Title>
        <Paragraph className="paragraph">
          Project CryptOR is an application that helps people learn about how blockchain technology works with interactive guides, demos, and simulations. This project was build during the HackOR 2021 Hackathon.
        </Paragraph>
        <Paragraph className="paragraph">
          🎨 Frontend Developer: Theguyhere
        </Paragraph>
        <Paragraph className="paragraph">
          💽 Backend Developer: Miles
        </Paragraph>
      </>
    )
  }
}
