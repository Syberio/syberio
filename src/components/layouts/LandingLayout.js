import React from "react";
import { Flex,Stack } from "@chakra-ui/react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import ModalCard from "../sections/ModalCard";
import Roadmap from "../sections/Roadmap";
export default function LandingLayout(props) {
    return (
        <Flex
            background={'#fafafa'}
            direction="column"
            align="center"
            {...props}
        >
            <Navbar />
            {props.children}
            <Stack align={'center'}>
            <ModalCard></ModalCard>
            <Roadmap></Roadmap>
            </Stack>
            <Footer></Footer>

        </Flex>
    );
}
