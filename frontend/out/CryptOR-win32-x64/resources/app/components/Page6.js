import React, { Component } from 'react';
import { Typography, Input, Card, InputNumber } from 'antd';
import sha256 from 'js-sha256';

const { Paragraph, Title } = Typography;
const { TextArea } = Input;

export default class Page6 extends Component {
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
  onChange3 = ({ target: { value } }) => this.setState({
    value3: value,
    hash3: sha256(this.state.value3 + this.state.nonce3 + this.state.hash2)
  });
  onChangeNonce3 = nonce => this.setState({
    nonce3: nonce,
    hash3: sha256(this.state.value3 + this.state.nonce3 + this.state.hash2)
  });

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
        <Title className="title">Blockchains</Title>
        <Paragraph className="paragraph">
          The real power of blockchains come from how the blocks are linked together. Because each block depends on the hash of the previous block, <b>any changes to any fields from any of the previous blocks in a blockchain will result in a cascading change in all subsequent hashes</b>. If you're trying to modify data without other people knowing, it'll be pretty hard to do. Go ahead, try it out for yourself!
        </Paragraph>
        <Card title="Block 1" className="card">
          <p>Hash:</p>
          <p>{hash1}</p>
          <p>Nonce:</p>
          <InputNumber
            min={1}
            defaultValue={1}
            value={nonce1}
            onStep={this.onChangeNonce1}
            className="field"
          />
          <p>Data:</p>
          <TextArea
            value={value1}
            autoSize={{ minRows: 3, maxRows: 5 }}
            onChange={this.onChange1}
            className="field"
          />
        </Card>
        <Card title="Block 2" className="card">
          <p>Hash:</p>
          <p>{hash2}</p>
          <p>Nonce:</p>
          <InputNumber
            min={1}
            defaultValue={1}
            value={nonce2}
            onStep={this.onChangeNonce2}
            className="field"
          />
          <p>Data:</p>
          <TextArea
            value={value2}
            autoSize={{ minRows: 3, maxRows: 5 }}
            onChange={this.onChange2}
            className="field"
          />
        </Card>
        <Card title="Block 3" className="card">
          <p>Hash:</p>
          <p>{hash3}</p>
          <p>Nonce:</p>
          <InputNumber
            min={1}
            defaultValue={1}
            value={nonce3}
            onStep={this.onChangeNonce3}
            className="field"
          />
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
