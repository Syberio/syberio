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
  Code,
  theme,
  Container,
  Button,
  Icon,
} from '@chakra-ui/react';
import { FiLock, FiCheckCircle, FiEdit, FiKey } from "react-icons/fi";
import { FaMinus } from 'react-icons/fa';
import dezipIcon from '../../../components/assets/dezip_icon.png';
import ZipIcon from '../../../components/assets/zip_icon.png';
import ConcatIcon from '../../../components/assets/concat_icon.png';
import Certificate_Icon from '../../../components/assets/certificate_icon.png';
import Text_Icon from '../../../components/assets/text_icon.png';
import Open_Lock from '../../../components/assets/open_lock.png';
import { useNavigate } from "react-router-dom";
const PgPConfidentiality = () => {
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
      code: "Zip",
      title: "Compress the message (Z)",
      description:
        "The message (M) is compressed using a lossless data compression algorithm (Z) to create a Z(M).",
    },
    {
      id: 2,
      code: "Symmetric Encryption Algorithm",
      title: "Encrypt the message with Ks (EC)",
      description:
        "The compressed message Z(M) is encrypted with the session key (Ks) using a symmetric encryption algorithm (EC).",
    },
    {
      id: 3,
      code: "A random Session Key created for Symmetric Encryption purpose",
      title: "Generate a random session key (Ks)",
      description:
        "A 128-bit session key (Ks) is generated for use in symmetric encryption.",
    },

    {
      id: 4,
      code: "public-key-encryption",
      title: "Encrypt the session key with the receiver’s public key (EP)",
      description:
        "The session key (Ks) is encrypted with the receiver’s public key (KUb) using a public-key encryption algorithm (EP).",
    },
    {
      id: 5,
      code: "Concatanate",
      title: "Concatenate the encrypted session key and message",
      description:
        "The encrypted session key (EP(Ks)) and the encrypted message (EC(Z(M),Ks)) are concatenated together and sent to the receiver.",
    },

  ];


  const itemsreciever = [

    {
      id: 6,
      code: "Public-Key Decryption Algorithm",
      title: "Decrypt the session key with the receiver’s private key (DP)",
      description:
        "The encrypted session key (EP(Ks,KUb)) is decrypted with the receiver’s private key (KRb) using a private-key decryption algorithm (DP) to obtain the session key (Ks).",

    },
    {
      id: 7,
      code: "Asymmetric Decryption Algorithm",
      title: "Decrypt the message with Ks (DC)",
      description:
        "The encrypted message (EC(M,Ks)) is decrypted with the session key (Ks) using the symmetric decryption algorithm (DC) to obtain the original message (M).",

    },
    {
      id: 8,
      code: "Decompression Function",
      title: "Decompress the compressed message z(m)",
      description:
        "The compressed message (Z(M)) is decompressed using the same compression function to get the original message M.",

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
      case "Zip":
        return <p>Zip the message to reduce transmission size.</p>;
      case "Symmetric Encryption Algorithm":
        return <p>Encrypt the message using the randomly created session key.</p>;
      case "Concatanate 2":
        return <p>Concatanate the message and signature.</p>;
      case "A random Session Key created for Symmetric Encryption purpose":
        return <p>Generate random session key.</p>;
      case "Public-Key Encryption Algorithm":
        return <p>Encrypt the session key using recievers public key.</p>;
      case "Message Packet":
        return <p>Message part of the packet.</p>;
      case "Certificate Message":
        return <p>Signature part of the packet.</p>;
      case "Public-Key Decryption Algorithm":
        return <p>Decrypt the signature using public key of the sender.</p>;
      case "Asymmetric Decryption Algorithm":
        return <p>Using asymmetric decryption algorithm combine the signature and message.</p>;
      case "Hash Function":
        return <p>Generate hash code of the message.</p>;
      case "Compare":
        return <p>Compare the hash codes.</p>;
      case "Public-Key Decryption Algorithm Private":
        return <p>Decrypt the signature using private key of the reciever.</p>;
      case "Decompression Function":
        return <p>Decompress the message.</p>;
      default:
        return null;
    }
  };

  return (



    <Box p={8}>
      <Heading as="h1" mb={8}>
        PGP Confidentiality
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
            Following steps highlight how PGP ensures Confidentiality:
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


        <Box>

          <Container width="13%" h="380"  style=
            {{ position: 'absolute', top: '220px', left: '700px' }}>

            <Box style={{ position: 'absolute', top: '-10px', left: '-260px' }}>
              <Flex id='compose' style={{ position: 'absolute', top: "50px", left: "350px", transform: 'translate(-50%, -50%)' }}
                onMouseEnter={() => handleMouseEnter("compose")}
                onMouseLeave={handleMouseLeave}>
                <Box w={50} h={50} bgColor={bgColor} display="flex" alignItems="center" justifyContent="center" style={{ borderRadius: '80%' }}>
                  <Icon as={FiEdit} w="8" h="8" pointerEvents="none" />
                </Box>
              </Flex>


              <Flex id='Zip' style={{ position: 'absolute', top: "150px", left: "350px", transform: 'translate(-50%, -50%)' }}
                onMouseEnter={() => handleMouseEnter("Zip")}
                onMouseLeave={handleMouseLeave}>
                <Box w={50} h={50} bgColor={bgColor} display="flex" alignItems="center" justifyContent="center" style={{ borderRadius: '80%' }}>
                  <img src={ZipIcon} alt="dezip-icon" width="30" height="30" />
                </Box>
              </Flex>

              <Flex id='Symmetric Encryption Algorithm' style={{ position: 'absolute', top: "250px", left: "350px", transform: 'translate(-50%, -50%)' }}
                onMouseEnter={() => handleMouseEnter("Symmetric Encryption Algorithm")}
                onMouseLeave={handleMouseLeave}>
                <Box w={50} h={50} bgColor={bgColor} display="flex" alignItems="center" justifyContent="center" style={{ borderRadius: '80%' }}>
                  <Icon as={FiLock} w="8" h="8" pointerEvents="none" />
                </Box>
              </Flex>

              <Flex id='Concatanate' style={{ position: 'absolute', top: "350px", left: "350px", transform: 'translate(-50%, -50%)' }}
                onMouseEnter={() => handleMouseEnter("Concatanate")}
                onMouseLeave={handleMouseLeave}>
                <Box w={50} h={50} bgColor={bgColor} display="flex" alignItems="center" justifyContent="center" style={{ borderRadius: '80%' }}>
                  <img src={ConcatIcon} alt="dezip-icon" width="30" height="30" />
                </Box>
              </Flex>

              <Flex id='A random Session Key created for Symmetric Encryption purpose' style={{ position: 'absolute', top: "250px", left: "450px", transform: 'translate(-50%, -50%)' }}
                onMouseEnter={() => handleMouseEnter("A random Session Key created for Symmetric Encryption purpose")}
                onMouseLeave={handleMouseLeave}>
                <Box w={50} h={50} bgColor={bgColor} display="flex" alignItems="center" justifyContent="center" style={{ borderRadius: '80%' }}>
                  <Icon as={FiKey} w="8" h="8" pointerEvents="none" />
                </Box>
              </Flex>

              <Flex id='public-key-encryption' style={{ position: 'absolute', top: "350px", left: "450px", transform: 'translate(-50%, -50%)' }}
                onMouseEnter={() => handleMouseEnter("public-key-encryption")}
                onMouseLeave={handleMouseLeave}>
                <Box w={50} h={50} bgColor={bgColor} display="flex" alignItems="center" justifyContent="center" style={{ borderRadius: '80%' }}>
                  <Icon as={FiLock} w="8" h="8" pointerEvents="none" />
                </Box>
              </Flex>

              <Flex
                style={{
                  position: "absolute",
                  top: "300px",
                  left: "350px",
                  transform: "translate(-50%, -50%) scaleY(5.7)"
                }}
              >
                <Icon as={FaMinus} w="100px" h="10px" transform="rotate(90deg)" />
              </Flex>

              <Flex
                style={{
                  position: "absolute",
                  top: "200px",
                  left: "350px",
                  transform: "translate(-50%, -50%) scaleY(5.7)"
                }}
              >
                <Icon as={FaMinus} w="100px" h="10px" transform="rotate(90deg)" />
              </Flex>
              <Flex
                style={{
                  position: "absolute",
                  top: "100px",
                  left: "350px",
                  transform: "translate(-50%, -50%) scaleY(5.7)"
                }}
              >
                <Icon as={FaMinus} w="100px" h="10px" transform="rotate(90deg)" />
              </Flex>

              <Flex
                style={{
                  position: "absolute",
                  top: "300px",
                  left: "450px",
                  transform: "translate(-50%, -50%) scaleY(5.7)"
                }}
              >
                <Icon as={FaMinus} w="100px" h="10px" transform="rotate(90deg)" />
              </Flex>

              <Flex
                style={{
                  position: "absolute",
                  top: "250px",
                  left: "400px",
                  transform: "translate(-50%, -50%) scaleX(5.7)"
                }}
              >
                <Icon as={FaMinus} w="100px" h="10px" />
              </Flex>


              <Flex
                style={{
                  position: "absolute",
                  top: "350px",
                  left: "400px",
                  transform: "translate(-50%, -50%) scaleX(5.7)"
                }}
              >
                <Icon as={FaMinus} w="100px" h="10px" />
              </Flex>
              <Flex
                style={{
                  position: "absolute",
                  top: "323px",
                  left: "447px",
                  transform: "translate(-50%, -50%) scaleY(1)"
                }}
              >
                <Icon as={FaMinus} w="100px" h="10px" transform="rotate(45deg)" />
              </Flex>
              <Flex
                style={{
                  position: "absolute",
                  top: "323px",
                  left: "453px",
                  transform: "translate(-50%, -50%) scaleY(1)"
                }}
              >
                <Icon as={FaMinus} w="100px" h="10px" transform="rotate(-45deg)" />
              </Flex>

              <Flex
                style={{
                  position: "absolute",
                  top: "253px",
                  left: "378px",
                  transform: "translate(-50%, -50%) scaleY(1)"
                }}
              >
                <Icon as={FaMinus} w="100px" h="10px" transform="rotate(45deg)" />
              </Flex>
              <Flex
                style={{
                  position: "absolute",
                  top: "247px",
                  left: "378px",
                  transform: "translate(-50%, -50%) scaleY(1)"
                }}
              >
                <Icon as={FaMinus} w="100px" h="10px" transform="rotate(-45deg)" />
              </Flex>
            </Box>
          </Container>



          <Container width="13%" h="380"  style=
            {{ position: 'absolute', top: '700px', left: '700px' }}>
            <Box style={{ position: 'absolute', top: '-410px', left: '-220px' }}>
              <Flex style={{ position: 'absolute', top: "450px", left: "325px", transform: 'translate(-50%, -50%)' }}
                onMouseEnter={() => handleMouseEnter("Message Packet")}
                onMouseLeave={handleMouseLeave}>
                <Box w={50} h={50} bgColor={bgColor} display="flex" alignItems="center" justifyContent="center" >
                  <img src={Text_Icon} alt="dezip-icon" width="30" height="30" />
                </Box>
              </Flex>

              <Flex style={{ position: 'absolute', top: "450px", left: "375px", transform: 'translate(-50%, -50%)' }}
                onMouseEnter={() => handleMouseEnter("Certificate Message")}
                onMouseLeave={handleMouseLeave}>
                <Box w={50} h={50} bgColor={bgColor} display="flex" alignItems="center" justifyContent="center" >
                  <img src={Certificate_Icon} alt="dezip-icon" width="30" height="30" />
                </Box>
              </Flex>


              <Flex id='Public-Key Decryption Algorithm' style={{ position: 'absolute', top: "550px", left: "400px", transform: 'translate(-50%, -50%)' }}
                onMouseEnter={() => handleMouseEnter("Public-Key Decryption Algorithm")}
                onMouseLeave={handleMouseLeave}>
                <Box w={50} h={50} bgColor={bgColor} display="flex" alignItems="center" justifyContent="center" style={{ borderRadius: '80%' }}>
                  <img src={Open_Lock} alt="dezip-icon" width="30" height="30" />Dp
                </Box>
              </Flex>

              <Flex id='Asymmetric Decryption Algorithm' style={{ position: 'absolute', top: "550px", left: "300px", transform: 'translate(-50%, -50%)' }}
                onMouseEnter={() => handleMouseEnter("Asymmetric Decryption Algorithm")}
                onMouseLeave={handleMouseLeave}>
                <Box w={50} h={50} bgColor={bgColor} display="flex" alignItems="center" justifyContent="center" style={{ borderRadius: '80%' }}>
                  <img src={Open_Lock} alt="dezip-icon" width="30" height="30" />Dc
                </Box>
              </Flex>

              <Flex id='Decompression Function' style={{ position: 'absolute', top: "650px", left: "300px", transform: 'translate(-50%, -50%)' }}
                onMouseEnter={() => handleMouseEnter("Decompression Function")}
                onMouseLeave={handleMouseLeave}>
                <Box w={50} h={50} bgColor={bgColor} display="flex" alignItems="center" justifyContent="center" style={{ borderRadius: '80%' }}>
                  <img src={dezipIcon} alt="dezip-icon" width="30" height="30" />

                </Box>
              </Flex>

              <Flex style={{ position: 'absolute', top: "750px", left: "300px", transform: 'translate(-50%, -50%)' }}
                onMouseEnter={() => handleMouseEnter("Compare")}
                onMouseLeave={handleMouseLeave}>
                <Box w={50} h={50} bgColor={bgColor} display="flex" alignItems="center" justifyContent="center" style={{ borderRadius: '80%' }}>
                  <Icon as={FiCheckCircle} w="8" h="8" pointerEvents="none" />
                </Box>
              </Flex>




              <Flex
                style={{
                  position: "absolute",
                  top: "500px",
                  left: "300px",
                  transform: "translate(-50%, -50%) scaleY(5.7)"
                }}
              >
                <Icon as={FaMinus} w="100px" h="10px" transform="rotate(90deg)" />
              </Flex>

              <Flex
                style={{
                  position: "absolute",
                  top: "500px",
                  left: "400px",
                  transform: "translate(-50%, -50%) scaleY(5.7)"
                }}
              >
                <Icon as={FaMinus} w="100px" h="10px" transform="rotate(90deg)" />
              </Flex>

              <Flex
                style={{
                  position: "absolute",
                  top: "600px",
                  left: "300px",
                  transform: "translate(-50%, -50%) scaleY(5.7)"
                }}
              >
                <Icon as={FaMinus} w="100px" h="10px" transform="rotate(90deg)" />
              </Flex>

              <Flex
                style={{
                  position: "absolute",
                  top: "700px",
                  left: "300px",
                  transform: "translate(-50%, -50%) scaleY(5.7)"
                }}
              >
                <Icon as={FaMinus} w="100px" h="10px" transform="rotate(90deg)" />
              </Flex>

            </Box>
           

          </Container>

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

        </Box>
        



        <Button variant='solid' colorScheme='blue' onClick={() => {
          navigate("/courses/pgp-main")

        }}>
          Back to PGP Main Page
        </Button>

      </Box>

      <Button onClick={handleButtonClick} marginLeft style={{ position: 'absolute', top: '210px', left: '570px' }}>Show Steps</Button>
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
    </Box>
    
  );
};

export default PgPConfidentiality;