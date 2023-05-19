/*TODO: Update the drawer model according to the authenticatednavbar and fix the buttons in normal navbar*/
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Stack,
  useDisclosure,
  IconButton,
  Container,
  HStack,
  Link
} from '@chakra-ui/react'
import React from "react";
import { HamburgerIcon } from '@chakra-ui/icons'


function DrawerModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()

  return (
    <>
      <IconButton
        onClick={onOpen}
        variant="ghost"
        icon={<HamburgerIcon fontSize="1.25rem" />}
        aria-label="Open Menu"

      />
      <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Stack spacing={'48px'} >
              <Link>Dashboard</Link>
              <Link>Courses</Link>
              <Link>Support</Link>
            </Stack>
            <Container></Container>
            <Stack alignItems={'center'} >
              <HStack spacing="6" >
                <Button variant="ghost">Sign in</Button>
                <Button colorScheme={'blue'}>Sign up</Button>
              </HStack>
            </Stack>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default DrawerModal;