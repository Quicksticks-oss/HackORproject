import React, { Component } from 'react';
import { Typography, Card, Popover, Button } from 'antd';

const { Paragraph, Title } = Typography;

export default class Page9 extends Component {
  render() {
    return (
      <>
        <Title className="title">Why Blockchain?</Title>
        <Paragraph className="paragraph">
          In order fully appreciate the use cases and potentials for blockchain technology, we need to understand some of its fundamental characteristics:
        </Paragraph>
        <Card title="Blockchain Characteristics" className="card">
          <Popover
            content="Nodes can only read data or add data. No data can be erased from history (technically, nodes could declare their own history to be accurate but it holds no value if no one is willing to agree)."
            title="Immutability"
            trigger="click"
            className="btn"
          >
            <Button>Immutability</Button>
          </Popover>
          <Popover
            content="The network is incredibly difficult to compromise. If a bad actor wanted to take down the network, they would need to gain control of at least a majority of the network's nodes rather than one or a few centralized servers. Even if a large portion of the network nodes went offline, the blockchain can still function."
            title="Fault Tolerance"
            trigger="click"
            className="btn"
          >
            <Button>Fault Tolerance</Button>
          </Popover>
          <Popover
            content="No one node controls the access to data nor the truth in the system. The truth arises from a collective agreement by all nodes based on a shared set of protocols."
            title="Decentralization"
            trigger="click"
            className="btn"
          >
            <Button>Decentralization</Button>
          </Popover>
          <Popover
            content="Everything on a blockchain, including its source code, is visible to everyone (at least for public blockchains). If someone questioned the integrity of the system, they could audit the raw code at will."
            title="Transparency"
            trigger="click"
            className="btn"
          >
            <Button>Transparency</Button>
          </Popover>
        </Card>
        <Paragraph className="paragraph">
          Keeping those characteristics in mind, here are some blockchain technology can revolutionize modern society:
        </Paragraph>
        <Card title="Blockchain Potentials" className="card">
          <Popover
            content="The most immediate and currently the most popular application for blockchain technology is in finance. Decentralized finance (Defi) enables individuals to conduct financial transactions without intermediaries such as brokers or banks. Money can flow directly where it needs to go, and cross-border payments can become as frictionless as paying a neighbor."
            title="Finance"
            trigger="click"
            className="btn"
          >
            <Button>Finance</Button>
          </Popover>
          <Popover
            content="The high degree of transparency offered by blockchains could potentially change voting and even how governments are organized. Votes can be recorded on the blockchain much more securely and efficiently than current systems. True direct democracies could practically take place rather than relying on representatives."
            title="Fault Tolerance"
            trigger="click"
            className="btn"
          >
            <Button>Governance</Button>
          </Popover>
          <Popover
            content="Data security is critical for the growing Internet of Things (IoT), and blockchain can play a role in developing this technology. The identities of each machine connected to the internet can be verified, allowing for increased trust in the data that is gathered from these machines."
            title="Decentralization"
            trigger="click"
            className="btn"
          >
            <Button>Internet of Things</Button>
          </Popover>
          <Popover
            content="Like currency, energy can be recorded securely on the blockchain. Rather than relying on centralized energy providers, a decentralized energy market can be created to more efficiently distribute power."
            title="Transparency"
            trigger="click"
            className="btn"
          >
            <Button>Energy</Button>
          </Popover>
        </Card>
      </>
    )
  }
}
