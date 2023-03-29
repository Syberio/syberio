import React from "react";
import { Flex, Stack,Box } from "@chakra-ui/react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import PGPKeys from "../sections/PGPKeys";
export default function CreatePGPKeysLayout() {
    return (
        <><><Flex background={'#fafafa'} align={'center'} direction='column'  >
            <Navbar></Navbar>
        </Flex><PGPKeys></PGPKeys></><Footer></Footer></>
    );
}
