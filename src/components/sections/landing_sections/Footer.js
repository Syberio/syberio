import { Container, Stack, Text, Button, Input, Divider } from '@chakra-ui/react'
import * as React from 'react'
import Logo from '../../ui/Logo';
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();;

  return (
    <Container as="footer" role="contentinfo" maxW='-webkit-fit-content'  >
      <Stack
        spacing="8"
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        py={{ base: '12', md: '16' }}
      >
        <Stack spacing={{ base: '6', md: '8' }} align="start">
          <Logo />
          <Text color="muted">Learn security concepts remarkably fast.</Text>
        </Stack>
        <Stack
          direction={{ base: 'column-reverse', md: 'column', lg: 'row' }}
          spacing={{ base: '12', md: '8' }}
        >

          <Stack direction="row" spacing="8">
            <Stack spacing="4" minW="36" flex="1">
              <Text fontSize="sm" fontWeight="semibold" color="subtle">
                Company
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link" onClick={() => {
                  navigate("/");
                }}>Syberio</Button>
                <Button variant="link" onClick={() => {
                  navigate("/support");
                }}>Support</Button>
              </Stack>
            </Stack>

            <Stack spacing="4" minW="36" flex="1">
              <Text fontSize="sm" fontWeight="semibold" color="subtle">
                Legal
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button variant={'link'} onClick={() => {
                  navigate("/privacy");
                }}>Privacy</Button>
                <Button variant={'link'} onClick={() => {
                  navigate("/terms");
                }}>Terms</Button>
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing="4">


          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
      >
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} MATFORIS, Inc. All rights reserved.
        </Text>

      </Stack>

    </Container>
  );
};

export default Footer;



