import React, { Component } from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;

export default class Page1 extends Component {
  render() {
    return (
      <>
        <Paragraph>
          Project CryptOR is an application that helps people learn about how
          blockchain technology works. This project was build during the HackOR
           2021 Hackathon.
        </Paragraph>
      </>
    )
  }
}
