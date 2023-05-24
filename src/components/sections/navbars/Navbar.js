import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import Logo from '../../ui/Logo'
import DrawerModal from '../landing_sections/DrawerModal'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })
  const navigate = useNavigate();
  return (
    <>
      <Box
        as="section"
        pb={{
          base: '32',
          md: '24',
        }}

      ></Box>
      <Box
        zIndex={20}
        position={'fixed'}
        as="section"
      >
        <Box
          as="nav"
          bg="bg-surface"
          boxShadow={useColorModeValue('sm', 'sm-dark')}
          background={'#fafafa'}
          opacity='0.9'
          zIndex={10} // Add z-index here
          width="100%" // Add width here
        >
          <Container
            maxW='-moz-fit-content'
            py={{
              base: '4',
              lg: '5',
            }}
          >
            <HStack spacing="80" justify="space-between">
              <Link to='/'>
                <Logo />
              </Link>
              {isDesktop ? (
                <Flex justify="space-between" flex="1">
                  <ButtonGroup variant="ghost" spacing="12">

                    <Button onClick={() => {
                      navigate("/");
                    }}>Product</Button>
                    <Button onClick={() => {
                      navigate("/terms");
                    }}>Legal</Button>
                    <Button onClick={() => {
                      navigate("/support");
                    }}>Support</Button>


                  </ButtonGroup>
                  <Container spacing="3"></Container>
                  <HStack spacing="3">

                    <Button fontWeight="bold" variant="ghost" onClick={() => {
                      navigate("/login");
                    }}>Log in</Button>
                    <Button colorScheme={'blue'} onClick={() => {
                      navigate("/register");
                    }}>Sign up</Button>

                  </HStack>
                </Flex>
              ) : (
                <DrawerModal />
              )}
            </HStack>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default Navbar
