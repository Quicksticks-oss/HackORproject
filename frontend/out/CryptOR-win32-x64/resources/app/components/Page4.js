import React, { Component } from 'react';
import { Typography } from 'antd';

const { Paragraph, Title } = Typography;

export default class Page4 extends Component {
  render() {
    return (
      <>
        <Title className="title">Computer Networks</Title>
        <Paragraph className="paragraph">
          The Internet is pretty much just a bunch of computers connected to a shared network sharing information across it. On the local level, you have wi-fi and Ethernet as standards for communication between local machines, forming a <b>Local Area Network (LAN)</b>. Through a router that routes information that needs to leave or enter the LAN, these routers then connect to form a <b>Wide Area Network (WAN)</b>. WANs are then connected through more routers and more network hierarchies until nearly every computer on the planet is connected to each other. This is how the Internet is structured.
        </Paragraph>
        <Paragraph className="paragraph">
          What does this have to do with blockchain technology? Blockchains leverage the existing Internet infrastructure to communicate with the computers that join the network. Without the Internet, blockchains would simply not be feasible. Prominant figures in the blockchain space rightfully point issues of centralization that the modern internet has faced, but it's important to know that blockchain technology isn't aiming to replace the Internet but to build on top of it.
        </Paragraph>
      </>
    )
  }
}
