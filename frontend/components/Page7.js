import React, { Component } from 'react';
import { Typography, Input, Card, InputNumber, Button, Row, Col } from 'antd';
import sha256 from 'js-sha256';
import { ThunderboltOutlined } from '@ant-design/icons';

const { Paragraph, Title } = Typography;
const { TextArea } = Input;

export default class Page7 extends Component {
  state = {
    nonce: 1,
    value: '',
    hash: '6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b'
  };

  onChange = ({ target: { value } }) => this.setState({
    value,
    hash: sha256(value + this.state.nonce)
  });
  onClick = () => {
    let str = this.state.hash;
    while (str.substring(0, 3) !== '000') {
      this.setState({ nonce: this.state.nonce++ });
      str = sha256(this.state.value + this.state.nonce);
    }
    this.setState({ hash: str });
  };

  render() {
    const { nonce, value, hash } = this.state;
    return (
      <>
        <Title className="title">Nodes</Title>
        <Paragraph className="paragraph">
          What makes a blockchain so special? Wouldn't a normal database be just as capable at storing blocks and chaining them together? The key is in the architecture of blockchain networks. A client-server architecture has the server as the ultimate source of truth while the clients are simply seeking for information or requesting for data. In a blockchain network, all participants work together to determine what is the truth and what can happen on the network. Each computer on the network is called a <b>node</b>, and one of the primary jobs of a node is to validate new blocks being added to the network.
        </Paragraph>
        <Paragraph className="paragraph">
          For most Proof of Work chains, these nodes are "miners" that solve hard math problems in order to earn the right to add a block to the blockchain. The next section will explain how consensus can actually be achieved among nodes, but for now here's a demo simulating how mining could work. In this example, mining is done by chaning the "nonce" value until the hash has 3 leading zeros. Only hashes with 3 leading zeros are considerd valid.
        </Paragraph>
        <Card title="Block" className="card">
          <Row>
            <Col span={18}>
              <p>Hash:</p>
              <p>{hash}</p>
            </Col>
            <Col span={6}>
              <Button
                type="primary"
                icon={<ThunderboltOutlined />}
                onClick={this.onClick}
              >
                Mine Block
              </Button>
            </Col>
          </Row>
          <p>Nonce:</p>
          <p>{nonce}</p>
          <p>Data:</p>
          <TextArea
            value={value}
            autoSize={{ minRows: 3, maxRows: 5 }}
            onChange={this.onChange}
            className="field"
          />
        </Card>
      </>
    )
  }
}
