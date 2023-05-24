import { Flex } from "@chakra-ui/react";
import React from "react";
import AdminPanel from "../sections/AdminPanel";
export default function AdminPanelLayout(props) {
    return (
        <Flex align={'center'} direction='column' background={'#fafafa'}>
            <AdminPanel/>
        </Flex>
    );
}