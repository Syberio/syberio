import React from "react";
import { Flex } from "@chakra-ui/react";
import AuthenticatedNavbar from "../sections/navbars/AuthenticatedNavbar";
import Footer from "../sections/landing_sections/Footer";
import IPFS from "../sections/courses/IPFS";

export default function IPFSLayout() {
    return (
        <><><Flex align={'center'} direction='column' >
            <AuthenticatedNavbar />
        </Flex><IPFS></IPFS></><Footer></Footer></>
    );
}
