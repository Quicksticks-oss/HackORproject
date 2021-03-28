import React, { Component } from 'react';
import { Typography, Input, Card, InputNumber } from 'antd';
import sha256 from 'js-sha256';

const { Paragraph, Title } = Typography;
const { TextArea } = Input;

export default class Page5 extends Component {
  state = {
    nonce: 1,
    value: ''
  };

  onChange = ({ target: { value } }) => this.setState({ value });
  onChangeNonce = nonce => this.setState({ nonce });

  render() {
    const { nonce, value } = this.state;
    return (
      <>
        <Title className="title">Blocks</Title>
        <Paragraph className="paragraph">
          The basic building block of blockchains are, of course, blocks. Each block is a unit of data storage, storing some arbitrary data along with some metadata like the block's <b>timestamp</b>, its <b>hash</b>, the <b>previous block's hash</b>, and an arbitrary value called the <b>nonce</b>. The use of this metadata will become more apparent in later sections, but for now you can play with how the data in a block will interact with each other.
        </Paragraph>
        <Card title="Block" className="card">
          <p>Hash:</p>
          <p>{sha256(value + nonce)}</p>
          <p>Nonce:</p>
          <InputNumber
            min={1}
            defaultValue={1}
            value={nonce}
            onStep={this.onChangeNonce}
            className="field"
          />
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
