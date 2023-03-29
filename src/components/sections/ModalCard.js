import {
    Card, CardBody, CardFooter, Button,
    Image,
    Heading,
    Stack,
    Text,
    Divider, ButtonGroup, HStack, Flex, SimpleGrid, Fade, useDisclosure, Container
} from '@chakra-ui/react'
import interactivepic from '../../components/assets/interactive-pic.png'
import teaching from '../../components/assets/teaching.png'
import timemanagement from '../../components/assets/time-management.png'
const ModalCard = () => {
    const { isOpen, onOpen } = useDisclosure()
    return (
        <Flex
            align="center"
            justify={{ base: "center", md: "space-around", xl: "space-between" }}
            direction={{ base: "column-reverse", md: "row" }}
            wrap="no-wrap"
            minH="70vh"
            px={8}
            mb={16}
        >
            <Stack
                spacing={12}
                align="center"
            >
                <Heading
                    as="h2"
                    size="lg"
                    fontWeight="bold"
                    color="primary.800"
                    textAlign={["center", "center", "center", "center"]}
                >
                    What do we offer?

                </Heading>
                <Divider />
                <HStack spacing="6">

                    <Card maxW='sm' rounded="1rem" >
                        <CardBody align='center'>
                            <Image
                                boxSize='70%'
                                src={interactivepic}
                                alt='interaction'
                                borderRadius='lg' />
                            <Stack mt='6' spacing='3'>
                                <Heading align="center" size='md'>Interactive</Heading>

                                <Text>
                                    Syberio's course content is based on high interactivity to help you comprehend the concepts even better!
                                </Text>

                            </Stack>
                        </CardBody>

                    </Card>
                    <Card maxW='sm' rounded="1rem">
                        <CardBody align='center'>
                            <Image
                                boxSize='70%'
                                src={teaching}
                                alt='teaching'
                                borderRadius='lg' />
                            <Stack mt='6' spacing='3'>
                                <Heading align="center" size='md'>For students, by students.</Heading>
                                <Text>
                                    We offer our course content from a student's perspective so that it is more clear and concise to understand.
                                </Text>

                            </Stack>
                        </CardBody>

                    </Card>
                    <Card maxW='sm' rounded="1rem">
                        <CardBody align='center'>
                            <Image
                                boxSize='70%'
                                src={timemanagement}
                                alt='teaching'
                                borderRadius='lg' />
                            <Stack mt='6' spacing='3'>
                                <Heading align="center" size='md'>Animated and Less Time Consuming</Heading>
                                <Text>
                                    We offer our course content with various animations to make the concepts more catchy which results in less time to learn.
                                </Text>

                            </Stack>
                        </CardBody>

                    </Card>
                </HStack>

            </Stack>
        </Flex>



    );
}
export default ModalCard;