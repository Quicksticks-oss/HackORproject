import React, { Component } from 'react';
import { Typography } from 'antd';

const { Paragraph, Title } = Typography;

export default class Home extends Component {
  render() {
    return (
      <>
        <Title style={{ textAlign: 'center' }}>CryptOR</Title>
        <Paragraph>
          Project CryptOR is an application that helps people learn about how
          blockchain technology works. This project was build during the HackOR
           2021 Hackathon.
        </Paragraph>
      </>
    )
  }
}
