import React, { Component } from 'react';
import { Typography, Input, Card } from 'antd';
import sha256 from 'js-sha256';

const { Paragraph, Title } = Typography;
const { TextArea } = Input;

export default class Page2 extends Component {
  state = {
    value: ''
  };

  onChange = ({ target: { value } }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <>
        <Title className="title">Hash Functions</Title>
        <Paragraph className="paragraph">
          Hash functions, and more generally one-way functions, are absolutely
          critical pieces of cryptography to all modern computatation. <b>
          One-way functions</b> are functions that are easy to compute one way
          but much harder to reverse. A common example is multiplying prime
          numbers: it's quite trivial to find the product of 17 and 19 (323)
          but it takes much more effort to find the prime factors of 5,893 (71
          and 83).
        </Paragraph>
        <Paragraph className="paragraph">
          <b>Hash functions</b> are a special type of one-way function that
          always returns an output that is constant in length. It doesn't matter
          if you feed it five words or the entire US constitution, it will
          always spit out a result that is the same length. While this does
          mean that two different inputs can result in the same output, known
          as a <b>collision</b>, the larger the hash length the less likely
          this is.
        </Paragraph>
        <Paragraph className="paragraph">
          One other important feature about hash functions is that a small
          difference in the inputs should result in drastic differences in the
          output. If a small change didn't result in an obviously different
          hash, little errors or sabatoges could get by and compromise
          security and people could infer content based on known hashes.
        </Paragraph>
        <Paragraph className="paragraph">
          Try a hash function for yourself! Below is a <b>SHA256</b> hash
          function, a common standard in cryptography. This function returns an
          output 256-bits long in hexadecimal form (meaning 64 hexadecimal
          characters long).
        </Paragraph>
        <Card title="SHA256 input" className="card">
          <TextArea
            value={value}
            autoSize={{ minRows: 3, maxRows: 5 }}
            onChange={this.onChange}
            className="field"
          />
        </Card>
        <Card title="SHA256 output" className="card">
          <p>{sha256(value)}</p>
        </Card>
      </>
    )
  }
}
