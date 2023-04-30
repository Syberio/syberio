import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, IconButton, Stack, Text, Button, Divider, Avatar, HStack, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";

import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { firebaseConfig } from "../../../utils/Firebase";

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const auth = firebase.auth();



export default function Profile(props) {
    const { name, surname, bgColor, progress, gender, country } = props.userData;

    return (
        <Box flex="1" bg="white" borderRadius={"20"} p="6" borderRightWidth={{ md: "1px" }}>

        </Box>
    );

}