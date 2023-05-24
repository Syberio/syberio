/*TODO: Change privacy settings of Firestore in firebase.console (before prod)*/
/*TODO: Maybe change every onCLick with arrow function? */

import React from 'react';
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    VStack,
    HStack,
    Avatar,
    Select,
    Center,
    Box,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import countries from '../../../utils/countries.json';
import genders from '../../../utils/genders.json';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../useAuth';
import { useToast } from '@chakra-ui/react';

export default function CompleteRegistration({ email, preUid, password }) {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [country, setCountry] = useState("");
    const [gender, setGender] = useState("");
    const [isHovered, setIsHovered] = useState(false);
    const [bgColor, setBgColor] = useState("gray.300"); // default background color
    const [isColorOptionsVisible, setIsColorOptionsVisible] = useState(false);
    const navigate = useNavigate();
    const { handleCompleteRegister, setIsLoggedIn, handleLogout } = useAuth();
    const toast = useToast();

    const handleHover = () => {
        setIsHovered(true);
        setIsColorOptionsVisible(true);
    };
    const handleLeave = () => {
        setIsHovered(false);
        setIsColorOptionsVisible(false);
    };

    const handleClick = (newColor) => setBgColor(newColor);

    const bg = useColorModeValue(() => bgColor);

    const colorOptions = [
        "gray.300",
        "red.200",
        "green.200",
        "blue.200",
        "purple.200",
    ];
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (name && surname && country) {

            await handleCompleteRegister(email, name, surname, country, gender, bgColor, preUid, password);
            setIsLoggedIn(true);
            const user = firebase.auth().currentUser;

            if (user) {
                firebase.firestore().collection("users").doc(preUid).update({
                    registrationCompleted: true,
                });
            }
            setName('');
            setSurname('');
            setCountry('');
            setGender('');
            setBgColor('');
            toast({
                title: 'Success!.',
                description: "Welcome to Syberio, Enjoy!",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
            navigate("/");
        }
        else {
            toast({
                title: 'An error occured!.',
                description: "You need to fill out the required fields!",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
    };

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                    Complete Your Registration
                </Heading>
                <FormControl id="UserIcon">
                    <Center display={"center"}>
                        <VStack direction='column' spacing={2}>
                            <FormLabel>User Icon</FormLabel>
                            <Flex position="relative">
                                <Avatar
                                    name={(name && surname) ? (name + " " + surname) : (name || surname)}
                                    color="white"
                                    size={'xl'}
                                    bg={bg}
                                    onMouseEnter={handleHover}
                                    onMouseLeave={handleLeave}
                                >
                                    {/* Avatar content here */}
                                </Avatar>
                                {isHovered && isColorOptionsVisible && (
                                    <Box
                                        display={'flex'}
                                        flexDirection={'row'}
                                        position="absolute"
                                        bottom="full"
                                        left="50%"
                                        transform="translate(-50%, 10px)"
                                        bg="white"
                                        boxShadow="md"
                                        p="2"
                                        borderRadius="md"
                                        onMouseEnter={handleHover}
                                        onMouseLeave={handleLeave}
                                    >
                                        {colorOptions.map((color) => (
                                            <Box
                                                key={color}
                                                display={'flex'}
                                                flexDirection={'row'}
                                                w="20px"
                                                h="20px"
                                                bg={color}
                                                borderRadius="full"
                                                cursor="pointer"
                                                onClick={() => handleClick(color)}
                                                mx="1"
                                                my="2"
                                            />
                                        ))}
                                    </Box>
                                )}
                            </Flex>
                        </VStack>
                    </Center>
                </FormControl>
                <HStack>
                    <FormControl id="name" isRequired>
                        <Stack direction={'column'}>
                            <FormLabel >Name</FormLabel>
                            <Input
                                placeholder="John"
                                type="text"
                                onChange={(event) => setName(event.target.value)}
                            />
                        </Stack>

                    </FormControl>
                    <FormControl id="surname" isRequired>
                        <Stack direction={'column'}>
                            <FormLabel>Surname</FormLabel>
                            <Input
                                placeholder="Doe"
                                type="text"
                                onChange={(event) => setSurname(event.target.value)}
                            />
                        </Stack>
                    </FormControl>
                </HStack>
                <FormControl id="country" isRequired>
                    <FormLabel>Country</FormLabel>
                    <Select
                        placeholder="Select country"
                        value={country}
                        onChange={(event) => setCountry(event.target.value)}
                        size="md"
                    >
                        {countries.map((country) => (
                            <option key={country.code} value={country.name}>
                                {country.name}
                            </option>
                        ))}
                    </Select>
                </FormControl>
                <FormLabel>Gender</FormLabel>
                <Select
                    placeholder="Select your gender"
                    value={gender}
                    onChange={(event) => setGender(event.target.value)}
                    size="md"
                >
                    {genders.map((gender, index) => (
                        <option key={index} value={gender.name}>
                            {gender.name}
                        </option>
                    ))}
                </Select>
                <Stack spacing={6} direction={['column', 'row']}>

                    <Button
                        onClick={handleSubmit}
                        bg={'blue.400'}
                        color={'white'}
                        w="full"
                        _hover={{
                            bg: 'blue.500',
                        }}>
                        Submit
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    );
}