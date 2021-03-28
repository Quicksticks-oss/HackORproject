import React, { Component } from 'react';
import { Typography, Input, Card, InputNumber, Button, Row, Col } from 'antd';
import sha256 from 'js-sha256';
import { ThunderboltOutlined } from '@ant-design/icons';

const { Paragraph, Title } = Typography;
const { TextArea } = Input;

export default class Page7 extends Component {
  state = {
    genesisHash: 'genesis',
    nonce1: 1,
    value1: '',
    hash1: 'b80118ac281a68dded9e1061c116a2f47da14a536e4c6d2279fd9b31dc921e55',
    nonce2: 1,
    value2: '',
    hash2: 'e037e1fa39fa29b00f96cb13634255ab767a6cbd2c9d91314cbb513b05860117',
    nonce3: 1,
    value3: '',
    hash3: '7858876a654c46c4ecede25da54c9dea12ead1140a771db04597cb400224058e'
  };

  onChange1 = ({ target: { value } }) => this.setState({
    value1: value,
    hash1: sha256(this.state.value1 + this.state.nonce1 + this.genesisHash),
    hash2: sha256(this.state.value2 + this.state.nonce2 + this.state.hash1),
    hash3: sha256(this.state.value3 + this.state.nonce3 + this.state.hash2)
  });
  onChangeNonce1 = nonce => this.setState({
    nonce1: nonce,
    hash1: sha256(this.state.value1 + this.state.nonce1 + this.genesisHash),
    hash2: sha256(this.state.value2 + this.state.nonce2 + this.state.hash1),
    hash3: sha256(this.state.value3 + this.state.nonce3 + this.state.hash2)
  });
  onClick1 = () => {
    let str = this.state.hash1;
    while (str.substring(0, 3) !== '000') {
      this.setState({ nonce1: this.state.nonce1++ });
      str = sha256(this.state.value1 + this.state.nonce1);
    }
    this.setState({
      hash1: str,
      hash2: sha256(this.state.value2 + this.state.nonce2 + this.state.hash1),
      hash3: sha256(this.state.value3 + this.state.nonce3 + this.state.hash2)
    });
  };
  onChange2 = ({ target: { value } }) => this.setState({
    value2: value,
    hash2: sha256(this.state.value2 + this.state.nonce2 + this.state.hash1),
    hash3: sha256(this.state.value3 + this.state.nonce3 + this.state.hash2)
  });
  onChangeNonce2 = nonce => this.setState({
    nonce2 : nonce,
    hash2: sha256(this.state.value2 + this.state.nonce2 + this.state.hash1),
    hash3: sha256(this.state.value3 + this.state.nonce3 + this.state.hash2)
  });
  onClick2 = () => {
    let str = this.state.hash2;
    while (str.substring(0, 3) !== '000') {
      this.setState({ nonce2: this.state.nonce2++ });
      str = sha256(this.state.value2 + this.state.nonce2);
    }
    this.setState({
      hash2: str,
      hash3: sha256(this.state.value3 + this.state.nonce3 + this.state.hash2)
    });
  };
  onChange3 = ({ target: { value } }) => this.setState({
    value3: value,
    hash3: sha256(this.state.value3 + this.state.nonce3 + this.state.hash2)
  });
  onChangeNonce3 = nonce => this.setState({
    nonce3: nonce,
    hash3: sha256(this.state.value3 + this.state.nonce3 + this.state.hash2)
  });
  onClick3 = () => {
    let str = this.state.hash3;
    while (str.substring(0, 3) !== '000') {
      this.setState({ nonce3: this.state.nonce3++ });
      str = sha256(this.state.value3 + this.state.nonce3);
    }
    this.setState({ hash3: str });
  };

  render() {
    const {
      nonce1,
      value1,
      hash1,
      nonce2,
      value2,
      hash2,
      nonce3,
      value3,
      hash3
    } = this.state;
    return (
      <>
        <Title className="title">Nodes</Title>
        <Paragraph className="paragraph">
          What makes a blockchain so special? Wouldn't a normal database be just as capable at storing blocks and chaining them together? The key is in the architecture of blockchain networks. A client-server architecture has the server as the ultimate source of truth while the clients are simply seeking for information or requesting for data. In a blockchain network, all participants work together to determine what is the truth and what can happen on the network. Each computer on the network is called a <b>node</b>, and one of the primary jobs of a node is to validate new blocks being added to the network.
        </Paragraph>
        <Paragraph className="paragraph">
          For most Proof of Work chains, these nodes are "miners" that solve hard math problems in order to earn the right to add a block to the blockchain. The next section will explain how consensus can actually be achieved among nodes, but for now, here's a demo simulating how mining could work. In this example, mining is done by changing the "nonce" value until the hash has 3 leading zeros. Only hashes with 3 leading zeros are considerd valid.
        </Paragraph>
        <Card title="Block 1" className="card">
          <Row>
            <Col span={18}>
              <p>Hash:</p>
              <p>{hash1}</p>
            </Col>
            <Col span={6}>
              <Button
                type="primary"
                icon={<ThunderboltOutlined />}
                onClick={this.onClick1}
              >
                Mine Block
              </Button>
            </Col>
          </Row>
          <p>Nonce:</p>
          <p>{nonce1}</p>
          <p>Data:</p>
          <TextArea
            value={value1}
            autoSize={{ minRows: 3, maxRows: 5 }}
            onChange={this.onChange1}
            className="field"
          />
        </Card>
        <Card title="Block 2" className="card">
          <Row>
            <Col span={18}>
              <p>Hash:</p>
              <p>{hash2}</p>
            </Col>
            <Col span={6}>
              <Button
                type="primary"
                icon={<ThunderboltOutlined />}
                onClick={this.onClick2}
              >
                Mine Block
              </Button>
            </Col>
          </Row>
          <p>Nonce:</p>
          <p>{nonce2}</p>
          <p>Data:</p>
          <TextArea
            value={value2}
            autoSize={{ minRows: 3, maxRows: 5 }}
            onChange={this.onChange2}
            className="field"
          />
        </Card>
        <Card title="Block 3" className="card">
          <Row>
            <Col span={18}>
              <p>Hash:</p>
              <p>{hash3}</p>
            </Col>
            <Col span={6}>
              <Button
                type="primary"
                icon={<ThunderboltOutlined />}
                onClick={this.onClick3}
              >
                Mine Block
              </Button>
            </Col>
          </Row>
          <p>Nonce:</p>
          <p>{nonce3}</p>
          <p>Data:</p>
          <TextArea
            value={value3}
            autoSize={{ minRows: 3, maxRows: 5 }}
            onChange={this.onChange3}
            className="field"
          />
        </Card>
      </>
    )
  }
}
