import React from "react";
import { Box} from "@chakra-ui/react";
import logo from '../../components/assets/syberio-logo-removebg.png'

export default function Logo(props) {
  return (
    <Box {...props} >
      <img src={logo} alt="Logo" width={'173'}height='32' />
    </Box>
  );
}
