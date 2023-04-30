import { Flex } from "@chakra-ui/react";
import React from "react";
import CompleteRegistration from "../sections/login_and_register/CompleteRegistration";
export default function CompleteRegistrationLayout(props) {
    return (
        <Flex align={'center'} direction='column' background={'#fafafa'}>
            <CompleteRegistration></CompleteRegistration>
        </Flex>
    );
}