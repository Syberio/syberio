import Login from "../sections/login_and_register/Login";
import { Flex } from "@chakra-ui/react";
import React from "react";

export default function LoginLayout(props) {
    return (
        <Flex align={'center'} direction='column' background={'#fafafa'} >
           <Login></Login>
        </Flex>
    );
}