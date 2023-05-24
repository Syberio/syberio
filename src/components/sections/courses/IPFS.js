import React from 'react';
import user from '../../../components/assets/user.png';
import envelope from '../../../components/assets/envelope.png';
import IPFS2 from '../../../components/assets/IPFS.png';
import IPFSLogic from '../../../components/assets/ipfs_logic.png';
import Hash from '../../../components/assets/hashtag.png';
import Ipfs_install from '../../../components/assets/ipfs_install.png';
import '../../../utils/X.509.css';
import '../../../utils/style.css';
import { useNavigate } from "react-router-dom";
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Box,
    Text,
    Image,
    Card,
    CardBody,
    Container,
} from '@chakra-ui/react';
import { MdApproval } from 'react-icons/md';
import { useAuth } from '../useAuth';
import { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

function IPFS() {
    const navigate = useNavigate();

    const [currentTab, setCurrentTab] = useState(0);
    const totalTabs = 4;
    const auth = useAuth();
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (auth.currentUser) {
                const { uid } = auth.currentUser;
                console.log(uid);
                const courseName = "Share Messages with IPFS";
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


        <><Box className='bodybox' h='100vh' py={[0, 10, 20]} position='center' marginBottom='700px'>
            <Box marginLeft='150px' marginTop='0px' position='absolute' fontSize='29px' color='rgb(71, 129, 200)'><b>IPFS Basics</b></Box>

            <Tabs variant='soft-rounded' colorScheme='blue' orientation='horizontal' onChange={(index) => setCurrentTab(index + 1)}>
                <TabList marginLeft='100px' marginTop='90px' orientation='horizontal'>

                    <br></br>
                    <Tab>IPFS Basics</Tab>
                    <Tab>Installing and Configuring IPFS</Tab>
                    <Tab>Adding and Retrieving Content</Tab>
                    <Tab>IPFS Pros&Cons</Tab>

                </TabList>
                <TabPanels marginLeft='100px' marginRight='200px'>
                    <TabPanel marginTop='0px'>
                        <p><b>IPFS General Knowledge</b></p>
                        <Tabs>
                            <TabList marginTop='0px'>
                                <Tab>General Definition</Tab>
                                <Tab>Distributed file system & hash code</Tab>


                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    IPFS (InterPlanetary File System) is a peer-to-peer distributed system for storing and sharing files. <br></br>
                                    It was created with the goal of providing a decentralized, permanent, and resilient web.
                                    <Box marginLeft='80px' marginTop='100px' boxSize={800}>
                                        {<Image src={IPFSLogic} alt='' />}
                                    </Box>

                                </TabPanel>

                                <TabPanel>

                                    At its core, IPFS is a content-addressed file system, which means
                                    that each file is identified by a unique content-based address called a hash. <br></br>
                                    This hash is derived from the content of the file itself, so any changes to the file will result in a different hash.<br></br><br></br>




                                    <Box marginTop='-150px'>
                                        <Box id='user' boxSize='sm' position='absolute' width='90px' marginLeft='0px' marginTop='50px'>
                                            <Image src={user} alt='' />
                                        </Box>
                                        <Box id='CA' boxSize='sm' position='absolute' width='90px' marginLeft='400px' marginTop='50px'>
                                            <Image src={IPFS2} alt='' />
                                        </Box>


                                        <Box marginTop="150px" className='fade-in-4s'>User sends the file to IPFS infrastructure.</Box>
                                        <Box marginTop="150px" className='fade-in-6s'>IPFS server sends a hash code to the user that point to the file he/she uploaded.</Box>
                                        <Box
                                            id="user"
                                            boxSize="sm"
                                            position="absolute"
                                            width="90px"
                                            marginLeft="100"
                                            marginTop="-150px"
                                            className="move-key-Right"
                                        >
                                            <Image src={envelope} alt="" />
                                        </Box>

                                        <Box
                                            id="user"
                                            boxSize="sm"
                                            position="absolute"
                                            width="90px"
                                            marginLeft="100"
                                            marginTop="-150px"
                                            className="move-box-left"
                                        >
                                            <Image src={Hash} alt="" />
                                        </Box>
                                    </Box>
                                    <br></br><br></br>
                                    IPFS uses a decentralized network of nodes to store and share files. <br></br> Each node on the
                                    network is called an IPFS node and stores some portion of the files available on the network. <br></br>
                                    Nodes communicate with each other using a peer-to-peer protocol called libp2p.


                                </TabPanel>



                                <TabPanel>


                                </TabPanel>

                            </TabPanels>
                        </Tabs>


                    </TabPanel>

                    <TabPanel marginTop='0px'>
                        <Tabs>

                            To use IPFS, you need to install and configure it on your local machine or server.<br></br>
                            The process for installing IPFS is straightforward, and it varies slightly depending on the platform you are using.<br></br>
                            Here are some general steps:
                            <br></br><br></br>

                            <Accordion allowToggle>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                <b>Step 1: Installation</b>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>


                                        Install IPFS by running the downloaded binary file. On Unix-based systems (Linux, macOS),<br></br>
                                        you can do this by running the following command in your terminal:<br></br>
                                        <br></br>
                                        <Card>
                                            <CardBody color={"white"} backgroundColor={"black"}>
                                                <Text> $ tar xvfz go-ipfs_vX.Y.Z_linux-amd64.tar.gz<br></br>
                                                    $ cd go-ipfs<br></br>
                                                    $ sudo bash install.sh</Text>
                                            </CardBody>
                                        </Card>
                                        <br></br>
                                        On Windows, you can simply double-click the downloaded .exe file and follow the installation wizard.

                                    </AccordionPanel>
                                </AccordionItem>



                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                <b>Step 2: Initialize repository</b>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <Text maxW="lg">Once IPFS is installed, you need to initialize a new repository.
                                            This is where IPFS will store the files that you add to the network. To initialize a repository, run the following command in your terminal:</Text>

                                        <br></br>
                                        <Card maxW="md">
                                            <CardBody color={"white"} backgroundColor={"black"}>
                                                <Text> $ ipfs init</Text>
                                            </CardBody>
                                        </Card>
                                        <br></br>
                                        This will create a new repository in your home directory. And provide you a path.

                                    </AccordionPanel>
                                </AccordionItem>



                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                <b>Step 3: Initialize IPFS daemon</b>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <Text maxW="lg">
                                            Next, you need to start the IPFS daemon, which will allow you to interact with the IPFS network.
                                            To start the daemon, run the following command in your terminal:
                                        </Text>
                                        <br></br>
                                        <Card maxW="md">
                                            <CardBody color={"white"} backgroundColor={"black"}>
                                                <Text> $ ipfs daemon</Text>
                                            </CardBody>
                                        </Card>
                                        <br></br>
                                        <Text maxW="lg">
                                            This will start the IPFS daemon, and you should see logs indicating that it is connecting to the network.
                                        </Text>


                                        <br></br>
                                        Run the ipfs cat command with the path you got from the init message:
                                        <Card maxW="md">
                                            <CardBody color={"white"} backgroundColor={"black"}>
                                                <Text> pfs cat /ipfs/QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG/readme</Text>
                                            </CardBody>
                                        </Card>
                                        <br></br>
                                        You should see something like this:
                                        <Image src={Ipfs_install} alt="" />
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                <b>Step 4: Locate where IPFS Stores the Repository Contents on your Machine</b>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        ipfs stores its local object repository in ~/.ipfs<br></br>
                                        <br></br>
                                        <Card maxW="md">
                                            <CardBody color={"white"} backgroundColor={"black"}>
                                                <Text>$ ls ~/.ipfs</Text>
                                            </CardBody>
                                        </Card>
                                        <br></br>
                                        The contents of that directory look like this:

                                        <br></br>

                                        <Card maxW="md">
                                            <CardBody color={"white"} backgroundColor={"black"}>
                                                <Text> blocks		config		datastore	version</Text>
                                            </CardBody>
                                        </Card>
                                        <br></br>
                                        <Text maxW="md"> All of the contents of your IPFS repository are stored within this directory. For example, the readme file from above is stored in here, along with the other files it links to. You can run a grep to find out the exact location.</Text>


                                    </AccordionPanel>
                                </AccordionItem>

                            </Accordion>




                        </Tabs>


                    </TabPanel>


                    <TabPanel marginTop='0px'>
                        <Tabs>

                            To use IPFS, you need to install and configure it on your local machine or server.<br></br>
                            The process for installing IPFS is straightforward, and it varies slightly depending on the platform you are using.<br></br>
                            Here are some general steps:
                            <br></br><br></br>

                            <Accordion allowToggle>


                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                <b>Step 1: Adding files to IPFS</b>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        To add a file to IPFS, you simply run the ipfs add command with the file you want to add as a parameter. <br></br>
                                        This will generate a hash for the file, and the file will be distributed across the network. <br></br>
                                        <br></br>

                                        <Card>
                                            <CardBody color={"white"} backgroundColor={"black"}>
                                                <Text> $ ipfs add (file or directory) </Text>
                                            </CardBody>
                                        </Card>
                                        <br></br>
                                        This will start the IPFS daemon, and you should see logs indicating that it is connecting to the network.
                                        <br></br>
                                    </AccordionPanel>
                                </AccordionItem>


                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                <b>Step 2: Retrieving files from IPFS</b>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>

                                        To retrieve the file or directory from IPFS, you can use the ipfs get command. <br></br>
                                        <br></br>

                                        <Card>
                                            <CardBody color={"white"} backgroundColor={"black"}>
                                                <Text> $ ipfs get (hash) </Text>
                                            </CardBody>
                                        </Card>
                                        <br></br>
                                        This will download the file or directory to your local machine and store it in a subdirectory with the same name as the hash.   <br></br>
                                        <br></br>

                                        <h1>OR</h1>
                                        <br></br>

                                        You can also use the IPFS gateway to access files in your web browser. To do this, simply append the hash to the IPFS gateway URL, like this:<br></br>
                                        <br></br>
                                        <Card>
                                            <CardBody color={"white"} backgroundColor={"black"}>
                                                <Text>https://ipfs.io/ipfs/(hash) </Text>
                                            </CardBody>
                                        </Card>

                                        <br></br>
                                        Overall, adding and retrieving files from IPFS is a straightforward process that allows you to store and share files in a decentralized way.<br></br>
                                        By understanding how to use the ipfs add and ipfs get commands, you can easily add and retrieve files from IPFS
                                        <br></br>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                <b>Step 3: Check files</b>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>

                                        Finally, you can check the status of your IPFS node by running the following command in your terminal: <br></br>
                                        <br></br>

                                        <Card>
                                            <CardBody color={"white"} backgroundColor={"black"}>
                                                <Text> $ ipfs id </Text>
                                            </CardBody>
                                        </Card>
                                        <br></br>
                                        This will display information about your node, including its peer ID, which you can use to connect with other nodes on the network.   <br></br>
                                        <br></br>


                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>




                        </Tabs>


                    </TabPanel>

                    <TabPanel>
                        <Tabs>
                            <TabList

                            >
                                <Tab color={'green.400'} bg={'green.100'}>Advantages</Tab>
                                <Tab color={'red.400'} bg={'red.100'}>Disadvantages</Tab>

                            </TabList>
                            <TabPanels>
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
                                            <Tab color={'green.400'} bg={'green.100'}>Decentralization</Tab> <br></br>
                                            <Tab color={'green.400'} bg={'green.100'}>Content Addressing</Tab><br></br>
                                            <Tab color={'green.400'} bg={'green.100'}>Data Integrity</Tab><br></br>
                                            <Tab color={'green.400'} bg={'green.100'}>Faster and More Efficient</Tab>
                                        </TabList>
                                        <TabPanels marginLeft="400px" marginTop="-150px">
                                            <TabPanel>
                                                <Container marginLeft="-100px" marginTop="-50px"
                                                    maxW="lg"
                                                    bg="green.200"
                                                    p="4"
                                                    borderRadius="md"
                                                    boxShadow="md"
                                                    _hover={{ boxShadow: 'lg' }}
                                                >

                                                    <Text fontSize="md" lineHeight="tall">
                                                        One of the biggest benefits of IPFS is its decentralized nature. Rather
                                                        than relying on a centralized server or network, IPFS allows files to be
                                                        stored and shared across a network of nodes, with no single point of
                                                        failure. This means that files can be accessed and shared without the
                                                        need for a central authority or intermediary.
                                                    </Text>
                                                </Container>



                                            </TabPanel>
                                            <TabPanel>
                                                <Container marginLeft="-100px" marginTop="-50px"
                                                    maxW="lg"
                                                    bg="green.200"
                                                    p="4"
                                                    borderRadius="md"
                                                    boxShadow="md"
                                                    _hover={{ boxShadow: 'lg' }}
                                                >

                                                    <Text fontSize="md" lineHeight="tall">
                                                        IPFS uses content addressing to uniquely identify files, rather than
                                                        relying on file names or locations. This means that files can be accessed
                                                        and shared using their unique content-based hash, rather than a specific
                                                        file path or location. This makes it easy to share and access files across
                                                        networks and platforms, without worrying about file names or paths changing.
                                                    </Text>
                                                </Container>
                                            </TabPanel>
                                            <TabPanel>
                                                <Container marginLeft="-100px" marginTop="-50px"
                                                    maxW="lg"
                                                    bg="green.200"
                                                    p="4"
                                                    borderRadius="md"
                                                    boxShadow="md"
                                                    _hover={{ boxShadow: 'lg' }}
                                                >

                                                    <Text fontSize="md" lineHeight="tall">
                                                        IPFS uses cryptographic hashes to ensure data integrity. Each file is uniquely
                                                        identified by its hash, which is calculated based on the file's content.
                                                        This means that any changes to the file will result in a different hash,
                                                        alerting users to potential tampering or corruption.
                                                    </Text>
                                                </Container>
                                            </TabPanel>
                                            <TabPanel>
                                                <Container marginLeft="-100px" marginTop="-50px"
                                                    maxW="lg"
                                                    bg="green.200"
                                                    p="4"
                                                    borderRadius="md"
                                                    boxShadow="md"
                                                    _hover={{ boxShadow: 'lg' }}
                                                >

                                                    <Text fontSize="md" lineHeight="tall">
                                                        IPFS is designed to be faster and more efficient than traditional centralized networks.
                                                        By allowing files to be stored and shared across a network of nodes, IPFS reduces the
                                                        need for data to be transferred over long distances or through centralized servers.
                                                        This can result in faster download speeds and lower bandwidth usage.
                                                    </Text>
                                                </Container>
                                            </TabPanel>
                                        </TabPanels>

                                    </Tabs>
                                </TabPanel>
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
                                            <Tab color={'red.400'} bg={'red.100'}>Adoption</Tab> <br></br>
                                            <Tab color={'red.400'} bg={'red.100'}>Complexity</Tab><br></br>
                                            <Tab color={'red.400'} bg={'red.100'}>File Persistence</Tab><br></br>
                                            <Tab color={'red.400'} bg={'red.100'}>Network Security</Tab>
                                        </TabList>
                                        <TabPanels marginLeft="400px" marginTop="-150px">
                                            <TabPanel>
                                                <Container marginLeft="-100px" marginTop="-50px"
                                                    maxW="lg"
                                                    bg="red.200"
                                                    p="4"
                                                    borderRadius="md"
                                                    boxShadow="md"
                                                    _hover={{ boxShadow: 'lg' }}
                                                >

                                                    <Text fontSize="md" lineHeight="tall">
                                                        One of the main challenges facing IPFS is adoption. While IPFS has gained traction in certain communities and use cases, it is still a relatively new technology that is not yet widely adopted or integrated into mainstream web infrastructure.
                                                    </Text>
                                                </Container>



                                            </TabPanel>
                                            <TabPanel>
                                                <Container marginLeft="-100px" marginTop="-50px"
                                                    maxW="lg"
                                                    bg="red.200"
                                                    p="4"
                                                    borderRadius="md"
                                                    boxShadow="md"
                                                    _hover={{ boxShadow: 'lg' }}
                                                >

                                                    <Text fontSize="md" lineHeight="tall">
                                                        IPFS can be complex to set up and use, particularly for those who are not familiar with decentralized or peer-to-peer networks. Users may need to familiarize themselves with new concepts and tools, such as content addressing and distributed hash tables, in order to use IPFS effectively.
                                                    </Text>
                                                </Container>
                                            </TabPanel>
                                            <TabPanel>
                                                <Container marginLeft="-100px" marginTop="-50px"
                                                    maxW="lg"
                                                    bg="red.200"
                                                    p="4"
                                                    borderRadius="md"
                                                    boxShadow="md"
                                                    _hover={{ boxShadow: 'lg' }}
                                                >

                                                    <Text fontSize="md" lineHeight="tall">
                                                        IPFS uses a distributed network of nodes to store files, which means that files may not always be available or accessible if a node goes offline or stops hosting the file. While IPFS provides redundancy and fault tolerance, there is still some risk that files may be lost or unavailable.
                                                    </Text>
                                                </Container>
                                            </TabPanel>
                                            <TabPanel>
                                                <Container marginLeft="-100px" marginTop="-50px"
                                                    maxW="lg"
                                                    bg="red.200"
                                                    p="4"
                                                    borderRadius="md"
                                                    boxShadow="md"
                                                    _hover={{ boxShadow: 'lg' }}
                                                >

                                                    <Text fontSize="md" lineHeight="tall">
                                                        As with any distributed network, IPFS may be vulnerable to certain types of security threats, such as denial-of-service attacks or Sybil attacks. Users and network operators may need to take extra steps to ensure the security and integrity of the network.
                                                    </Text>
                                                </Container>
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
export default IPFS;