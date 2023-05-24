import React from "react";
import { Flex } from "@chakra-ui/react";
import AuthenticatedNavbar from "../sections/navbars/AuthenticatedNavbar";
import EncryptCheckFiles from "../sections/courses/EncryptCheckFiles";

export default function EncryptCheckFilesLayout() {
    return (
        <><><Flex align={'center'} direction='column' >
            <AuthenticatedNavbar />
        </Flex><EncryptCheckFiles></EncryptCheckFiles></></>
    );
}
