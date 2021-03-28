import React, { Component } from 'react';
import { Typography } from 'antd';

const { Paragraph, Title } = Typography;

export default class Page3 extends Component {
  render() {
    return (
      <>
        <Title className="title">Public-Private Key Cryptography</Title>
        <Paragraph className="paragraph">
          <b>Encryption</b> is fundamental to how modern computers communicate with each other securely. One way to approach encryption is through <b>symmetric encryption</b>, where one set of information (key) is used to both encrypt (scramble) and decrypt (solve). This sort of technology has been around for centuries, but has the weakness where the same key must somehow be shared with the recipient in order to decode the message.
        </Paragraph>
        <Paragraph className="paragraph">
          <b>Asymmetric encryption</b> uses two keys, one to encode and one to decode. When one of these keys is kept hidden and the other is out in the open, the keys are termed <b>private</b> and <b>public</b> respectively. The two keys are usually mathematically linked so that given the private key, the public key can be determined, but not the other way around. How is this more secure than symmetric encryption?
        </Paragraph>
        <Paragraph className="paragraph">
          Let's suppose that Rick is trying to send Larry a secret message but Jane wants to listen in. Using symmetric cryptography, Rick could send an encrypted message to Larry but Larry would need that key somehow to decrypt the message. The whole purpose of encryption was to prevent Jane from understanding the message, so sending the key to Larry is risky. With asymmetric encryption, both Rick and Larry would have a pair of private and public keys. Rick could use Larry's public key to encrypt his message, then send this message to Larry knowing that only Larry's private key can decrypt the message. Rick could also sign the message using his private key and Larry could then check the signature with Rick's public key. Only Rick's private key can sign a signature that his public key can verify.
        </Paragraph>
      </>
    )
  }
}
