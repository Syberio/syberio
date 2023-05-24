import React, { useState } from 'react';
import {
  Box,
  Heading,
  Flex,
  Text,
  List,
  ListItem,
  Stack,
  Divider,
  VStack,
  theme,
  Code,
  Container,
  Button,
  Icon
} from '@chakra-ui/react';
import { UnlockIcon } from '@chakra-ui/icons';
import { FiUser, FiLock, FiCheckCircle, FiEdit } from "react-icons/fi";
import { FaMinus } from 'react-icons/fa';
import { IoMdKey } from 'react-icons/io';
import ZipIcon from '../../../components/assets/zip_icon.png';
import ConcatIcon from '../../../components/assets/concat_icon.png';
import Certificate_Icon from '../../../components/assets/certificate_icon.png';
import Text_Icon from '../../../components/assets/text_icon.png';
import { useNavigate } from "react-router-dom";

const PgPAuthentication = () => {
  const navigate = useNavigate();
  const [isContainerVisible, setIsContainerVisible] = useState(false);
  const bgColor = theme.colors.blue[200];
  const StepsContainerColor = theme.colors.blue[300];
  const ContainerColor = theme.colors.blue[400];

  const handleButtonClick = () => {
    setIsContainerVisible(!isContainerVisible);
  };
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);


  const handleMouseEnter = (item) => {
    setIsHovered(true);
    setHighlightedItem(item);
    setHoveredItem(item);
    HighlightStepItems(item);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHighlightedItem(null);
    setHoveredItem(null);
    RemoveHighlightStepItems(null);
    RemoveHighlightallItems(null);
  };

  const [highlightedItem, setHighlightedItem] = useState(null);

  const MouseEnterHightLight = (item) => {
    setIsHovered(true);
    setHoveredItem(item);
    setHighlightedItem(item);
    HighlightStepItems(item);
  };

  const MouseExitHightLight = (item) => {
    setIsHovered(false);
    setHighlightedItem(null);
    setHighlightedItem(null);
    RemoveHighlightStepItems(item);
  };

  const HighlightStepItems = (item) => {
    const element = document.getElementById(item);
    if (element) {
      element.style.backgroundColor = theme.colors.blue[300];
    }
  };
  const RemoveHighlightStepItems = (item) => {
    const element = document.getElementById(item);
    if (element) {
      element.style.backgroundColor = '';
      element.style.borderRadius = '10px';
    }
  };

  const RemoveHighlightallItems = () => {
    const items = document.querySelectorAll('[id]');

    items.forEach((item) => {
      item.style.backgroundColor = '';
      item.style.borderRadius = '10px';
    });
  };
  const items = [
    {
      id: 1,
      code: "compose",
      title: "Create Hash Code of the message",
      description:
        "Hash value of the message H(M) created by using hash function. (H)",
    },
    {
      id: 2,
      code: "public-key-encryption",
      title: "Encrypt the generated hash code using our private key KPa",
      description:
        " Encrpyted hash code of the message (Signature of the message) is created using Public-Key Encryption EP",
    },
    {
      id: 3,
      code: "Concatanate",
      title: " Concatanate the Message M with the hash code H.",
      description:
        " The message M is concatanated with the signature of the message using PGP Concatenation utility.",
    },
    {
      id: 4,
      code: "Zip",
      title: "Compress both message and its signature",
      description:
        "Generated message is compressed by using  to reduce transmission size over the internet.",
    },


  ];


  const itemsreciever = [

    {
      id: 5,
      code: "Get Hash Code",
      title: "Recovering message and the signature",
      description:
        "Decompressing  Z⁻¹ the compressed message and signature.",

    },
    {
      id: 6,
      code: "Asymmetric Decryption Algorithm",
      title: " Decrypt signature using Public-Key Decryption Algorithm DP",
      description:
        "The signature is decrypted using the sender’s public key PUa and the hash value is obtained.Remember that the signature was created using sender’s private key KPa).",

    },
    {
      id: 7,
      code: "Compare",
      title: "Compare calculated hash values of the message with the decrypted signature.",
      description:
        "In this last step Hash value H obtained from decrypted signature is compared with the calculated Hash code of the incoming message(M).If The hash codes are identical Process is completed and Reciever can assume that the message is authentic and has not been tampered with.",

    },
  ];


  const getHoveredItemInfo = () => {
    switch (hoveredItem) {
      case "compose":
        return <p>Compose a new message</p>;
      case "generate":
        return <p>Generate a hash code</p>;
      case "public-key-encryption":
        return <p>Public Key Encrption</p>;
      case "private-key-sender":
        return <p>Private Key of the sender</p>;
      case "Concatanate":
        return <p>Concatanate Message with the ecnrpyted hash code.</p>
      case "Message":
        return <p>Message part of the packet.</p>;
      case "Signature":
        return <p>Generated signature of the packet.</p>;
      case "Zip":
        return <p>Zip the message to reduce transmission size.</p>;
      case "Get Hash Code":
        return <p>Generate the hash code of the message.</p>;
      case "Asymmetric Decryption Algorithm":
        return <p>Decrypt the message using public key of the sender to get hash code.</p>;
      case "Compare":
        return <p>Compare the hash codes.</p>;
      default:
        return null;
    }
  };


  return (
    <Box>
      <Box p={8}>
        <Heading as="h1" mb={8}>
          PGP Authentication
        </Heading>
        <Box
          borderRadius="md"
          border="1px solid"
          borderColor="gray.200"
          p={4}
          mb={8}
        >

          <VStack align="start" spacing={4} mb={8}>
            <Text fontSize="xl">
              The following steps highlight how PGP ensures Authentication:
            </Text>
            <List spacing={4}>
              {items.map((item) => (
                <ListItem
                  key={item.code}
                  onMouseEnter={() =>
                    MouseEnterHightLight(item.code)
                  }

                  onMouseLeave={() => MouseExitHightLight(item.code)}
                  className={highlightedItem === item.code ? "highlighted-item" : ""}
                >
                  <Stack direction="row" align="center">
                    <Code>{`Step ${item.id}:`}</Code>
                    <Text fontWeight="semibold">{item.title}</Text>
                  </Stack>
                  <Text maxWidth='600px'>{item.description}</Text>
                </ListItem>
              ))}

            </List>
          </VStack>

          <Divider mb={8} />
          <VStack align="start" spacing={4} mb={8}>
            <Text fontSize="xl">
              The steps taken at the recievers side:
            </Text>
            <List spacing={4}>
              {itemsreciever.map((item) => (
                <ListItem
                  key={item.code}
                  onMouseEnter={() => MouseEnterHightLight(item.code)}
                  onMouseLeave={() => MouseExitHightLight(item.code)}
                  className={highlightedItem === item.code ? "highlighted-item" : ""}
                >
                  <Stack direction="row" align="center">
                    <Code>{`Step ${item.id}:`}</Code>
                    <Text fontWeight="semibold">{item.title}</Text>
                  </Stack>
                  <Text ml={10} maxWidth='600px'>{item.description}</Text>
                </ListItem>
              ))}

            </List>
          </VStack>


        </Box>

        <Button variant='solid' colorScheme='blue' onClick={() => {
          navigate("/courses/pgp-main")
        }}>
          Back to pgp main page
        </Button>





      </Box>


      <Box>
        <Flex justify="center">


          <Container width="16%" h="330" style=
            {{ position: 'absolute', top: '220px', left: '750px' }}>

            <Box style=
              {{ position: 'absolute', top: '-20px', left: '-100px' }}
            >
              <Flex justify="space-between" w="80%" mx="auto" my="10">

                <Flex id='compose' code='item' style={{ position: 'absolute', top: "60px", left: "160px", transform: 'translate(-50%, -50%)' }}>
                  <Box
                    onMouseEnter={() => {
                      handleMouseEnter("compose");

                    }}
                    onMouseLeave={handleMouseLeave}
                    w={50}
                    h={50}
                    bgColor={bgColor}
                    display="center"
                    alignItems="center"
                    justifyContent="center"
                    style={{ borderRadius: '80%' }}

                  >
                    <Icon as={FiEdit} w="8" h="8" />
                  </Box>

                </Flex>



                <Flex
                  style={{
                    position: "absolute",
                    top: "60px",
                    left: "220px",
                    transform: "translate(-50%, -50%) scaleX(8)"
                  }}
                >
                  <Icon as={FaMinus} w="100px" h="10px" />
                </Flex>


                <Flex
                  style={{
                    position: "absolute",
                    top: "86px",
                    left: "254px",
                    transform: "translate(-50%, -50%) scaleY(6)"
                  }}
                >
                  <Icon as={FaMinus} w="100px" h="10px" transform="rotate(90deg)" />
                </Flex>




                <Flex id='public-key-encryption' style={{ position: 'absolute', top: "130px", left: "255px", transform: 'translate(-50%, -50%)' }}
                  onMouseEnter={() => handleMouseEnter("public-key-encryption")}
                  onMouseLeave={handleMouseLeave}>
                  <Box w={50} h={50} bgColor={bgColor} display="flex" alignItems="center" justifyContent="center" style={{ borderRadius: '80%' }}>
                    <Icon as={FiLock} w="8" h="8" pointerEvents="none" />
                  </Box>
                </Flex>


                <Flex style={{ position: 'absolute', top: "130px", left: "360px", transform: 'translate(-50%, -50%)', padding: '50px' }}


                  onMouseEnter={() => handleMouseEnter("private-key-sender")}
                  onMouseLeave={handleMouseLeave}
                >
                  <Box w={50} h={50} bgColor={bgColor} display="flex" alignItems="center" justifyContent="center" style={{ borderRadius: '80%' }}>
                    <Icon as={IoMdKey} w="8" h="8" style={{ pointerEvents: "none" }} />
                  </Box>
                </Flex>




                <Flex
                  style={{
                    position: "absolute",
                    top: "130px",
                    left: "307px",
                    transform: "translate(-50%, -50%) scaleX(6)"
                  }}
                >
                  <Icon as={FaMinus} w="100px" h="10px" />
                </Flex>


                <Flex id='Concatanate' style={{ position: 'absolute', top: "220px", left: "254px", transform: 'translate(-50%, -50%)' }}
                  onMouseEnter={() => handleMouseEnter("Concatanate")}
                  onMouseLeave={handleMouseLeave}>
                  <Box w={50} h={50} bgColor={bgColor} display="flex" alignItems="center" justifyContent="center" style={{ borderRadius: '80%' }}>
                    <img src={ConcatIcon} alt="dezip-icon" width="30" height="30" />
                  </Box>
                </Flex>


                <Flex
                  style={{
                    position: "absolute",
                    top: "175px",
                    left: "254px",
                    transform: "translate(-50%, -50%) scaleY(4.5)"
                  }}
                >
                  <Icon as={FaMinus} w="100px" h="10px" transform="rotate(90deg)" />
                </Flex>




                <Flex
                  style={{
                    position: "absolute",
                    top: "153px",
                    left: "158px",
                    transform: "translate(-50%, -50%) scaleY(15.4)"
                  }}
                >
                  <Icon as={FaMinus} w="100px" h="10px" transform="rotate(90deg)" />
                </Flex>


                <Flex
                  style={{
                    position: "absolute",
                    top: "220px",
                    left: "193px",
                    transform: "translate(-50%, -50%) scaleX(8)"
                  }}
                >
                  <Icon as={FaMinus} w="100px" h="10px" />
                </Flex>


                <Flex
                  style={{
                    position: "absolute",
                    top: "263px",
                    left: "254px",
                    transform: "translate(-50%, -50%) scaleY(3.8)"
                  }}
                >
                  <Icon as={FaMinus} w="100px" h="10px" transform="rotate(90deg)" />
                </Flex>




                <Flex id='Zip' style={{ position: 'absolute', top: "305px", left: "254px", transform: 'translate(-50%, -50%)' }}
                  onMouseEnter={() => handleMouseEnter("Zip")}
                  onMouseLeave={handleMouseLeave}>
                  <Box w={50} h={50} bgColor={bgColor} display="flex" alignItems="center" justifyContent="center" style={{ borderRadius: '80%' }}>
                    <img src={ZipIcon} alt="dezip-icon" width="30" height="30" />
                  </Box>
                </Flex>

              </Flex>
            </Box>
          </Container>
        </Flex>

      </Box>

      <Container width="16%" h="330" style=
        {{ position: 'absolute', top: '620px', left: '750px' }}>
        <Box style=
          {{ position: 'absolute', top: '-350px', left: '-160px' }}
        >


          <Flex direction="row" style={{ position: 'absolute', top: "415px", left: "304px", transform: 'translate(-50%, -50%)' }}
            onMouseEnter={() => handleMouseEnter("Message")}
            onMouseLeave={handleMouseLeave}>
            <Box w={50} h={50} bgColor={bgColor} display="flex" alignItems="center" justifyContent="center">
              <img src={Text_Icon} width="30" height="30" />
            </Box>
          </Flex>
          <Flex direction="row" style={{ position: 'absolute', top: "415px", left: "355px", transform: 'translate(-50%, -50%)' }}
            onMouseEnter={() => handleMouseEnter("Signature")}
            onMouseLeave={handleMouseLeave}>
            <Box w={50} h={50} bgColor={bgColor} display="flex" alignItems="center" justifyContent="center">
              <img src={Certificate_Icon} alt="dezip-icon" width="30" height="30" />
            </Box>
          </Flex>


          <Flex
            style={{
              position: "absolute",
              top: "470px",
              left: "354px",
              transform: "translate(-50%, -50%) scaleY(6.5)"
            }}
          >
            <Icon as={FaMinus} w="100px" h="10px" transform="rotate(90deg)" />
          </Flex>


          <Flex
            style={{
              position: "absolute",
              top: "470px",
              left: "305px",
              transform: "translate(-50%, -50%) scaleY(6.5)"
            }}
          >
            <Icon as={FaMinus} w="100px" h="10px" transform="rotate(90deg)" />
          </Flex>


          <Flex id='Get Hash Code' style={{ position: 'absolute', top: "520px", left: "305px", transform: 'translate(-50%, -50%)' }}
            onMouseEnter={() => handleMouseEnter("Get Hash Code")}
            onMouseLeave={handleMouseLeave}>
            <Box w={50} h={50} bgColor={bgColor} display="flex" alignItems="center" justifyContent="center" style={{ borderRadius: '80%' }}>
              <Icon as={UnlockIcon} width="30" height="30" />
            </Box>
          </Flex>




          <Flex id='Asymmetric Decryption Algorithm' style={{ position: 'absolute', top: "520px", left: "355px", transform: 'translate(-50%, -50%)' }}
            onMouseEnter={() => handleMouseEnter("Asymmetric Decryption Algorithm")}
            onMouseLeave={handleMouseLeave}>
            <Box w={50} h={50} bgColor={bgColor} display="flex" alignItems="center" justifyContent="center" style={{ borderRadius: '80%' }}>
              <Icon as={UnlockIcon} width="30" height="30" />
            </Box>
          </Flex>


          <Flex
            style={{
              position: "absolute",
              top: "575px",
              left: "364px",
              transform: "translate(-50%, -50%) scaleY(7)"
            }}
          >
            <Icon as={FaMinus} w="100px" h="10px" transform="rotate(90deg)" />
          </Flex>


          <Flex
            style={{
              position: "absolute",
              top: "575px",
              left: "295px",
              transform: "translate(-50%, -50%) scaleY(7)"
            }}
          >
            <Icon as={FaMinus} w="100px" h="10px" transform="rotate(90deg)" />
          </Flex>


          <Flex id='Compare' style={{ position: 'absolute', top: "606px", left: "330px", transform: 'translate(-50%, -50%)' }}
            onMouseEnter={() => handleMouseEnter("Compare")}
            onMouseLeave={handleMouseLeave}>
            <Box w={50} h={50} bgColor={bgColor} display="flex" alignItems="center" justifyContent="center" style={{ borderRadius: '80%' }}>
              <Icon as={FiCheckCircle} width="30" height="30" />
            </Box>
          </Flex>


          <Flex
            style={{
              position: "absolute",
              top: "605px",
              left: "300px",
              transform: "translate(-50%, -50%) scaleX(1)"
            }}
          >
            <Icon as={FaMinus} w="100px" h="10px" />
          </Flex>


          <Flex
            style={{
              position: "absolute",
              top: "605px",
              left: "360px",
              transform: "translate(-50%, -50%) scaleX(1)"
            }}
          >
            <Icon as={FaMinus} w="100px" h="10px" />
          </Flex>
          <Flex direction="row" style={{ position: 'absolute', top: "415px", left: "330px", transform: 'translate(-50%, -50%)' }}>
          </Flex>

        </Box>
        {isHovered && (
          <Box
            position="fixed"
            top="12%"
            left="65%"
            width="10%"
            height="auto"
            bg={ContainerColor}
            borderRadius="md"
            borderColor="gray.200"
            border="1px solid black"
            opacity={0.9}
            pointerEvents="auto"
          >
            <Box p="1rem">{getHoveredItemInfo()}</Box>
          </Box>
        )}

      </Container>


      <Button onClick={handleButtonClick} marginLeft style={{ position: 'absolute', top: '210px', left: '620px' }}>Show Steps</Button>
      {isContainerVisible && (
        <Container maxW="sm" borderRadius="md" borderColor="gray.200" background={StepsContainerColor} border="1px solid black" marginLeft
          style={{ position: 'fixed', top: "25%", left: "65%" }}>
          <Text color="white" fontSize="lg">M – Message</Text>
          <Text color="white" fontSize="lg">H – Hash Function</Text>
          <Text color="white" fontSize="lg">Ks – A random Session Key created for Symmetric Encryption purpose</Text>
          <Text color="white" fontSize="lg">DP – Public-Key Decryption Algorithm</Text>
          <Text color="white" fontSize="lg">EP – Public-Key Encryption Algorithm</Text>
          <Text color="white" fontSize="lg">DC – Asymmetric Decryption Algorithm</Text>
          <Text color="white" fontSize="lg">EC – Symmetric Encryption Algorithm</Text>
          <Text color="white" fontSize="lg">KPb – A private key of user B used in Public-key encryption process</Text>
          <Text color="white" fontSize="lg">KPa – A private key of user A used in Public-key encryption process</Text>
          <Text color="white" fontSize="lg">PUa – A public key of user A used in Public-key encryption process</Text>
          <Text color="white" fontSize="lg">PUb – A public key of user B used in Public-key encryption process</Text>
          <Text color="white" fontSize="lg">|| – Concatenation</Text>
          <Text color="white" fontSize="lg">Z – Compression Function</Text>
          <Text color="white" fontSize="lg">Z-1 – Decompression Function</Text>
        </Container>

      )}
    </Box >


  );
};


export default PgPAuthentication;
