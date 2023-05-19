import React from 'react';
import publickey from '../../../components/assets/public_key_icon.png';
import privatekey from '../../../components/assets/private_key_icon.png';
import verify_identity_icon from '../../../components/assets/verify_identity_icon.png';
import certificate from '../../../components/assets/certificate.png';
import user2 from '../../../components/assets/user2.jpg';
import user from '../../../components/assets/user.png';
import hacker from '../../../components/assets/hackericon.png';
import pgp_icon from '../../../components/assets/pgp_icon_2.png';
import keylock from '../../../components/assets/keylock.png';
import envelope from '../../../components/assets/envelope.png';
import writing from '../../../components/assets/writing.gif';
import encrypted_Text from '../../../components/assets/encrypted-data.png';
import '../../../utils/X.509.css';
import '../../../utils/style.css';
import { useNavigate } from "react-router-dom";
import {

    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Divider,
    Box,
    Text,
    Image,
    Button,

} from '@chakra-ui/react';

function PgPMain() {
    const navigate = useNavigate();
    return (


        <><Box className='bodybox' h='100vh' py={[0, 10, 20]} position='center' marginBottom='400px'>
            <Box marginLeft='150px' marginTop='0px' position='absolute' fontSize='29px' color='rgb(71, 129, 200)'><b>PGP (Pretty Good Privacy)</b></Box>

            <Tabs variant='soft-rounded' colorScheme='blue' orientation='vertical'>
                <TabList marginLeft='100px' marginTop='90px' orientation='vertical'>
                    <Tab width='400px'>What is PGP (Pretty Good Privacy)?</Tab>
                    <Tab>PGP Authentication</Tab>
                    <Tab>PGP Confidentiality</Tab>
                    <Tab>PGP Authentication & Confidentiality</Tab>

                </TabList>
                <TabPanels marginLeft='100px' marginRight='200px'>
                    <TabPanel marginTop='0px'>
                        <p><b>What is PGP</b></p>
                        <Tabs>
                            <TabList marginTop='0px'>
                                <Tab>General Definition</Tab>
                                <Tab>Core Usage</Tab>
                                <Tab>Signature usage</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    PGP stands for "Pretty Good Privacy,"
                                    and it is a type of encryption software that allows users to protect their emails and other types
                                    of electronic communications from being read by anyone other than the intended recipient.
                                </TabPanel>
                                <TabPanel>
                                    At its core, PGP uses a combination of public and private keys to encrypt and decrypt messages.
                                    Each user has a public key, which they can share with anyone, and a private key, which they keep secret.
                                    When someone wants to send a secure message to another person, they use the recipient's public key to encrypt the message,
                                    and only the recipient's private key can decrypt the message.
                                </TabPanel>
                                <TabPanel> PGP also uses digital signatures to ensure that messages are not tampered
                                    with during transmission. This involves using the sender's private key to
                                    encrypt a digital signature that is attached to the message. The recipient
                                    can use the sender's public key to decrypt the signature and verify that
                                    the message has not been altered in transit.
                                </TabPanel>
                            </TabPanels>
                        </Tabs>

                        <Box className='image' width='500px' marginLeft='80px' marginTop='100px' boxSize={200}>
                            {<Image src={pgp_icon} alt='' />}
                        </Box>
                    </TabPanel>

                    <TabPanel>
                        <Tabs>
                            <TabList marginTop='0px'>
                                <Tab>What is Authentication</Tab>

                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <p><b>General Explanation</b> <br></br> <br></br>PGP authentication is a method of verifying the identity of the sender of an electronic message or file. It uses a digital signature to ensure that the message or file has not been tampered with and that it was actually sent by the person or organization claiming to have sent it.

                                    </p>
                                    <br></br>
                                    <Button variant='solid' colorScheme='blue' onClick={() => {
                                        navigate("/courses/pgp-authentication")
                                    }}>
                                        PGP Authentication Steps
                                    </Button>

                                </TabPanel>


                            </TabPanels>
                        </Tabs>
                        <Box className='type' width='500px' marginLeft='0px' marginTop='80px'>
                            {<Image src={keylock} alt='' />}
                        </Box>
                    </TabPanel>




                    <TabPanel>
                        <Tabs>
                            <TabList marginTop='0px'>
                                <Tab>What is Confidentiality</Tab>
                                <Tab>Principle of Confidentiality</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <p><b>General Explanation</b> <br></br> <br></br> PGP confidentiality
                                        is a feature that allows users to encrypt their electronic communications,<br></br>
                                        such as emails, files, and instant messages, to ensure that only the intended recipient can read them.
                                        <br></br><br></br>PGP confidentiality is achieved through the use of public-key cryptography, which involves the use of two keys:
                                        a public key that can be shared with anyone, and a private key that is kept secret. </p>
                                    <br></br>
                                    <Button variant='solid' colorScheme='blue' onClick={() => {
                                        navigate("/courses/pgp-confidentiality")
                                    }}>
                                        PGP Confidentiality Steps
                                    </Button>

                                </TabPanel>


                                <TabPanel>
                                    <b>How it works</b>
                                    <br></br><Divider maxWidth='800px'></Divider>
                                    <Text fontSize="md" lineHeight="md" maxWidth='800px'>

                                        PGP confidentiality,
                                        the sender of a message or file uses the recipient's public key to
                                        encrypt the communication before sending it. Once the message or file
                                        is encrypted, only the recipient, who possesses the corresponding private key,
                                        can decrypt and read it. This ensures that even if the communication is intercepted
                                        or accessed by unauthorized individuals, it will be unreadable and useless to them.
                                    </Text>

                                    <br></br><Divider maxWidth='800px'></Divider>


                                    <Box className='type' width='150px' marginLeft='0px' marginTop='80px'>
                                        {<Image src={user} alt='' />}
                                    </Box>
                                    <Box className='type' width='150px' marginLeft='500px' marginTop='80px'>
                                        {<Image src={user2} alt='' />}
                                    </Box>
                                    <Box className='type' width='150px' marginLeft='220px' marginTop='350px'>
                                        {<Image src={hacker} alt='' />}
                                    </Box>

                                    <Box className="fade-out">
                                        {(
                                            <Box
                                                id="verify-identity"
                                                boxSize="sm"
                                                position="absolute"
                                                width="90px"
                                                marginLeft="130px"
                                                marginTop="150px"
                                                className="giphy"
                                                style={{ transform: 'rotateY(180deg)' }}
                                            >
                                                <Image src={writing} alt="writing" />
                                            </Box>
                                        )}
                                    </Box>

                                    <Box
                                        id="user"
                                        boxSize="sm"
                                        position="absolute"
                                        width="90px"
                                        marginLeft="100px"
                                        marginTop="150px"
                                        className="move-box-Right"
                                    >
                                        <Image src={envelope} alt="" />
                                    </Box>
                                    <Box
                                        id="user"
                                        boxSize="sm"
                                        position="absolute"
                                        width="90px"
                                        marginLeft="350px"
                                        marginTop="150px"
                                        className="move-box-Down"
                                    >
                                        <Image src={envelope} alt="" />
                                    </Box>
                                    <Box
                                        id="user"
                                        boxSize="sm"
                                        position="absolute"
                                        width="90px"
                                        marginLeft="350px"
                                        marginTop="450px"
                                        className="fade-in-8s"
                                    >
                                        <Image src={encrypted_Text} alt="" />
                                    </Box>


                                </TabPanel>
                                <TabPanel>
                                    <p><b>Endpoint Security</b> <br></br> <br></br>Endpoint security is important in order to prevent malware from being used to attack other computers. Because MiTM attacks use malware, you need to have antivirus and internet security programs to prevent these attacks from happening.</p>
                                </TabPanel>
                                <TabPanel>
                                    <p><b>Virtual Private Network Encryption</b> <br></br> <br></br>A VPN encrypts your internet connection and keeps your passwords, credit card information, and other confidential information safe. It can help you connect to unsecure public Wi-Fi networks and protect you from man-in-the-middle attacks. Even if a hacker manages to access your network, they won't be able to see your confidential information because of the encryption. Your employer should also make sure that all of your employees are using a secure corporate VPN when working from home.</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>

                    </TabPanel>
                    <TabPanel>
                        <Tabs>
                            <TabList marginTop='0px'>
                                <Tab>Authentication and Confidentiality</Tab>
                                <Tab>Principle of Authentication & Confidentiality</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <p><b>General Explanation</b> <br></br> <br></br> By combining authentication and confidentiality, PGP provides a secure way for individuals to communicate over email. The digital signature ensures that the message came from the claimed sender, and the encryption ensures that the content of the message is protected from prying eyes.</p>
                                    <br></br>
                                    <Button variant='solid' colorScheme='blue' onClick={() => {
                                        navigate("/courses/pgp-auth-conf")
                                    }}>
                                        PGP Auth & Conf Steps
                                    </Button>

                                </TabPanel>
                                <TabPanel>
                                    <Tabs>
                                        <TabList marginTop='0px'>
                                            <Tab>Step 1</Tab>
                                            <Tab>Step 2</Tab>
                                            <Tab>Step 3</Tab>
                                            <Tab>Step 4</Tab>

                                        </TabList>

                                        <TabPanels>
                                            <TabPanel>
                                                <Box marginTop='0px'>To understand how they work together, let's consider the scenario of Alice wanting to send a confidential email to Bob using PGP.</Box>
                                                <div className="line"></div>
                                                <br></br>
                                                First, Alice will use PGP to encrypt the message using a combination of symmetric and asymmetric encryption.
                                                <Box boxSize='sm' position='absolute' width='120px' marginLeft='0px' marginTop='20px'>
                                                    <Image className='usr' src={user2} alt='' />
                                                </Box>
                                                <Box boxSize='sm' position='absolute' width='90px' marginLeft='400px' marginTop='30px'>
                                                    <Image className='usr' src={user} alt='' />
                                                </Box>

                                                <Box marginTop='150px'>
                                                    This process ensures that the contents of the message are protected and can only be accessed by Bob.
                                                </Box>
                                                <Box id='arrow' marginLeft="120px" marginTop="-100px" className='arrow-1' ></Box>
                                            </TabPanel>
                                            <TabPanel>

                                                Next, Alice will create a digital signature for the message using her private key.
                                                <Box boxSize='sm' position='absolute' width='120px' marginLeft='0px' marginTop='20px'>
                                                    <Image className='usr' src={user2} alt='' />
                                                </Box>
                                                <Box boxSize='sm' position='absolute' width='90px' marginLeft='400px' marginTop='30px'>
                                                    <Image className='usr' src={user} alt='' />
                                                </Box>
                                                <Box marginTop='150px'>
                                                    This signature serves as proof of the message's authenticity and provides assurance to Bob that the message is indeed from Alice and has not been tampered with during transmission.
                                                </Box>
                                                <Box
                                                    id="user"
                                                    boxSize="sm"
                                                    position="absolute"
                                                    width="90px"
                                                    marginLeft="130px"
                                                    marginTop="-150px"
                                                    className="fade-in"
                                                >
                                                    <Image src={certificate} alt="" />
                                                </Box>
                                            </TabPanel>
                                            <TabPanel>
                                                When Bob receives the message, he can first verify the digital signature using Alice's public key.
                                                <Box boxSize='sm' position='absolute' width='120px' marginLeft='0px' marginTop='20px'>
                                                    <Image className='usr' src={user2} alt='' />
                                                </Box>
                                                <Box boxSize='sm' position='absolute' width='90px' marginLeft='400px' marginTop='30px'>
                                                    <Image className='usr' src={user} alt='' />
                                                </Box>
                                                <Box marginTop='150px'>
                                                    If the signature is valid, Bob can be confident that the message is indeed from Alice and has not been modified.
                                                </Box>
                                                <Box
                                                    id="user"
                                                    boxSize="sm"
                                                    position="absolute"
                                                    width="90px"
                                                    marginLeft="10px"
                                                    marginTop="-130px"
                                                    className="move-key-Right"
                                                >
                                                    <Image src={envelope} alt="" />
                                                </Box>
                                                <Box
                                                    id="user"
                                                    boxSize="sm"
                                                    position="absolute"
                                                    width="90px"
                                                    marginLeft="300px"
                                                    marginTop="-200px"
                                                    className="move-Key-Down"
                                                >
                                                    <Image src={privatekey} alt="" />
                                                </Box>

                                                <Box
                                                    id="user"
                                                    boxSize="sm"
                                                    position="absolute"
                                                    width="90px"
                                                    marginLeft="300px"
                                                    marginTop="-120px"
                                                    className="fade-in-key"
                                                >
                                                    <Image src={verify_identity_icon} alt="" />
                                                </Box>
                                            </TabPanel>
                                            <TabPanel>
                                                Bob can then use his private key to decrypt the symmetric key that was used to encrypt the message.
                                                <Box boxSize='sm' position='absolute' width='120px' marginLeft='0px' marginTop='20px'>
                                                    <Image className='usr' src={user2} alt='' />
                                                </Box>
                                                <Box boxSize='sm' position='absolute' width='90px' marginLeft='400px' marginTop='30px'>
                                                    <Image className='usr' src={user} alt='' />
                                                </Box>
                                                <Box marginTop='150px'>
                                                    With this key, Bob can then decrypt the message and read its contents.
                                                </Box>
                                                <Box
                                                    id="user"
                                                    boxSize="sm"
                                                    position="absolute"
                                                    width="90px"
                                                    marginLeft="500px"
                                                    marginTop="-120px"
                                                    className="fade-out-key"
                                                >
                                                    <Image src={encrypted_Text} alt="" />
                                                </Box>
                                                <Box
                                                    id="user"
                                                    boxSize="sm"
                                                    position="absolute"
                                                    width="90px"
                                                    marginLeft="500px"
                                                    marginTop="-200px"
                                                    className="move-Key-Down"
                                                >
                                                    <Image src={publickey} alt="" />
                                                </Box>

                                                <Box
                                                    id="user"
                                                    boxSize="sm"
                                                    position="absolute"
                                                    width="90px"
                                                    marginLeft="500px"
                                                    marginTop="-120px"
                                                    className="fade-in-key"
                                                >
                                                    <Image src={certificate} alt="" />
                                                </Box>
                                            </TabPanel>

                                        </TabPanels>
                                    </Tabs>

                                </TabPanel>




                            </TabPanels>
                        </Tabs>

                    </TabPanel>

                </TabPanels>
            </Tabs>

        </Box></>

    )
};
export default PgPMain;