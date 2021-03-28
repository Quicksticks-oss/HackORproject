import React, { Component } from 'react';
import { Typography } from 'antd';

const { Paragraph, Title } = Typography;

export default class Page3 extends Component {
  render() {
    return (
      <>
        <Title className="title">Public-Private Key Cryptography</Title>
        <Paragraph className="paragraph">
          Project CryptOR is an application that helps people learn about how
          blockchain technology works with interactive guides and demos. This
          project was build during the HackOR 2021 Hackathon.
        </Paragraph>
      </>
    )
  }
}
