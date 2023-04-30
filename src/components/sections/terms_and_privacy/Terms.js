import React from 'react';
import {
    Flex,
    VStack,
    Box,
    Text,
} from '@chakra-ui/react';

export default function TermsOfConditions() {
    return (
        <Flex
            align="center"
            justify={{ base: "center", md: "space-around", xl: "space-between" }}
            justifyContent={'center'}
            direction={{ base: "column-reverse", md: "row" }}
            wrap="no-wrap"
            minH="40vh"
            px={20}
            mb={46}>
            <VStack spacing={2}>
                <Text fontSize={"4xl"} as="b">Terms Of Service</Text>
                <Box py={10}>
                    <VStack align={'left'} spacing={5}>
                        <Text fontSize={"md"}>Welcome to MATFORIS, INC ("Company," "we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of our website (the "Site") and our products, software, services, and applications (collectively, the "Services"). By accessing or using our Services, you agree to these Terms, as updated from time to time. Please read these Terms carefully before accessing or using our Services.</Text>
                        <Text fontSize={"xl"} as="b">1. Use of Our Services</Text>
                        <Text fontSize={"md"}>You may use our Services only in compliance with these Terms and all applicable laws, rules, and regulations. You may not:
                            {<br></br>} {<br></br>}a. violate or attempt to violate our security measures or interfere with the proper functioning of our Services;
                            {<br></br>}b. access or use our Services for any illegal or unauthorized purpose;
                            {<br></br>}c. use our Services to harass, abuse, or harm another person or entity;
                            {<br></br>}d. use our Services to send unsolicited communications or spam;
                            {<br></br>}e. use our Services to infringe upon the intellectual property rights of others;
                            {<br></br>}f. use our Services to transmit viruses, malware, or other harmful code. </Text>
                        <Text fontSize={"xl"} as="b">2. User Accounts</Text>
                        <Text fontSize={"md"}>To access certain features of our Services, you may be required to create an account with us. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or mobile device. You agree to accept responsibility for all activities that occur under your account.</Text>
                        <Text fontSize={"xl"} as="b">3. Intellectual Property</Text>
                        <Text fontSize={"md"}>Our Services and all content and materials included on or otherwise made available through our Services are the exclusive property of MATFORIS, INC or its licensors. You may not use our Services or any content or materials included on or otherwise made available through our Services for any commercial purposes without our express written consent.</Text>
                        <Text fontSize={"xl"} as="b">4. Links to Third-Party Sites</Text>
                        <Text fontSize={"md"}>Our Services may contain links to third-party websites or resources. We provide these links only as a convenience and are not responsible for the content, products, or services on or available from those websites or resources. You acknowledge and agree that we are not responsible or liable for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, products, or services available on or through any such website or resource.</Text>
                        <Text fontSize={"xl"} as="b">5. Disclaimers and Limitations of Liability</Text>
                        <Text fontSize={"md"}>Our Services are provided "as is" and without warranty of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that our Services will be uninterrupted, error-free, or free of viruses or other harmful components.</Text>
                        <Text fontSize={"xl"} as="b">6. Governing Law and Dispute Resolution</Text>
                        <Text fontSize={"md"}>These Terms shall be governed by and construed in accordance with the laws of Turkey, without giving effect to any principles of conflicts of law. Any dispute arising out of or relating to these Terms or the use of our Services shall be resolved by binding arbitration in accordance with the rules of the Istanbul Arbitration Center, and judgment upon the award rendered by the arbitrator(s) may be entered in any court having jurisdiction thereof.</Text>
                        <Text fontSize={"xl"} as="b">7. Changes to These Terms</Text>
                        <Text fontSize={"md"}>We reserve the right to modify these Terms at any time in our sole discretion. Any changes will be effective immediately upon posting the revised Terms on our Site. Your continued use of our Services after the posting of any revised Terms constitutes your agreement to be bound by such revised Terms.</Text>
                        <Text fontSize={"xl"} as="b">Contact Us</Text>
                        <Text fontSize={"md"}>If you have any questions or concerns about these Terms or our Services, please contact us at info@matforis.com.</Text>
                        <Text fontSize={"md"} as="b">{<br></br>}{<br></br>}Last updated: [17/04/2023]</Text>
                    </VStack>

                </Box>
            </VStack>
        </Flex>
    );
}
