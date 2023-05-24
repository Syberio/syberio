import React from "react";
import { Flex } from "@chakra-ui/react";
import Footer from "../sections/landing_sections/Footer";
import PgPConfidentiality from "../sections/courses/PgPConfidentiality";
import AuthenticatedNavbar from "../sections/navbars/AuthenticatedNavbar";
export default function PgPConfidentialityLayout() {
    return (

        <><><Flex align={'center'} direction='column' >
            <AuthenticatedNavbar />
        </Flex><PgPConfidentiality></PgPConfidentiality></></>

    );
}
