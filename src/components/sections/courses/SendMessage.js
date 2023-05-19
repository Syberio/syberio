import React from 'react';
import publickey from '../../../components/assets/public_key_icon.png';
import privatekey from '../../../components/assets/private_key_icon.png';
import user from '../../../components/assets/user.png';
import pgp_icon from '../../../components/assets/pgp_icon_2.png';
import openssl from '../../../components/assets/openssl.png';
import IPFS from '../../../components/assets/IPFS.png';
import '../../../utils/X.509.css';
import '../../../utils/style.css';
import { useNavigate } from "react-router-dom";
import {
    Tabs,
    TabList,
    TabPanels,
    Tab, TabPanel,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Box,
    Card,
    CardBody,
    Text,
    Image,
    Button,
    Container,
    Divider
} from '@chakra-ui/react';

function SendMessage() {
    const navigate = useNavigate();
    return (


        <><Box className='bodybox' h='100vh' py={[0, 10, 20]} position='center' marginBottom='400px'>
            <Box marginLeft='150px' marginTop='0px' position='absolute' fontSize='29px' color='rgb(71, 129, 200)'><b>Secure Messaging </b></Box>

            <Tabs variant='soft-rounded' colorScheme='blue' orientation='horizontal'>
                <TabList marginLeft='100px' marginTop='90px' orientation='horizontal'>

                    <br></br>
                    <Tab>Using PGP Software</Tab>
                    <Tab>Using Syberio</Tab>
                    <Tab>Using IPFS</Tab>

                </TabList>
                <TabPanels marginLeft='100px' marginRight='200px'>
                    <TabPanel marginTop='0px'>
                        <p><b>Using PGP</b></p>
                        <Tabs>
                            <TabList marginTop='0px'>
                                <Tab>Step 1</Tab>
                                <Tab>Step 2</Tab>
                                <Tab>Step 3</Tab>
                                <Tab>Step 4</Tab>
                                <Tab>Step 5</Tab>
                                <Tab>Step 6</Tab>

                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <Container marginLeft="0px"
                                        maxW="lg">
                                        <p>Install PGP software: You will need to download and install PGP software on your device. Some popular PGP software options include GnuPG, Kleopatra, and Enigmail.</p>
                                    </Container>
                                    <Box className='image' width='500px' marginLeft='80px' marginTop='100px' boxSize={200}>
                                        {<Image src={pgp_icon} alt='' />}
                                    </Box>
                                </TabPanel>
                                <TabPanel>
                                    <Container marginLeft="0px"
                                        maxW="lg"

                                    > <p>Create a key pair: Generate a key pair consisting of a public key and a private key. Your private key should be kept secret and never shared with anyone. Your public key, on the other hand, can be shared with others to enable them to send you encrypted messages.</p> </Container>
                                    <p>Anyone can easily create a public and private key pair using openpgp. <br></br> Here are the basic steps: <br></br></p>

                                    <Accordion allowToggle>


                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        <b>Step 1: Install GnuPG (GPG)</b>
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                OpenPGP is a standard that is implemented by various software, and GnuPG (GPG) is one of the most popular implementations.
                                                <br></br>
                                                Install <a style={{ color: 'blue' }} href="https://www.openpgp.org/">GnuPG</a> from official website.
                                                <br></br>


                                            </AccordionPanel>
                                        </AccordionItem>


                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        <b>Step 2: Generate key pair</b>
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>

                                                Open your command-line interface (CLI) and run the following command to generate a new key pair:
                                                <br></br>
                                                <br></br>

                                                <Container marginLeft="0px"
                                                    maxW="lg">

                                                    <Card>
                                                        <CardBody color={"white"} backgroundColor={"black"}>
                                                            <Text> gpg --gen-key </Text>
                                                        </CardBody>
                                                    </Card>
                                                </Container>
                                                <br></br>
                                                This command will start the key generation process.  <br></br>
                                                <br></br>


                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        <b>Step 3: Select Key properties</b>
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                There are sevral properties when creating a key pair that should be taken into consideration.
                                                <br></br><br></br>
                                                <Text fontSize="md" lineHeight="md" maxWidth='800px'>
                                                    <b>Select the key type:</b> You will be prompted to choose the type of key you want to generate. You can choose between an RSA key or an ECC (Elliptic Curve Cryptography) key. Select the appropriate option based on your requirements.
                                                </Text>
                                                <br></br><Divider maxWidth='800px'></Divider>
                                                <Text fontSize="md" lineHeight="md" maxWidth='800px'>
                                                    <b>Choose the key size:</b> You will be asked to specify the key size. Generally, larger key sizes offer stronger security but take longer to generate. Enter the desired key size when prompted.
                                                </Text>
                                                <br></br><Divider maxWidth='800px'></Divider>
                                                <Text fontSize="md" lineHeight="md" maxWidth='800px'>
                                                    <b>Set the expiration date (optional):</b> You can choose to set an expiration date for your key. If you want your key to be valid indefinitely, you can skip this step. Otherwise, specify the expiration duration or a specific expiration date.
                                                </Text>
                                                <br></br><Divider maxWidth='800px'></Divider>
                                                <Text fontSize="md" lineHeight="md" maxWidth='800px'>
                                                    <b>Enter your user ID information:</b> You will be prompted to enter your name and email address. This information is associated with your key and is used to identify you.
                                                </Text>
                                                <br></br><Divider maxWidth='800px'></Divider>
                                                <Text fontSize="md" lineHeight="md" maxWidth='800px'>
                                                    <b>Set a passphrase:</b> You need to set a passphrase to protect your private key. Make sure to choose a strong passphrase that is difficult to guess.
                                                </Text>
                                                <br></br><Divider maxWidth='800px'></Divider>

                                            </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        <b>Step 4: Key generation complete:</b>
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                Once the key generation process is finished, GnuPG will display the details of your new key pair, including the public key ID.
                                                <br></br>

                                                <br></br><Divider maxWidth='800px'></Divider>
                                                <Text fontSize="md" lineHeight="md" maxWidth='800px'>
                                                    That's it! You have now created a public-private key pair using OpenPGP. Your public key will be stored in the GnuPG keyring and can be exported or shared with others. The private key will be stored securely and encrypted using your chosen passphrase. <b>Remember to keep your private key safe and never share it with anyone.</b>
                                                </Text>

                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                    <br></br>
                                    <Text fontSize="md" lineHeight="tall">
                                        Alternatively you can use Syberio's built in system to create a public/private key pair.
                                    </Text>
                                    <Button variant='solid' colorScheme='blue' onClick={() => {
                                        navigate("/create-public-private-key")
                                    }}>
                                        Create your own keys!
                                    </Button>

                                    <Box className='image' width='500px' marginLeft='80px' marginTop='100px' boxSize={200}>
                                        {<Image src={openssl} alt='' />}
                                    </Box>
                                </TabPanel>
                                <TabPanel>
                                    <Container marginLeft="0px"
                                        maxW="lg"

                                    > <p> Share your public key: Share your public key with the people you want to communicate with. You can share it via email or upload it to a public key server.</p> </Container>
                                    <br></br>
                                    There are sevral ways to share and obtain public keys in internet.
                                    <br></br>
                                    Here are some ways:
                                    <br></br>
                                    <TabPanel>
                                        <Tabs>
                                            <TabList
                                                isVertical
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column'
                                                }}
                                                maxW="300px"
                                            >
                                                <Tab color={'blue.400'} bg={'blue.100'}>Direct Exchange</Tab> <br></br>
                                                <Tab color={'blue.400'} bg={'blue.100'}>Key Distribution Server</Tab><br></br>
                                                <Tab color={'blue.400'} bg={'blue.100'}>Public Key Infrastructure (PKI)</Tab><br></br>
                                                <Tab color={'blue.400'} bg={'blue.100'}>Syberio</Tab>
                                            </TabList>
                                            <TabPanels marginLeft="400px" marginTop="-150px">
                                                <TabPanel>
                                                    <Container marginLeft="-100px" marginTop="-50px"
                                                        maxW="lg"
                                                        bg="blue.200"
                                                        p="4"
                                                        borderRadius="md"
                                                        boxShadow="md"
                                                        _hover={{ boxShadow: 'lg' }}
                                                    >

                                                        <Text fontSize="md" lineHeight="tall">
                                                            You can provide a download link or a copy button for users to directly obtain the public key.
                                                        </Text>
                                                    </Container>



                                                </TabPanel>
                                                <TabPanel>
                                                    <Container marginLeft="-100px" marginTop="-50px"
                                                        maxW="lg"
                                                        bg="blue.200"
                                                        p="4"
                                                        borderRadius="md"
                                                        boxShadow="md"
                                                        _hover={{ boxShadow: 'lg' }}
                                                    >

                                                        <Text fontSize="md" lineHeight="tall">
                                                            Upload the public key to a server and provide information for others to obtain it.
                                                        </Text>
                                                    </Container>
                                                </TabPanel>
                                                <TabPanel>
                                                    <Container marginLeft="-100px" marginTop="-50px"
                                                        maxW="lg"
                                                        bg="blue.200"
                                                        p="4"
                                                        borderRadius="md"
                                                        boxShadow="md"
                                                        _hover={{ boxShadow: 'lg' }}
                                                    >

                                                        <Text fontSize="md" lineHeight="tall">
                                                            Utilize a PKI infrastructure where a Certificate Authority (CA) validates and distributes public keys to participants.
                                                        </Text>
                                                    </Container>
                                                </TabPanel>
                                                <TabPanel>
                                                    <Container marginLeft="-100px" marginTop="-50px"
                                                        maxW="lg"
                                                        bg="blue.200"
                                                        p="4"
                                                        borderRadius="md"
                                                        boxShadow="md"
                                                        _hover={{ boxShadow: 'lg' }}
                                                    >

                                                        <Text fontSize="md" lineHeight="tall">
                                                            Alternatively you can use Syberio's infrastructure to share and obtain public keys.
                                                        </Text>
                                                        <Button variant='solid' colorScheme='blue' onClick={() => {
                                                            navigate("/courses/pgp-main")
                                                        }}>
                                                            link to pk sharing page
                                                        </Button>

                                                    </Container>
                                                </TabPanel>
                                            </TabPanels>

                                        </Tabs>
                                    </TabPanel>
                                </TabPanel>
                                <TabPanel>
                                    <Container marginLeft="0px"
                                        maxW="lg"

                                    > <p> Encrypt your messages: Use your recipient's public key to encrypt your message before sending it. This ensures that only the intended recipient can read the message.</p>  </Container>
                                    <br></br>
                                    <p>For more information check out how PGP manages encryption on sender side:</p>
                                    <Button variant='solid' colorScheme='blue' onClick={() => {
                                        navigate("/courses/pgp-main")
                                    }}>
                                        PGP Encryption
                                    </Button>
                                </TabPanel>
                                <TabPanel>
                                    <Container marginLeft="0px"
                                        maxW="lg"

                                    > <p>  Decrypt incoming messages: When you receive an encrypted message, use your private key to decrypt it. This ensures that only you can read the message.</p>  </Container>

                                </TabPanel>
                                <TabPanel>
                                    <Container marginLeft="0px"
                                        maxW="lg"

                                    > <p>   Verify digital signatures: PGP also allows you to verify the authenticity of messages using digital signatures. A digital signature is created using the sender's private key and can be verified using their public key.</p> </Container>

                                </TabPanel>
                            </TabPanels>
                        </Tabs>


                    </TabPanel>

                    <TabPanel marginTop='0px'>
                        <p><b>How Syberio ensures secure communication</b></p>
                        <br></br>

                        <Tabs>
                            <TabList marginTop='0px'>
                                <Tab>Step 1: Key Generation</Tab>
                                <Tab>Step 2: Key Distribution</Tab>
                                <Tab>Step 3: Encryption</Tab>
                                <Tab>Step 4: Digital Signatures</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Container marginLeft="0px"
                                        maxW="lg"

                                    >
                                        <p>The first step in using PGP for secure communication is to generate a key pair. This involves creating a public key and a private key that will be used to encrypt and decrypt messages. The private key should be kept secret and only used by the owner.</p>
                                        <br></br>
                                        <Button variant='solid' colorScheme='blue' onClick={() => {
                                            navigate("/create-public-private-key")
                                        }}>
                                            Create your own key pair
                                        </Button>
                                        <Box marginTop="-150px" marginLeft="150px">
                                            <Box id='user' boxSize='sm' position='absolute' width='90px' marginLeft='0px' marginTop='250px'>
                                                <Image src={user} alt='' />
                                            </Box>
                                            <Box id='user' boxSize='sm' position='absolute' width='100px' marginLeft='-50px' marginTop='200px'>
                                                <Image src={privatekey} alt='' className="fade-in-4s" />
                                                <Container marginTop="-100px" marginLeft="150px" className="fade-in-5s">
                                                    Private Key of the user
                                                </Container>
                                            </Box>
                                            <Box id='user' boxSize='sm' position='absolute' width='100px' marginLeft='40px' marginTop='200px'>
                                                <Image src={publickey} alt='' className="fade-in-4s" />

                                                <Container marginTop="-100px" marginLeft="-150px" className="fade-in-5s">
                                                    Public Key of the user
                                                </Container>
                                            </Box>


                                        </Box>
                                    </Container>
                                </TabPanel>
                                <TabPanel>
                                    <Container marginLeft="0px"
                                        maxW="lg"

                                    >
                                        <p>Once a user has generated their public key, they need to distribute it to others who they want to communicate with. This can be done through various means, such as email, key servers, or exchanging keys in person.</p>
                                        <br></br>

                                        <Box>
                                            <Box id='user' boxSize='sm' position='absolute' width='90px' marginLeft='0px' marginTop='300px' >
                                                <Image src={user} alt='' />
                                            </Box>
                                            <Box id='user' boxSize='sm' position='absolute' width='90px' marginLeft='300px' marginTop='300px'>
                                                <Image src={user} alt='' />
                                            </Box>
                                            <Box id='user' boxSize='sm' position='absolute' width='90px' marginLeft='0px' marginTop='50px'>
                                                <Image src={user} alt='' />
                                            </Box>
                                            <Box id='user' boxSize='sm' position='absolute' width='90px' marginLeft='300px' marginTop='50px'>
                                                <Image src={user} alt='' />
                                            </Box>


                                            <Container style={{ '--move-x': '300px', '--move-y': '0px', left: '0px', top: '50px' }} className="fade-in-move-1s"><Image src={privatekey} boxSize='50px' /></Container>
                                            <Container style={{ '--move-x': '-300px', '--move-y': '0px', left: '300px', top: '100px' }} className="fade-in-move-2s"><Image src={privatekey} boxSize='50px' /></Container>
                                            <Container style={{ '--move-x': '-300px', '--move-y': '0px', left: '300px', top: '250px' }} className="fade-in-move-3s"><Image src={privatekey} boxSize='50px' /></Container>
                                            <Container style={{ '--move-x': '300px', '--move-y': '0px', left: '0px', top: '150px' }} className="fade-in-move-4s"><Image src={privatekey} boxSize='50px' /></Container>
                                            <Container style={{ '--move-x': '300px', '--move-y': '-250px', left: '0px', top: '100px' }} className="fade-in-move-2s"><Image src={privatekey} boxSize='50px' /></Container>
                                            <Container style={{ '--move-x': '-300px', '--move-y': '-250px', left: '300px', top: '100px' }} className="fade-in-move-1s"><Image src={privatekey} boxSize='50px' /></Container>
                                            <Container style={{ '--move-x': '300px', '--move-y': '250px', left: '0px', top: '-250px' }} className="fade-in-move-3s"><Image src={privatekey} boxSize='50px' /></Container>
                                            <Container style={{ '--move-x': '-300px', '--move-y': '250px', left: '300px', top: '-250px' }} className="fade-in-move-4s"><Image src={privatekey} boxSize='50px' /></Container>

                                            <Container className="fade-out-4s">
                                                <Container borderWidth="1px" borderColor="gray" padding="15px" marginLeft='-40px'>
                                                    <Text fontSize="20px">Users are exchanging keys among each other.</Text>
                                                </Container>
                                            </Container>
                                            <Container className="fade-in-5s">
                                                <Container borderWidth="1px" borderColor="gray" padding="15px" marginLeft='-40px'>
                                                    <Text fontSize="20px">Users sucessfully exchanged the keys among each other.<br></br>
                                                        now they can send ecrypted messages to each other using symmetric key encryption.</Text>
                                                </Container>
                                            </Container>

                                        </Box>
                                        <br></br>
                                        <Button variant='solid' colorScheme='blue' onClick={() => {
                                            navigate("/create-public-private-key")
                                        }}>
                                            Discover other users public keys using syberio
                                        </Button>
                                    </Container>
                                </TabPanel>
                                <TabPanel>
                                    <Container marginLeft="0px"
                                        maxW="lg"

                                    >
                                        <p>To encrypt a message, the sender uses the recipient's public key to encode the message. Only the recipient's private key can decode the message.</p>
                                        <br></br>
                                        <p> When you send a message through Syberio to a user who's public key is already added to your key chain, Syberio automatically encrypts your messages.</p>
                                        <br></br>
                                        <p> Reciever of the message, provided they know your public key, automatically decrypts your message from ciphertext to readable plaintext format.</p>
                                        <br></br><br></br>
                                        <p> To learn more about these security measures, Check out PGP Services.</p>
                                        <br></br>
                                        <Button variant='solid' colorScheme='blue' onClick={() => {
                                            navigate("/courses/pgp-main")
                                        }}>
                                            PGP Services
                                        </Button>
                                    </Container>
                                </TabPanel>
                                <TabPanel >
                                    <Container marginLeft="0px"
                                        maxW="lg"

                                    >
                                        <p>A digital signature is a way of verifying the authenticity of a message. The sender uses their private key to create a signature that is attached to the message. The recipient can use the sender's public key to verify the signature and ensure that the message has not been tampered with.</p>

                                    </Container>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>


                    </TabPanel>

                    <TabPanel marginTop='0px'>

                        <Box className='image' width='500px' marginLeft='80px' marginTop='100px' boxSize={200}>
                            {<Image src={IPFS} alt='' />}
                        </Box>
                        <Tabs>


                            <Button variant='solid' colorScheme='blue' marginTop='100px' onClick={() => {
                                navigate("/IPFS")
                            }}>
                                Try IPFS
                            </Button>
                        </Tabs>


                    </TabPanel>

                </TabPanels>


            </Tabs>

        </Box></>

    )
};
export default SendMessage;