import { Box, Flex, Heading, Text, Table, Thead, Tr, Th, Td, TableContainer, Tbody, VStack, Image, Spinner, Button, Input, InputGroup, InputRightElement, HStack } from "@chakra-ui/react";

import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import sleepingCat from "../../assets/sleeping-cat.png"
import { useManagePGP } from "../useManagePGP";
import { useToast, } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


const firestore = firebase.firestore();
const auth = firebase.auth();

export default function ManagePGPKeys() {
    const [searchEmail, setSearchEmail] = useState("");
    const [searchKeyring, setSearchKeyring] = useState(null);
    const [primaryKey, setPrimaryKey] = useState(null);
    const { keyring, loading } = useManagePGP();
    const toast = useToast();
    const handleSearch = async () => {
        if (searchEmail) {
            console.log("Search Email:", searchEmail);
            try {
                const user = await auth.fetchSignInMethodsForEmail(searchEmail);

                if (user && user.length > 0) {
                    const userQuerySnapshot = await firestore
                        .collection("users")
                        .where("email", "==", searchEmail)
                        .get();

                    if (!userQuerySnapshot.empty) {
                        const userDoc = userQuerySnapshot.docs[0];
                        const keyringQuerySnapshot = await userDoc.ref.collection("keyring").get();
                        const keyringData = keyringQuerySnapshot.docs.map(doc => {
                            const data = doc.data();
                            return {
                                email: data.email,
                                publicKey: data.publicKey,
                                createdAt: data.createdAt
                            };
                        });
                        setSearchKeyring(keyringData);
                    }
                }
                else {
                    setSearchKeyring(null);
                    toast({
                        title: "User not found.",
                        description: "Please enter a valid email address.",
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                    });
                }
            } catch (error) {
                console.error("Error fetching data from Firestore:", error);
            }
        }
    };
    const handleSetPrimary = async (newPrimary) => {
        if (primaryKey) {
            try {
                await firestore.collection("users").doc(auth.currentUser.uid).collection("keyring").doc(primaryKey).update({ isPrimary: false });
            } catch (error) {
                console.error("Error updating document:", error);
            }
        }

        try {
            await firestore.collection("users").doc(auth.currentUser.uid).collection("keyring").doc(newPrimary.id).update({ isPrimary: true });
            setPrimaryKey(newPrimary.id);
        } catch (error) {
            console.error("Error updating document:", error);
        }
    };
    useEffect(() => {
        const primary = keyring.find(key => key.isPrimary);
        setPrimaryKey(primary ? primary.id : null);
    }, [keyring]);
    return (
        <Box flex="1" bg="white" borderRadius={"20"} p="6" borderRightWidth={{ md: "1px" }} overflow="scroll">

            {keyring.length === 0 && loading ? (
                <Flex justify="center" align="center" h="100%">
                    <Spinner size="xl" />
                </Flex>
            ) : keyring.length === 0 ? (

                <Flex justify="center" align="center" h="100%">
                    <VStack>
                        <Text fontSize={20} fontWeight="bold">
                            You currently have no keys in your keyring.
                        </Text>
                        <Image maxW={{ base: "100%", sm: "40%" }} src={sleepingCat} />
                    </VStack>

                </Flex>
            ) : (
                <><Heading size="md">
                    Search Any User
                </Heading><HStack>
                        <InputGroup my="4">
                            <Input
                                placeholder="Search by email..."
                                value={searchEmail}
                                onChange={(e) => setSearchEmail(e.target.value)} />
                        </InputGroup>
                        <Button h="2.75rem" size="sm" colorScheme="blue" onClick={handleSearch}>
                            Search
                        </Button>

                    </HStack><TableContainer py="4" display={keyring.length <= 0 ? "none" : ""}>
                        <Heading size="md" mb="4">
                            My Keyring
                        </Heading>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Primary</Th>
                                    <Th>Key Name</Th>
                                    <Th>Email</Th>
                                    <Th>Public Key</Th>
                                    <Th>Time Created<br />(mm/dd/yyyy)</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {keyring.map((key) => (
                                    <Tr key={key.id}>
                                        <Td>
                                            {key.id === primaryKey ? (
                                                <AiFillStar size={23} color="gold" />
                                            ) : (
                                                <AiOutlineStar size={23} color="gold" onClick={() => handleSetPrimary(key)} />
                                            )}
                                        </Td>
                                        <Td>{key.userName ?? "null"}</Td>
                                        <Td>{key.email ?? "null"}</Td>
                                        <Td onClick={() => {
                                            navigator.clipboard.writeText(key.publicKey);
                                            toast({
                                                title: 'Success!',
                                                description: "Copied to clipboard!",
                                                status: 'success',
                                                duration: 3500,
                                                isClosable: true,
                                            });
                                        }}>{key.publicKey.slice(37, 70) + "..." ?? "null"}</Td>
                                        <Td>{key.createdAt ? key.createdAt.toDate().toLocaleDateString() : "null"}</Td>
                                        <Td>
                                            <Button size="sm" colorScheme="blue" onClick={() => {
                                                downloadFile(key.privateKey, "privateKey.txt", key.userName);
                                                downloadFile(key.publicKey, "publicKey.txt", key.userName);
                                            }}>
                                                Export
                                            </Button>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                        {/* Add this after the closing tag of the first Table component */}
                        {searchKeyring !== null && (
                            <>
                                <Heading size="md" my="4">
                                    Search Result
                                </Heading>
                                <Table variant="simple">
                                    <Thead>
                                        <Tr>
                                            <Th>Email</Th>
                                            <Th>Public Key</Th>
                                            <Th>
                                                Time Created
                                                <br />(mm/dd/yyyy)
                                            </Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {searchKeyring.map((key) => (
                                            <Tr key={key.id}>
                                                <Td>{key.email ?? "null"}</Td>
                                                <Td
                                                    onClick={() => {
                                                        navigator.clipboard.writeText(key.publicKey);
                                                        toast({
                                                            title: "Success!",
                                                            description: "Copied to clipboard!",
                                                            status: "success",
                                                            duration: 3500,
                                                            isClosable: true,
                                                        });
                                                    }}
                                                >
                                                    {key.publicKey.slice(37, 70) + "..." ?? "null"}
                                                </Td>
                                                <Td>
                                                    {key.createdAt
                                                        ? key.createdAt.toDate().toLocaleDateString()
                                                        : "null"}
                                                </Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            </>
                        )}
                    </TableContainer></>
            )}
        </Box>
    );

}
function downloadFile(data, name, userName) {
    const blob = new Blob([data], { type: "octet-stream" });

    const href = URL.createObjectURL(blob);

    const a = Object.assign(document.createElement("a"), {
        href, style: "display:none",
        download: userName + "_" + name,
    });
    document.body.appendChild(a);

    a.click();
    URL.revokeObjectURL(href);
    a.remove();
}