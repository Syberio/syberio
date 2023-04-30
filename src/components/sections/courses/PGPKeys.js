import React from 'react';
import CreateKeys from './CreateKeys';
import { useState, useEffect } from 'react';
import '../../../utils/GenerateKeys.css';
import {
    Box,
    Text,
    Center,
    Code,
    Tabs,
    TabList,
    TabPanel,
    TabPanels,
    Card,
    CardBody,
    Tab,
} from '@chakra-ui/react';

function PGPKeys() {
    const [keyGenPlace, setkeyGenPlace] = useState("")
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")



    return (
        //TODO: Change height property
        <><Box className='bodybox' h="150vh" py={[0, 10, 20]} position='center'>

            <Box marginLeft='150px' marginTop='150px' position='absolute' fontSize='29px' color='rgb(71, 129, 200)'><b>Generate Public and Private Keys</b></Box><Tabs variant='soft-rounded' colorScheme='blue' orientation='vertical'>
                <TabList marginLeft='100px' marginTop='300px' orientation='vertical'>
                    <Tab width='400px'>What is a Public Key?</Tab>
                    <Tab>What is a Private Key?</Tab>
                    <Tab>How to generate these keys?</Tab>
                    <Tab>How to export these keys?</Tab>
                </TabList>
                <TabPanels marginLeft='100px' marginRight='200px'>
                    <TabPanel marginTop='280px'>
                        <p><b>What is Public Key?</b><br></br><br></br></p><p>A public key is a value that is used to encrypt data that can only be decrypted using a corresponding private key. The private key is kept secret, while the public key can be shared with anyone. Public key cryptography is used to secure communication over the internet and is used in many different applications, including email, file sharing, and secure online transactions</p>
                    </TabPanel>

                    <TabPanel marginTop='280px'>
                        <p><b>What is Private Key?</b><br></br><br></br></p><p>A private key is a piece of information that is used to decrypt data that has been encrypted using the corresponding public key. Private keys are used in public key cryptography to secure communication over the internet. In a public key system, each user has a pair of keys: a public key and a private key. The public key is used to encrypt data that is intended for the owner of the private key, while the private key is used to decrypt the data. This allows the owner of the private key to receive secure communication from other users without having to share a secret key with them. The private key is kept secret and must be protected, as anyone with access to it can decrypt the data that has been encrypted with the corresponding public key.</p>
                        <Box marginLeft='150px' marginTop='150px' position='absolute' fontSize='29px' color='rgb(71, 129, 200)' className='private-key-encrypt'> </Box>
                    </TabPanel>
                    <TabPanel marginTop='200px'>
                        <Tabs>
                            <TabList>
                                <Tab width='400px'>Create with SYBERIO</Tab>
                                <Tab width='400px'>Create in your System</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <CreateKeys></CreateKeys>

                                </TabPanel>
                                <TabPanel>

                                    <p>To create a public and private key pair in your terminal, you will need to use a tool called <b>ssh-keygen</b>. This is a standard tool that is included with most Unix-based operating systems, including Linux and macOS.</p>
                                    <br></br>
                                    <p>To generate a new key pair, open a terminal window and enter the following command:</p>
                                    <br></br>
                                    <Card>
                                        <CardBody color={"white"} backgroundColor={"black"}>
                                            <Text>ssh-keygen -t rsa</Text>
                                        </CardBody>
                                    </Card>
                                    <br></br>
                                    <p>This will create a new RSA key pair, consisting of a private key and a public key. By default, the private key will be stored in a file named id_rsa in your ~/.ssh directory, and the public key will be stored in a file named id_rsa.pub in the same directory.</p>
                                    <br></br>
                                    <p>You can specify a different location for the key files by using the -f option, like this:</p>
                                    <br></br>
                                    <Card>
                                        <CardBody color={"white"} backgroundColor={"black"}>
                                            <Text>ssh-keygen -t rsa -f /path/to/keyfile</Text>
                                        </CardBody>
                                    </Card>
                                    <br></br>
                                    <p>You will be prompted to enter a passphrase for your private key. This is an optional security measure that can help protect your key if it is stolen or otherwise compromised. If you do not want to use a passphrase, simply press Enter when prompted.</p>
                                    <br></br>
                                    <p>Once the key pair has been generated, you can use the id_rsa.pub file as your public key, and the id_rsa file as your private key.</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </TabPanel>
                    <TabPanel marginTop='220px'>
                        <Center>
                            <p>
                                <b>How to Export Keys?</b>
                                <br></br><br></br>
                            </p>
                        </Center>
                        <Box alignContent="center">
                            <Center>
                                <p>If you wish to export the created public and private key in to your system, you can export it from</p>
                            </Center>

                            <br />
                            <Center>
                                <Card>
                                    <CardBody>
                                        <Text>Dashboard &#62; Manage PGP Keys &#62; Export Public and Private Keys</Text>
                                    </CardBody>
                                </Card>
                            </Center>
                            <br />
                            <Center>
                                <p>If you created the public and private key via the terminal on your system, you can export like this;</p>
                                <br />
                            </Center>
                            <br></br>
                            <Center> <p>If you wish to export your Private Keys,</p></Center>
                            <br></br>
                            <Center>
                                <Code>gpg --export-secret-keys --armor YOUR_ID_HERE &#62; desired-name.key</Code>
                            </Center>
                            <br></br>
                            <Center>
                                <Code>gpg--export --armor YOUR_ID_HERE &#62; desired-name.key</Code>
                            </Center>
                            <br></br>
                            <Center>
                                <p>These commands will export the key files in your current working directory.</p>
                            </Center>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box></>
    );
}

export default PGPKeys;