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
  state = {
    on: false,
    powerLoading: false,
    minderLoading: false,
    transactLoading: false,
    blockIndex: 1,
    dataLoading: false
  };
  onPowerClick = () => {
    this.setState({ powerLoading: true });
    if (this.state.on) {
      this.setState({ on: false })
    } else {
      var shell = require('shelljs');
      this.setState({ on: true })
    }
  }
  onBlockIndexChange = blockIndex => this.setState({ blockIndex });

  render() {
    const {
      on,
      powerLoading,
      minderLoading,
      transactLoading,
      blockIndex,
      dataLoading
    } = this.state;
    return (
      <>
        <Title className="title">Blockchain Simulation</Title>
        <Paragraph className="paragraph">
          Here is a little simulation of how a blockchain could operate. Real blockchain networks are much more complex and run on many different computers, but this should demonstrate the rough functions!
        </Paragraph>
        <Row>
          <Col span={1}/>
          <Col span={9}>
            <Card title="Simulation Controls" className="card-small">
              <Button
                type="primary"
                icon={<PoweroffOutlined />}
                loading={powerLoading}
                danger={on}
                onClick={this.onPowerClick}
                className="btn"
              >
              Power simulation
              </Button>
              <br />
              <Button
                icon={<ThunderboltOutlined />}
                loading={minderLoading}
                disabled={!on}
                className="btn"
              >
              Start a miner node
              </Button>
            </Card>
            <Card title="Send Transaction" className="card-small">
              <Form>
                <Form.Item
                  name="sender"
                  label="Sender"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="receiver"
                  label="Receiver"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="amount"
                  label="Amount"
                  rules={[{ required: true }]}
                  initialValue={0}
                >
                  <InputNumber min={0}/>
                </Form.Item>
                <Form.Item>
                  <Button
                    icon={<BankOutlined />}
                    loading={transactLoading}
                    disabled={!on}
                    className="btn"
                  >
                  Send
                  </Button>
                </Form.Item>
              </Form>
            </Card>
            <Card title="Get Block Data by Index" className="card-small">
              <Form>
                <Form.Item
                  name="index"
                  label="Index"
                  rules={[{ required: true }]}
                  initialValue={1}
                >
                  <InputNumber
                    min={1}
                    value={blockIndex}
                    onChange={this.onBlockIndexChange}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    icon={<CalculatorOutlined />}
                    loading={dataLoading}
                    disabled={!on}
                  >
                  Get block data
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
          <Col span={13}>
            <Card
              title="Information"
              className="card-small"
            >
            </Card>
          </Col>
          <Col span={1}/>
        </Row>
      </>
    )
  }
}
