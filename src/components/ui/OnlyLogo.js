import React from "react";
import { Box} from "@chakra-ui/react";
import logo from '../../components/assets/onlylogo.png'

export default function OnlyLogo(props) {
  return (
    <Box {...props} >
      <img src={logo} alt="OnlyLogo" width={'80'}height='32' />
    </Box>
  );
}
