import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import landingfirst from '../../components/assets/landing-first-wo-bg.png'
import success from '../../components/assets/success.png'
import industryleading from '../../components/assets/industryleading.png'
import collab from '../../components/assets/collab.png'
import {
    Box,
    Button,
    Flex,
    Image,
    Heading,
    Stack,
} from "@chakra-ui/react";

export default function Roadmap({
}) {
    return (
        <><><Flex
            align="center"
            justify={{ base: "center", md: "space-around", xl: "space-between" }}
            justifyContent={'center'}
            direction={{ base: "column-reverse", md: "row" }}
            wrap="no-wrap"
            minH="40vh"
            px={20}
            mb={46}
        >
            <Stack
                spacing={12}
                w={{ base: "80%", md: "40%" }}
                align={["center", "center", "flex-start", "flex-start"]}
            >
                <Heading
                    as="h2"
                    size="xl"
                    fontWeight="bold"
                    color="primary.800"
                    textAlign={["center", "center", "left", "left"]}
                >
                    Learning has never been this easier
                </Heading>
                <Heading
                    as="h2"
                    size="md"
                    color="primary.800"
                    opacity="0.8"
                    fontWeight="normal"
                    lineHeight={1.5}
                    textAlign={["center", "center", "left", "left"]}
                >
                    The content is presented in a clear and concise manner, making it easy for users to understand and absorb. Also with the help of the animations and interactivity, we make it as fun as possible.
                </Heading>
            </Stack>
            <Box w={{ base: "70%", sm: "50%", md: "40%" }} mb={{ base: 12, md: 0 }}>
                {/* TODO: Make this change every X secs */}
                <Image src={success} size="100%" rounded="1rem" />
            </Box>
        </Flex>
            <Flex
                align="center"
                justify={{ base: "center", md: "space-around", xl: "space-between" }}
                justifyContent={'center'}
                direction={{ base: "column", md: "row" }}
                wrap="no-wrap"
                minH="40vh"
                px={20}
                mb={46}
            >
                <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
                    {/* TODO: Make this change every X secs */}
                    <Image src={industryleading} size="100%" rounded="1rem" />
                </Box>
                <Stack
                    spacing={12}
                    w={{ base: "80%", md: "40%" }}
                    align={["center", "center", "flex-start", "flex-start"]}
                >
                    <Heading
                        as="h2"
                        size="xl"
                        fontWeight="bold"
                        color="primary.800"
                        textAlign={["center", "center", "left", "left"]}
                    >
                        Integration with industry-leading tools
                    </Heading>
                    <Heading
                        as="h2"
                        size="md"
                        color="primary.800"
                        opacity="0.8"
                        fontWeight="normal"
                        lineHeight={1.5}
                        textAlign={["center", "center", "left", "left"]}
                    >
                        Syberio integrates with popular security tools and platforms such as like OpenPGP Services, allowing users to practice with real-world tools and technologies.
                    </Heading>
                </Stack>

            </Flex></><Flex
                align="center"
                justify={{ base: "center", md: "space-around", xl: "space-between" }}
                justifyContent={'end'}
                direction={{ base: "column-reverse", md: "row" }}
                wrap="no-wrap"
                minH="40vh"
                px={20}
                mb={46}
            >
                <Stack
                    spacing={12}
                    w={{ base: "80%", md: "40%" }}
                    align={["center", "center", "flex-start", "flex-start"]}
                >
                    <Heading
                        as="h1"
                        size="xl"
                        fontWeight="bold"
                        color="primary.800"
                        textAlign={["center", "center", "left", "left"]}
                    >
                        Collaboration tools
                    </Heading>
                    <Heading
                        as="h2"
                        size="md"
                        color="primary.800"
                        opacity="0.8"
                        fontWeight="normal"
                        lineHeight={1.5}
                        textAlign={["center", "center", "left", "left"]}
                    >
                        Users can collaborate with their peers and share resources such as sending/receiving encrypted messages and sharing public keys through the Syberio's built-in collaboration tools.
                    </Heading>
                </Stack>
                <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
                    {/* TODO: Make this change every X secs */}
                    <Image src={collab} size="100%" rounded="1rem" />
                </Box>
            </Flex></>
    );
}

Roadmap.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string
};

Roadmap.defaultProps = {
    title: "Syberio",
    subtitle:
        "This is the subheader section where you describe the basic benefits of your product",
    image: landingfirst,
    ctaText: "Create your account now",
    ctaLink: "/signup"
};
