import React from 'react';
import { useState , useEffect} from 'react';


import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Checkbox, 
  CheckboxGroup,
  Stack, 
  Heading,
  FormControl,
  FormLabel,
  Select,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Tab,
  Image
} from '@chakra-ui/react';

export default function KeySizeSelector ({keyType}, props) {

  const [keySize, setKeySize] = useState("");
 



  const data = [
    {
      keyType: "rsa",
      size: 1024
    },
    {
      keyType:"rsa",
      size:2048
    },
    {
      keyType:"dsa",
      size: 1024
    },
    {
      keyType:"dsa",
      size: 2048
    },
    {
      keyType:"ecc",
      size: 192
    },
    {
      keyType:"ecc",
      size:256
    },
    {
      keyType:"ecc",
      size:521
    }
  ]

  let [listItems, setListItems] = useState("");

  useEffect(() => {
    const list = () => data.filter(item => item.keyType === keyType).map((item,index) => <option value={item.size} key={index}>{item.size}</option>)
    setListItems(list)
  }, [keyType])

  return(
   
      <Box>
      <Select size='sm'  required marginTop='2vh' onChange={(e)=> setKeySize(e.target.value)} >
      <option disabled={true} value="">Choose Size</option>
       {listItems}
      </Select>
      
      </Box>
  );

  




}