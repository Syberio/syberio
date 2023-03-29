import { Flex } from "@chakra-ui/react";
import Navbar from "../sections/Navbar";
import React from "react";
import Footer from "../sections/Footer";
import Register from "../sections/Register";

export default function RegisterLayout(props) {
    return (
        <Flex align={'center'} direction='column' background={'#fafafa'}>
            <Register></Register>
        </Flex>
    );
}