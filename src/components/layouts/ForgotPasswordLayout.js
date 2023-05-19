import ForgotPassword from "../sections/login_and_register/ForgotPassword";
import { Flex } from "@chakra-ui/react";
import React from "react";

export default function ForgotPasswordLayout(props) {
    return (
        <Flex align={'center'} direction='column' background={'#fafafa'} >
            <ForgotPassword></ForgotPassword>
        </Flex>
    );
}