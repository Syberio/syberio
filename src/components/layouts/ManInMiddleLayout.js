import React from "react";
import { Flex,Stack } from "@chakra-ui/react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import ManInMiddle from "../sections/ManInMiddle";
export default function ManInMiddleLayout() {
    return (
        
        <><><Flex align={'center'} direction='column' >
            <Navbar></Navbar>
        </Flex><ManInMiddle></ManInMiddle></><Footer></Footer></>
        
    );
}
