import React from 'react';
import {
    Flex,
    VStack,
    Box,
    Text,
} from '@chakra-ui/react';

export default function PrivacyPolicy() {
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
                <Text fontSize={"4xl"} as="b">Privacy Policy</Text>
                <Box py={10}>
                    <VStack align={'left'} spacing={5}>
                        <Text fontSize={"md"}>Welcome to MATFORIS, INC ("MATFORIS", "we", "us" or "our"). At MATFORIS, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and disclose information about you when you use our website and our services.{<br></br>}{<br></br>}By accessing or using our website and our services, you agree to the terms of this Privacy Policy.</Text>
                        <Text fontSize={"xl"} as="b">1. Information We Collect</Text>
                        <Text fontSize={"md"}>We collect information about you when you use our website and our services, including:
                            {<br></br>} {<br></br>}a. Information you provide to us: We collect information you provide to us, such as your name, email address, phone number, and any other information you choose to provide when you contact us or use our services.
                            {<br></br>}b. Information we collect automatically: We collect certain information automatically when you use our website and our services, such as your IP address, browser type, device type, and operating system.
                            {<br></br>}c. Information we receive from third parties: We may receive information about you from third parties, such as social media platforms, if you choose to connect your social media account to our services.
                        </Text>
                        <Text fontSize={"xl"} as="b">2. How We Use Your Information</Text>
                        <Text fontSize={"md"}>We use the information we collect to:{<br></br>}{<br></br>}
                            a. Provide and improve our services;
                            {<br></br>}b. Respond to your inquiries and requests;
                            {<br></br>}c. Send you marketing communications, if you have opted in to receive them;
                            {<br></br>}d. Monitor and analyze trends, usage, and activities in connection with our website and our services;
                            {<br></br>}e. Detect, investigate, and prevent fraud and other illegal activities; and
                            {<br></br>}f. Comply with our legal obligations.
                        </Text>
                        <Text fontSize={"xl"} as="b">3. How We Share Your Information</Text>
                        <Text fontSize={"md"}>We may share your information with:{<br></br>}{<br></br>}
                            a. Our service providers and business partners who help us provide and improve our services;
                            {<br></br>}b. Third parties in connection with a merger, acquisition, or sale of our business;
                            {<br></br>}c. Law enforcement or other government agencies, if required by law or if we believe disclosure is necessary to protect our rights or the rights of others;
                            {<br></br>}d. Other third parties with your consent or at your direction; and
                            {<br></br>}e. Other third parties as necessary to fulfill the purposes for which you provided the information.
                        </Text>
                        <Text fontSize={"xl"} as="b">4. Your Choices</Text>
                        <Text fontSize={"md"}>You can choose not to provide certain information to us, but this may limit your ability to use our services.{<br></br>}You can opt out of receiving marketing communications from us at any time by following the instructions in the communications or by contacting us at [info@matforis.com].</Text>
                        <Text fontSize={"xl"} as="b">5. Data Security</Text>
                        <Text fontSize={"md"}>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, no data security measures can guarantee 100% security.</Text>
                        <Text fontSize={"xl"} as="b">6. Children's Privacy</Text>
                        <Text fontSize={"md"}>Our website and our services are not directed to children under the age of 13. We do not knowingly collect or solicit personal information from anyone under the age of 13. If we become aware that we have collected personal information from a child under the age of 13, we will delete that information as quickly as possible.</Text>
                        <Text fontSize={"xl"} as="b">7. Changes to This Privacy Policy</Text>
                        <Text fontSize={"md"}>We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or by posting a notice on our website prior to the change becoming effective. Your continued use of our website and our services after the effective date of the updated Privacy Policy constitutes your acceptance of the updated Privacy Policy.</Text>
                        <Text fontSize={"xl"} as="b">Contact Us</Text>
                        <Text fontSize={"md"}>If you have any questions or concerns about this Privacy Policy or our Services, please contact us at info@matforis.com.</Text>
                        <Text fontSize={"md"} as="b">{<br></br>}{<br></br>}Last updated: [17/04/2023]</Text>

                    </VStack>

                </Box>
            </VStack>
        </Flex>
    );
}
