import React, { Component } from 'react';
import {
  Typography,
  Row,
  Col,
  Card,
  Button,
  InputNumber,
  Form,
  Input
} from 'antd';
import {
  PoweroffOutlined,
  ThunderboltOutlined,
  BankOutlined,
  CalculatorOutlined
} from '@ant-design/icons';

const { Paragraph, Title } = Typography;

export default class Page10 extends Component {
  render() {
    const data = [
      "1. "
    ]
    return (
      <>
        <Title className="title">Blockchain Simulation</Title>
        <Paragraph className="paragraph">
          Here's a tutorial for how to open up our blockchain simulator built in python!
        </Paragraph>
      </>
    )
  }
}
