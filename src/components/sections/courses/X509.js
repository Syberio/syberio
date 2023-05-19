import React from 'react';
import { Heading } from '@chakra-ui/react';
import user from '../../../components/assets/user.png';
import publickey from '../../../components/assets/public_key_icon.png';
import privatekey from '../../../components/assets/private_key_icon.png';
import csricon from '../../../components/assets/csr_icon.png';
import CA from '../../../components/assets/server.png';
import verify_identity_icon from '../../../components/assets/verify_identity_icon.png';
import request from '../../../components/assets/request.png';
import certificate from '../../../components/assets/certificate.png';
import certificate2 from '../../../components/assets/certificate_2.png';
import '../../../utils/X.509.css';
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Box,
    Text,
    Image,
    Accordion,
    AccordionButton, Card, CardBody, AccordionPanel, AccordionIcon, AccordionItem,
    Flex,
} from '@chakra-ui/react';


function X509() {

    return (

        <><Box className='bodybox' h='100vh' py={[0, 10, 20]} position='center'>
            <Box marginLeft='150px' marginTop='150px' position='absolute' fontSize='29px' color='rgb(71, 129, 200)'><b>X.509 Certificate</b></Box>

            <Tabs variant='soft-rounded' colorScheme='blue' orientation='vertical'>
                <TabList marginLeft='100px' marginTop='300px' orientation='vertical'>
                    <Tab width='400px'>What is an X.509 certificate?</Tab>
                    <Tab width='400px'>Structure of X.509 Certificate.</Tab>
                    <Tab>How do X.509 certificates work?</Tab>
                    <Tab>How to obtain an X.509 certificate</Tab>
                    <Tab>X.509 certificate best practices</Tab>
                </TabList>
                <TabPanels marginLeft='100px' marginRight='200px'>
                    <TabPanel marginTop='280px'>
                        <p><b>What is X509 Certificate?</b> <br></br> <br></br> An X.509 certificate is a digital
                            certificate that is used to verify the identity of a user or entity in online communication.
                            It contains information about the certificate holder, such as their name, organization,
                            and public key, as well as information about the certificate issuer, such as the name of
                            the certificate authority (CA) that issued the certificate.</p>

                        <p><b>Additional information.</b> <br></br> <br></br> The X.509 certificate is named
                            after the X.509 standard, which is a widely used format for digital certificates. The
                            standard was originally developed by the International Telecommunication Union (ITU-T)
                            and is now maintained by the Internet Engineering Task Force (IETF).</p>

                        <Box id='user' boxSize='sm' position='absolute' width='300px' marginLeft='0px' marginTop='50px'>
                            <Image src={certificate2} alt='' />
                        </Box>
                    </TabPanel>
                    <TabPanel marginTop='280px'>
                        <Box w="100%">
                            <Flex bg="gray.200" fontWeight="bold">
                                <Box p="2" flex="1">
                                    Field
                                </Box>
                                <Box p="2" flex="3">
                                    Description
                                </Box>
                            </Flex>
                            <Flex bg="white">
                                <Box p="2" flex="1">
                                    Version
                                </Box>
                                <Box p="2" flex="3">
                                    Specifies the version of the X.509 standard that the certificate adheres to
                                </Box>
                            </Flex>
                            <Flex bg="gray.50">
                                <Box p="2" flex="1">
                                    Serial Number
                                </Box>
                                <Box p="2" flex="3">
                                    Contains a unique identifier for the certificate, assigned by the certificate authority that issued the certificate
                                </Box>
                            </Flex>
                            <Flex bg="white">
                                <Box p="2" flex="1">
                                    Signature Algorithm
                                </Box>
                                <Box p="2" flex="3">
                                    Specifies the algorithm used by the certificate authority to sign the certificate
                                </Box>
                            </Flex>
                            <Flex bg="gray.50">
                                <Box p="2" flex="1">
                                    Issuer
                                </Box>
                                <Box p="2" flex="3">
                                    Contains information about the certificate authority that issued the certificate, such as its name and public key
                                </Box>
                            </Flex>
                            <Flex bg="white">
                                <Box p="2" flex="1">
                                    Validity Period
                                </Box>
                                <Box p="2" flex="3">
                                    Specifies the period during which the certificate is valid, including the start and end dates
                                </Box>
                            </Flex>
                            <Flex bg="gray.50">
                                <Box p="2" flex="1">
                                    Subject
                                </Box>
                                <Box p="2" flex="3">
                                    Contains information about the entity to which the certificate was issued, such as its name and public key
                                </Box>
                            </Flex>
                            <Flex bg="white">
                                <Box p="2" flex="1">
                                    Subject Public Key Info
                                </Box>
                                <Box p="2" flex="3">
                                    Contains the public key of the entity to which the certificate was issued
                                </Box>
                            </Flex>
                            <Flex bg="gray.50">
                                <Box p="2" flex="1">
                                    Extensions
                                </Box>
                                <Box p="2" flex="3">
                                    Contains optional extensions that can be added to the certificate, such as information about the intended usage of the certificate or the policies governing its use
                                </Box>
                            </Flex>
                            <Flex bg="white">
                                <Box p="2" flex="1">
                                    Signature Algorithm Identifier
                                </Box>
                                <Box p="2" flex="3">
                                    Specifies the algorithm used by the certificate authority to sign the certificate
                                </Box>
                            </Flex>
                            <Flex bg="gray.50" borderBottomWidth="1px">
                                <Box p="2" flex="1">
                                    Signature
                                </Box>
                                <Box p="2" flex="3">
                                    Contains the digital signature that was generated by the certificate authority to verify the authenticity of the certificate
                                </Box>
                            </Flex>
                        </Box>


                    </TabPanel>






                    <TabPanel>
                        <TabPanel marginTop='0px'>
                            <Tabs>
                                <Heading as="h2" mb="4">
                                    How do X.509 certificates work?
                                </Heading>

                                <Accordion allowToggle>
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    <b>  Step 1: Generate a Public-Private Key Pair</b>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>

                                            <Heading as="h2" mb="4">

                                            </Heading>
                                            <Flex justify="space-between" mt="4">
                                                <Box flex="1" mr="4">

                                                    <Box p="4" border="1px solid gray" borderRadius="md" mt="4">
                                                        <Text>The entity requesting the certificate (the "subject") generates a public-private key pair.</Text>
                                                        <Box id='user' boxSize='sm' position='absolute' width='90px' marginLeft='0px' marginTop='450px'>
                                                            <Image src={user} alt='' />
                                                        </Box>
                                                    </Box>

                                                </Box>
                                            </Flex>


                                        </AccordionPanel>
                                    </AccordionItem>



                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    <b> Step 2: Send a Certificate Signing Request to a Trusted CA</b>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Flex justify="space-between" mt="4">
                                                <Box flex="1" mr="4">

                                                    <Box p="4" border="1px solid gray" borderRadius="md" mt="4">
                                                        <Text>The subject sends a certificate signing request (CSR) to a trusted certificate authority (CA).
                                                            The CSR includes the subject's public key and identifying information, such as the subject's name and domain name.</Text>

                                                    </Box>
                                                </Box>
                                            </Flex>
                                        </AccordionPanel>
                                    </AccordionItem>



                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    <b> Step 3: CA Verifies Identity and Issues a Signed Certificate</b>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Flex justify="space-between" mt="4">
                                                <Box flex="1" mr="4">

                                                    <Box p="4" border="1px solid gray" borderRadius="md" mt="4">
                                                        <Text>The CA verifies the identity of the subject and, if satisfied, issues a signed certificate. The signed certificate includes the subject's
                                                            identifying information, the subject's public key, and a digital signature from the CA that attests to the authenticity of the certificate.</Text>
                                                    </Box>

                                                </Box>
                                            </Flex>
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    <b>  Step 4: Use Signed Certificate to Prove Identity to Other Parties</b>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Flex justify="space-between" mt="4">
                                                <Box flex="1" mr="4">

                                                    <Box p="4" border="1px solid gray" borderRadius="md" mt="4">
                                                        <Text>The subject can now use the signed certificate to prove their identity to other parties. For example, a web server
                                                            might present its signed certificate to a web browser during the SSL/TLS handshake process to prove that
                                                            it is who it claims to be.</Text>
                                                    </Box>

                                                </Box>
                                            </Flex>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    <b> Step 5: Verifying authenticity of the signed certificate.</b>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Flex justify="space-between" mr="4">
                                                <Box flex="1" mr="4">

                                                    <Box p="4" border="1px solid gray" borderRadius="md" mt="4">
                                                        <Text>The other party verifies the authenticity of
                                                            the signed certificate by checking the digital signature against the CA's public key,
                                                            which can be obtained from a trusted source.</Text>
                                                    </Box>

                                                </Box>
                                            </Flex>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </Tabs>
                        </TabPanel>

                    </TabPanel>

                    <TabPanel>
                        <TabPanel marginTop='0px'>
                            <Tabs>


                                <Accordion allowToggle>
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    <b> Step 1: Generate a Public-Private Key Pair</b>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>

                                            <Heading as="h2" mb="4">

                                            </Heading>
                                            <Flex justify="space-between" mt="4">
                                                <Box flex="1" mr="4">
                                                    <Text

                                                    >
                                                        Step 1: Generate a Public-Private Key Pair
                                                    </Text>

                                                    <Box p="4" border="1px solid gray" borderRadius="md" mt="4">
                                                        <Text>First, you need to generate a public-private key pair. This can be done using a tool like OpenSSL, which is available for various operating systems. The private key should be kept secret and protected, while the public key can be shared freely.</Text>
                                                        <Box id='user' boxSize='sm' position='absolute' width='90px' marginLeft='0px' marginTop='250px'>
                                                            <Image src={user} alt='' />
                                                        </Box>
                                                        <Box id='user' boxSize='sm' position='absolute' width='100px' marginLeft='-50px' marginTop='200px'>
                                                            <Image src={privatekey} alt='' />
                                                        </Box>
                                                        <Box id='user' boxSize='sm' position='absolute' width='100px' marginLeft='40px' marginTop='200px'>
                                                            <Image src={publickey} alt='' />
                                                        </Box>
                                                    </Box>

                                                </Box>
                                            </Flex>


                                        </AccordionPanel>
                                    </AccordionItem>



                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    <b>Step 2: Create a certificate signing request (CSR)</b>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Flex justify="space-between" mt="4">
                                                <Box flex="1" mr="4">
                                                    <Text

                                                    >

                                                    </Text>

                                                    <Box p="4" border="1px solid gray" borderRadius="md" mt="4">
                                                        <Text>Next, you need to create a certificate signing request (CSR) that includes your public key and some additional information about your identity and organization. This can also be done using OpenSSL or similar tools. The CSR is a file that you will submit to a certificate authority (CA) to request a signed certificate.</Text>
                                                        <Box id='user' boxSize='sm' position='absolute' width='90px' marginLeft='0px' marginTop='200px'>
                                                            <Image src={user} alt='' />
                                                        </Box>
                                                        <Box id='user' boxSize='sm' position='absolute' width='90px' marginLeft='100px' marginTop='200px'>
                                                            <Image src={csricon} alt='' />
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Flex>
                                        </AccordionPanel>
                                    </AccordionItem>



                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    <b>Step 3: Submit the CSR to a certificate authority</b>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Flex justify="space-between" mt="4">
                                                <Box flex="1" mr="4">


                                                    <Box p="4" border="1px solid gray" borderRadius="md" mt="4">
                                                        <Text>You will need to find a trusted certificate authority (CA) that can issue X.509 certificates. Some popular CAs include DigiCert, GlobalSign, and Comodo. Submit your CSR to the CA along with any required information and payment.</Text>


                                                        <Box id='user' boxSize='sm' position='absolute' width='90px' marginLeft='0px' marginTop='200px'>
                                                            <Image src={user} alt='' />
                                                        </Box>

                                                        <Box
                                                            id="user"
                                                            boxSize="sm"
                                                            position="absolute"
                                                            width="90px"
                                                            marginLeft="100"
                                                            marginTop="200px"
                                                            className="move-box"
                                                        >
                                                            <Image src={csricon} alt="" />
                                                        </Box>

                                                        <Box id='user' boxSize='sm' position='absolute' width='90px' marginLeft='400px' marginTop='200px'>
                                                            <Image src={CA} alt='' />
                                                        </Box>

                                                    </Box>


                                                </Box>
                                            </Flex>
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    <b> Step 4: Verify your identity</b>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Flex justify="space-between" mt="4">
                                                <Box flex="1" mr="4">


                                                    <Box p="4" border="1px solid gray" borderRadius="md" mt="4">
                                                        <Text>The CA may require you to provide additional information or documentation to verify your identity and organization. This could include government-issued identification, business registration documents, or other materials.</Text>

                                                        <Box id='user' boxSize='sm' position='absolute' width='90px' marginLeft='0px' marginTop='200px'>
                                                            <Image src={user} alt='' />
                                                        </Box>

                                                        <Box id='request' boxSize='sm' position='absolute' width='90px' marginLeft='300px' marginTop='230px'>
                                                            <Image src={request} alt='' />
                                                        </Box>
                                                        <Box id='CA' boxSize='sm' position='absolute' width='90px' marginLeft='400px' marginTop='200px'>
                                                            <Image src={CA} alt='' />
                                                        </Box>


                                                        <Box
                                                            id="verify identity"
                                                            boxSize="sm"
                                                            position="absolute"
                                                            width="90px"
                                                            marginLeft="100"
                                                            marginTop="200px"
                                                            className="move-box"
                                                        >
                                                            <Image src={verify_identity_icon} alt="" />
                                                        </Box>

                                                    </Box>

                                                </Box>
                                            </Flex>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    <b>  Step 5: Receive and install the signed certificate</b>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Flex justify="space-between" mr="4">
                                                <Box flex="1" mr="4">


                                                    <Box p="4" border="1px solid gray" borderRadius="md" mt="4">
                                                        <Text>Once your identity is verified and your payment is processed, the CA will issue a signed X.509 certificate to you. This certificate can be installed on your server or other systems as needed. The installation process may vary depending on your operating system and software, but typically involves importing the certificate and private key into a keystore or similar container.</Text>
                                                        <Box id='user' boxSize='sm' position='absolute' width='90px' marginLeft='0px' marginTop='200px'>
                                                            <Image src={user} alt='' />
                                                        </Box>

                                                        <Box id='request' boxSize='sm' position='absolute' width='90px' marginLeft='100px' marginTop='260px' style={{ transform: 'scaleX(-1)' }}>
                                                            <Image src={request} alt='' />
                                                        </Box>

                                                        <Box id='CA' boxSize='sm' position='absolute' width='90px' marginLeft='400px' marginTop='200px'>
                                                            <Image src={CA} alt='' />
                                                        </Box>


                                                        <Box
                                                            id="verify identity"
                                                            boxSize="sm"
                                                            position="absolute"
                                                            width="90px"
                                                            marginLeft="100"
                                                            marginTop="200px"
                                                            className="move-box-left "
                                                        >
                                                            <Image src={certificate} alt="" />
                                                        </Box>

                                                    </Box>

                                                </Box>
                                            </Flex>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </Tabs>
                        </TabPanel>
                    </TabPanel>

                    <TabPanel>
                        <Box>
                            <Heading as="h2" mb="4">
                                X.509 Best Practices
                            </Heading>
                            <Flex justify="space-between" mr="4">
                                <Box flex="1" mr="4">
                                    <Text

                                    >
                                        <b>Uses robust encrpytion</b>
                                    </Text>

                                    <Box p="4" border="1px solid gray" borderRadius="md" mt="4">
                                        <Text>When generating an X.509 certificate, it is important to use strong encryption algorithms, such as RSA or ECC. This ensures that the certificate cannot be easily compromised.</Text>

                                    </Box>
                                    <text mb="3">
                                        <b>Uses secure key length.</b>
                                    </text>
                                    <Box p="4" border="1px solid gray" borderRadius="md" mt="4">
                                        <Text>The key length of an X.509 certificate should be at least 2048 bits for RSA and 256 bits for ECC. This makes it more difficult for attackers to crack the encryption.</Text>

                                    </Box>
                                    <Text
                                        mb="2"
                                    >
                                        <b>Secure communication</b>
                                    </Text>

                                    <Box p="4" border="1px solid gray" borderRadius="md" mt="4">
                                        <Text>X.509 certificates can be used to establish secure communication between a client and a server. This is done by encrypting the communication using a public key that is included in the certificate.</Text>

                                    </Box>

                                    <Text
                                        mb="2"
                                    >
                                        <b>Email Encryption.</b>
                                    </Text>

                                    <Box p="4" border="1px solid gray" borderRadius="md" mt="4">
                                        <Text>X.509 certificates can be used to encrypt email messages, ensuring that they are only readable by the intended recipient. Ensuring Confidentialty between reciever and sender.</Text>

                                    </Box>
                                    <Text
                                        mb="2"
                                    >
                                        <b>Signing messages and codes.</b>
                                    </Text>

                                    <Box p="4" border="1px solid gray" borderRadius="md" mt="4">
                                        <Text>X.509 certificates can be used to sign code, ensuring that it has not been tampered with and comes from a trusted source.</Text>

                                    </Box>



                                </Box>
                            </Flex>
                        </Box>
                    </TabPanel>


                </TabPanels>
            </Tabs>

        </Box></>
    )
}
export default X509;