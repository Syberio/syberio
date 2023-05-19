import React, { useState } from "react";
import {
    Box,
    Flex,
    Heading,
    IconButton,
    Stack,
    Text,
    Button,
    Divider,
    Avatar,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    VStack,
    FormControl,
    FormLabel,
    Switch,
} from "@chakra-ui/react";
import { EditIcon, CheckIcon } from "@chakra-ui/icons";



export default function Profile(props) {
    const { name, surname, bgColor, progress, gender, country } = props.userData;
    const [editMode, setEditMode] = useState(false);

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    return (
        <Box flex="1" bg="white" borderRadius={"20"} p="6" borderRightWidth={{ md: "1px" }}>
            <HStack justifyContent="end">
                <IconButton
                    icon={editMode ? <CheckIcon /> : <EditIcon />}
                    onClick={toggleEditMode}
                    colorScheme={editMode ? "green" : "blue"}
                    variant="outline"
                    isRound
                />
            </HStack>
            <Divider my={4} />
            <VStack spacing={5} alignItems="start">
                <HStack spacing={5}>
                    <Avatar size="2xl" name={name + " " + surname} bg={bgColor} color="white" />
                    <VStack spacing={2} alignItems="start">
                        <Text fontSize="2xl" fontWeight="bold">
                            {name + " " + surname}
                        </Text>
                        <Text fontSize="md" color="gray.500">
                            {country}
                        </Text>
                    </VStack>
                </HStack>
                <Stack direction={{ base: "column", md: "row" }} spacing={8} width="full">
                    <FormControl display="flex" alignItems="center">
                        <FormLabel htmlFor="email-alerts" mb="0">
                            Email alerts
                        </FormLabel>
                        <Switch id="email-alerts" colorScheme="blue" />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="gender">Gender</FormLabel>
                        {editMode ? (
                            <Input type="text" defaultValue={gender} id="gender" />
                        ) : (
                            <Text>{gender}</Text>
                        )}
                    </FormControl>
                </Stack>
                <Stack spacing={4}>
                    <Text fontWeight="bold">About</Text>
                    {editMode ? (
                        <Input
                            type="text"
                            defaultValue={"I am a " + gender + " from " + country + "."}
                            id="about"
                        />
                    ) : (
                        <Text>{"I am a " + gender + " from " + country + "."}</Text>
                    )}
                </Stack>
            </VStack>
        </Box>
    );
}
