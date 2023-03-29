import Login from "../sections/Login";
import { Flex } from "@chakra-ui/react";
import Navbar from "../sections/Navbar";
import React from "react";
import Footer from "../sections/Footer";

export default function LoginLayout(props) {
    return (
        <Flex align={'center'} direction='column' background={'#fafafa'} >
            <Login></Login>
        </Flex>
    );
}