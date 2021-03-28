import React, { Component } from 'react';
import { Typography, List, Card, Table } from 'antd';

const { Paragraph, Title } = Typography;

export default class Page10 extends Component {
  render() {
    const instructions = [
      "1. Start up the main hub with backend > start.py",
      "2. Start up the web sockets with backend > wallet > WebSocekts.py",
      "3. Start up the wallet software with backend > wallet > Wallet.py",
      "4. Start up the client with backend > wallet > CLIENT.py"
    ]
    const columns = [
      {
        title: 'Command',
        dataIndex: 'command',
        key: 'command',
      },
      {
        title: 'Arguments',
        dataIndex: 'arguments',
        key: 'arguments',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
    ];
    const commands = [
      {
        key: '1',
        command: 'LOGIN',
        arguments: '(String) passphrase',
        description: 'Login and enable access to all functionality with a passphrase',
      },
      {
        key: '2',
        command: 'SIGNUP',
        arguments: '(String) passphrase',
        description: 'Sign up for a new passphrase',
      },
      {
        key: '3',
        command: 'MINE',
        arguments: '(none)',
        description: 'Instantiates a miner node',
      },
      {
        key: '4',
        command: 'QUITMINE',
        arguments: '(none)',
        description: 'Shuts down all miners',
      },
      {
        key: '5',
        command: 'ADDTRANSACTION',
        arguments: '(String) sender address, (String) receiver address, (Intager) amount',
        description: 'Broadcasts a transaction to all miners to be added to the blockchain',
      },
      {
        key: '6',
        command: 'SHA',
        arguments: '(String) data',
        description: 'Returns the SHA256 hash of the data',
      },
      {
        key: '7',
        command: 'GETBLOCK',
        arguments: '(Integer) index',
        description: 'Returns the block data for the block at that index',
      },
    ];
    return (
      <>
        <Title className="title">Blockchain Simulation</Title>
        <Paragraph className="paragraph">
          Here's a tutorial for how to open up our blockchain simulator built in python!
        </Paragraph>
        <Card title="Startup Instructions" className="card">
          <List
            bordered
            dataSource={instructions}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </Card>
        <Card title="Client Commands" className="card">
          <p>
            Make sure commands are typed in ALL CAPS. Arguments follow the command and each other with one space.
          </p>
          <Table columns={columns} dataSource={commands} pagination={false}/>
        </Card>
      </>
    )
  }
}
