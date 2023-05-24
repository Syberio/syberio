import React from 'react';
import { useState, useEffect } from 'react';
import * as openpgp from 'openpgp';
import firebase from 'firebase/compat/app';
import CryptoJS from 'crypto-js';
import 'firebase/compat/auth';
import { firebaseConfig } from '../../../utils/Firebase';
import {
  Text,
  Stack,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
  Center,
  InputGroup,
  InputRightElement,
  Box,
  useToast,
  InputLeftElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  border,
} from '@chakra-ui/react';

import "../../../utils/Terminal.css"
import { FaSymbol } from 'react-icons/fa'; // Replace `FaSymbol` with your desired icon
import { sendMessage, getRecipientPublicKey } from '../useMessaging';
import { useManagePGP } from '../useManagePGP';
const firestore = firebase.firestore();
const auth = firebase.auth();
const Terminal = () => {
  const [output, setOutput] = useState([
    'Welcome to SYBERIO Terminal!\nYou can create key pair, send message, and list your keys.',
    "Type 'help' for a list of commands.",
  ]);
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState('');

  const handleClick = () => setShow(!show);
  const handlePasswordSubmit = () => {
    setIsOpen(true);

    if (password === 'mySecretPassword') {
      // Password is correct

      console.log('Password is correct!');
    } else {
    }

    // Close the modal and reset the password field
    setIsOpen(false);
    setPassword('');
  };

  const [command, setCommand] = useState('');
  const [userData, setUserData] = useState({
    name: '',
    surname: '',
    email: '',
  });
  const [userKeyRing, setUserKeyRing] = useState({ keyNames: '' });

  useEffect(() => {
    const handleUserInfo = async () => {
      const { uid } = auth.currentUser;
      const userDoc = await firestore.collection('users').doc(uid).get();

      if (userDoc.exists) {
        const { name, surname, email } = userDoc.data();
        setUserData({ name, surname, email });
      } else {
        console.log("User document doesn't exist!");
      }
    };

    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        handleUserInfo();
      } else {
        console.log('User not logged in');
      }
    });

    return () => unsubscribe();
  }, []);
  const { keyring, loading } = useManagePGP();
  const handleCommandInput = async event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const terminal = document.getElementById('terminal');

      const parts = command.split('" ');
      console.log(parts[0].split(' '));
      var trimmedCommand = parts[0].split(' ')[0];

      setCommand('');
      var comm = document.getElementById('command');
      if (parts[0].split(' ').length > 1) {
        var printedCommand = '';

        parts.forEach(part => {
          printedCommand += part + ' ';
        });

        await printCommandToTerminal(printedCommand);
      } else {
        await printCommandToTerminal(trimmedCommand);
      }
      terminal.removeChild(comm);
      if (trimmedCommand === 'help' && parts[0].split(' ').length === 1) {
        printToTerminal('Available commands:');
        printToTerminal('- generate-key (Generates Public and Private Key)');
        printToTerminal('- list-keys (list 3 keys with primary key)');
        printToTerminal('- sendmessage (to send message to another user)');
        printToTerminal('- whoami (see who you are))');
        printToTerminal('- clear (clear the terminal)');
        printToTerminal('- help (show this message)');
      } else if (
        trimmedCommand === 'generate-key' &&
        parts[0].split(' ').length === 1
      ) {
        var newName = userData.name;
        var newEmail = userData.email;

        do {
          await printToTerminal('Please select what kind of key you want:');
          await printToTerminal('       (1) RSA and RSA (default)');
          await printToTerminal('       (2) DSA (sign only)');
          await printToTerminal('       (3) ECC');
          var choice = await askForInput('Your selection?');
          var firstChar = choice.trim().charAt(0);
        } while (choice.length !== 1 || !['1', '2', '3'].includes(firstChar));
        choice = parseInt(choice);
        var keySize;
        switch (choice) {
          case 1:
            do {
              await printToTerminal('RSA keys may be  2048 or 4096 bits long.');
              keySize = await askForInput('What keysize do you want?');
              var firstChar = keySize.trim().substring(0, 4);
              console.log(choice);
            } while (
              keySize.length !== 4 ||
              !['2048', '4096'].includes(firstChar)
            );
            keySize = parseInt(choice);
            break;
          case 2:
            await printToTerminal('DSA keys 2048 bit long.');
            keySize = 2048;
            break;

          case 3:
            await printToTerminal('ECC keys 224 bits long');
            keySize = 224;
            break;
        }

        do {
          var checkName;
          await printToTerminal(
            'We need to construct a user ID to identify your key.'
          );
          await printToTerminal(`Real name: ${newName}`);
          console.log(newName);
          await printToTerminal(`Email: ${newEmail}`);
          var changeChoice = await askForInput('change name/email or okay?');

          if (changeChoice === 'change name') {
            checkName = await askForInput('<Name>');
            checkName === ''
              ? await printToTerminal('--- Name did not change ---')
              : (newName = checkName);
          } else if (changeChoice === 'change email') {
            newEmail = await askForInput('<Email>');
          }
          if (!isValidEmail(newEmail)) {
            await printToTerminal(
              `${newEmail} format is wrong default email will be used`
            );
            newEmail = userData.email;
          }
        } while (changeChoice !== 'okay' && changeChoice !== 'o');
        await handlePasswordSubmit();

        await printToTerminal(`    Real name: <${newName}>`);
        await printToTerminal(`    Email: <${newEmail}>`);

        var password;
        do {
          password = await askForInput(
            'Please enter your password (length greater than 8): ',
            true
          );
        } while (password.length <= 8);

        console.log(choice);
        if (choice === 1) {
          createRSAKeys(newName, newEmail, password);
          const coolSign = printCoolOutput('Key created');
          printToTerminal(coolSign);
          printToTerminal('You can check it from Manage keys PGP Keys');
        } else if (choice === 2) {
          createDSAKeys(newName, newEmail, password);
          const coolSign = printCoolOutput('Key created');
          printToTerminal(coolSign);
          printToTerminal('You can check it from Manage keys PGP Keys');
        } else if (choice === 3) {
          createECCKeys(newName, newEmail, password);
          const coolSign = printCoolOutput('Key created');
          printToTerminal(coolSign);
          printToTerminal('You can check it from Manage keys PGP Keys');
        }
      } else if (
        trimmedCommand === 'list-keys' &&
        parts[0].split(' ').length === 1
      ) {
        // add list secret keys

        if (keyring.length === 0)
          await printToTerminal('You do not have any keys in your ring');
        else {
          const keysToPrint = keyring.slice(0, 5); // Get the first three keys or fewer
          const columnify = require('columnify');

          // Define the table headers
          const headers = {
            isPrimary: 'Primary',
            userName: 'ID',
            email: 'Email',
            publicKey: 'Public Key',
          };

          // Create an array of formatted data rows
          const rows = keysToPrint.map(key => ({
            isPrimary: key.isPrimary ? 'Yes' : 'No',
            userName: key.userName ?? 'null',
            email: key.email ?? 'null',
            publicKey: key.publicKey.slice(37, 60) + '...',
          }));

          // Format the table using columnify
          const formattedTable = columnify(rows, {
            columns: Object.keys(headers),
            columnSplitter: ' | ',
            config: headers,
          });

          // Print the table to the terminal using printToTerminal
          await printToTerminal(formattedTable);
        }
      } else if (
        trimmedCommand === 'whoami' &&
        parts[0].split(' ').length === 1
      ) {
        printToTerminal(
          `Hello Syberio User ${userData.name} ${userData.surname}`
        );
      } else if (trimmedCommand === 'sendmessage') {
        if (parts[0].split(' ').length >= 3) {
          var senderEmail, recieverEmail;
          senderEmail = auth.currentUser.email;
          var senderKeyPair = keyring.find(key => key.isPrimary);
          recieverEmail = parts[0].split(' ')[1];
          if (!senderKeyPair) {
            await printToTerminal(
              'You need to create key pairs to send messages.'
            );
          }
          console.log(`parts 0 ${parts[0].split(' ').slice(2).join(' ')}`);
          if (recieverEmail !== auth.currentUser.email) {
            if (isValidEmail(recieverEmail)) {
              const startIndex = 2;
              var message = parts[0].split(' ').slice(startIndex).join(' ');

              if (!message.startsWith('"') && !message.endsWith('"')) {
                await printToTerminal(
                  'Enter correct format -> sendmessage team11@syberio.com "message" '
                );
              } else {
                message = message.replace(/"/g, '');
                const senderPublicKey = senderKeyPair.publicKey;
                const encryptedPrivateKey = senderKeyPair.privateKey;
                const recieverEmailN = recieverEmail;
                const senderEmailN = senderEmail;
                const messageSend = message;
                console.log();
                try {
                  await getRecipientPublicKey(recieverEmail);
                  try {
                    await sendMessage(
                      senderEmailN,
                      recieverEmailN,
                      senderPublicKey,
                      encryptedPrivateKey,
                      messageSend
                    );
                    await printToTerminal('Message sent successfully!');
                  } catch (error) {
                    if (
                      error.message ===
                      'Recipient not found or has no public key.'
                    ) {
                      await printToTerminal(
                        'Recipient not found or has no public key.'
                      );
                    } else {
                      console.error('Error sending message:', error);
                      await printToTerminal(
                        'Failed to send the message. Please try again.'
                      );
                    }
                  }
                } catch (error) {
                  await printToTerminal(
                    'User key with this email does not exist'
                  );
                }
              }
            } else {
              await printToTerminal(
                'Enter correct format -> sendmessage team11@syberio.com "message" '
              );
            }
          } else {
            await printToTerminal('You cannot send message to yourself');
          }
        } else {
          await printToTerminal(
            'Enter correct format -> sendmessage team11@syberio.com "message" '
          );
        }
      } else if (
        trimmedCommand === 'clear' &&
        parts[0].split(' ').length === 1
      ) {
        const output = document.getElementById('output');
        const childElements = output.querySelectorAll('*');
        childElements.forEach(child => {
          child.remove();
        });
      } else {
        if (parts[0].split(' ').length > 1) {
          var printedCommand = '';

          parts.forEach(part => {
            printedCommand += part + ' ';
          });
          printToTerminal(`Command not recognized: ${printedCommand}`);
        } else {
          printToTerminal(`Command not recognized: ${trimmedCommand}`);
          if (trimmedCommand === 'sendmessage') {
            printToTerminal(
              'Syntax for this command is: sendmessage email@email.com "message"'
            );
          }
        }
      }

      terminal.appendChild(comm);
      terminal.scrollIntoView(false);
      var input = document.getElementById('inp');
      input.focus();
    }
  };

  function isValidEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  const printToTerminal = text => {
    setOutput(prevOutput => [...prevOutput, text]);
  };
  const printCommandToTerminal = text => {
    printToTerminal(
      <span>
        <span style={{ color: 'green' }}>
          {userData.name}@syberio:
          <span style={{ color: 'blue', leftPadding: '0px' }}>~</span>
          <span style={{ color: 'white', margin: '0px' }}>$</span>
        </span>{' '}
        {text}
      </span>
    );
  };
  function printCoolOutput(message) {
    const horizontalLine = '═'.repeat(message.length + 4);
    var coolSign = `╔${horizontalLine}╗
║  ${message}  ║
╚${horizontalLine}╝`;

    return coolSign;
  }
  async function createRSAKeys(userName, email, password) {
    const { privateKey, publicKey, revocationCertificate } =
      await openpgp.generateKey({
        type: 'rsa',
        rsaBits: 4096,
        userIDs: [{ name: userName, email: email }],
        passphrase: password,
      });

    // Encrypt the private key using CryptoJS AES
    const encryptedPrivateKey = CryptoJS.AES.encrypt(
      privateKey,
      password
    ).toString();
    var isKeyPairExists = keyring.find(key => key.isPrimary);

    await firestore
      .collection('users')
      .doc(auth.currentUser.uid)
      .collection('keyring')
      .add({
        userName: userName,
        email: email,
        publicKey: publicKey,
        privateKey: encryptedPrivateKey,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        isPrimary: isKeyPairExists ? false : true,
      });

    // toast({
    //     title: 'Success!.',
    //     description: "Now you can find your Public and Private key inside Dashboard!",
    //     status: 'success',
    //     duration: 5000,
    //     isClosable: true,
    // });
  }
  function createDSAKeys(userName, email, password) {
    (async () => {
      const { privateKey, publicKey, revocationCertificate } =
        await openpgp.generateKey({
          type: 'ecc', // Type of the key, defaults to ECC
          curve: 'ed25519', // ECC curve name, defaults to curve25519
          userIDs: [{ name: userName, email: email }], // you can pass multiple user IDs
          passphrase: password, // protects the private key
          format: 'armored', // output key format, defaults to 'armored' (other options: 'binary' or 'object')
        });

      const encryptedPrivateKey = CryptoJS.AES.encrypt(
        privateKey,
        password
      ).toString();
      var isKeyPairExists = keyring.find(key => key.isPrimary);

      firestore
        .collection('users')
        .doc(auth.currentUser.uid)
        .collection('keyring')
        .add({
          userName: userName,
          email: email,
          publicKey: publicKey,
          privateKey: encryptedPrivateKey,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          isPrimary: isKeyPairExists ? false : true,
        });
      // toast({
      //     title: 'Success!.',
      //     description: "Now you can find your Public and Private key inside Dashboard!",
      //     status: 'success',
      //     duration: 5000,
      //     isClosable: true,
      // })
    })();
  }
  function createECCKeys(userName, email, password) {
    (async () => {
      const { privateKey, publicKey, revocationCertificate } =
        await openpgp.generateKey({
          type: 'ecc', // Type of the key, defaults to ECC
          curve: 'curve25519', // ECC curve name, defaults to curve25519
          userIDs: [{ name: userName, email: email }], // you can pass multiple user IDs
          passphrase: password, // protects the private key
          format: 'armored', // output key format, defaults to 'armored' (other options: 'binary' or 'object')
        });

      const encryptedPrivateKey = CryptoJS.AES.encrypt(
        privateKey,
        password
      ).toString();
      var isKeyPairExists = keyring.find(key => key.isPrimary);

      firestore
        .collection('users')
        .doc(auth.currentUser.uid)
        .collection('keyring')
        .add({
          userName: userName,
          email: email,
          publicKey: publicKey,
          privateKey: encryptedPrivateKey,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          isPrimary: isKeyPairExists ? false : true,
        });

      // toast({
      //     title: 'Success!.',
      //     description: "Now you can find your Public and Private key inside Dashboard!",
      //     status: 'success',
      //     duration: 5000,
      //     isClosable: true,
      // })
    })();
  }
  const askForInput = async (promptText, mask = false) => {
    return new Promise(resolve => {
      const div = document.createElement('div');
      const promptPre = document.createElement('pre');
      const divOut = document.getElementById('output');

      promptPre.textContent = promptText;
      const terminal = document.getElementById('terminal');
      const input = document.createElement('input');
      input.type = mask ? 'password' : 'text';

      input.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
          const value = input.value.trim();
          input.disabled = true;
          resolve(value);
        }
      });
      div.appendChild(promptPre);
      div.appendChild(input);
      divOut.appendChild(div);
      input.focus();
    });
  };
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 542);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <Stack>
        <Box>
          {isWideScreen ? (
            <div className="containerTerminal">
              <div className="menu">
                <div className="buttons-flex"> </div>
                <div className="button green"></div>
                <div className="button yellow"></div>
                <div className="button red"></div>
                <div className="title">
                  <h1>S Y B E R I O</h1>
                </div>
              </div>

              <div id="terminal">
                <div id="output">
                  {output.map((text, index) => (
                    <pre key={index}>{text}</pre>
                  ))}
                </div>
                <div
                  id="command"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <div style={{ marginRight: '5px', color: 'green' }}>
                    {userData.name}@syberio:
                    <span style={{ color: 'blue', leftPadding: '0px' }}>~</span>
                    <span style={{ color: 'white', margin: '0px' }}>$</span>
                  </div>
                  <input
                    type="text"
                    id="inp"
                    autoFocus
                    value={command}
                    onChange={event => setCommand(event.target.value)}
                    onKeyDown={handleCommandInput}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="bottom">
                <div className="bottomTitle">
                  <h1 className="date">
                    All Rights Reserved &copy; {new Date().getFullYear()}
                  </h1>
                </div>
              </div>
            </div>
          ) : (
            <Box p={4} textAlign="center">
              <h2>You have to have a bigger screen to see the terminal.</h2>
            </Box>
          )}
        </Box>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Şifrenizi girin"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? 'Gizle' : 'Göster'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </ModalBody>
            <Button onClick={handlePasswordSubmit}>Gönder</Button>
          </ModalContent>
        </Modal>
      </Stack>
    </>
  );
};

export default Terminal;