import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, IconButton, Stack, Text, Button, Divider, Avatar, HStack, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";

import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { firebaseConfig } from "../../../utils/Firebase";
import { auth, firestore } from "../../../utils/Firebase"



export default function Support() {
    return (
        <Box flex="1" bg="white" borderRadius={"20"} p="6" borderRightWidth={{ md: "1px" }}>
            <Heading size="md" mb="4">
                Now you are at support
            </Heading>
        </Box>
    );

}