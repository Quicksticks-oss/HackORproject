import React, { Component } from 'react';
import { Typography } from 'antd';

const { Paragraph, Title } = Typography;

export default class Page1 extends Component {
  render() {
    return (
      <>
        <Title className="title">What is Blockchain?</Title>
        <Title level={4} className="title-left">
          First, let's set the record straight: Bitcoin and almost all
          cryptocurrencies run on a blockchain, but they themselves are not a
          blockchain.
        </Title>
        <Paragraph className="paragraph">
          Let's face it, chances are if you're reading this in the 2020s,
          names like Bitcoin and Ethereum are what got you interested. You may
          have heard of blockchain technology through public discourse and
          wonder what it's all about. Summed up in one sentence, <b>blockchains
          are append-only decentralized databases.</b>
        </Paragraph>
        <Paragraph className="paragraph">
          Fundamentally and on a low level, blockchain technology is a new way
          for machines (and by extension, humans) to interact with information.
        </Paragraph>
      </>
    )
  }
}
