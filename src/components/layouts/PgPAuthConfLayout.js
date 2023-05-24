import React from "react";
import { Flex } from "@chakra-ui/react";
import AuthenticatedNavbar from "../sections/navbars/AuthenticatedNavbar";
import Footer from "../sections/landing_sections/Footer";
import PgPAuthConf from "../sections/courses/PgPAuthConf";

export default function PgPAuthConfLayout() {
    return (
        <><><Flex align={'center'} direction='column' >
            <AuthenticatedNavbar />
        </Flex><PgPAuthConf></PgPAuthConf></></>
    );
}
