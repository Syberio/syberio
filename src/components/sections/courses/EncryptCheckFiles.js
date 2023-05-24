
import React, { useState } from 'react';
import '../../../utils/style.css';
import { useNavigate } from "react-router-dom";
import {
    Box, Heading, Stack, Text, Button, Card, CardBody, CardFooter, Image, VStack, Tab, Tabs, TabPanel, TabList, TabPanels, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Divider,
} from "@chakra-ui/react";
import "firebase/compat/auth";
import maninmid from "../../assets/mim-img.png"
import pkeyprivkey from "../../assets/pkey-privkey.png"
import pgpimg from "../../assets/pgp-img.png"
import encryptimg from "../../assets/encrypt-img.png"
import certimg from "../../assets/certificate-img.png"
import envelopeimg from "../../assets/envelope-img.png"
import Simple_symmetric_encryption from "../../assets/Simple_symmetric_encryption.png"
import Asymmetric_encryption_primitive from "../../assets/Asymmetric-encryption-primitive.png"
import hybrid from "../../assets/hybrid_enc.png"
import { useEffect } from 'react';
import { useAuth } from '../useAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
function EncryptCheckFiles() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);
    const [currentTab, setCurrentTab] = useState(0);
    const totalTabs = 2;
    const auth = useAuth();
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (auth.currentUser) {
                const { uid } = auth.currentUser;
                console.log(uid);
                const courseName = "Encrypt and Check Files";
                const progress = (currentTab / totalTabs) * 100;

                const userDocRef = firebase.firestore().collection("users").doc(uid);

                userDocRef.set({
                    lastVisitedCourse: courseName,
                    progress: {
                        [courseName]: progress
                    }
                }, { merge: true })
                    .then(() => console.log("User progress updated"))
                    .catch(error => console.log("Error updating user progress: ", error));
            }
        }, 500); // 100 ms delay

        // This cleanup function will be called if the component unmounts before the timeout
        return () => clearTimeout(timeoutId);
    }, [currentTab, auth]);
    return (
        <Box flex="1" bg="white" borderRadius={"20"} p="6" borderRightWidth={{ md: "1px" }} overflow="scroll">
            <Heading as="h3" mb={4}>
                {activeTab === 0 ? "Types of Encryption Methods to ensure Authentication and Confidentiality" : activeTab === 1 ? "Checking the Integrity of Files and Documents" : "Another Tab"}
            </Heading>
            <Tabs variant='soft-rounded' colorScheme='blue' defaultIndex={0} onChange={index => {
                setActiveTab(index);
                setCurrentTab(index+1);
            }}>

                <TabList>
                    <Tab width='400px'>Types of Encrption methods</Tab>
                    <Tab width='400px'>Checking Integrity of Files</Tab>
                </TabList>

                <TabPanels >

                    <TabPanel >

                        <VStack spacing={5}>


                            <Card
                                direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline'
                                borderRadius={20}
                            >
                                <Image
                                    objectFit='fit'
                                    maxW={{ base: '100%', sm: '40%' }}
                                    src={Simple_symmetric_encryption}
                                />
                                <Stack>
                                    <CardBody>
                                        <Heading size='md'> Symmetric Encryption:</Heading>
                                        <Text py='2'>
                                            In symmetric encryption, the same key is used for both encryption and decryption. Examples of symmetric encryption algorithms include Advanced Encryption Standard (AES), Data Encryption Standard (DES), and Triple DES (3DES).
                                            <br></br>
                                        </Text>
                                        <Text color={'green.400'}>
                                            Symmetric encryption ensures <b>confidentiality</b> by encrypting the data using a shared secret key. Only parties possessing the correct key can decrypt and access the original data.
                                        </Text>
                                        <br></br>
                                        <Text color={'red.400'}>
                                            Symmetric encryption alone does not provide <b>authentication</b>. It focuses primarily on confidentiality by using a shared secret key for both encryption and decryption. To achieve authentication, additional mechanisms like digital signatures or MACs can be used in conjunction with symmetric encryption.
                                        </Text>
                                        <br></br>

                                    </CardBody>

                                    <CardFooter>
                                        <Button variant='solid' colorScheme='blue' onClick={() => {
                                            navigate("/courses/pgp-confidentiality")
                                        }}>
                                            Check out how PGP ensures confidentiality
                                        </Button>
                                    </CardFooter>
                                </Stack>
                            </Card>
                            <Card
                                direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline'
                                borderRadius={20}
                            >
                                <Image
                                    objectFit='fit'
                                    marginLeft="50px"
                                    maxW={{ base: '100%', sm: '40%', md: "30%" }}
                                    src={Asymmetric_encryption_primitive}
                                />
                                <Stack marginLeft="80px">
                                    <CardBody >
                                        <Heading size='md'>Asymmetric Encryption: </Heading>
                                        <Text py='2'>
                                            Asymmetric encryption, also known as public-key encryption, uses a pair of keys: a public key for encryption and a private key for decryption. The most widely used asymmetric encryption algorithm is the RSA (Rivest-Shamir-Adleman) algorithm.
                                        </Text>
                                        <br></br>

                                        <Text color={'green.400'}>
                                            Asymmetric encryption provides <b>authentication</b> through the use of digital signatures. A sender can encrypt a hash of the message with their private key, creating a signature. The recipient can verify the signature using the sender's public key, confirming the authenticity and integrity of the message.
                                        </Text>
                                        <br></br>
                                        <Text color={'red.400'}>
                                            Asymmetric encryption cannot provide <b>confidentiality</b>, it is less efficient for encrypting large amounts of data due to its computational overhead. Typically, asymmetric encryption is used for key exchange or establishing secure communication channels, while symmetric encryption is employed for actual data encryption.
                                        </Text>

                                    </CardBody>

                                    <CardFooter>

                                        <Button variant='solid' colorScheme='blue' onClick={() => {
                                            navigate("/courses/pgp-authentication")
                                        }}>
                                            Check out how PGP ensures authentication
                                        </Button>
                                    </CardFooter>
                                </Stack>
                            </Card>
                            <Card
                                direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline'
                                borderRadius={20}
                            >
                                <Image
                                    objectFit='fit'
                                    maxW={{ base: '100%', sm: '36%', md: "40%" }}
                                    src={hybrid}

                                />
                                <Stack>
                                    <CardBody>
                                        <Heading size='md'>Hybrid Encryption: </Heading>
                                        <Text py='2'>
                                            Hybrid encryption combines the strengths of symmetric and asymmetric encryption. In this method, a symmetric key is generated for each session and used to encrypt the actual data, while the symmetric key itself is encrypted using the recipient's public key. This ensures secure key exchange. Hybrid encryption is commonly used in protocols like Transport Layer Security (TLS) for secure communication over the internet.
                                        </Text>
                                        <br></br>
                                        <Text color={'green.400'}>
                                            Asymmetric encryption is primarily used for <b>authentication</b> purposes, such as secure key exchange. The recipient's public key is used to encrypt a randomly generated symmetric session key. This ensures that only the recipient with the corresponding private key can decrypt the session key and access the symmetrically encrypted data.
                                        </Text>
                                        <br></br>
                                        <Text color={'green.400'}>
                                            Hybrid encryption ensures <b>confidentiality</b> by employing symmetric encryption for actual data encryption. The symmetric session key, securely shared using asymmetric encryption, allows efficient encryption and decryption of the data.
                                        </Text>

                                    </CardBody>

                                    <CardFooter>
                                        <Button variant='solid' colorScheme='blue' onClick={() => {
                                            navigate("/courses/pgp-auth-conf")
                                        }}>
                                            Check out how PGP manages both <br></br>
                                            confidentiality and authentication
                                        </Button>
                                    </CardFooter>
                                </Stack>
                            </Card>


                        </VStack>
                    </TabPanel>
                    <TabPanel>

                        <VStack spacing={5}>


                            <Card
                                direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline'
                                borderRadius={20}
                            >

                                <Stack>
                                    <CardBody>
                                        <Heading size='md'> Hash Functions</Heading>
                                        <Text py='2' width="50%">
                                            To check if the integrity of a file has been compromised, you can use cryptographic hash functions. A hash function takes an input (in this case, a file) and produces a fixed-size string of characters called a hash value or checksum. If the file is altered in any way, even a small change, the hash value will be completely different.
                                            <br></br>
                                        </Text>
                                        <br></br>
                                        <Accordion allowToggle>
                                            <AccordionItem width="lg">
                                                <h2>
                                                    <AccordionButton>
                                                        <Box as="span" flex='1' textAlign='left'>
                                                            <b>Step 1: Generate</b>
                                                        </Box>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>
                                                    <Text>Generate a hash value for the original file using a hash function like SHA-256 or SHA-512. Various tools and programming libraries provide functions to compute hash values.</Text>
                                                </AccordionPanel>
                                            </AccordionItem>



                                            <AccordionItem width="lg">
                                                <h2>
                                                    <AccordionButton>
                                                        <Box as="span" flex='1' textAlign='left'>
                                                            <b>Step 2: Store</b>
                                                        </Box>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>
                                                    <Text>Store the generated hash value securely, preferably in a separate location or alongside the file.</Text>
                                                </AccordionPanel>
                                            </AccordionItem>



                                            <AccordionItem width="lg">
                                                <h2>
                                                    <AccordionButton>
                                                        <Box as="span" flex='1' textAlign='left'>
                                                            <b>Step 3: recompute</b>
                                                        </Box>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>
                                                    <Text>Whenever you want to check the file's integrity, recompute the hash value of the current file.</Text>
                                                </AccordionPanel>
                                            </AccordionItem>

                                            <AccordionItem width="lg">
                                                <h2>
                                                    <AccordionButton>
                                                        <Box as="span" flex='1' textAlign='left'>
                                                            <b>Step 4: Compare</b>
                                                        </Box>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>

                                                    <Text>Compare the newly generated hash value with the stored value. If they match, the file's integrity remains intact. If they differ, the file has been modified.</Text>
                                                </AccordionPanel>
                                            </AccordionItem>

                                        </Accordion>

                                        <br></br>
                                        <Text color={'red.400'} width="50%">
                                            It's important to note that hash functions are one-way functions, meaning you can't derive the original file from the hash value. Therefore, comparing the hash values allows you to determine if the file has been tampered with but does not provide any information about the actual changes made.
                                        </Text>
                                        <br></br>

                                    </CardBody>


                                </Stack>
                            </Card>

                        </VStack>

                        <VStack spacing={5}>


                            <Card
                                direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline'
                                borderRadius={20}
                            >

                                <Stack>
                                    <CardBody>
                                        <Heading size='md'>Digital signatures</Heading>
                                        <Text py='2' width="50%">

                                            A digital signature is a cryptographic technique used to provide integrity, authenticity, and non-repudiation of digital documents or messages. It allows the recipient of a message or document to verify that it was indeed created by the claimed sender and has not been altered during transit.
                                            <br></br>          <br></br><Divider></Divider>  <br></br>
                                            Digital signatures use asymmetric encryption, also known as public-key cryptography. The process involves the use of a pair of keys: a private key and a corresponding public key. The private key is kept secret by the signer, while the public key is freely distributed and can be used by anyone to verify the digital signature.
                                        </Text>
                                        <br></br>
                                        <Accordion allowToggle>
                                            <AccordionItem width="lg">
                                                <h2>
                                                    <AccordionButton>
                                                        <Box as="span" flex='1' textAlign='left'>
                                                            <b>Step 1: Key Generation</b>
                                                        </Box>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>
                                                    <Text>The signer generates a key pair consisting of a private key and a public key. The private key remains confidential and should only be known to the signer, while the public key can be freely shared.</Text>
                                                </AccordionPanel>
                                            </AccordionItem>



                                            <AccordionItem width="lg">
                                                <h2>
                                                    <AccordionButton>
                                                        <Box as="span" flex='1' textAlign='left'>
                                                            <b>Step 2: Hashing</b>
                                                        </Box>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>
                                                    <Text>The document or message to be signed is subjected to a hash function, which produces a fixed-size output known as a hash value or message digest. Commonly used hash functions include SHA-256 and SHA-512. The purpose of the hash function is to create a unique and compact representation of the document, regardless of its size.</Text>
                                                </AccordionPanel>
                                            </AccordionItem>



                                            <AccordionItem width="lg">
                                                <h2>
                                                    <AccordionButton>
                                                        <Box as="span" flex='1' textAlign='left'>
                                                            <b>Step 3: Signing</b>
                                                        </Box>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>
                                                    <Text>The signer takes the hash value of the document and encrypts it using their private key. This encrypted hash value is the digital signature. The encryption process is typically performed using a digital signature algorithm such as RSA or DSA.</Text>
                                                </AccordionPanel>
                                            </AccordionItem>

                                            <AccordionItem width="lg">
                                                <h2>
                                                    <AccordionButton>
                                                        <Box as="span" flex='1' textAlign='left'>
                                                            <b>Step 4: Verification</b>
                                                        </Box>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>

                                                    <Text>To verify the digital signature, the recipient of the document performs the following steps:
                                                        <br></br> <Divider></Divider>   <br></br>
                                                        <b>1. Hashing:</b> The recipient applies the same hash function to the received document, producing a hash value.
                                                        <br></br>  <Divider></Divider>  <br></br>
                                                        <b>2. Decryption:</b> The recipient uses the signer's public key to decrypt the digital signature, which reveals the original hash value.
                                                        <br></br>  <Divider></Divider>  <br></br>
                                                        <b>3. Comparison:</b> The recipient compares the decrypted hash value with the independently computed hash value of the received document. If the two hash values match, it verifies the integrity of the document and confirms that it has not been tampered with during transit.
                                                        <br></br>  <Divider></Divider> <br></br>
                                                        <b>4. Authentication:</b> Additionally, the recipient can use the signer's public key to verify the authenticity of the signature. By verifying the digital signature, the recipient can be assured that the document originated from the claimed sender, as only the corresponding private key could have created the digital signature that matches the decrypted hash value.</Text>
                                                </AccordionPanel>
                                            </AccordionItem>

                                            <AccordionItem width="lg">
                                                <h2>
                                                    <AccordionButton>
                                                        <Box as="span" flex='1' textAlign='left'>
                                                            <b>Step 5: Non-Repudiation</b>
                                                        </Box>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>

                                                    <Text>Digital signatures provide non-repudiation, meaning that the signer cannot deny having signed the document. Since the private key is kept secret and unique to the signer, it can be used as evidence to prove the authenticity and integrity of the document in case of disputes or legal proceedings.</Text>
                                                </AccordionPanel>
                                            </AccordionItem>

                                        </Accordion>

                                        <br></br>
                                        <Text width="50%">
                                            Digital signatures are widely used in various domains, including secure email communication (e.g., using S/MIME or PGP), software distribution, electronic transactions, and digital contracts. They play a crucial role in ensuring the integrity and authenticity of digital information and fostering trust in electronic communication.
                                        </Text>
                                        <br></br>

                                    </CardBody>


                                </Stack>
                            </Card>

                        </VStack>
                    </TabPanel>

                </TabPanels>

            </Tabs>

        </Box >
    )
};
export default EncryptCheckFiles;