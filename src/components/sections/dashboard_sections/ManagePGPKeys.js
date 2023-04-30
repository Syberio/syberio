import { Box, Flex, Heading, Text, Table, Thead, Tr, Th, Td, TableContainer, Tbody, VStack, Image, Spinner, Button } from "@chakra-ui/react";

import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { firebaseConfig } from "../../../utils/Firebase";
import sleepingCat from "../../assets/sleeping-cat.png"
import { useManagePGP } from "../useManagePGP";
import { useToast, } from "@chakra-ui/react";

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const auth = firebase.auth();

export default function ManagePGPKeys() {
    // TODO: change loading with according to the pgp keyring hook
    const { keyring, loading } = useManagePGP();
    const toast = useToast();
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
                <TableContainer py="4" display={keyring.length <= 0 ? "none" : ""}>
                    <Heading size="md" mb="4">
                        My Keyring
                    </Heading>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Key Name</Th>
                                <Th>Email</Th>
                                <Th>Public Key</Th>
                                <Th>
                                    Time Created<br />(mm/dd/yyyy)
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {keyring.map((key) => (
                                <Tr key={key.id}>
                                    <Td>{key.userName ?? "null"}</Td>
                                    <Td>{key.email ?? "null"}</Td>
                                    <Td onClick={() => {
                                        navigator.clipboard.writeText(key.publicKey)
                                        toast({
                                            title: 'Success!',
                                            description: "Copied to clipboard!",
                                            status: 'success',
                                            duration: 3500,
                                            isClosable: true,
                                        })
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
                </TableContainer>
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