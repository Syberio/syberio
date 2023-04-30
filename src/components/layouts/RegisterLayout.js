import { Flex } from "@chakra-ui/react";
import React from "react";
import Register from "../sections/login_and_register/Register";
import CompleteRegistration from "../sections/login_and_register/CompleteRegistration";
import { useAuth } from "../sections/useAuth";
import { useState,useEffect } from "react";
export default function RegisterLayout() {
    const {isRegistered}=useAuth();
    console.log(isRegistered+"neymişbu")

    return (
        <Flex align={'center'} direction='column' background={'#fafafa'}>
            {isRegistered ? <CompleteRegistration /> : <Register />}

        </Flex>
    );
}