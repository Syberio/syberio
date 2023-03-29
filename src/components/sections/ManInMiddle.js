import React from 'react';
import { useMediaQuery } from '@chakra-ui/react'
import user from '../../components/assets/user.png';
import hacker from '../../components/assets/hackericon.png';
import gateway from '../../components/assets/gatewayicon.png';
import dwayarrow from '../../components/assets/twowayarrow.png';
import redx from '../../components/assets/reddx.png';
import '../../utils/ManInMiddle.css';
import Footer from './Footer';
import { PhoneIcon, AddIcon, WarningIcon, ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import {
    ChakraProvider,
    Tabs, TabList, TabPanels, Tab, TabPanel,

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
    Container
} from '@chakra-ui/react';



function ManInMiddle() {



    const [isAlertVisible2, setIsAlertVisible2] = React.useState(false);
    const [isAlertVisible3, setIsAlertVisible3] = React.useState(false);
    const [isAlertVisible4, setIsAlertVisible4] = React.useState(false);



    setTimeout(() => {
        setIsAlertVisible2(true);
    }, 3000);
    setTimeout(() => {
        setIsAlertVisible3(true);
    }, 6000);
    setTimeout(() => {
        setIsAlertVisible4(true);
    }, 9000);



    return (

        <><Box className='bodybox' h='100vh' py={[0, 10, 20]} position='center'>
            <Box marginLeft='150px' marginTop='150px' position='absolute' fontSize='29px' color='rgb(71, 129, 200)'><b>Man In The Middle Attack</b></Box>

            <Tabs variant='soft-rounded' colorScheme='blue' orientation='vertical'>
                <TabList marginLeft='100px' marginTop='300px' orientation='vertical'>
                    <Tab width='400px'>What is Man In The Middle Attack?</Tab>
                    <Tab>Types of Man In The Middle Attacks</Tab>
                    <Tab>Attack Progression</Tab>
                    <Tab>How to Prevent It?</Tab>
                    <Tab>Attack Animation</Tab>
                </TabList>
                <TabPanels marginLeft='100px' marginRight='200px'>
                    <TabPanel marginTop='280px'>
                        <p><b>What is Man In The Middle Attack?</b><br></br><br></br></p><p>A cyberattack known as a man-in-the-middle (MiTM) attack involves the perpetrator discreetly intercepting and relaying messages between two parties who believe they are speaking directly to one another. The attack is a form of eavesdropping in which the conversation is controlled by the attacker. </p>
                    </TabPanel>
                    <TabPanel>
                        <Tabs>
                            <TabList marginTop='250px'>
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

                    </TabPanel>

                    <TabPanel>
                        <Tabs>
                            <TabList marginTop='250px'>
                                <Tab>Interception</Tab>
                                <Tab>Decryption</Tab>

                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <p><b>Interception</b> <br></br> <br></br>The first step is to intercept user traffic before it goes to its intended destination. This can be done by making public WiFi hotspots available that are unprotected, or by attacking the user's computer directly. Once the victim connects to these hotspots, the attacker can see everything that they are doing online.

                                    </p>
                                </TabPanel>
                                <TabPanel>
                                    <p><b>Decryption</b> <br></br> <br></br> After interception, any two-way SSL traffic needs to be decrypted without alerting the user or application. A number of methods exist to achieve this. HTTPS Spoofing and SSL Hijacking are the most common decryption phase action. </p>
                                </TabPanel>

                            </TabPanels>
                        </Tabs>

                    </TabPanel>




                    <TabPanel>
                        <Tabs>
                            <TabList marginTop='250px'>
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

                    </TabPanel>
                    <TabPanel>
                        <Tabs variant='soft-rounded' colorScheme='blue'>
                            <TabList marginLeft='330px' marginTop='200px' position='absolute'>
                                <Tab>Step 1</Tab>
                                <Tab>Step 2</Tab>
                                <Tab>Step 3</Tab>

                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Box id='text1'>Original Connection</Box>
                                    <Box position='absolute' marginLeft='185px' marginTop='325px'>Gateway</Box>
                                    <Box position='absolute' marginLeft='625px' marginTop='325px'>User</Box>
                                    <Box id='arrow1' className='arrow-9'></Box>
                                    <Box id='user' boxSize='sm' position='absolute' width='90px' marginLeft='600px' marginTop='230px'>
                                        <Image src={user} alt='' />
                                    </Box>

                                    <Box className='gateway' boxSize='sm' position='absolute' width='150px' marginLeft='140px' marginTop='210px'>
                                        {<Image src={gateway} alt='' />}
                                    </Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box id='textbox' boxShadow='dark-lg' p='2' rounded='md' bg='white'>
                                        Hacker choose a victim to complete Interception Phase which is controling the traffic between user and gateway without alerting the user.
                                    </Box>
                                    <Box id='text1'>Original Connection</Box>
                                    <Box position='absolute' marginLeft='185px' marginTop='325px'>Gateway</Box>
                                    <Box position='absolute' marginLeft='625px' marginTop='325px'>User</Box>
                                    <Box id='arrow1' className='arrow-9'></Box>
                                    <Box id='user'>
                                        <Box boxSize='sm' position='absolute' width='90px' marginLeft='600px' marginTop='230px'>
                                            <Image src={user} alt='' />
                                        </Box>
                                    </Box>
                                    <Box boxSize='sm' position='absolute' width='90px' marginLeft='400px' marginTop='450px'>
                                        {<Image id='hacker' className='hackeranimate' src={hacker} alt='' />}
                                    </Box>
                                    <Box className='gateway' boxSize='sm' position='absolute' width='150px' marginLeft='140px' marginTop='210px'>
                                        {<Image src={gateway} alt='' />}
                                    </Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box id='textbox' boxShadow='dark-lg' p='2' rounded='md' bg='white'>
                                        After hacker controls the communication, traffic needs to be decrypted to end the attack successfully.
                                    </Box>
                                    <Box position='absolute' marginLeft='185px' marginTop='325px'>Gateway</Box>
                                    <Box position='absolute' marginLeft='625px' marginTop='325px'>User</Box>
                                    <Box id='redx' boxSize='sm' position='absolute' width='80px' marginLeft='400px' marginTop='279px'>
                                        {<Image src={redx} alt='' />}
                                    </Box>
                                    <Box id='user' boxSize='sm' position='absolute' width='90px' marginLeft='600px' marginTop='230px'>
                                        <Image src={user} alt='' />
                                    </Box>
                                    <Box id='hacker' boxSize='sm' position='absolute' width='90px' marginLeft='400px' marginTop='450px'>
                                        {<Image src={hacker} alt='' />}
                                    </Box>
                                    <Box className='gateway' boxSize='sm' position='absolute' width='150px' marginLeft='140px' marginTop='210px'>
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

                </TabPanels>
            </Tabs>

        </Box></>
    );
}

export default ManInMiddle;