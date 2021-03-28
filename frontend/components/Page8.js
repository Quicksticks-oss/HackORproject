import React, { Component } from 'react';
import { Typography } from 'antd';

const { Paragraph, Title } = Typography;

export default class Page8 extends Component {
  render() {
    return (
      <>
        <Title className="title">Consensus</Title>
        <Title level={3} className="title-left">Proof of Work</Title>
        <Paragraph className="paragraph">
          How does everyone decide on what the true state of the network is? In a blockchain, nodes agree that the longest chain of legal blocks is the legitimate one. If a bad actor wanted to rewrite history, they would need to mine that block and all subsequent blocks faster than anyone else on the network would for people to consider it valid. With <b>Proof of Work (PoW)</b>, the mining process takes a considerable amount of resources to happen, so such an attack would be prohibitavely expensive. Unless you had over half the mining power in the entire network, the rest of the network will bound to create blocks faster than you can, making your version of history useless. Anyone can propose an alternate history, but if no one accepts it, it's pretty much worthless.
        </Paragraph>
        <Paragraph className="paragraph">
          Of course, because mining is both crucial to network security and pretty expensive, miners need to have economic motivation to pursue mining. In some networks, mining mints new tokens in the network. On other networks, miners take a fee from those who use the network. Most networks use a combination of the two to balance token supply with transaction costs. PoW has proven to be an incredibly secure consensus mechanism. As of this writing, <b>there have been no successful attack against the PoW mechanisms of any major blockchain network</b>. Yes, there have been successful scams and attacks from other methods, but no one has been able to cheat the fundamental security mechanism that gives blockchains and their tokens their value.
        </Paragraph>
        <Title level={3} className="title-left">Proof of Stake</Title>
        <Paragraph className="paragraph">
          Despite the security that PoW offers, it has a few significant drawbacks. The first issue is that the mining process limits transaction throughput as miner on the network needs to process each transaction, so more miners doesn't speed up the network. Also, the enormous amount of computing consumes a non-insignificant portion of the world's energy. Enter <b>Proof of Stake (PoS)</b>, a consensus mechanism that relies on people locking their tokens away in order to bestow them with validating priviledges. Rather than having everyone compete in a computing arms race, those who hold more tokens have a higher chance of contributing to the network. The idea is that those who hold large shares of the network will want to be honest to keep the network value high. If the validators are found to be dishonest, their staked tokens can be slashed as punishment.
        </Paragraph>
      </>
    )
  }
}
