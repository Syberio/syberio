import { Box, Heading, Stack, Text, Button, Card, CardBody, CardFooter, Image, VStack } from "@chakra-ui/react";

import "firebase/compat/auth";
import { useNavigate } from "react-router-dom";
import maninmid from "../../assets/mim-img.png"
import pkeyprivkey from "../../assets/pkey-privkey.png"
import pgpimg from "../../assets/pgp-img.png"
import encryptimg from "../../assets/encrypt-img.png"
import certimg from "../../assets/certificate-img.png"
import envelopeimg from "../../assets/envelope-img.png"


export default function Courses() {
    const navigate = useNavigate();
    return (
        <Box flex="1" bg="white" borderRadius={"20"} p="6" borderRightWidth={{ md: "1px" }} overflow="scroll">
            <VStack spacing={5}>
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    borderRadius={20}
                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '40%' }}
                        src={maninmid}
                    />
                    <Stack>
                        <CardBody>
                            <Heading size='md'>Man in Middle Attack</Heading>
                            <Text py='2'>
                                A man-in-the-middle attack is a type of cyber attack where an attacker intercepts and alters communications between two parties who believe they are directly communicating with each other.
                            </Text>
                        </CardBody>

                        <CardFooter>
                            <Button variant='solid' colorScheme='blue' onClick={() => {
                                navigate("/man-in-middle-attack")
                            }}>
                                Go to Course
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
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '40%' }}
                        src={pkeyprivkey}
                    />
                    <Stack>
                        <CardBody>
                            <Heading size='md'>Create Public and Private Key</Heading>
                            <Text py='2'>
                                Public key and private key are two mathematically related cryptographic keys that are used in asymmetric cryptography to secure communication by encrypting and decrypting data, where the public key is freely available to anyone while the private key is kept secret by the owner.                        </Text>
                        </CardBody>

                        <CardFooter>
                            <Button variant='solid' colorScheme='blue' onClick={() => {
                                navigate("/create-public-private-key")
                            }}>
                                Go to Course
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
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '40%' }}
                        src={pgpimg}
                        alt='Caffe Latte'
                    />
                    <Stack>
                        <CardBody>
                            <Heading size='md'>Use PGP Services</Heading>
                            <Text py='2'>
                                PGP (Pretty Good Privacy) is a software encryption program that uses public-key cryptography to provide end-to-end encryption for email messages and files, allowing secure communication over insecure channels such as the internet.                         </Text>
                        </CardBody>

                        <CardFooter>
                            <Button variant='solid' colorScheme='blue' onClick={() => {
                                navigate("/man-in-middle-attack")
                            }}>
                                Go to Course
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
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '40%' }}
                        src={encryptimg}
                    />
                    <Stack>
                        <CardBody>
                            <Heading size='md'>Encrypt and Check Files</Heading>
                            <Text py='2'>
                                Encrypting files is the process of encoding data to prevent unauthorized access, while checking files involves verifying the integrity and authenticity of the data to ensure it has not been tampered with.                        </Text>
                        </CardBody>

                        <CardFooter>
                            <Button variant='solid' colorScheme='blue' onClick={() => {
                                navigate("/man-in-middle-attack")
                            }}>
                                Go to Course
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
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '40%' }}
                        src={certimg}
                    />
                    <Stack>
                        <CardBody>
                            <Heading size='md'>Manage and Check X.509 Certificates</Heading>
                            <Text py='2'>
                                X.509 certificates are digital documents used to authenticate the identity of an entity in a network, and they can be managed and checked to ensure that they have not been tampered with and are still valid.                        </Text>
                        </CardBody>

                        <CardFooter>
                            <Button variant='solid' colorScheme='blue' onClick={() => {
                                navigate("/man-in-middle-attack")
                            }}>
                                Go to Course
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
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '40%' }}
                        src={envelopeimg}
                    />
                    <Stack>
                        <CardBody>
                            <Heading size='md'>Share Messages with IPFS</Heading>
                            <Text py='2'>
                                InterPlanetary File System (IPFS) allows for decentralized sharing of messages by storing the message on a distributed network of nodes rather than a centralized server, and the message can be accessed by its hash value.                        </Text>
                        </CardBody>

                        <CardFooter>
                            <Button variant='solid' colorScheme='blue' onClick={() => {
                                navigate("/man-in-middle-attack")
                            }}>
                                Go to Course
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>

            </VStack>

        </Box>
    );

}