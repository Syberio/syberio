import React from 'react';
import CreateKeys from './CreateKeys';
import { useState } from 'react';
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
    Image,
} from '@chakra-ui/react';
import Terminal from './Terminal';
import { useAuth } from '../useAuth';
import { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import public_key from '../../../components/assets/public_key.jpg';
import private_key from '../../../components/assets/private_key.jpg';
import { useNavigate } from 'react-router-dom';

function PGPKeys() {
    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState(0);
    const totalTabs = 4;
    const auth = useAuth();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (auth.currentUser) {
                const { uid } = auth.currentUser;
                console.log(uid);
                const courseName = "Create Public and Private Key";
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
        //TODO: Change height property
        <>
            <Box className="bodybox" h="150vh" py={[0, 10, 20]} position="center">
                <Box
                    marginLeft="150px"
                    position="absolute"
                    fontSize="29px"
                    color="rgb(71, 129, 200)"
                >
                    <b>Generate Public and Private Keys</b>
                </Box>
                <Tabs variant="soft-rounded" colorScheme="blue" orientation="vertical" onChange={(index) => setCurrentTab(index + 1)}>
                    <TabList marginLeft="100px" marginTop="100px" orientation="vertical">
                        <Tab width="400px">What is a Public Key?</Tab>
                        <Tab>What is a Private Key?</Tab>
                        <Tab>How to generate these keys?</Tab>
                        <Tab>How to export these keys?</Tab>
                    </TabList>
                    <TabPanels marginLeft="100px" marginRight="200px">
                        <TabPanel marginTop="80px">
                            <p>
                                <b>What is Public Key?</b>
                                <br></br>
                                <br></br>
                            </p>
                            <p>
                                A public key is a value that is used to encrypt data that can
                                only be decrypted using a corresponding private key. The private
                                key is kept secret, while the public key can be shared with
                                anyone. Public key cryptography is used to secure communication
                                over the internet and is used in many different applications,
                                including email, file sharing, and secure online transactions
                            </p>
                            <Image
                                src={private_key}
                                alt=""
                                marginLeft="30%"
                                style={{ width: '400px', height: '400px' }}
                            />{' '}
                        </TabPanel>

                        <TabPanel marginTop="80px">
                            <p>
                                <b>What is Private Key?</b>
                                <br></br>
                                <br></br>
                            </p>
                            <p>
                                A private key is a piece of information that is used to decrypt
                                data that has been encrypted using the corresponding public key.
                                Private keys are used in public key cryptography to secure
                                communication over the internet. In a public key system, each
                                user has a pair of keys: a public key and a private key. The
                                public key is used to encrypt data that is intended for the
                                owner of the private key, while the private key is used to
                                decrypt the data. This allows the owner of the private key to
                                receive secure communication from other users without having to
                                share a secret key with them. The private key is kept secret and
                                must be protected, as anyone with access to it can decrypt the
                                data that has been encrypted with the corresponding public key.
                            </p>
                            <Image
                                src={public_key}
                                alt=""
                                marginLeft="30%"
                                style={{ width: '400px', height: '400px' }}
                            />
                            <Box
                                marginLeft="150px"
                                marginTop="150px"
                                position="absolute"
                                fontSize="29px"
                                color="rgb(71, 129, 200)"
                                className="private-key-encrypt"
                            >
                                {' '}
                            </Box>
                        </TabPanel>
                        <TabPanel marginTop="20px">
                            <Tabs>
                                <TabList>
                                    <Tab width="400px">Create with SYBERIO</Tab>
                                    <Tab width="400px">Create in your System</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <Terminal></Terminal>
                                    </TabPanel>
                                    <TabPanel>
                                        <br></br>
                                        <p>
                                            To create a public and private key pair in your terminal,
                                            you will need to use a tool called gpg. This is a standard
                                            tool that is included with most Unix-based operating
                                            systems, including Linux and macOS.
                                        </p>
                                        <br></br>
                                        <p>
                                            To generate a new key pair, open a terminal window and
                                            enter the following command:
                                        </p>
                                        <br></br>
                                        <Card>
                                            <CardBody color={'white'} backgroundColor={'black'}>
                                                <Text>$ gpg --full-generate-key</Text>
                                            </CardBody>
                                        </Card>
                                        <br></br>
                                        <Card>
                                            <CardBody color={'white'} backgroundColor={'black'}>
                                                <Text>
                                                    $ gpg --default-new-key-algo rsa4096 --gen-key
                                                </Text>
                                            </CardBody>
                                        </Card>
                                        <br></br>
                                        <br></br>
                                        <p>
                                            This will create a new RSA key pair, consisting of a
                                            private key and a public key.{' '}
                                        </p>

                                        <Card>
                                            <CardBody color={'white'} backgroundColor={'black'}>
                                                <Text>$ gpg --list-secret-keys</Text>
                                            </CardBody>
                                        </Card>
                                        <br></br>
                                        <p>You can list your secret keys.</p>
                                        <br></br>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </TabPanel>

                        <TabPanel marginTop="100px">
                            <Center>
                                <p>
                                    <b>How to Export Keys?</b>
                                    <br></br>
                                    <br></br>
                                </p>
                            </Center>
                            <Box alignContent="center">
                                <Center>
                                    <p>
                                        If you wish to export the created public and private key
                                        with Syberio in to your system, you can export it from
                                    </p>
                                </Center>

                                <br />
                                <Center>
                                    <Card>
                                        <CardBody>
                                            <Text  variant="link" onClick={() => {
                                                navigate("/dashboard/manage-pgp-keys");
                                            }}>Dashboard &#62; Manage PGP Keys</Text>
                                        </CardBody>
                                    </Card>
                                </Center>
                                <br />
                                <Center>
                                    <p>
                                        If you created the public and private key via the terminal
                                        on your system, you can export like this;
                                    </p>
                                    <br />
                                </Center>
                                <br></br>
                                <Center>
                                    {' '}
                                    <p>If you wish to export your Private Keys,</p>
                                </Center>
                                <br></br>
                                <Center>
                                    <Code>
                                        gpg --export-secret-keys --armor YOUR_ID_HERE &#62;
                                        desired-name.key
                                    </Code>
                                </Center>
                                <br></br>
                                <Center>
                                    <Code>
                                        gpg--export --armor YOUR_ID_HERE &#62; desired-name.key
                                    </Code>
                                </Center>
                                <br></br>
                                <Center>
                                    <p>
                                        These commands will export the key files in your current
                                        working directory.
                                    </p>
                                </Center>
                            </Box>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </>
    );
}

export default PGPKeys;