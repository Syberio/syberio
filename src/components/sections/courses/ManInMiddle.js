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
import { useState } from "react";
import suitcase from '../../../components/assets/suitcase.jpg';
import user2 from '../../../components/assets/user2.jpg';
import encry from '../../../components/assets/encry.jpg';
import step3_3 from '../../../components/assets/step3-3.png';
import imp from '../../../components/assets/importing.png';
import getmac from '../../../components/assets/getmac.png';
import rearp from '../../../components/assets/rearp.png';
import trick from '../../../components/assets/trick.png';
import mitm from '../../../components/assets/mitm.png';
import step6_1 from '../../../components/assets/step6-1.png';
import step6_2 from '../../../components/assets/step6-2.png';
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



export default function ManInMiddle() {


    const { onCopy, value, setValue, hasCopied } = useClipboard("");
    const [isAlertVisible2, setIsAlertVisible2] = React.useState(false);
    const [isAlertVisible3, setIsAlertVisible3] = React.useState(false);
    const [isAlertVisible4, setIsAlertVisible4] = React.useState(false);
    const [isAlertVisible5, setIsAlertVisible5] = React.useState(false);
    const [isAlertVisible6, setIsAlertVisible6] = React.useState(false);


    const userButton = document.querySelector('.user-button');
    const userMessage = document.querySelector('.user-input');
    const chatBox = document.querySelector('.chat-box');

    // userButton.addEventListener('click', () => {
    //   const userText = userMessage.value;
    //   if (userText) {
    //     const chatMessage = document.createElement('div');
    //     chatMessage.className = 'chat-message';
    //     chatMessage.innerHTML = `<p class="chat-text">${userText}</p>`;
    //     chatBox.appendChild(chatMessage);
    //     userMessage.value = '';
    //     chatBox.scrollTop = chatBox.scrollHeight;
    //   }
    // });

    const handleClick = event => {
        const neww = document.getElementById("image1");

        if (neww.style.width != '700px') {
            neww.style.width = '700px';
            neww.style.top = '500px';
            neww.style.right = '240px';
            neww.style.position = 'absolute';



        }
        else {
            neww.style.width = '300px';
            neww.style.top = '500px';
            neww.style.right = '240px';
            neww.style.position = 'static';

        }
    }
    const handleClick2 = event => {
        const neww = document.getElementById("image2");

        if (neww.style.width != '700px') {
            neww.style.width = '700px';
            neww.style.top = '500px';
            neww.style.right = '240px';
            neww.style.position = 'absolute';


        }
        else {
            neww.style.width = '300px';
            neww.style.top = '500px';
            neww.style.right = '240px';
            neww.style.position = 'static';

        }
    }
    const handleClick3 = event => {
        const neww = document.getElementById("image3");

        if (neww.style.width != '700px') {
            neww.style.width = '700px';
            neww.style.top = '500px';
            neww.style.right = '240px';
            neww.style.position = 'absolute';


        }
        else {
            neww.style.width = '300px';
            neww.style.top = '500px';
            neww.style.right = '240px';
            neww.style.position = 'static';

        }
    }

    const handleClick4 = event => {
        const neww = document.getElementById("image4");

        if (neww.style.width != '700px') {
            neww.style.width = '700px';
            neww.style.top = '500px';
            neww.style.right = '240px';
            neww.style.position = 'absolute';


        }
        else {
            neww.style.width = '300px';
            neww.style.top = '500px';
            neww.style.right = '240px';
            neww.style.position = 'static';

        }
    }

    const handleClick5 = event => {
        const neww = document.getElementById("image5");

        if (neww.style.width != '700px') {
            neww.style.width = '700px';
            neww.style.top = '500px';
            neww.style.right = '240px';
            neww.style.position = 'absolute';


        }
        else {
            neww.style.width = '300px';
            neww.style.top = '500px';
            neww.style.right = '240px';
            neww.style.position = 'static';

        }
    }


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

    // const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

    // const handleTabPanelClick = (position) => {
    //     setImagePosition(position);
    // };

    const [activeTab, setActiveTab] = useState(0);

    const handleTabPanelClick = (index) => {
        setActiveTab(index);
    };



    const imageStyle = {
        position: "absolute",
        transition: "all 2.1s ease-in-out",
        marginLeft: activeTab === 0 ? 200 : 200,
        marginTop: activeTab === 0 ? 100 : -100,
    };
    const textStyle = {
        position: "absolute",
        transition: "all 0.3s ease-in-out",
        marginLeft: activeTab === 0 ? 2405 : 245,
        marginTop: activeTab === 0 ? 100 : 50,
    };
    const imageStyle2 = {
        position: "absolute",
        transition: "all 2.1s ease-in-out",
        marginLeft: activeTab === 0 ? 100 : 450,

    };
    const imageStyle3 = {

        transition: "all 2.1s ease-in-out",
        marginLeft: activeTab === 0 ? 100 : 350,

    };
    const imageStyle4 = {

        transition: "all 2.1s ease-in-out",
        marginLeft: activeTab === 1 ? 350 : 100,

    };
    const imageStyle5 = {

        transition: "all 2.1s ease-in-out",
        marginLeft: activeTab === 1 ? 350 : 150,

    };
    const imageStyle6 = {

        transition: "all 2.1s ease-in-out",
        marginLeft: activeTab === 1 ? 350 : 50,

    };
    // anime({
    //     targets: '.hackeranimate',
    //     translateY: -130,
    //     scale: 1,
    //     turn: 'left',
    //     position: 'absolute'




    // });

    // if(document.getElementById('tab1').nodeValue == true){

    // }



    
		

        
            function animateImage(event, id) {
              var targetImage = document.getElementById(id); // Get the target image element
              targetImage.classList.add("animate"); // Add the animation class to the target image
            }
        
	

    return (

        <><Box className='bodybox' h='100vh' py={[0, 10, 20]} position='center' marginBottom='400px'>
            <Box marginLeft='150px' marginTop='0px' position='absolute' fontSize='29px' color='rgb(71, 129, 200)'><b>Man In The Middle Attack</b></Box>

            <Tabs variant='soft-rounded' colorScheme='blue' orientation='vertical'>
                <TabList marginLeft='100px' marginTop='90px' orientation='vertical'>
                    <Tab width='400px'>What is Man In The Middle Attack?</Tab>
                    <Tab>Types of Man In The Middle Attacks</Tab>
                    <Tab>Attack Progression</Tab>
                    <Tab>How to Prevent It?</Tab>
                    <Tab>Attack Animation</Tab>
                    <Tab>Background of the Attack</Tab>
                    <Tab>Animation of Diffie Hellman Key Exchange</Tab>
                    <Tab>How to do it?</Tab>
                </TabList>
                <TabPanels marginLeft='100px' marginRight='200px'>
                    <TabPanel marginTop='0px'>
                        <p><b>What is Man In The Middle Attack?</b><br></br><br></br></p><p>A cyberattack known as a man-in-the-middle (MiTM) attack involves the perpetrator discreetly intercepting and relaying messages between two parties who believe they are speaking directly to one another. The attack is a form of eavesdropping in which the conversation is controlled by the attacker. </p>
                        <Box className='image' width='500px' marginLeft='80px' marginTop='10px'>
                            {<Image src={img} alt='' />}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Tabs>
                            <TabList marginTop='0px'>
                                <Tab>Type 1</Tab>
                                <Tab>Type 2</Tab>
                                <Tab>Type 3</Tab>
                                <Tab>Type 4</Tab>
                                <Tab>Type 5</Tab>
                                <Tab>Type 6</Tab>
                                <Tab>Type 7</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <p><b>Internet Protocol Spoofing</b> <br></br> <br></br> IP spoofing, which is similar to identity theft, occurs when hackers change the source IP address of a website or email address. IP spoofing enables hackers to commit crimes, frequently undetected.</p>
                                </TabPanel>
                                <TabPanel>
                                    <p><b>Domain Name System Spoofing</b> <br></br> <br></br>Cybercriminals change domain names in this kind of man-in-the-middle attack to steer traffic to phony websites. Users may believe they are accessing a safe and reliable website, but they instead arrive at a website run by hackers.</p>
                                </TabPanel>
                                <TabPanel>
                                    <p><b>HTTP Spoofing</b> <br></br> <br></br> An HTTPS spoofing attack redirects a browser session to an insecure or HTTP-based website without the knowledge of user. As a result, hackers can monitor every action and steal personal information with this redirection.</p>
                                </TabPanel>
                                <TabPanel>
                                    <p><b>Secure Sockets Layer Hijacking</b> <br></br> <br></br> SSL is a way of protecting your web browsing data from being intercepted by someone else. If someone else were to get access to the SSL connection between your computer and the website you're visiting, they could see everything you're typing and looking at.</p>
                                </TabPanel>
                                <TabPanel>
                                    <p><b>Email Hijacking</b> <br></br> <br></br> This is a type of attack where cybercriminals hijack email accounts from banks and other financial institutions to spy on any transactions that users make. Cybercriminals can also spoof the email address bank and send fake instructions to customers that steer them towards transferring their money to the hackers.</p>
                                </TabPanel>
                                <TabPanel>
                                    <p><b>Wi-Fi Eavesdropping</b> <br></br> <br></br> If you're using public Wi-Fi, be aware of the risks posed by MiTM attacks. These attacks trick people into connecting to malicious networks, which can give hackers access to your personal information.</p>
                                </TabPanel>
                                <TabPanel>
                                    <p><b>Session Hijacking</b> <br></br> <br></br> Hackers can steal your personal data and passwords if they get access to your cookies. This can allow them to access your personal resources (like your bank account) without your permission. In addition to that, they can have unlimited chance to reach user's data and resources. </p>
                                </TabPanel>


                            </TabPanels>
                        </Tabs>
                        <Box className='type' width='500px' marginLeft='100px' marginTop='80px'>
                            {<Image src={types} alt='' />}
                        </Box>

                    </TabPanel>

                    <TabPanel>
                        <Tabs>
                            <TabList marginTop='0px'>
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
                        <Box className='type' width='500px' marginLeft='80px' marginTop='80px'>
                            {<Image src={encry} alt='' />}
                        </Box>
                    </TabPanel>




                    <TabPanel>
                        <Tabs>
                            <TabList marginTop='0px'>
                                <Tab>Method 1</Tab>
                                <Tab>Method 2</Tab>
                                <Tab>Method 3</Tab>
                                <Tab>Method 4</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <p><b>Secure Connections</b> <br></br> <br></br> This is how you can protect yourself against MiTM attacks. You should only visit websites that have a "HTTPS" (secure) sign in the URL bar. This means that the website is protected against cybercriminals who might be trying to steal your information. Also, be careful about using public Wi-Fi connections - they can be easily hacked and your information can be stolen.</p>
                                </TabPanel>
                                <TabPanel>
                                    <p><b>Avoid Phishing Emails</b> <br></br> <br></br> When you get an email, don't just open it right away. Think about who sent it and make sure it's a safe source. Some phishing emails look like they come from a trusted source, like your bank or a financial institution. They might ask you to enter your login information or update your password. Don't do this. Instead, contact the sender and ask them to confirm the email is really from them. If they can't provide proof, don't trust the email and don't open it.</p>
                                </TabPanel>
                                <TabPanel>
                                    <p><b>Endpoint Security</b> <br></br> <br></br>Endpoint security is important in order to prevent malware from being used to attack other computers. Because MiTM attacks use malware, you need to have antivirus and internet security programs to prevent these attacks from happening.</p>
                                </TabPanel>
                                <TabPanel>
                                    <p><b>Virtual Private Network Encryption</b> <br></br> <br></br>A VPN encrypts your internet connection and keeps your passwords, credit card information, and other confidential information safe. It can help you connect to unsecure public Wi-Fi networks and protect you from man-in-the-middle attacks. Even if a hacker manages to access your network, they won't be able to see your confidential information because of the encryption. Your employer should also make sure that all of your employees are using a secure corporate VPN when working from home.</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                        <Box className='image' width='500px' marginLeft='20px' marginTop='10px'>
                            {<Image src={img2} alt='' />}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Tabs variant='soft-rounded' colorScheme='blue'>
                            <TabList marginLeft='330px' marginTop='0px' position='absolute'>
                                <Tab>Step 1</Tab>
                                <Tab>Step 2</Tab>
                                <Tab>Step 3</Tab>

                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Box id='text1'>Original Connection</Box>
                                    <Box position='absolute' marginLeft='185px' marginTop='125px'>Gateway</Box>
                                    <Box position='absolute' marginLeft='625px' marginTop='125px'>User</Box>
                                    <Box id='arrow1' className='arrow-9'></Box>
                                    <Box id='user' boxSize='sm' position='absolute' width='90px' marginLeft='600px' marginTop='30px'>
                                        <Image src={user} alt='' />
                                    </Box>

                                    <Box className='gateway' boxSize='sm' position='absolute' width='150px' marginLeft='140px' marginTop='10px'>
                                        {<Image src={gateway} alt='' />}
                                    </Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box id='textbox' boxShadow='dark-lg' p='2' rounded='md' bg='white'>
                                        Hacker choose a victim to complete Interception Phase which is controling the traffic between user and gateway without alerting the user.
                                    </Box>
                                    <Box id='text1'>Original Connection</Box>
                                    <Box position='absolute' marginLeft='185px' marginTop='125px'>Gateway</Box>
                                    <Box position='absolute' marginLeft='625px' marginTop='125px'>User</Box>
                                    <Box id='arrow1' className='arrow-9'></Box>
                                    <Box id='user'>
                                        <Box boxSize='sm' position='absolute' width='90px' marginLeft='600px' marginTop='30px'>
                                            <Image src={user} alt='' />
                                        </Box>
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='90px' marginLeft='400px' marginTop='250px'>
                                        {<Image id='hacker' className='hackeranimate' src={hacker} alt='' />}
                                    </Box>
                                    <Box className='gateway' boxSize='sm' position='absolute' width='150px' marginLeft='140px' marginTop='10px'>
                                        {<Image src={gateway} alt='' />}
                                    </Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box id='textbox' boxShadow='dark-lg' p='2' rounded='md' bg='white'>
                                        After hacker controls the communication, traffic needs to be decrypted to end the attack successfully.
                                    </Box>
                                    <Box position='absolute' marginLeft='185px' marginTop='125px'>Gateway</Box>
                                    <Box position='absolute' marginLeft='625px' marginTop='125px'>User</Box>
                                    <Box id='redx' boxSize='sm' position='absolute' width='80px' marginLeft='400px' marginTop='79px'>
                                        {<Image src={redx} alt='' />}
                                    </Box>
                                    <Box id='user' boxSize='sm' position='absolute' width='90px' marginLeft='600px' marginTop='30px'>
                                        <Image src={user} alt='' />
                                    </Box>
                                    <Box id='hacker' boxSize='sm' position='absolute' width='90px' marginLeft='400px' marginTop='250px'>
                                        {<Image src={hacker} alt='' />}
                                    </Box>
                                    <Box className='gateway' boxSize='sm' position='absolute' width='150px' marginLeft='140px' marginTop='10px'>
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
                    </TabPanel>
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
                                    Lets analyze the Man in the Middle attack more detailed..
                                    <div className="line"></div>
                                    <br></br><br></br>
                                    We have two friends who want to communicate.
                                    <Box position='absolute' marginLeft="20px" color="blue">
                                        User A
                                    </Box>
                                    <Box position='absolute' marginLeft="430px" color="red">
                                        User B
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='90px' marginLeft='0px' marginTop='30px'>
                                        <Image className='usr' src={user} alt='' />
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='120px' marginLeft='400px' marginTop='20px'>
                                        <Image className='usr' src={user2} alt='' />
                                    </Box>
                                    <br></br><br></br>
                                    <Box marginTop='150px'>
                                        First of all they need to share their public keys to each other since the message will be encrypted according to receiver's public key.
                                    </Box>
                                    <div className="line"></div>
                                    <Box marginTop='30px'>
                                        Now, we assume that Sender has PrivS, PubS and PrivR,PubR. These are the public and private keys of sender and receiver.
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='90px' marginLeft='0px' marginTop='30px'>
                                        <Image className='usr' src={user} alt='' />
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='120px' marginLeft='400px' marginTop='20px'>
                                        <Image className='usr' src={user2} alt='' />
                                    </Box>
                                    <Box position='absolute' className='priv' marginTop='150px'>
                                        Private Key: PrivS
                                    </Box>
                                    <Box position='absolute' className='pub' marginTop='180px'>
                                        Public Key: PubS
                                    </Box>
                                    <Box position='absolute' className='priv' marginLeft='400px' marginTop='150px'>
                                        Private Key: PrivR
                                    </Box>
                                    <Box position='absolute' className='pub' marginLeft='400px' marginTop='180px'>
                                        Public Key: PubR
                                    </Box>

                                    {/* <div className="chat-container">
                                        <div className="chat-bubble bot-chat-bubble">
                                            <p>Hello! How can I help you today?</p>
                                        </div>
                                        <div className="chat-bubble user-chat-bubble">
                                            <p>Sure! I have a question about my order.</p>
                                        </div>
                                        
                                        
                                    </div>
                                    <input type="text" className="chat-input" placeholder="Type your message here..."/>
                                        <Button className="send-button">Send</Button> */}

                                </TabPanel>
                                <TabPanel>
                                    <Box>
                                        Now, we are in the second step. Lets talk about what will happen..
                                    </Box>
                                    <div className="line"></div>
                                    <Box marginTop='30px'>
                                        As you remember, we have two friends trying to communicate..
                                    </Box>
                                    <Box marginTop='30px'>
                                        We need seesion key to trust each other. A session key is a unique encryption and decryption key that is generated for a specific communication session between two entities.
                                    </Box>
                                    <Box marginTop='30px'>
                                        Lets share the key!
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='90px' marginLeft='0px' marginTop='30px'>
                                        <Image className='usr' src={user} alt='' />
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='120px' marginLeft='400px' marginTop='20px'>
                                        <Image className='usr' src={user2} alt='' />
                                    </Box>
                                    <Box position='absolute' className='pub' marginTop='180px'>
                                        Public Key: PubS
                                    </Box>
                                    <Box position='absolute' className='pub' marginTop='180px' marginLeft='400px'>
                                        Public Key: PubR
                                    </Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box marginTop='30px'>
                                        First of all User B needs User A's public key. However, attacker wants to intercept the communication...
                                    </Box>
                                    <Box marginTop='60px' marginLeft="120px" position="absolute" color="red">
                                        PubS
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='90px' marginLeft='0px' marginTop='30px'>
                                        <Image className='usr' src={user} alt='' />
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='120px' marginLeft='400px' marginTop='20px'>
                                        <Image className='usr' src={user2} alt='' />
                                    </Box>
                                    <div class="arrow-10"></div>
                                    <Image id='hacker' className='hackeranimate' src={hacker} alt='' style={imageStyle} />
                                    {isAlertVisible6 && <Box boxSize='sm' position='absolute' width='120px' marginLeft='245px' marginTop='200px' style={textStyle}>
                                        <b>PubH</b>
                                    </Box>}
                                    <Image id="bubble" src={bubble} alt='' width="150px" marginTop="20px" position="absolute" />
                                    <Box id="speech" width="120px" marginTop="60px" marginLeft="10px" position="absolute" fontSize="15px">I will share my public key with my friend..</Box>
                                    <Image id="bubble" src={bubble} alt='' width="150px" marginTop="80px" position="absolute" marginLeft="200px" />
                                    <Box id="speech" width="130px" marginTop="120px" marginLeft="210px" position="absolute" fontSize="15px">I will intercept the communication by getting the public key of sender..</Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box marginTop='30px'>
                                        After hacker intercepts the flow of public key, hacker send his public key to User B.
                                    </Box>
                                    <Box marginTop='60px' marginLeft="350px" position="absolute">
                                        <b>PubH</b>
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='90px' marginLeft='0px' marginTop='30px'>
                                        <Image className='usr' src={user} alt='' />
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='120px' marginLeft='400px' marginTop='20px'>
                                        <Image className='usr' src={user2} alt='' />
                                    </Box>
                                    <Box marginLeft="230px">
                                        <div class="arrow-10"></div>
                                    </Box>

                                    <Image id='hacker' className='hackeranimate' src={hacker} alt='' marginLeft="200px" marginTop="-100px" />
                                    <Image id="bubble" src={bubble} alt='' width="150px" marginTop="20px" position="absolute" marginLeft="200px" />
                                    <Box id="speech" width="130px" marginTop="60px" marginLeft="210px" position="absolute" fontSize="14px">I will send my public key to receiver like I am the original sender..</Box>
                                    <Image id="bubble" src={bubble} alt='' width="150px" marginTop="10px" position="absolute" marginLeft="450px" />
                                    <Box id="speech" width="130px" marginTop="50px" marginLeft="460px" position="absolute" fontSize="14px">Okay! I got the public key of User A..</Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box marginTop='30px'>
                                        In this step, User B creates a session key and Encrypts with hackers public key because User B thinks that it belongs to User A.
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='90px' marginLeft='0px' marginTop='30px'>
                                        <Image className='usr' src={user} alt='' />
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='120px' marginLeft='400px' marginTop='20px'>
                                        <Image className='usr' src={user2} alt='' />
                                    </Box>
                                    <Box marginTop='140px' marginLeft="410px" position="absolute">
                                        <b>Ks: Session Key</b>
                                    </Box>
                                    <Box marginTop='170px' marginLeft="440px" position="absolute" color="red">
                                        PubR
                                    </Box>
                                    <Box marginLeft="-200px">
                                        <div class="arrow-3"></div>
                                    </Box>
                                    <Box marginTop='210px' marginLeft="390px" position="absolute" >
                                        E(PubH,Ks)
                                    </Box>
                                    <Image id='hacker' className='hackeranimate' src={hacker} alt='' marginLeft="180px" marginTop="200px" position="absolute" />
                                    <Image id="bubble" src={bubble} alt='' width="170px" marginTop="100px" position="absolute" marginLeft="550px" />
                                    <Box id="speech" width="150px" marginTop="150px" marginLeft="560px" position="absolute" fontSize="14px">I will create a session key and encrypt it with public key i got then send it to User A..</Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box marginTop='30px'>
                                        Now, hacker can get the session key with decrypting encrypted session key with his own private key.
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='90px' marginLeft='0px' marginTop='30px'>
                                        <Image className='usr' src={user} alt='' />
                                    </Box>

                                    <Box boxSize='sm' position='absolute' width='120px' marginLeft='400px' marginTop='20px'>
                                        <Image className='usr' src={user2} alt='' />
                                    </Box>
                                    <Image id='hacker' className='hackeranimate' src={hacker} alt='' marginLeft="180px" marginTop="200px" position="absolute" />
                                    <Box marginTop='350px' marginLeft="130px" position="absolute" >
                                        <b>Ks = D(PrivH,(E(PubH,Ks))</b>
                                    </Box>
                                    <Image id="bubble" src={bubble} alt='' width="150px" marginTop="240px" position="absolute" marginLeft="350px" />
                                    <Box id="speech" width="130px" marginTop="280px" marginLeft="360px" position="absolute" fontSize="14px">I will decrypt it using my private key, i can get the session key..</Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box marginTop='30px'>
                                        Finally, hacker sends encrypted session key to User A with his public key and in conlusion, they will trust each other.
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='90px' marginLeft='0px' marginTop='30px'>
                                        <Image className='usr' src={user} alt='' />
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='120px' marginLeft='400px' marginTop='20px'>
                                        <Image className='usr' src={user2} alt='' />
                                    </Box>

                                    <Box marginLeft="-200px">
                                        <div class="arrow-4"></div>

                                    </Box>
                                    <Box marginTop='200px' marginLeft="0px" position="absolute" >
                                        <b>E(PubS,Ks)</b>
                                    </Box>
                                    <Image id='hacker' className='hackeranimate' src={hacker} alt='' marginLeft="180px" marginTop="200px" position="absolute" />
                                    <Box marginTop='420px' marginLeft="-50px" position="absolute" fontStyle="italic">
                                        <b>Now User A, User B and Hacker shares the session key. User A and User B trusts each other</b>
                                    </Box>
                                    <Image id="bubble" src={bubble} alt='' width="180px" marginTop="240px" position="absolute" marginLeft="350px" />
                                    <Box id="speech" width="150px" marginTop="290px" marginLeft="360px" position="absolute" fontSize="14px">I will send the session key to User A. User A will think that it is coming from User B instead of me!</Box>
                                    <Image id="bubble" src={bubble} alt='' width="150px" marginTop="40px" position="absolute" marginLeft="150px" />
                                    <Box id="speech" width="130px" marginTop="80px" marginLeft="160px" position="absolute" fontSize="14px">I decrypted it and get the session key from User B. We trust each other..</Box>
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
                                    <Box boxSize='sm' position='absolute' width='90px' marginLeft='0px' marginTop='30px'>
                                        <Image className='usr' src={user} alt='' />
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='120px' marginLeft='400px' marginTop='20px'>
                                        <Image className='usr' src={user2} alt='' />
                                    </Box>

                                    {isAlertVisible4 && <Box marginLeft="300px" id='arrow' className='arrow-1'></Box>}
                                    {isAlertVisible3 && <Box marginLeft="100px" id='arrow' className='arrow-2'></Box>}
                                    <Box marginLeft="270px" id='arrow' className='arrow-3'></Box>
                                    {isAlertVisible2 && <Box marginLeft="60px" id='arrow' className='arrow-4'></Box>}
                                    <Image id='hacker' className='hackeranimate' src={hacker} alt='' marginLeft="180px" marginTop="250px" position="absolute" />
                                    <Box marginLeft='100px' marginTop='480px' fontStyle='italic' position="absolute">
                                        <b>Hacker controls the communication</b>
                                    </Box>
                                    <div id="typedtext"></div>
                                    <Image id="bubble" src={bubble} alt='' width="180px" marginTop="300px" position="absolute" marginLeft="350px" />
                                    <Box id="speech" width="150px" marginTop="350px" marginLeft="360px" position="absolute" fontSize="13px">Now, I have two opportunites. I have to decide between reading messages or modifying them after i read.</Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box marginTop='0px' marginLeft="-70px" position="absolute">
                                        We know that there are two options. Now, we are going to implement the <b>Only Reading Data</b>.
                                    </Box>
                                    <Box marginTop='50px' marginLeft="90px" position="absolute">
                                        C = EC(M,Ks)
                                    </Box>
                                    <Image id="bubble" src={bubble} alt='' width="140px" marginTop="50px" position="absolute" marginLeft="180px" />
                                    <Box id="speech" width="125px" marginTop="88px" marginLeft="190px" position="absolute" fontSize="12px">I will send a message to User B. To do that, I will encrypt message with session key.</Box>
                                    <Box boxSize='sm' position='absolute' width='90px' marginLeft='0px' marginTop='30px'>
                                        <Image className='usr' src={user} alt='' />
                                    </Box>

                                    <Box boxSize='sm' position='absolute' width='120px' marginLeft='400px' marginTop='20px'>
                                        <Image className='usr' src={user2} alt='' />
                                    </Box>
                                    <Box marginTop='50px' marginLeft="550px" position="absolute">
                                        M = DC(C,Ks)
                                    </Box>
                                    <Image id="bubble" src={bubble} alt='' width="140px" marginTop="280px" position="absolute" marginLeft="350px" />
                                    <Box id="speech" width="125px" marginTop="318px" marginLeft="360px" position="absolute" fontSize="11px">I will decrypt in and read the content of the message, then send it to User B without modification.</Box>
                                    <Box marginLeft='400px'>
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
                                    {isAlertVisible5 && <Box marginLeft='800px'>
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
                                    <Box marginTop='440px' marginLeft="-20px" position="absolute" color="gray">
                                        EC: Encryption
                                        <br></br>
                                        M: Message
                                        <br></br>
                                        Ks: Session Key
                                        <br></br>
                                        C: Cipher Text
                                        <br></br>
                                    </Box>
                                    <Image id='hacker' className='hackeranimate' src={hacker} alt='' marginLeft="180px" marginTop="250px" />
                                    <Box marginTop='10px' marginLeft="200px" position="absolute">
                                        M = DC(C,Ks)
                                    </Box>
                                    <Box marginTop='30px' marginLeft="-40px" position="absolute">
                                        <b>Reads the message after decryption. Then sends it to the receiver without modification.</b>
                                    </Box>
                                    <Box marginTop='200px' marginLeft="-40px" position="absolute">
                                        This is the example of <b>Breach of Confidentiality</b>. <br></br>Lets remember confidentiality breaches. <br></br>Confidentiality breaches refer to unauthorised access, use or disclosure of confidential information.
                                    </Box>

                                </TabPanel>
                                <TabPanel>
                                    <Box marginTop='0px' marginLeft="-70px" position="absolute">
                                        Lets talk about the second option. Now, we are going to implement the <b>Modifying the Message</b>.
                                    </Box>
                                    <Box marginTop='50px' marginLeft="90px" position="absolute">
                                        C = EC(M,Ks)
                                    </Box>
                                    <Image id="bubble" src={bubble} alt='' width="140px" marginTop="50px" position="absolute" marginLeft="180px" />
                                    <Box id="speech" width="125px" marginTop="88px" marginLeft="190px" position="absolute" fontSize="12px">I will send a message to User B. To do that, I will encrypt message with session key.</Box>
                                    <Box boxSize='sm' position='absolute' width='90px' marginLeft='0px' marginTop='30px'>
                                        <Image className='usr' src={user} alt='' />
                                    </Box>

                                    <Box boxSize='sm' position='absolute' width='120px' marginLeft='400px' marginTop='20px'>
                                        <Image className='usr' src={user2} alt='' />
                                    </Box>
                                    <Box marginTop='50px' marginLeft="550px" position="absolute">
                                        M^ = DC(C^,Ks)
                                    </Box>
                                    <Image id="bubble" src={bubble} alt='' width="140px" marginTop="280px" position="absolute" marginLeft="350px" />
                                    <Box id="speech" width="125px" marginTop="318px" marginLeft="360px" position="absolute" fontSize="11px">I will decrypt in and read the content of the message, then create or modify the existing message.</Box>
                                    <Box marginLeft='400px'>
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
                                    {isAlertVisible5 && <Box marginLeft='800px'>
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
                                    <Box marginTop='500px' marginLeft="-20px" position="absolute" color="gray">
                                        EC: Encryption
                                        <br></br>
                                        M: Message
                                        <br></br>
                                        Ks: Session Key
                                        <br></br>
                                        C: Cipher Text
                                        <br></br>
                                    </Box>
                                    <Image id='hacker' className='hackeranimate' src={hacker} alt='' marginLeft="180px" marginTop="250px" />
                                    <Box marginTop='10px' marginLeft="200px" position="absolute">
                                        M = DC(C,Ks)
                                    </Box>
                                    <Box marginTop='30px' marginLeft="200px" position="absolute">
                                        New Message is M^
                                    </Box>
                                    <Box marginTop='50px' marginLeft="200px" position="absolute">
                                        C^ = EC(M^,Ks)
                                    </Box>
                                    <Box marginTop='90px' marginLeft="-40px" position="absolute">
                                        <b>Modify the message after decryption. Then sends it to the receiver with modification.</b>
                                    </Box>
                                    <Box marginTop='260px' marginLeft="-40px" position="absolute">
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
                                    <Box marginTop='10px' position="absolute">
                                        In this scenario, Person A wants to share some documents with Person B.
                                    </Box>
                                    <Image src={usera} alt='' marginLeft="-80px" marginTop="50px" width="200px" position="absolute" zIndex="-1" />
                                    <Image src={userb} alt='' marginLeft="480px" marginTop="50px" width="200px" position="absolute" />
                                    <Image src={suitcase} alt='' marginLeft="50px" marginTop="50px" width="200px" />
                                </TabPanel>
                                <TabPanel>
                                    <Box marginTop='10px' position="absolute">
                                        Now, Person A will lock the case then give it to Person B.
                                    </Box>
                                    <Image src={usera} alt='' marginLeft="-80px" marginTop="50px" width="200px" position="absolute" zIndex="-1" />
                                    <Image src={userb} alt='' marginLeft="480px" marginTop="50px" width="200px" position="absolute" zIndex="-1" />
                                    <Image id='bag' src={suitcase} alt='' marginLeft="50px" marginTop="50px" width="200px"/>
                                    {/* <Image src={lock1} alt='' marginLeft="130px" marginTop="20px" width="50px" style={imageStyle2} /> */}
                                    <Box marginLeft="150px" marginTop="90px">
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
                                    <Box marginTop='10px' position="absolute">
                                        Then, Person B will lock the case then give it to Person A.
                                    </Box>
                                    <Image src={usera} alt='' marginLeft="-80px" marginTop="50px" width="200px" position="absolute" zIndex="-1" />
                                    <Image src={userb} alt='' marginLeft="480px" marginTop="50px" width="200px" position="absolute" zIndex="-1" />
                                    <Image id='bag2' src={suitcase} alt='' marginLeft="330px" marginTop="50px" width="200px" />
                                    {/* <Image src={lock1} alt='' marginLeft="400px" marginTop="20px" width="50px" position="absolute" style={imageStyle4} />
                                    <Image src={lock2} alt='' marginLeft="450px" marginTop="10px" width="70px" style={imageStyle5} /> */}
                                    <Box marginTop="100px">
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
                                    <Box marginLeft="300px">
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
                                    <Box marginTop='10px' position="absolute">
                                        In this step, Person A will unlock its lock and send back to Person B.
                                    </Box>
                                    <Image src={usera} alt='' marginLeft="-80px" marginTop="50px" width="200px" position="absolute" zIndex="-1" />
                                    <Image src={userb} alt='' marginLeft="480px" marginTop="50px" width="200px" position="absolute" zIndex="-1" />
                                    <Image id='bag' src={suitcase} alt='' marginLeft="50px" marginTop="50px" width="200px" />

                                    {/* <Image src={lock2} alt='' marginLeft="130px" marginTop="10px" width="70px" style={imageStyle2} /> */}
                                    <Box marginTop="80px">
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
                                    <Box marginLeft="300px">
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
                                    <Image src={usera} alt='' marginLeft="-80px" marginTop="50px" width="200px" position="absolute" zIndex="-1" />
                                    <Image src={userb} alt='' marginLeft="480px" marginTop="50px" width="200px" position="absolute" zIndex="-1" />
                                    <Image src={suitcase} alt='' marginLeft="330px" marginTop="50px" width="200px" style={imageStyle3} />
                                    <Box marginLeft="300px" marginTop="80px">
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
                                                    {<Image src={step2_1} alt='' onClick={handleClick} />}

                                                </Box>
                                                <br></br> <br></br>
                                                The output of attacker's machine.
                                                <Box className='image' id='image2' width='300px' marginLeft='140px' marginTop='10px'>
                                                    {<Image src={step2_2} alt='' onClick={handleClick2} />}

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
                                                    {<Image src={step3_1} alt='' onClick={handleClick3} />}

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
                                                    {<Image src={step3_2} alt='' onClick={handleClick4} />}
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
                                                    {<Image src={step3_3} alt='' onClick={handleClick5} />}

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
                                                    {<Image src={imp} alt='' onClick={handleClick} />}

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
                                                    {<Image src={getmac} alt='' onClick={handleClick2} />}

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
                                                    {<Image src={rearp} alt='' onClick={handleClick3} />}

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
                                                    {<Image src={trick} alt='' onClick={handleClick4} />}
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
                                                    {<Image src={mitm} alt='' onClick={handleClick3} />}

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
                                                    {<Image src={step6_1} alt='' onClick={handleClick3} />}

                                                </Box>
                                                <br></br>
                                                We can see above that we've begun to send out our replies. Let's open up wireshark and take a look at them!

                                                <br></br>
                                                <Box className='image' id='image3' width='500px' marginLeft='20px' marginTop='10px'>
                                                    {<Image src={step6_2} alt='' onClick={handleClick3} />}
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
