import React from 'react';
import user from './user.png';
import hacker from './hackericon.png';
import gateway from './gatewayicon.jpeg';
import dwayarrow from './twowayarrow.png';
import redx from './reddx.png';
import './App.css';
import { PhoneIcon, AddIcon, WarningIcon, ArrowForwardIcon, ArrowBackIcon} from '@chakra-ui/icons'
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
  Button
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';



function App() {
  
  const [ imageClicked, setImageClicked ] = React.useState(false);
  const [ image2Clicked, setImage2Clicked ] = React.useState(false);
  const [ image3Clicked, setImage3Clicked ] = React.useState(false);

  
  const [ isAlertVisible2, setIsAlertVisible2 ] = React.useState(false);
  const [ isAlertVisible3, setIsAlertVisible3 ] = React.useState(false);
  const [ isAlertVisible4, setIsAlertVisible4 ] = React.useState(false);

  
  setTimeout(() => {
    setIsAlertVisible2(true);
  }, 3000);
  setTimeout(() => {
    setIsAlertVisible3(true);
  }, 6000);
  setTimeout(() => {
    setIsAlertVisible4(true);
  }, 9000);

  const onClickHandler3 = (order) => {
    setImage3Clicked((prevState) => ({
      ...prevState,
      [order]: !prevState[order]
    }));
  };
  const onClickHandler = (order) => {
    setImageClicked((prevState) => ({
      ...prevState,
      [order]: !prevState[order]
    }));
  };
  const onClickHandler2 = (order) => {
    setImage2Clicked((prevState) => ({
      ...prevState,
      [order]: !prevState[order]
    }));
  };
  
  return (
    <ChakraProvider theme={theme}>
      
      
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
                <p><b>What is Man In The Middle Attack?</b><br></br><br></br></p><p>A man-in-the-middle (MiTM) attack is a type of cyber attack in which the attacker secretly intercepts and relays messages between two parties who believe they are communicating directly with each other. The attack is a type of eavesdropping in which the attacker intercepts and then controls the entire conversation. </p>
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
                    <p><b>Internet Protocol Spoofing</b> <br></br> <br></br> Like identity theft, IP spoofing takes place when cybercriminals alter the source IP address of a website, email address or device for the purpose of masking it.</p>
                  </TabPanel>
                  <TabPanel>
                    <p><b>Domain Name System Spoofing</b> <br></br> <br></br> This is a type of man-in-the-middle attack where cybercriminals alter domain names to redirect traffic to fake websites. Users might think that they are reaching a secure and trusted website, but instead, they land on a website operated by cybercriminals.</p>
                  </TabPanel>
                  <TabPanel>
                    <p><b>HTTP Spoofing</b> <br></br> <br></br> During an HTTPS spoofing attack, a browser session is redirected to an unsecured or HTTP-based website without the user's knowledge or consent. Cybercriminals can monitor user interactions and steal shared personal information through this redirection.</p>
                  </TabPanel>
                  <TabPanel>
                    <p><b>Secure Sockets Layer Hijacking</b> <br></br> <br></br> SSL is a protocol that establishes an encrypted connection between a browser and the web server. During SSL hijacking, a cybercriminal might use another computer and a secure server to intercept all information traveling between the server and the end user's computer.</p>
                  </TabPanel>
                  <TabPanel>
                    <p><b>Email Hijacking</b> <br></br> <br></br> This is a type of MiTM attack where cybercriminals gain control of email accounts of banks and other financial institutions to monitor any transactions that users conduct. Cybercriminals may even spoof the bank's email address and send instructions to customers that lead them to unknowingly transfer their money to the cybercriminals.</p>
                  </TabPanel>
                  <TabPanel>
                    <p><b>Wi-Fi Eavesdropping</b> <br></br> <br></br> This MiTM attack is one of the many risk factors posed by public Wi-Fi. During this attack, public Wi-Fi users get tricked into connecting to malicious Wi-Fi networks and hotspots. Cybercriminals accomplish this by setting up Wi-Fi connections with names that resemble nearby businesses.</p>
                  </TabPanel>
                  <TabPanel>
                    <p><b>Session Hijacking</b> <br></br> <br></br> Also known as stealing browser cookies, this malicious practice takes place when cybercriminals steal personal data and passwords stored inside the cookies of a user's browsing session. Sometimes, cybercriminals can gain endless access to users' saved resources. For example, they might steal users' confidential data and identities, purchase items or steal money from their bank accounts.</p>
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
                    <p><b>Interception</b> <br></br> <br></br>The first step intercepts user traffic through the attacker’s network before it reaches its intended destination.

The most common (and simplest) way of doing this is a passive attack in which an attacker makes free, malicious WiFi hotspots available to the public. Typically named in a way that corresponds to their location, they aren’t password protected. Once a victim connects to such a hotspot, the attacker gains full visibility to any online data exchange.

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
                    <p><b>Secure Connections</b> <br></br> <br></br> This is the first line of defense against MiTM attacks. Users should only visit websites that show "HTTPS" in the URL bar, instead of just "HTTP". Most browsers display a padlock sign before the URL, which indicates a secure website. Besides ensuring website security, it is also important to avoid using unsecured public Wi-Fi connections, as they are susceptible to attacks and interception by cybercriminals.</p>
                  </TabPanel>
                  <TabPanel>
                    <p><b>Avoid Phishing Emails</b> <br></br> <br></br> Cybercriminals purposely craft phishing emails to trick users into opening them. Users should think twice before opening emails coming from unverified or unknown sources. Phishing emails often look like they come from a legit source, such as a bank account or a financial institution. These emails might ask users to click on a link to enter their login credentials or update passwords. Clicking on these links should be avoided, as they might redirect a user to a fake website or download malicious software on their device.</p>
                  </TabPanel>
                  <TabPanel>
                    <p><b>Endpoint Security</b> <br></br> <br></br>Implementing comprehensive endpoint security is paramount when trying to prevent the spread of malware and other cyber attacks. Because MiTM attacks use malware for execution, it is important to have antimalware and internet security products in place.</p>
                  </TabPanel>
                  <TabPanel>
                    <p><b>Virtual Private Network Encryption</b> <br></br> <br></br>A VPN encrypts internet connections and online data transfers, such as passwords and credit card information and should be used when connecting to insecure public Wi-Fi networks and hotspots. A VPN can ambush a potential man-in-the-middle attack. Even if a cybercriminal manages to access a network, they will not be successful in deciphering the messages or accessing resources due to the encryption provided by the VPN. Organizations should also ensure their employees are logging into the company through a secure corporate VPN, especially if they are working remotely.</p>
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
                { <Image src={gateway} alt='' />}
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
                {<Image id='hacker' className='hackeranimate' src={hacker} alt=''/>}
              </Box>
              <Box className='gateway' boxSize='sm' position='absolute' width='150px' marginLeft='140px' marginTop='210px'>
                { <Image src={gateway} alt='' />}
              </Box>
    </TabPanel>
    <TabPanel>
    <Box id='textbox' boxShadow='dark-lg' p='2' rounded='md' bg='white'>
    After hacker controls the communication, traffic needs to be decrypted to end the attack successfully. 
  </Box>
    <Box position='absolute' marginLeft='185px' marginTop='325px'>Gateway</Box>
      <Box position='absolute' marginLeft='625px' marginTop='325px'>User</Box>
      <Box id='redx' boxSize='sm' position='absolute' width='80px' marginLeft='400px' marginTop='279px'>
                { <Image src={redx} alt='' />}
              </Box>
    <Box id='user' boxSize='sm' position='absolute' width='90px' marginLeft='600px' marginTop='230px'>
                <Image src={user} alt='' />
              </Box>
              <Box id='hacker' boxSize='sm' position='absolute' width='90px' marginLeft='400px' marginTop='450px'>
                {<Image src={hacker} alt=''/>}
              </Box>
              <Box className='gateway' boxSize='sm' position='absolute' width='150px' marginLeft='140px' marginTop='210px'>
                { <Image src={gateway} alt='' />}
              </Box>
    <Box id='arrow1' className='arrow-8'></Box>
    {isAlertVisible4 && <Box id='arrow' className='arrow-1'></Box>}
    {isAlertVisible3 &&<Box id='arrow' className='arrow-2'></Box>}
    <Box id='arrow' className='arrow-3'></Box>
    {isAlertVisible2 &&<Box id='arrow' className='arrow-4'></Box>}
    </TabPanel>
  </TabPanels>
</Tabs>
              


              {/* <Button onClick={() => onClickHandler2("arrow")} colorScheme='blue' position='absolute' marginLeft='600px' marginTop='600px'>Step 3</Button>
              <Button onClick={() => onClickHandler("hacker")} colorScheme='blue' position='absolute' marginLeft='400px' marginTop='600px'>Step 2</Button>
              <Button onClick={() => onClickHandler3("arrow1")} colorScheme='blue' position='absolute' marginLeft='200px' marginTop='600px'>Step 1</Button> */}
              {/* <Box className='box' boxSize='sm' position='absolute' color='white' width='200px'>
                <Image src={dwayarrow} alt='' />
              </Box> */}
              {image3Clicked &&<Box id='arrow1' className='arrow-9'></Box>}
              {image2Clicked &&<Box id='arrow' className='arrow-1'></Box>}
              {image2Clicked &&<Box id='arrow' className='arrow-2'></Box>}

              {/* <Box className='user' boxSize='sm' position='absolute' width='90px' marginLeft='600px' marginTop='250px'>
                <Image src={user} alt='' />
              </Box>
              <Box id='hacker' boxSize='sm' position='absolute' width='90px' marginLeft='400px' marginTop='450px'>
                {imageClicked && <Image src={hacker} alt=''/>}
              </Box>
              <Box className='gateway' boxSize='sm' position='absolute' width='150px' marginLeft='140px' marginTop='220px'>
                { <Image src={gateway} alt='' />}
              </Box> */}
              </TabPanel>
               
            </TabPanels>
          </Tabs>
           
          
    </ChakraProvider>
  );
}

export default App;


