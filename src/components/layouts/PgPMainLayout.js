import React from "react";
import { Flex } from "@chakra-ui/react";
import Footer from "../sections/landing_sections/Footer";
import PgPMain from "../sections/courses/PgPMain";
import AuthenticatedNavbar from "../sections/navbars/AuthenticatedNavbar";
export default function PgPMainLayout() {
    return (

        <><><Flex align={'center'} direction='column' >
            <AuthenticatedNavbar />
        </Flex><PgPMain></PgPMain></><Footer></Footer></>

    );
}
