import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import landingfirst from '../../components/assets/landing-first-wo-bg.png'
import {
    Box,
    Button,
    Flex,
    Image,
    Heading,
    Stack,
    Text,
    HStack
} from "@chakra-ui/react";
import { TypeAnimation } from 'react-type-animation';
export default function Hero({
    title,
    subtitle,
    image,
    ctaLink,
    ctaText,
    ctaTry,
    ctaTryLink,
    ...rest
}) {
    return (
        <Flex
            align="center"
            justify={{ base: "center", md: "space-around", xl: "space-between" }}
            direction={{ base: "column-reverse", md: "row" }}
            wrap="no-wrap"
            minH="70vh"
            px={20}
            mb={16}
            {...rest}
        >
            <Stack
                spacing={14}
                w={{ base: "80%", md: "40%" }}
                align={["center", "center", "flex-start", "flex-start"]}
            >
                <Heading
                position={'absolute'}
                    as="h1"
                    size="xl"
                    fontWeight="bold"
                    color="primary.800"
                    textAlign={["center", "center", "left", "left"]}
                >

                    {<TypeAnimation
                        // Same String at the start will only be typed once, initially
                        sequence={[
                            "Security concepts, simplified.",
                            1000,
                            'Security concepts, streamlined.',
                            1000,
                            'Security concepts, interpreted.',
                            1000,
                            'Security concepts, clarified.',
                            1000,
                            
                        ]}
                        speed={50} // Custom Speed from 1-99 - Default Speed: 40
                        repeat={Infinity} // Repeat this Animation Sequence infinitely
                    />}
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
                    {subtitle}
                </Heading>
                <HStack spacing="3">
                    <Link to={"man-in-middle-attack"}>
                        <Button
                            colorScheme="blue"
                            borderRadius="8px"
                            py="4"
                            px="4"
                            lineHeight="1"
                            size="md"
                        >
                            {"Try Man In Middle Attack"}
                        </Button>
                    </Link>
                    <Heading
                        as="h2"
                        size="md"
                        color="primary.800"
                        opacity="0.8"
                        fontWeight="normal"
                        lineHeight={1.5}
                        textAlign={["center", "center", "left", "left"]}
                    >
                        or
                    </Heading>
                    <Link to={"create-public-private-key"}>
                        <Button
                            
                            colorScheme="blue"
                            borderRadius="8px"
                            py="4"
                            px="4"
                            lineHeight="1"
                            size="md"
                        >
                            {"Try Create Public and Private Key"}
                        </Button>
                    </Link>
                </HStack>

                <Text
                    fontSize="xs"
                    mt={2}
                    textAlign="center"
                    color="primary.800"
                    opacity="0.6"
                >
                    No credit card required.
                </Text>
            </Stack>
            <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
                {/* TODO: Make this change every X secs */}
                <Image src={image} size="100%" rounded="1rem" />
            </Box>
        </Flex>
    );
}

Hero.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string
};

Hero.defaultProps = {
    title: "Syberio",
    subtitle:
        "This is the subheader section where you describe the basic benefits of your product",
    image: landingfirst,
    ctaText: "Create your account now",
    ctaLink: "/signup"
};
