import React from 'react';
import { CardBody, useMediaQuery } from '@chakra-ui/react'
import user from '../../../components/assets/user.png';
import hacker from '../../../components/assets/hackericon.png';
import gateway from '../../../components/assets/gatewayicon.png';
import step2_1 from '../../../components/assets/step2-1.png';
import step2_2 from '../../../components/assets/step2-2.png';
import step3_1 from '../../../components/assets/step3-1.png';
import step3_2 from '../../../components/assets/step3-2.png';
import types from '../../../components/assets/types.jpg';
import img from '../../../components/assets/Data_security_24.jpg';
import img2 from '../../../components/assets/Data_security_28.jpg';
import bubble from '../../../components/assets/bubble.png';
import userb from '../../../components/assets/userb.jpg';
import usera from '../../../components/assets/usera.jpg';
import key from '../../../components/assets/key.jpg';
import { useState } from "react";
import suitcase from '../../../components/assets/suitcase.png';
import user2 from '../../../components/assets/user2.jpg';
import ex from '../../../components/assets/ex.jpg';
import encry from '../../../components/assets/encry.jpg';
import security from '../../../components/assets/security.jpg';
import step3_3 from '../../../components/assets/step3-3.png';
import imp from '../../../components/assets/importing.png';
import getmac from '../../../components/assets/getmac.png';
import rearp from '../../../components/assets/rearp.png';
import trick from '../../../components/assets/trick.png';
import mitm from '../../../components/assets/mitm.png';
import step6_1 from '../../../components/assets/step6-1.png';
import step6_2 from '../../../components/assets/step6-2.png';
import { useEffect } from 'react';
import dwayarrow from '../../../components/assets/twowayarrow.png';
import redx from '../../../components/assets/reddx.png';
import '../../../utils/ManInMiddle.css';
import anime from 'animejs/lib/anime.es.js';
import { PhoneIcon, AddIcon, WarningIcon, ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import {
    ChakraProvider,
    Tabs, TabList, TabPanels, Tab, TabPanel, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, AccordionButtonProps,

    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme,
    Image,
    Button,
    Flex,
    Container, useClipboard
} from '@chakra-ui/react';
import { useAuth } from '../useAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default function ManInMiddle() {

    // const { onCopy, value, setValue, hasCopied } = useClipboard("");
    const [isAlertVisible2, setIsAlertVisible2] = React.useState(false);
    const [isAlertVisible3, setIsAlertVisible3] = React.useState(false);
    const [isAlertVisible4, setIsAlertVisible4] = React.useState(false);
    const [isAlertVisible5, setIsAlertVisible5] = React.useState(false);
    const [isAlertVisible6, setIsAlertVisible6] = React.useState(false);

    const totalTabs = 8;
    const [currentTab, setCurrentTab] = useState(0);
    const auth = useAuth();
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (auth.currentUser) {
                const { uid } = auth.currentUser;
                console.log(uid);
                const courseName = "Man in Middle Attack";
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
    

    // const userButton = document.querySelector('.user-button');
    // const userMessage = document.querySelector('.user-input');
    // const chatBox = document.querySelector('.chat-box');

    // const handleClick = event => {
    //     const neww = document.getElementById("image1");

    //     if (neww.style.width != '700px') {
    //         neww.style.width = '700px';
    //         neww.style.top = '500px';
    //         neww.style.right = '240px';
    //         neww.style.position = 'absolute';
    //     }
    //     else {
    //         neww.style.width = '300px';
    //         neww.style.top = '500px';
    //         neww.style.right = '240px';
    //         neww.style.position = 'static';

    //     }
    // }
    // const handleClick2 = event => {
    //     const neww = document.getElementById("image2");

    //     if (neww.style.width != '700px') {
    //         neww.style.width = '700px';
    //         neww.style.top = '500px';
    //         neww.style.right = '240px';
    //         neww.style.position = 'absolute';
    //     }
    //     else {
    //         neww.style.width = '300px';
    //         neww.style.top = '500px';
    //         neww.style.right = '240px';
    //         neww.style.position = 'static';
    //     }
    // }
    // const handleClick3 = event => {
    //     const neww = document.getElementById("image3");

    //     if (neww.style.width != '700px') {
    //         neww.style.width = '700px';
    //         neww.style.top = '500px';
    //         neww.style.right = '240px';
    //         neww.style.position = 'absolute';
    //     }
    //     else {
    //         neww.style.width = '300px';
    //         neww.style.top = '500px';
    //         neww.style.right = '240px';
    //         neww.style.position = 'static';
    //     }
    // }
    // const handleClick4 = event => {
    //     const neww = document.getElementById("image4");

    //     if (neww.style.width != '700px') {
    //         neww.style.width = '700px';
    //         neww.style.top = '500px';
    //         neww.style.right = '240px';
    //         neww.style.position = 'absolute';
    //     }
    //     else {
    //         neww.style.width = '300px';
    //         neww.style.top = '500px';
    //         neww.style.right = '240px';
    //         neww.style.position = 'static';

    //     }
    // }
    // const handleClick5 = event => {
    //     const neww = document.getElementById("image5");

    //     if (neww.style.width != '700px') {
    //         neww.style.width = '700px';
    //         neww.style.top = '500px';
    //         neww.style.right = '240px';
    //         neww.style.position = 'absolute';
    //     }
    //     else {
    //         neww.style.width = '300px';
    //         neww.style.top = '500px';
    //         neww.style.right = '240px';
    //         neww.style.position = 'static';
    //     }
    // }
    setTimeout(() => {
        setIsAlertVisible2(true);
    }, 3000);
    setTimeout(() => {
        setIsAlertVisible3(true);
    }, 6000);
    setTimeout(() => {
        setIsAlertVisible4(true);
    }, 9000);
    setTimeout(() => {
        setIsAlertVisible5(true);
    }, 6000);
    setTimeout(() => {
        setIsAlertVisible6(true);
    }, 6000);
    const [activeTab, setActiveTab] = useState(0);

    const handleTabPanelClick = (index) => {
        setActiveTab(index);
    };
    // const imageStyle = {
    //     position: "absolute",
    //     transition: "all 2.1s ease-in-out",
    //     marginLeft: activeTab === 0 ? 200 : 200,
    //     marginTop: activeTab === 0 ? 100 : -100,
    // };
    const textStyle = {
        position: "absolute",
        transition: "all 0.3s ease-in-out",
        marginLeft: activeTab === 0 ? 2405 : 245,
        marginTop: activeTab === 0 ? 100 : 50,
    };
    // const imageStyle2 = {
    //     position: "absolute",
    //     transition: "all 2.1s ease-in-out",
    //     marginLeft: activeTab === 0 ? 100 : 450,

    // };
    // const imageStyle3 = {

    //     transition: "all 2.1s ease-in-out",
    //     marginLeft: activeTab === 0 ? 100 : 350,

    // };
    // const imageStyle4 = {

    //     transition: "all 2.1s ease-in-out",
    //     marginLeft: activeTab === 1 ? 350 : 100,

    // };
    // const imageStyle5 = {

    //     transition: "all 2.1s ease-in-out",
    //     marginLeft: activeTab === 1 ? 350 : 150,

    // };
    // const imageStyle6 = {

    //     transition: "all 2.1s ease-in-out",
    //     marginLeft: activeTab === 1 ? 350 : 50,

    // };
    function animateImage(event, id) {
        var targetImage = document.getElementById(id); // Get the target image element
        targetImage.classList.add("animate"); // Add the animation class to the target image
    }
    return (

        <><Box className='bodybox' h='100vh' py={[0, 10, 20]} position='center' marginBottom='40%'>
            <Box marginLeft='10%' marginTop='0%' fontSize='29px' color='rgb(71, 129, 200)'><b>Man In The Middle Attack</b></Box>

            <Tabs variant='soft-rounded' colorScheme='blue' orientation='vertical' onChange={(index) => setCurrentTab(index + 1)}>
                <TabList marginLeft='10%' marginTop='5%' orientation='vertical'>
                    <Tab width='220%'>What is Man In The Middle Attack?</Tab>
                    <Tab width='220%'>Types of Man In The Middle Attacks</Tab>
                    <Tab width='220%'>Attack Progression</Tab>
                    <Tab width='220%'>How to Prevent the Attack?</Tab>
                    {/* <Tab width='220%'>Attack Animation</Tab> */}
                    <Tab width='220%'>Background of the Attack</Tab>
                    <Tab width='220%'>Key Exchange Fundamentals</Tab>
                    <Tab width='220%'>Diffie Hellman Key Exchange</Tab>
                    <Tab width='220%'>How to Do the Attack with ARP Poisoning?</Tab>

                </TabList>
                <TabPanels marginLeft='20%' marginRight='10%'>
                    <TabPanel marginTop='0px'>
                        <p><b>What is Man In The Middle Attack?</b><br></br><br></br></p><p>A cyberattack known as a man-in-the-middle (MiTM) attack involves the perpetrator discreetly intercepting and relaying messages between two parties who believe they are speaking directly to one another. The attack is a form of eavesdropping in which the conversation is controlled by the attacker. </p>
                        <Box width='70.67%' marginLeft='13.33%' marginTop='1.67%'>
                            {<Image src={img} alt='' />}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Tabs>
                            <TabList marginTop='0px' width="100%" marginRight="20%">
                                <Tab>Type 1</Tab>
                                <Tab>Type 2</Tab>
                                <Tab>Type 3</Tab>
                                <Tab>Type 4</Tab>
                                <Tab>Type 5</Tab>
                                <Tab>Type 6</Tab>
                                <Tab>Type 7</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel width="90%">
                                    <p><b>Internet Protocol Spoofing</b> <br></br> <br></br> IP spoofing, which is similar to identity theft, occurs when hackers change the source IP address of a website or email address. IP spoofing enables hackers to commit crimes, frequently undetected.</p>
                                </TabPanel>
                                <TabPanel width="90%">
                                    <p><b>Domain Name System Spoofing</b> <br></br> <br></br>Cybercriminals change domain names in this kind of man-in-the-middle attack to steer traffic to phony websites. Users may believe they are accessing a safe and reliable website, but they instead arrive at a website run by hackers.</p>
                                </TabPanel>
                                <TabPanel width="90%">
                                    <p><b>HTTP Spoofing</b> <br></br> <br></br> An HTTPS spoofing attack redirects a browser session to an insecure or HTTP-based website without the knowledge of user. As a result, hackers can monitor every action and steal personal information with this redirection.</p>
                                </TabPanel>
                                <TabPanel width="90%">
                                    <p><b>Secure Sockets Layer Hijacking</b> <br></br> <br></br> SSL is a way of protecting your web browsing data from being intercepted by someone else. If someone else were to get access to the SSL connection between your computer and the website you're visiting, they could see everything you're typing and looking at.</p>
                                </TabPanel>
                                <TabPanel width="90%">
                                    <p><b>Email Hijacking</b> <br></br> <br></br> This is a type of attack where cybercriminals hijack email accounts from banks and other financial institutions to spy on any transactions that users make. Cybercriminals can also spoof the email address bank and send fake instructions to customers that steer them towards transferring their money to the hackers.</p>
                                </TabPanel>
                                <TabPanel width="90%">
                                    <p><b>Wi-Fi Eavesdropping</b> <br></br> <br></br> If you're using public Wi-Fi, be aware of the risks posed by MiTM attacks. These attacks trick people into connecting to malicious networks, which can give hackers access to your personal information.</p>
                                </TabPanel>
                                <TabPanel width="90%">
                                    <p><b>Session Hijacking</b> <br></br> <br></br> Hackers can steal your personal data and passwords if they get access to your cookies. This can allow them to access your personal resources (like your bank account) without your permission. In addition to that, they can have unlimited chance to reach user's data and resources. </p>
                                </TabPanel>


                            </TabPanels>
                        </Tabs>
                        <Box className='type' width='35%' marginLeft='5%' marginTop='5%'>
                            {<Image src={types} alt='' />}
                        </Box>

                    </TabPanel>

                    <TabPanel>
                        <Tabs>
                            <TabList marginTop='0%'>
                                <Tab>Interception</Tab>
                                <Tab>Decryption</Tab>

                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <p><b>Interception</b> <br></br> <br></br>The first step is to intercept user traffic before it goes to intended destination. This can be done by making public WiFi available that are unprotected, or by attacking the user's computer directly. Once the victim connects to these hotspots, attacker can see everything that they are doing online.

                                    </p>
                                </TabPanel>
                                <TabPanel>
                                    <p><b>Decryption</b> <br></br> <br></br> After interception, any two-way SSL traffic needs to be decrypted without alerting the user or application. A number of methods exist to achieve this. HTTPS Spoofing and SSL Hijacking are the most common decryption phase action. </p>
                                </TabPanel>

                            </TabPanels>
                        </Tabs>
                        <Box className='type' width='35%' marginLeft='5%' marginTop='5%'>
                            {<Image src={encry} alt='' />}
                        </Box>
                    </TabPanel>




                    <TabPanel>
                        <Tabs>
                            <TabList marginTop='0%'>
                                <Tab width="20%">Method 1</Tab>
                                <Tab width="20%">Method 2</Tab>
                                <Tab width="20%">Method 3</Tab>
                                <Tab width="20%">Method 4</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel width="90%">
                                    <p><b>Secure Connections</b> <br></br> <br></br> This is how you can protect yourself against MiTM attacks. You should only visit websites that have a "HTTPS" (secure) sign in the URL bar. This means that the website is protected against cybercriminals who might be trying to steal your information. Also, be careful about using public Wi-Fi connections - they can be easily hacked and your information can be stolen.</p>
                                </TabPanel>
                                <TabPanel width="90%">
                                    <p><b>Avoid Phishing Emails</b> <br></br> <br></br> When you get an email, don't just open it right away. Think about who sent it and make sure it's a safe source. Some phishing emails look like they come from a trusted source, like your bank or a financial institution. They might ask you to enter your login information or update your password. Don't do this. Instead, contact the sender and ask them to confirm the email is really from them. If they can't provide proof, don't trust the email and don't open it.</p>
                                </TabPanel>
                                <TabPanel width="90%">
                                    <p><b>Endpoint Security</b> <br></br> <br></br>Endpoint security is important in order to prevent malware from being used to attack other computers. Because MiTM attacks use malware, you need to have antivirus and internet security programs to prevent these attacks from happening.</p>
                                </TabPanel>
                                <TabPanel width="90%">
                                    <p><b>Virtual Private Network Encryption</b> <br></br> <br></br>A VPN encrypts your internet connection and keeps your passwords, credit card information, and other confidential information safe. It can help you connect to unsecure public Wi-Fi networks and protect you from man-in-the-middle attacks. Even if a hacker manages to access your network, they won't be able to see your confidential information because of the encryption. Your employer should also make sure that all of your employees are using a secure corporate VPN when working from home.</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                        <Box width='80%' marginLeft='2%' marginTop='2%'>
                            {<Image src={img2} alt='' />}
                        </Box>
                    </TabPanel>
                    {/* <TabPanel>
                        <Tabs variant='soft-rounded' colorScheme='blue'>
                            <TabList marginLeft='48%' marginTop='0%' marginBottom="5%">
                                <Tab>Step 1</Tab>
                                <Tab>Step 2</Tab>
                                <Tab>Step 3</Tab>

                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Box id='text1'>Original Connection</Box>
                                    <Box position='absolute' marginLeft='12.7%' marginTop='8.8%'>Gateway</Box>
                                    <Box position='absolute' marginLeft='44%' marginTop='9%'>User</Box>
                                    <Box id='arrow1' className='arrow-9'></Box>
                                    <Box id='user' boxSize='sm' position='absolute' width='7%' marginLeft='41%' marginTop='2%' marginRight="5%">
                                        <Image src={user} alt='' />
                                    </Box>

                                    <Box className='gateway' boxSize='sm' position='absolute' width='10%' marginLeft='10%' marginTop='1%'>
                                        {<Image src={gateway} alt='' />}
                                    </Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box id='textbox' boxShadow='dark-lg' p='2' rounded='md' bg='white' fontSize="11pt">
                                        Hacker choose a victim to complete Interception Phase which is controling the traffic between user and gateway without alerting the user.
                                    </Box>
                                    <Box id='text1'>Original Connection</Box>
                                    <Box position='absolute' marginLeft='12.7%' marginTop='8.8%'>Gateway</Box>
                                    <Box position='absolute' marginLeft='44%' marginTop='9%'>User</Box>
                                    <Box id='arrow1' className='arrow-9'></Box>
                                    <Box id='user'>
                                        <Box id='user' boxSize='sm' position='absolute' width='7%' marginLeft='41%' marginTop='2%' marginRight="5%">
                                            <Image src={user} alt='' />
                                        </Box>
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='7%' marginLeft='27%' marginTop='18%'>
                                        {<Image className='hackeranimate' src={hacker} alt='' />}
                                    </Box>
                                    <Box className='gateway' boxSize='sm' position='absolute' width='10%' marginLeft='10%' marginTop='1%'>
                                        {<Image src={gateway} alt='' />}
                                    </Box>

                                </TabPanel>
                                <TabPanel>
                                    <Box id='textbox' boxShadow='dark-lg' p='2' rounded='md' bg='white' fontSize="11pt">
                                        After hacker controls the communication, traffic needs to be decrypted to end the attack successfully.
                                    </Box>
                                    <Box position='absolute' marginLeft='12.7%' marginTop='8.8%'>Gateway</Box>
                                    <Box position='absolute' marginLeft='44%' marginTop='9%'>User</Box>
                                    <Box id='redx' boxSize='sm' position='absolute' width='6%' marginLeft='27%' marginTop='5%'>
                                        {<Image src={redx} alt='' />}
                                    </Box>
                                    <Box id='user' boxSize='sm' position='absolute' width='7%' marginLeft='41%' marginTop='2%'>
                                        <Image src={user} alt='' />
                                    </Box>
                                    <Box id='hacker' boxSize='sm' position='absolute' width='6%' marginLeft='27%' marginTop='17%'>
                                        {<Image src={hacker} alt='' />}
                                    </Box>
                                    <Box className='gateway' boxSize='sm' position='absolute' width='10%' marginLeft='10%' marginTop='1%'>
                                        {<Image src={gateway} alt='' />}
                                    </Box>
                                    <Box id='arrow1' className='arrow-8'></Box>
                                    {isAlertVisible4 && <Box id='arrow' className='arrow-1'></Box>}
                                    {isAlertVisible3 && <Box id='arrow' className='arrow-2'></Box>}
                                    <Box id='arrow' className='arrow-3'></Box>
                                    {isAlertVisible2 && <Box id='arrow' className='arrow-4'></Box>}
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </TabPanel> */}
                    <TabPanel>
                        <Tabs>
                            <TabList marginTop='0px' width="600px">
                                <Tab>Step 1</Tab>
                                <Tab>Step 2</Tab>
                                <Tab onClick={() => handleTabPanelClick()}>Step 3</Tab>
                                <Tab>Step 4</Tab>
                                <Tab>Step 5</Tab>
                                <Tab>Step 6</Tab>
                                <Tab>Step 7</Tab>
                                <Tab>Step 8</Tab>
                                <Tab>Step 9</Tab>
                                <Tab>Step 10</Tab>


                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    Lets analyze the Man in the Middle attack more detailed!
                                    <div className="line"></div>
                                    <br></br><br></br>
                                    We have two friends who want to communicate.
                                    <Box position='absolute' marginLeft="2%" color="blue" fontSize="1em">
                                        User A
                                    </Box>
                                    <Box position='absolute' marginLeft="30%" color="red">
                                        User B
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='6%' marginLeft='0px' marginTop='3%'>
                                        <Image className='usr' src={user} alt='' />
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='8%' marginLeft='28%' marginTop='2%' zIndex="-1">
                                        <Image className='usr' src={user2} alt='' />
                                    </Box>
                                    <br></br><br></br>
                                    <Box marginTop='20%' width="80%">
                                        First of all they need to share their public keys with each other since the message will be encrypted according to receiver's public key.
                                    </Box>
                                    <div className="line"></div>
                                    <Box marginTop='3%' width="80%">
                                        Now, we assume that Sender has PrivA, PubA and Receiver has PrivB, PubB. These are the public and private keys of sender and receiver.
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='6%' marginLeft='0%' marginTop='2%'>
                                        <Image className='usr' src={user} alt='' />
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='8%' marginLeft='28%' marginTop='2%'>
                                        <Image className='usr' src={user2} alt='' />
                                    </Box>
                                    <Box position='absolute' className='priv' marginTop='11.67%'>
                                        Private Key: PrivA
                                    </Box>
                                    <Box position='absolute' className='pub' marginTop='15%'>
                                        Public Key: PubA
                                    </Box>
                                    <Box position='absolute' className='priv' marginLeft='27.78%' marginTop='11.67%'>
                                        Private Key: PrivB
                                    </Box>
                                    <Box position='absolute' className='pub' marginLeft='27.78%' marginTop='15%'>
                                        Public Key: PubB
                                    </Box>

                                </TabPanel>
                                <TabPanel>
                                    <Box>
                                        Now, we are in the second step. Lets talk about what will happen..
                                    </Box>
                                    <Box position='absolute' marginLeft="2%" color="blue" fontSize="1em" marginTop="13%">
                                        User A
                                    </Box>
                                    <Box position='absolute' marginLeft="30%" color="red" marginTop="13%">
                                        User B
                                    </Box>
                                    <div className="line"></div>
                                    <Box marginTop='3.33%'>
                                        As you remember, we have two friends trying to communicate..
                                    </Box>
                                    <Box marginTop='3.33%'>
                                        We need a session key to trust each other. A session key is a unique encryption and decryption key that is generated for a specific communication session between two entities.
                                    </Box>
                                    <Box marginTop='3.33%'>
                                        Lets share the key!
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='6%' marginLeft='2%' marginTop='3.33%'>
                                        <Image className='usr' src={user} alt='' />
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='8%' marginLeft='27.78%' marginTop='2.22%'>
                                        <Image className='usr' src={user2} alt='' />
                                    </Box>
                                    <Box position='absolute' className='pub' marginTop='14%'>
                                        Public Key: PubA
                                    </Box>
                                    <Box position='absolute' className='pub' marginTop='14%' marginLeft='27.78%'>
                                        Public Key: PubB
                                    </Box>

                                </TabPanel>
                                <TabPanel id='set-panel'>
                                    <Box marginTop='3.33%'>
                                        First of all User B needs User A's public key. However, attacker wants to intercept the communication...
                                    </Box>
                                    <Box position='absolute' marginLeft="2%" color="blue" fontSize="1em">
                                        User A
                                    </Box>
                                    <Box position='absolute' marginLeft="35%" color="red" marginTop="0.7%">
                                        User B
                                    </Box>
                                    <Box marginTop='8.67%' marginLeft="8.33%" position="absolute" color="red">
                                        PubA
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='6%' marginLeft='0%' marginTop='3.33%'>
                                        <Image className='usr' src={user} alt='' />
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='8%' marginLeft='32.78%' marginTop='4.22%'>
                                        <Image className='usr' src={user2} alt='' />
                                    </Box>
                                    <div class="arrow-10"></div>
                                    <Image id='hackeranimm' src={hacker} alt='' marginLeft="14%" position="absolute" />
                                    {isAlertVisible6 && <Box boxSize='sm' position='absolute' width='8.33%' marginLeft='17.01%' marginTop='22.22%' style={textStyle}>
                                        <b>PubH</b>
                                    </Box>}
                                    <Image id="bubble" src={bubble} alt='' width="10.42%" marginTop="2.22%" position="absolute" />
                                    <Box id="speech" width="8.83%" marginTop="5.67%" marginLeft="0.69%" position="absolute" fontSize="0.97vw">I will share my public key with my friend..</Box>
                                    <Image id="bubble" src={bubble} alt='' width="10.42%" marginTop="8.89%" position="absolute" marginLeft="13.89%" />
                                    <Box id="speech" width="9.03%" marginTop="11.83%" marginLeft="14.58%" position="absolute" fontSize="0.97vw">I will intercept the communication by getting the public key of sender..</Box>

                                </TabPanel>
                                <TabPanel>
                                    <Box marginTop='3.33%' fontSize="1.17vw">
                                        After hacker intercepts the flow of public key, hacker send his public key to User B.
                                    </Box>
                                    <Box position='absolute' marginLeft="2%" color="blue" fontSize="1em">
                                        User A
                                    </Box>
                                    <Box position='absolute' marginLeft="37%" color="red" marginTop="0.7%">
                                        User B
                                    </Box>
                                    <Box marginTop='9.67%' marginLeft='28.31%' position='absolute'>
                                        <b>PubH</b>
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='6%' marginLeft='0%' marginTop='3.33%'>
                                        <Image className='usr' src={user} alt='' />
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='8%' marginLeft='34.78%' marginTop='2.22%'>
                                        <Image className='usr' src={user2} alt='' />
                                    </Box>
                                    <Box marginLeft='46.01%'>
                                        <div class='arrow-10'></div>
                                    </Box>
                                    <Image className='hackeranimate' src={hacker} alt='' marginLeft='34.89%' marginTop='-11.11%' zIndex="-1" />
                                    <Image id='bubble' src={bubble} alt='' width='10.42%' marginTop='1.22%' position='absolute' marginLeft='17.89%' />
                                    <Box id='speech' width='9.03%' marginTop='4.67%' marginLeft='18.58%' position='absolute' fontSize='0.97vw'>
                                        I will send my public key to receiver like I am the original sender..
                                    </Box>
                                    <Image id='bubble' src={bubble} alt='' width='10.42%' marginTop='0.11%' position='absolute' marginLeft='38.25%' />
                                    <Box id='speech' width='9.03%' marginTop='3.56%' marginLeft='38.94%' position='absolute' fontSize='0.97vw'>
                                        Okay! I got the public key of User A..
                                    </Box>

                                </TabPanel>
                                <TabPanel>
                                    <Box marginTop='3.33%'>
                                        In this step, User B creates a session key and encrypts it with the hacker's public key because User B thinks that it belongs to User A.
                                    </Box>
                                    <Box position='absolute' marginLeft="2%" color="blue" fontSize="1em">
                                        User A
                                    </Box>
                                    <Box position='absolute' marginLeft="37%" color="red" marginTop="0.7%">
                                        User B
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='6%' marginLeft='0%' marginTop='3.33%'>
                                        <Image className='usr' src={user} alt='' />
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='8%' marginLeft='34.78%' marginTop='3.22%'>
                                        <Image className='usr' src={user2} alt='' />
                                    </Box>
                                    <Box marginTop='27.56%' marginLeft="33.47%" position="absolute">
                                        <b>Ks: Session Key</b>
                                    </Box>

                                    <Box marginLeft="-13.89%">
                                        <div class="arrow-33"></div>
                                    </Box>
                                    <Box marginTop='5.33%' marginLeft="43.08%" position="absolute" >
                                        E(PubH,Ks)
                                    </Box>
                                    <Image id='hacker' className='hackeranimate' src={hacker} alt='' marginLeft="16.5%" marginTop="17.22%" position="absolute" zIndex="-1" />
                                    <Image id="bubble" src={bubble} alt='' width="11.81%" marginTop="11.11%" position="absolute" marginLeft="38.19%" />
                                    <Box id="speech" width="10.42%" marginTop="14.67%" marginLeft="38.89%" position="absolute" fontSize="0.97vw">I will create a session key and encrypt it with the public key I got, then send it to User A...</Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box marginTop='3.33%' fontSize="1.17vw">
                                        Now, the hacker can get the session key by decrypting the encrypted session key with his own private key.
                                    </Box>
                                    <Box position='absolute' marginLeft="2%" color="blue" fontSize="1em">
                                        User A
                                    </Box>
                                    <Box position='absolute' marginLeft="30%" color="red" marginTop="0.7%">
                                        User B
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='6%' marginLeft='0%' marginTop='3.33%'>
                                        <Image className='usr' src={user} alt='' />
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='8%' marginLeft='27.78%' marginTop='3.22%'>
                                        <Image className='usr' src={user2} alt='' />
                                    </Box>
                                    <Image id='hacker' className='hackeranimate' src={hacker} alt='' marginLeft="12.5%" marginTop="17.22%" position="absolute" />
                                    <Box marginTop='28.89%' marginLeft="9.03%" position="absolute" fontSize="1.17vw" >
                                        <b>Ks = D(PrivH,(E(PubH,Ks))</b>
                                    </Box>
                                    <Box>
                                        <Image id="bubble" src={bubble} alt='' width="10.42%" marginTop="24.44%" position="absolute" marginLeft="24.31%" />
                                    </Box>

                                    <Box id="speech" width="9.03%" marginTop="27.29%" marginLeft="25%" position="absolute" fontSize="0.97vw">I will decrypt it using my private key and get the session key...</Box>
                                </TabPanel>


                                <TabPanel>
                                    <Box marginTop='3.33%' fontSize="1.17vw" width="100%">
                                        Finally, hacker sends encrypted session key to User A with his public key and in conclusion, they will trust each other.
                                    </Box>
                                    <Box position='absolute' marginLeft="2%" color="blue" fontSize="1em">
                                        User A
                                    </Box>
                                    <Box position='absolute' marginLeft="35%" color="red" marginTop="0.7%">
                                        User B
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='6%' marginLeft='0px' marginTop='3.33%'>
                                        <Image className='usr' src={user} alt='' />
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='8%' marginLeft='33.78%' marginTop='3.22%'>
                                        <Image className='usr' src={user2} alt='' />
                                    </Box>
                                    <Box marginLeft="-29.89%">
                                        <div class="arrow-45"></div>
                                    </Box>
                                    <Box marginTop='28.22%' marginLeft="18%" position="absolute">
                                        <b>E(PubA,Ks)</b>
                                    </Box>
                                    <Box marginTop='10.22%' marginLeft="0%" position="absolute">
                                        <b>D(PrivA,Ks)</b>
                                    </Box>
                                    <Image id='hacker' className='hackeranimate' src={hacker} alt='' marginLeft="16.5%" marginTop="17.22%" position="absolute" />
                                    <Box marginTop='40.67%' marginLeft="-5.56%" position="absolute" fontStyle="italic" fontSize="1.27vw">
                                        <b>Now User A, User B and Hacker shares the session key. User A and User B trusts each other</b>
                                    </Box>
                                    <Image id="bubble" src={bubble} alt='' width="12.5%" marginTop="26.67%" position="absolute" marginLeft="24.31%" />
                                    <Box id="speech" width="10.42%" marginTop="30.22%" marginLeft="25%" position="absolute" fontSize="0.97vw">I will send the session key to User A. User A will think that it is coming from User B instead of me!</Box>
                                    <Image id="bubble" src={bubble} alt='' width="10.42%" marginTop="4.44%" position="absolute" marginLeft="10.42%" />
                                    <Box id="speech" width="9.03%" marginTop="7.89%" marginLeft="11.11%" position="absolute" fontSize="0.97vw">I decrypted it and get the session key from User B. We trust each other..</Box>
                                </TabPanel>

                                <TabPanel>
                                    <Box>
                                        Now, User A and User B wants to send message to each other.
                                    </Box>
                                    <div className="line"></div>
                                    <Box marginTop='30px'>
                                        After attacker intercepts the message, there are two options.
                                    </Box>
                                    <Box marginTop='30px'>
                                        1) Only reading the message.
                                    </Box>
                                    <Box>
                                        2) Modifiying the message.
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='6%' marginLeft='0px' marginTop='2%'>
                                        <Image className='usr' src={user} alt='' />
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='8%' marginLeft='30%' marginTop='2%'>
                                        <Image className='usr' src={user2} alt='' />
                                    </Box>

                                    {isAlertVisible4 && <Box marginLeft="20%" id='arrow' className='arrow-333'></Box>}
                                    {isAlertVisible3 && <Box marginLeft="3%" id='arrow' className='arrow-2'></Box>}
                                    <Box marginLeft="18%" id='arrow' className='arrow-3'></Box>
                                    {isAlertVisible2 && <Box marginLeft="5%" id='arrow' className='arrow-4'></Box>}
                                    <Image id='hacker' className='hackeranimate' src={hacker} alt='' marginLeft="13%" marginTop="21%" position="absolute" />
                                    <Box marginLeft='10%' marginTop='35%' fontStyle='italic' position="absolute">
                                        <b>Hacker controls the communication</b>
                                    </Box>
                                    <div id="typedtext"></div>
                                    <Image id="bubble" src={bubble} alt='' width="12%" marginTop="21.5%" position="absolute" marginLeft="25%" />
                                    <Box id="speech" width="12%" marginTop="25%" marginLeft="25.8%" position="absolute" fontSize="0.92vw">Now, I have two opportunites. I have to decide between reading messages or modifying them after i read.</Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box marginTop='0px' marginLeft="-4.86%" position="absolute">
                                        We know that there are two options. Now, we are going to implement the <b>Only Reading Data</b>.
                                    </Box>
                                    <Box marginTop='5.56%' marginLeft="6.25%" position="absolute">
                                        C = EC(M,Ks)
                                    </Box>
                                    <Image id="bubble" src={bubble} alt='' width="9.72%" marginTop="5.56%" position="absolute" marginLeft="12.5%" />
                                    <Box id="speech" width="8.68%" marginTop="8.18%" marginLeft="13.19%" position="absolute" fontSize="0.83vw">I will send a message to User B. To do that, I will encrypt message with session key.</Box>
                                    <Box boxSize='sm' position='absolute' width='6%' marginLeft='0px' marginTop='3.33%'>
                                        <Image className='usr' src={user} alt='' />
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='8%' marginLeft='27.78%' marginTop='2.22%'>
                                        <Image className='usr' src={user2} alt='' />
                                    </Box>
                                    <Box marginTop='5.56%' marginLeft="38.19%" position="absolute">
                                        M = DC(C,Ks)
                                    </Box>
                                    <Image id="bubble" src={bubble} alt='' width="9.72%" marginTop="21.11%" position="absolute" marginLeft="24.31%" />
                                    <Box id="speech" width="8.68%" marginTop="23.86%" marginLeft="25%" position="absolute" fontSize="0.76vw">I will decrypt in and read the content of the message, then send it to User B without modification.</Box>
                                    <Box position="absolute" marginLeft="16%" marginTop="25%">M = DC(C,Ks)</Box>
                                    <Box marginLeft='27.78%'>
                                        <div className="containerr">
                                            <div class="boxx">
                                                <div class="border one"></div>
                                                <div class="border two"></div>
                                                <div class="border three"></div>
                                                <div class="border four"></div>

                                                <div class="linee one"></div>
                                                <div class="linee two"></div>
                                                <div class="linee three"></div>
                                            </div>
                                        </div>
                                    </Box>
                                    {isAlertVisible5 && <Box marginLeft='55.56%'>
                                        <div className="containerr2">
                                            <div class="boxx">
                                                <div class="border one"></div>
                                                <div class="border two"></div>
                                                <div class="border three"></div>
                                                <div class="border four"></div>

                                                <div class="linee one"></div>
                                                <div class="linee two"></div>
                                                <div class="linee three"></div>
                                            </div>
                                        </div>
                                    </Box>}
                                    <Box marginTop='28.89%' marginLeft="-1.39%" position="absolute" color="gray" fontSize="1.17vw">
                                        EC: Encryption
                                        <br></br>
                                        M: Message
                                        <br></br>
                                        Ks: Session Key
                                        <br></br>
                                        C: Cipher Text
                                        <br></br>
                                    </Box>
                                    <Box marginTop="38%" marginLeft="-5%" position="absolute" width="50%">
                                        As you see, the message has not been modified. However, hacker reads the message. This is <b>Breach of Data Confidentiality</b>.
                                    </Box>
                                    <Image src={hacker} alt='' marginLeft="33.5%" marginTop="37.78%" width="20%" />
                                </TabPanel>

                                <TabPanel>
                                    <Box marginTop='0px' marginLeft="-4.86%" position="absolute">
                                        Lets talk about the second option. Now, we are going to implement the <b>Modifying the Message</b>.
                                    </Box>
                                    <Box marginTop='5.55%' marginLeft="6.25%" position="absolute">
                                        C = EC(M,Ks)
                                    </Box>
                                    <Image id="bubble" src={bubble} alt='' width="9.72%" marginTop="5.55%" position="absolute" marginLeft="12.5%" />
                                    <Box id="speech" width="8.68%" marginTop="7.98%" marginLeft="13.19%" position="absolute" fontSize="0.83vw">I will send a message to User B. To do that, I will encrypt message with session key.</Box>
                                    <Box boxSize='sm' position='absolute' width='6%' marginLeft='0px' marginTop='3.33%'>
                                        <Image className='usr' src={user} alt='' />
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='8%' marginLeft='27.78%' marginTop='3.22%'>
                                        <Image className='usr' src={user2} alt='' />
                                    </Box>
                                    <Box marginTop='5.55%' marginLeft="38.19%" position="absolute">
                                        M^ = DC(C^,Ks)
                                    </Box>


                                    <Box marginTop='0' marginLeft="-4.86%" position="absolute">
                                        Lets talk about the second option. Now, we are going to implement the <b>Modifying the Message</b>.
                                    </Box>
                                    <Box marginTop='5.56%' marginLeft="6.25%" position="absolute">
                                        C = EC(M,Ks)
                                    </Box>

                                    <Box boxSize='sm' position='absolute' width='0.42%' marginLeft='0' marginTop='3.33%'>
                                        <Image className='usr' src={user} alt='' />
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='0.56%' marginLeft='27.78%' marginTop='2.22%'>
                                        <Image className='usr' src={user2} alt='' />
                                    </Box>
                                    <Box marginTop='5.56%' marginLeft="38.19%" position="absolute">
                                        M^ = DC(C^,Ks)
                                    </Box>
                                    <Image id="bubble" src={bubble} alt='' width="9.72%" marginTop="23.11%" position="absolute" marginLeft="26.31%" />
                                    <Box id="speech" width="8.68%" marginTop="26.33%" marginLeft="26.97%" position="absolute" fontSize="0.76vw">I will decrypt in and read the content of the message, then create or modify the existing message.</Box>
                                    <Box marginLeft='27.78%'>
                                        <div className="containerr">
                                            <div class="boxx">
                                                <div class="border one"></div>
                                                <div class="border two"></div>
                                                <div class="border three"></div>
                                                <div class="border four"></div>

                                                <div class="linee one"></div>
                                                <div class="linee two"></div>
                                                <div class="linee three"></div>
                                            </div>
                                        </div>
                                    </Box>
                                    {isAlertVisible5 && <Box marginLeft='55.56%'>
                                        <div className="containerr3">
                                            <div class="boxx">
                                                <div class="borderr one"></div>
                                                <div class="borderr two"></div>
                                                <div class="borderr three"></div>
                                                <div class="borderr four"></div>

                                                <div class="lineee one"></div>
                                                <div class="lineee two"></div>
                                                <div class="lineee three"></div>
                                            </div>
                                        </div>
                                    </Box>}
                                    <Box marginTop='28.56%' marginLeft="-1.39%" position="absolute" color="gray">
                                        EC: Encryption
                                        <br></br>
                                        M: Message
                                        <br></br>
                                        Ks: Session Key
                                        <br></br>
                                        C: Cipher Text
                                        <br></br>
                                    </Box>

                                    <Image src={hacker} alt='' marginLeft="32.5%" marginTop="40.78%" width="20%" />
                                    <Box marginTop='1.11%' marginLeft="13.89%" position="absolute" fontSize="1.17vw">
                                        M = DC(C,Ks)
                                    </Box>
                                    <Box marginTop='3.33%' marginLeft="13.89%" position="absolute" fontSize="1.17vw">
                                        New Message is M^
                                    </Box>
                                    <Box marginTop='5.56%' marginLeft="13.89%" position="absolute" fontSize="1.17vw">
                                        C^ = EC(M^,Ks)
                                    </Box>
                                    <Box marginTop='10%' marginLeft="-2.78%" position="absolute" fontSize="1.17vw">
                                        <b>Modify the message after decryption. Then sends it to the receiver with modification.</b>
                                    </Box>
                                    <Box marginTop='12.89%' marginLeft="-2.78%" position="absolute" fontSize="1.17vw">
                                        This is the example of both <b>Breach of Confidentiality</b> and <b>Breach of Data Integrity</b>. <br></br>Lets remember what data integrity is. <br></br>Data integrity is a concept and process that ensures the accuracy, completeness and consistency of a data.
                                    </Box>


                                </TabPanel>


                            </TabPanels>
                        </Tabs>

                    </TabPanel>
                    <TabPanel>
                        <Tabs>
                            <TabList>
                                <Tab>Step 1</Tab>
                                <Tab onClick={() => handleTabPanelClick()}>Step 2</Tab>
                                <Tab onClick={() => handleTabPanelClick(0)}>Step 3</Tab>
                                <Tab onClick={() => handleTabPanelClick(1)}>Step 4</Tab>
                                <Tab onClick={() => handleTabPanelClick()}>Step 5</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Box marginTop='5px' position="absolute" width="41.67%" fontSize="1.17vw">
                                        In this scenario, Person A wants to share some documents with Person B. To do that, case shoul be locked all the time for secure transaction. Let's see how two friends are going to do this.
                                    </Box>
                                    <Image src={usera} alt='' marginLeft="-5.56%" marginTop="9.78%" width="13.89%" position="absolute" zIndex="-1" />
                                    <Image src={userb} alt='' marginLeft="33.33%" marginTop="9.78%" width="13.89%" position="absolute" />
                                    <Image src={suitcase} alt='' marginLeft="13.47%" marginTop="29.78%" width="15.89%" />
                                    <Box position='absolute' marginLeft="0%" marginTop="9%" color="blue" fontSize="1em">
                                        Person A
                                    </Box>
                                    <Box position='absolute' marginLeft="39%" marginTop="9%" color="red">
                                        Person B
                                    </Box>

                                </TabPanel>
                                <TabPanel>
                                    <Box marginTop='1.11%' position="absolute" fontSize="1.17vw">
                                        Now, Person A will lock the case then give it to Person B.
                                    </Box>
                                    <Box position='absolute' marginLeft="0%" marginTop="5%" color="blue" fontSize="1em" zIndex="1">
                                        Person A
                                    </Box>
                                    <Box position='absolute' marginLeft="39%" marginTop="5%" color="red">
                                        Person B
                                    </Box>
                                    <Image src={usera} alt='' marginLeft="-5.56%" marginTop="5.56%" width="13.89%" position="absolute" zIndex="-1" />
                                    <Image src={userb} alt='' marginLeft="33.33%" marginTop="5.56%" width="13.89%" position="absolute" zIndex="-1" />
                                    <Image id='bag' src={suitcase} alt='' marginLeft="13.47%" marginTop="17.56%" width="15.89%" />
                                    <Box marginLeft="10.42%" marginTop="10%">
                                        <div class="wrapper">
                                            <div class="base">
                                                <div class="base-bottom">
                                                </div>
                                                <div class="lock-inside-top">
                                                </div>
                                                <div class="lock-inside-bottom">
                                                </div>
                                            </div>
                                            <div class="lock-cirlce">
                                                <div class="lock-circle-inside">
                                                </div>
                                            </div>
                                            <div class="lock-box">
                                            </div>
                                        </div>
                                    </Box>
                                </TabPanel>

                                <TabPanel>
                                    <Box marginTop='10px' position="absolute" fontSize="1.17vw" style={{ marginTop: '1.11%', left: '44.28%' }}>
                                        Then, Person B will lock the case then give it to Person A.
                                    </Box>
                                    <Box position='absolute' marginLeft="0%" marginTop="5%" color="blue" fontSize="1em" zIndex="1">
                                        Person A
                                    </Box>
                                    <Box position='absolute' marginLeft="39%" marginTop="5%" color="red">
                                        Person B
                                    </Box>
                                    <Image src={usera} alt='' style={{ marginLeft: '-5.56%', marginTop: '5.56%', width: '13.89%', position: 'absolute', zIndex: '-1' }} />
                                    <Image src={userb} alt='' style={{ marginLeft: '33.33%', marginTop: '5.56%', width: '13.89%', position: 'absolute', zIndex: '-1' }} />
                                    <Image id='bag2' src={suitcase} alt='' style={{ marginLeft: '59.92%', marginTop: '17.56%', width: "15.89%" }} />
                                    <Box style={{ marginTop: '11.11%', marginLeft: '0.83%' }}>
                                        <div class="wrapper">
                                            <div class="base">
                                                <div class="base-bottom">
                                                </div>
                                                <div class="lock-inside-top">
                                                </div>
                                                <div class="lock-inside-bottom">
                                                </div>
                                            </div>
                                            <div class="lock-cirlce2">
                                                <div class="lock-circle-inside">
                                                </div>
                                            </div>
                                            <div class="lock-box2">
                                            </div>
                                        </div>
                                    </Box>
                                    <Box style={{ marginTop: '11.11%', marginLeft: '45.28%' }}>
                                        <div class="wrapper">
                                            <div class="base2">
                                                <div class="base-bottom">
                                                </div>
                                                <div class="lock-inside-top">
                                                </div>
                                                <div class="lock-inside-bottom">
                                                </div>
                                            </div>
                                            <div class="lock-cirlce">
                                                <div class="lock-circle-inside">
                                                </div>
                                            </div>
                                            <div class="lock-box">
                                            </div>
                                        </div>
                                    </Box>


                                </TabPanel>
                                <TabPanel>
                                    <Box marginTop='10px' position="absolute" fontSize="1.17vw">
                                        In this step, Person A will unlock its lock and send back to Person B.
                                    </Box>
                                    <Box position='absolute' marginLeft="0%" marginTop="5%" color="blue" fontSize="1em" zIndex="1">
                                        Person A
                                    </Box>
                                    <Box position='absolute' marginLeft="39%" marginTop="5%" color="red">
                                        Person B
                                    </Box>
                                    <Image src={usera} alt='' style={{ marginLeft: '-5.56%', marginTop: '5.56%', width: '13.89%', position: 'absolute', zIndex: '-1' }} />
                                    <Image src={userb} alt='' style={{ marginLeft: '33.33%', marginTop: '5.56%', width: '13.89%', position: 'absolute', zIndex: '-1' }} />
                                    <Image id='bag' src={suitcase} alt='' style={{ marginLeft: '13.92%', marginTop: '17.56%', width: " 15.89%" }} />

                                    {/* <Image src={lock2} alt='' marginLeft="130px" marginTop="10px" width="70px" style={imageStyle2} /> */}
                                    <Box style={{ marginTop: '11.11%', marginLeft: '0.83%' }}>
                                        <div class="wrapper">
                                            <div class="base">
                                                <div class="base-bottom">
                                                </div>
                                                <div class="lock-inside-top">
                                                </div>
                                                <div class="lock-inside-bottom">
                                                </div>
                                            </div>
                                            <div class="lock-cirlce3">
                                                <div class="lock-circle-inside">
                                                </div>
                                            </div>
                                            <div class="lock-box3">
                                            </div>
                                        </div>
                                    </Box>
                                    <Box style={{ marginTop: '11.11%', marginLeft: '45.28%' }}>
                                        <div class="wrapper">
                                            <div class="base2">
                                                <div class="base-bottom">
                                                </div>
                                                <div class="lock-inside-top">
                                                </div>
                                                <div class="lock-inside-bottom">
                                                </div>
                                            </div>
                                            <div class="lock-cirlce2">
                                                <div class="lock-circle-inside">
                                                </div>
                                            </div>
                                            <div class="lock-box2">
                                            </div>
                                        </div>
                                    </Box>

                                </TabPanel>
                                <TabPanel>
                                    <Box marginTop='10px' position="absolute">
                                        Finally, Person B can unlock the case with own key and get the documents.
                                    </Box>
                                    <Box position='absolute' marginLeft="0%" marginTop="5%" color="blue" fontSize="1em">
                                        Person A
                                    </Box>
                                    <Box position='absolute' marginLeft="39%" marginTop="5%" color="red">
                                        Person B
                                    </Box>
                                    <Image src={usera} alt='' style={{ marginLeft: '-5.56%', marginTop: '5.56%', width: '13.89%', position: 'absolute', zIndex: '-1' }} />
                                    <Image src={userb} alt='' style={{ marginLeft: '33.33%', marginTop: '5.56%', width: '13.89%', position: 'absolute', zIndex: '-1' }} />
                                    <Image src={suitcase} alt='' marginLeft="55%" marginTop="15%" width="15.89%" />
                                    <Box marginLeft="45%" marginTop="13%">
                                        <div class="wrapper">
                                            <div class="base2">
                                                <div class="base-bottom">
                                                </div>
                                                <div class="lock-inside-top">
                                                </div>
                                                <div class="lock-inside-bottom">
                                                </div>
                                            </div>
                                            <div class="lock-cirlce3">
                                                <div class="lock-circle-inside">
                                                </div>
                                            </div>
                                            <div class="lock-box3">
                                            </div>
                                        </div>
                                    </Box>



                                </TabPanel>
                            </TabPanels>
                        </Tabs>

                    </TabPanel>
                    <TabPanel>
                        <Tabs>
                            <TabList>
                                <Tab>Step 1</Tab>
                                <Tab>Step 2</Tab>
                                <Tab>Step 3</Tab>
                                <Tab>Step 4</Tab>
                                <Tab>Step 5</Tab>
                                <Tab>Step 6</Tab>
                                <Tab>Step 7</Tab>
                                <Tab>Step 8</Tab>
                                <Tab>Step 9</Tab>
                                <Tab>Step 10</Tab>
                            </TabList>
                            <TabPanels marginLeft="0%" marginRight="10%">
                                <TabPanel>
                                    <Box fontSize="1.17vw">
                                        Our next topic is Diffie Hellman Key Exchange. As a first step, lets learn what Diffie Hellman Key Exchange is.<br></br> <br></br>Diffie-Hellman key exchange is a method of digital encryption that securely exchanges cryptographic keys between two parties over a public channel without their conversation being transmitted over the internet. The two parties use symmetric cryptography to encrypt and decrypt their messages.<br></br><br></br> Published in 1976 by Whitfield Diffie and Martin Hellman, it was one of the first practical examples of public key cryptography.

                                        Diffie-Hellman key exchange raises numbers to a selected power to produce decryption keys. The components of the keys are never directly transmitted, making the task of a would-be code breaker mathematically overwhelming. The method doesn't share information during the key exchange. The two parties have no prior knowledge of each other, but the two parties create a key together. <br></br>
                                    </Box>
                                    <Image src={ex} alt='' marginLeft="8.56%" marginTop="5.56%" width="23.89%" position="absolute" zIndex="-1" borderRadius="1cm" />
                                </TabPanel>
                                <TabPanel>
                                    <Box fontSize="1.17vw">
                                        Our second step is initialization. There are two parties in this scenario. Lets call them User A and User B.<br></br><br></br>
                                        First of all, they will agree on a prime number p and a base number g which is primitive root modulo p.
                                    </Box>
                                    <Image src={usera} alt='' marginLeft="-5.56%" marginTop="5.56%" width="13.89%" position="absolute" zIndex="-1" />
                                    <Image src={userb} alt='' marginLeft="33.33%" marginTop="5.56%" width="13.89%" position="absolute" zIndex="-1" />
                                    <Box marginTop="23%" position="absolute">
                                        User A
                                    </Box>
                                    <Box marginTop="23%" position="absolute" marginLeft="39%">
                                        User B
                                    </Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box fontSize="1.17vw">
                                        In third step, each party generates a random secret number. User A generates a secret number a, and User B generates a secret number b.
                                    </Box>
                                    <Image src={usera} alt='' marginLeft="-5.56%" marginTop="5.56%" width="13.89%" position="absolute" zIndex="-1" />
                                    <Image src={userb} alt='' marginLeft="33.33%" marginTop="5.56%" width="13.89%" position="absolute" zIndex="-1" />
                                    <Box marginTop="23%" position="absolute">
                                        User A
                                    </Box>
                                    <Box marginTop="23%" position="absolute" marginLeft="39%">
                                        User B
                                    </Box>
                                    <Image id="bubble" src={bubble} alt='' width="9.72%" marginTop="13.11%" position="absolute" marginLeft="6.31%" />
                                    <Box id="speech" width="8.68%" marginTop="16.03%" marginLeft="6.97%" position="absolute" fontSize="0.97vw">a is my secret number.</Box>
                                    <Image id="bubble2" src={bubble} alt='' width="9.72%" marginTop="13.11%" position="absolute" marginLeft="26.31%" />
                                    <Box id="speech" width="8.68%" marginTop="16.03%" marginLeft="26.97%" position="absolute" fontSize="0.97vw">b is my secret number.</Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box fontSize="1.17vw">
                                        Next step is generation of public keys. Each party computes a public key. User A computes A = g^a mod p, and User B computes B = g^b mod p.
                                    </Box>
                                    <Image src={usera} alt='' marginLeft="-5.56%" marginTop="5.56%" width="13.89%" position="absolute" zIndex="-1" />
                                    <Image src={userb} alt='' marginLeft="33.33%" marginTop="5.56%" width="13.89%" position="absolute" zIndex="-1" />
                                    <Box marginTop="23%" position="absolute">
                                        User A
                                    </Box>
                                    <Box marginTop="23%" position="absolute" marginLeft="39%">
                                        User B
                                    </Box>
                                    <Image id="bubble" src={bubble} alt='' width="9.72%" marginTop="13.11%" position="absolute" marginLeft="6.31%" />
                                    <Box id="speech" width="8.68%" marginTop="16.03%" marginLeft="6.97%" position="absolute" fontSize="0.97vw">I can get public key A, if calculate g^a mod p.</Box>
                                    <Image id="bubble2" src={bubble} alt='' width="9.72%" marginTop="13.11%" position="absolute" marginLeft="26.31%" />
                                    <Box id="speech" width="8.68%" marginTop="16.03%" marginLeft="26.97%" position="absolute" fontSize="0.97vw">I can get public key B, if calculate g^b mod p.</Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box fontSize="1.17vw">
                                        Now, we come to the step named exchange of public keys. User A and User B exchange their public keys A and B over the insecure communication channel. Lets start with User A.
                                    </Box>
                                    <Image src={usera} alt='' marginLeft="-5.56%" marginTop="5.56%" width="13.89%" position="absolute" zIndex="-1" />
                                    <Image src={userb} alt='' marginLeft="33.33%" marginTop="5.56%" width="13.89%" position="absolute" zIndex="-1" />
                                    <Box marginTop="23%" position="absolute">
                                        User A
                                    </Box>
                                    <Box marginTop="23%" position="absolute" marginLeft="39%">
                                        User B
                                    </Box>
                                    <Image id="bubble" src={bubble} alt='' width="9.72%" marginTop="13.11%" position="absolute" marginLeft="6.31%" />
                                    <Box id="speech" width="8.68%" marginTop="16.03%" marginLeft="6.97%" position="absolute" fontSize="0.97vw">I will share my public key the i created with User B!</Box>
                                    <Image id="key" src={key} alt='' width="9.72%" marginTop="4.71%" position="absolute" marginLeft="5.31%" zIndex="-1" />
                                    <Box id="text" marginLeft="20%" marginTop="20%">A</Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box fontSize="1.17vw">
                                        After User B gets the public key of User A, User B will create shared secret key K. Then, User B will share it's public key B with User A.
                                    </Box>
                                    <Image src={usera} alt='' marginLeft="-5.56%" marginTop="5.56%" width="13.89%" position="absolute" zIndex="-1" />
                                    <Image src={userb} alt='' marginLeft="33.33%" marginTop="5.56%" width="13.89%" position="absolute" zIndex="-1" />
                                    <Box marginTop="23%" position="absolute">
                                        User A
                                    </Box>
                                    <Box marginTop="23%" position="absolute" marginLeft="39%">
                                        User B
                                    </Box>
                                    <Image id="bubble2" src={bubble} alt='' width="9.72%" marginTop="13.11%" position="absolute" marginLeft="26.31%" />
                                    <Box id="speech" width="8.68%" marginTop="16.03%" marginLeft="26.97%" position="absolute" fontSize="0.97vw">I will create secret key using the public key came from User A. </Box>
                                    <Image id="key2" src={key} alt='' width="9.72%" marginTop="4.61%" position="absolute" marginLeft="25.31%" zIndex="-1" />
                                    <Image id="bubble2" src={bubble} alt='' width="9.72%" marginTop="23.11%" position="absolute" marginLeft="26.31%" />
                                    <Box id="speech" width="8.68%" marginTop="26.03%" marginLeft="26.97%" position="absolute" fontSize="0.97vw">After that, I will share my public key with User A.  </Box>

                                    <Box id="text2" marginLeft="70.3%" marginTop="20%" fontSize="1.17vw">B</Box>
                                    <Box marginLeft="67%" marginTop="55%" fontSize="1.1vw"><b>Secret Key: K = A^b mod p</b></Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box fontSize="1.17vw">
                                        After User A gets the public key of User B, User A will create shared secret key K. Then, both parties can use the secret key to encrypt or decrypt the messages.
                                    </Box>
                                    <Image src={usera} alt='' marginLeft="-5.56%" marginTop="5.56%" width="13.89%" position="absolute" zIndex="-1" />
                                    <Image src={userb} alt='' marginLeft="33.33%" marginTop="5.56%" width="13.89%" position="absolute" zIndex="-1" />
                                    <Box marginTop="23%" position="absolute">
                                        User A
                                    </Box>
                                    <Box marginTop="23%" position="absolute" marginLeft="39%">
                                        User B
                                    </Box>
                                    <Image id="bubble" src={bubble} alt='' width="9.72%" marginTop="13.11%" position="absolute" marginLeft="6.31%" />
                                    <Box id="speech" width="8.68%" marginTop="16.03%" marginLeft="6.97%" position="absolute" fontSize="0.97vw">I will create secret key using the public key came from User B. </Box>




                                    <Box marginLeft="2%" marginTop="5%"><b>Secret Key: K = B^a mod p</b></Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box fontSize="1.17vw">
                                        Everything looks fine.. However, there is a huge security threat which can leads to Man in the Middle Attack.
                                        <br></br> <br></br>Insecure channel and lack of authentication protocol create a risky situation for both User A and User B.
                                    </Box>
                                    <Image src={usera} alt='' marginLeft="-5.56%" marginTop="5.56%" width="13.89%" position="absolute" zIndex="-1" />
                                    <Image src={userb} alt='' marginLeft="33.33%" marginTop="5.56%" width="13.89%" position="absolute" zIndex="-1" />
                                    <Box marginTop="23%" position="absolute">
                                        User A
                                    </Box>
                                    <Box marginTop="23%" position="absolute" marginLeft="39%">
                                        User B
                                    </Box>
                                    <Image id="bubble" src={bubble} alt='' width="9.72%" marginTop="13.11%" position="absolute" marginLeft="6.31%" />
                                    <Box id="speech" width="8.68%" marginTop="16.03%" marginLeft="6.97%" position="absolute" fontSize="0.97vw">I assume that we are communicating securely. I trust User B... </Box>




                                    <Box id='arrow1' className='arrow-9' marginLeft="13%" marginTop="10%"></Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box fontSize="1.17vw">
                                        Lets analyze what will happen now...

                                    </Box>
                                    <Image src={usera} alt='' marginLeft="-5.56%" marginTop="5.56%" width="13.89%" position="absolute" zIndex="-1" />
                                    <Image src={userb} alt='' marginLeft="33.33%" marginTop="5.56%" width="13.89%" position="absolute" zIndex="-1" />
                                    <Box marginTop="23%" position="absolute">
                                        User A
                                    </Box>
                                    <Box marginTop="23%" position="absolute" marginLeft="39%">
                                        User B
                                    </Box>
                                    <Image id="bubble" src={bubble} alt='' width="9.72%" marginTop="13.11%" position="absolute" marginLeft="6.31%" />
                                    <Box id="speech" width="8.68%" marginTop="16.03%" marginLeft="6.97%" position="absolute" fontSize="0.97vw">I assume that we are communicating securely. I trust User B... </Box>
                                    <Image id='hackeranim' className='hackeranimate' src={hacker} alt='' marginLeft="17%" marginTop="21%" position="absolute" zIndex="-1" />




                                    <Box id='arrow1' className='arrow-9' marginLeft="13%" marginTop="10%"></Box>
                                    <Box id='info' marginTop="60%" opacity="1"><p>As you remember from Man in the Middle Attack, hacker can intercept the communication by sharing the secret key. You can check it in the <b>Background of the Attack section</b>.</p></Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box fontSize="1.17vw">
                                        There are some method that we can implement:

                                        There are several ways to protect the Diffie-Hellman key exchange to prevent potential attacks:
                                        <br></br><br></br>
                                        <b>1) Use large prime numbers:</b> Choosing a large prime number for the Diffie-Hellman key exchange can make it more difficult for attackers to compute the shared secret key.<br></br><br></br>
                                        <b>2) Authenticate the public keys:</b> A secure hash function can be used to reduce the possibility of a man-in-the-middle attack. However, the best solution is authenticating each others public key. One way to do this is by using digital signatures, where each party signs their public key with their private key.<br></br><br></br>
                                        <b>3) Use perfect forward secrecy:</b> Perfect forward secrecy (PFS) is a property of some cryptographic protocols where the compromise of a long-term secret key does not compromise past session keys. Implementing PFS in Diffie-Hellman key exchange ensures that even if an attacker obtains the private key, they cannot use it to decrypt past communications.<br></br><br></br>
                                        <b>4) Implement proper key management:</b> Proper key management is essential to ensure the security of the key exchange. The keys should be generated using a secure random number generator, and the keys should be protected with strong encryption.

                                    </Box>
                                    <Image src={security} alt='' width='40.42%' marginTop='-2.22%' position='absolute' marginLeft='2.89%' zIndex="-1" />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>

                    </TabPanel>


                    <TabPanel>
                        <Tabs>
                            <TabList marginTop='0px'>
                                <Tab>ARP Poisoning</Tab>
                                <Tab>Python</Tab>

                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <p><b>Lets Start With ARP Poisoning! </b> <br></br> <br></br>ARP(Adress Resolution Protocol) Poisoning is a cyber attack which is carried out over a Local Area Network. The aim of this attack is changing the pairs of IP and MAC address by sending malicious ARP packets.<br></br><br></br><b>Now, lets continue with the steps of ARP Poisoning;</b><br></br><br></br></p>
                                    <Accordion allowToggle>
                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        <b>Step 1</b>
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                We are going to use Kali Linux. Run "ARPSPROOF" in Kali Linux. If it is not installed you can run the following command;

                                                <div class="tf">
                                                    <p class="t">apt install dsniff</p>


                                                </div>




                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        <b>Step 2</b>
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                To run this attack, we need to find victim's IP address and gateway IP. Lets run the command.
                                                <div class="tf">
                                                    <p class="t">arp -a</p>
                                                </div>

                                                <Box className='image' id='image1' width='300px' marginLeft='140px' marginTop='10px'>
                                                    {<Image src={step2_1} alt='' />}

                                                </Box>
                                                <br></br> <br></br>
                                                The output of attacker's machine.
                                                <Box className='image' id='image2' width='300px' marginLeft='140px' marginTop='10px'>
                                                    {<Image src={step2_2} alt='' />}

                                                </Box>

                                            </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        <b>Step 3</b>
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                Now, run this command. If you wonder what are these numbers and eth0, let me explain it.<br></br><br></br>et0 is name of the interface, 10.0.2.8 is the IP address of victim's machine and 10.0.2.1 is the gateway's IP address. This will provide attacker to behave like a router.<br></br><br></br>
                                                <div class="tf">
                                                    <p class="t">arpspoof -i eth0 -t 10.0.2.8 10.0.2.1</p>
                                                </div>
                                                <br></br>
                                                After that, we are going to run the same command again but with switched IPs.<br></br><br></br>
                                                <div class="tf">
                                                    <p class="t">arpspoof -i eth0 -t 10.0.2.1 10.0.2.8</p>
                                                </div>
                                                <br></br>
                                                <Box className='image' id='image3' width='300px' marginLeft='140px' marginTop='10px'>
                                                    {<Image src={step3_1} alt='' />}

                                                </Box>
                                                <br></br><br></br>
                                                Now, we are in the middle!!!
                                            </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        <b>Step 4</b>
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                To prove that we are in the middle, run this command<br></br><br></br>
                                                <div class="tf">
                                                    <p class="t">arp -a</p>
                                                </div>

                                                <Box className='image' id='image4' width='300px' marginLeft='140px' marginTop='10px'>
                                                    {<Image src={step3_2} alt='' />}
                                                </Box>
                                                <br></br>
                                                Lets analyze what happened. MAC address of gateway changed to attackers MAC address. Now, attacker is a part of the flow between victim and server. <br></br>
                                                Now, we came to last.
                                                <div class="tf">
                                                    <p class="t"> echo 1 {'>'} /proc/sys/net/ipv4/ip_forward </p>
                                                </div>

                                                This command provide the Internet connectivity of the victim's machine.
                                                <br></br>
                                                Finally, we became the Man In The Middle and attacker can sniff information going from victim to router using some tools like Wire Shark.
                                                <br></br>
                                                <Box className='image' id='image5' width='300px' marginLeft='140px' marginTop='10px'>
                                                    {<Image src={step3_3} alt='' />}

                                                </Box>

                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </TabPanel>
                                <TabPanel>
                                    <p><b>How to imply Python? </b> <br></br>Now, we are going to write some python codes... <br></br><br></br><br></br></p>
                                    <Accordion allowToggle>
                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        <b>Step 1</b>
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                First of all, we will import some modules and get input.


                                                <Box className='image' id='imageimp' width='300px' marginLeft='140px' marginTop='10px'>
                                                    {<Image src={imp} alt='' />}

                                                </Box>



                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        <b>Step 2</b>
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                In order to properly create our ARP responses, we'll need the victim and router MAC addresses. We can do this by making ARP requests and returning the result...

                                                <br></br> <br></br>

                                                <Box className='image' id='image2' width='500px' marginLeft='20px' marginTop='10px'>
                                                    {<Image src={getmac} alt='' />}

                                                </Box>

                                            </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        <b>Step 3</b>
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                Once our attack is over, we need to re-assign the target's addresses so they know where to send their information properly. If we don't do this than it will be very obvious that something has happened.

                                                <br></br>


                                                <br></br>
                                                <Box className='image' id='image3' width='500px' marginLeft='50px' marginTop='10px'>
                                                    {<Image src={rearp} alt='' />}

                                                </Box>
                                                <br></br><br></br>
                                                In this function, we call our get-mac() function that we created earlier to find the MAC addresses. Once we have those it'll send replies out telling the systems where the other system is. We'll send each reply seven times for good measure. Once we've done that we'll disable IP forwarding for the user.
                                            </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        <b>Step 4</b>
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                This function simply sends a single ARP reply to each of the targets telling them that we are the other target, placing ourselves in between them.<br></br><br></br>


                                                <Box className='image' id='image4' width='500px' marginLeft='20px' marginTop='10px'>
                                                    {<Image src={trick} alt='' />}
                                                </Box>


                                            </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        <b>Step 5</b>
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                Here, we try to get the victim and router MAC addresses, this is in case of failure. We don't want to send packets to one and not the other, so in the case that we can't find one of them, we disable IP forwarding and shut down the script. If we are able to get the MAC address then we can start sending our replies. We do this by making a while loop and sending another set of replies every 1.5 seconds. Once the user gives a keyboard interrupt (Control + C), we call the reARP() function to re-assign the targets and shut the script down.

                                                <br></br>
                                                <Box className='image' id='image3' width='500px' marginLeft='20px' marginTop='10px'>
                                                    {<Image src={mitm} alt='' />}

                                                </Box>
                                                <br></br><br></br>

                                            </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        <b>Step 6</b>
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                Navigate to your script and fire it up! I'll be entering "wlan0" as my desired interface, 10.0.0.7 as the victim IP, and 10.0.0.1 as my router IP.

                                                <br></br>
                                                <Box className='image' id='image3' width='500px' marginLeft='20px' marginTop='10px'>
                                                    {<Image src={step6_1} alt='' />}

                                                </Box>
                                                <br></br>
                                                We can see above that we've begun to send out our replies. Let's open up wireshark and take a look at them!

                                                <br></br>
                                                <Box className='image' id='image3' width='500px' marginLeft='20px' marginTop='10px'>
                                                    {<Image src={step6_2} alt='' />}
                                                </Box>
                                                <br></br><br></br>

                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </TabPanel>

                            </TabPanels>
                        </Tabs>

                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box></>
    );
}