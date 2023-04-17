import React from 'react';
import { CardBody, useMediaQuery } from '@chakra-ui/react'
import user from '../../components/assets/user.png';
import hacker from '../../components/assets/hackericon.png';
import gateway from '../../components/assets/gatewayicon.png';
import step2_1 from '../../components/assets/step2-1.png';
import step2_2 from '../../components/assets/step2-2.png';
import step3_1 from '../../components/assets/step3-1.png';
import step3_2 from '../../components/assets/step3-2.png';
import types from '../../components/assets/types.jpg';
import img from '../../components/assets/Data_security_24.jpg';
import img2 from '../../components/assets/Data_security_28.jpg';
import encry from '../../components/assets/encry.jpg';
import step3_3 from '../../components/assets/step3-3.png';
import imp from '../../components/assets/importing.png';
import getmac from '../../components/assets/getmac.png';
import rearp from '../../components/assets/rearp.png';
import trick from '../../components/assets/trick.png';
import mitm from '../../components/assets/mitm.png';
import step6_1 from '../../components/assets/step6-1.png';
import step6_2 from '../../components/assets/step6-2.png';
import dwayarrow from '../../components/assets/twowayarrow.png';
import redx from '../../components/assets/reddx.png';
import '../../utils/ManInMiddle.css';
import anime from 'animejs/lib/anime.es.js';
import Footer from './Footer';
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



function ManInMiddle() {


    const { onCopy, value, setValue, hasCopied } = useClipboard("");
    const [isAlertVisible2, setIsAlertVisible2] = React.useState(false);
    const [isAlertVisible3, setIsAlertVisible3] = React.useState(false);
    const [isAlertVisible4, setIsAlertVisible4] = React.useState(false);

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

    // anime({
    //     targets: '.image',
    //     translateX: -250,
    //     scale: 2,
    //     turn: 'left',
    //     position: 'absolute'
    // });

    // if(document.getElementById('tab1').nodeValue == true){

    // }




    

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
                            <TabList marginTop='0px'>
                                <Tab>Step 1</Tab>
                                <Tab>Step 2</Tab>

                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <Box boxSize='sm' position='absolute' width='90px' marginLeft='0px' marginTop='30px'>
                                        <Image className='usr' src={user} alt='' />
                                    </Box>
                                    <br></br><br></br>
                                    <div class="typewriter">
                                        <h1>t.</h1>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                <div id="typedtext"></div>
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

export default ManInMiddle;