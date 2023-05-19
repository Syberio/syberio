import { Flex } from "@chakra-ui/react";
import React from "react";
import Register from "../sections/login_and_register/Register";
import { useAuth } from "../sections/useAuth";


export default function RegisterLayout() {

    return (
        <Flex align={'center'} direction='column' background={'#fafafa'}>
            <Register></Register>
        </Flex>
    );
}