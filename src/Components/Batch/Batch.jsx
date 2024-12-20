'use client'

import {
    Box,
    Stack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'
import { RxCrossCircled } from "react-icons/rx";
import { Link } from 'react-router-dom'
function PriceWrapper({ children }) {
    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderColor={useColorModeValue('gray.200', 'gray.500')}
            borderRadius={'xl'}>
            {children}
        </Box>
    )
}

export default function Batch() {
    return (
        <Box py={12}>
            <VStack spacing={2} textAlign="center">
                <Heading as="h2" fontSize="2xl">
                    Our Batches
                </Heading>
                <Text fontSize="lg" color={'gray.500'}>
                    Want to get scholarship and admission details? Call us today.
                </Text>
            </VStack>
            <div className='flex justify-center flex-col md:flex-row'>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    textAlign="center"
                    justify="center"
                    spacing={{ base: 4, lg: 10 }}
                    pt={10} className='mx-4'>
                    <PriceWrapper className="border-2">
                        <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl">
                                IIT JEE
                            </Text>
                        </Box>
                        <VStack
                            bg={useColorModeValue('gray.50', 'gray.700')}
                            py={4}
                            borderBottomRadius={'xl'}>
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Preparing the students for both, Class 12 BOARD Exam, JEE (MAIN & ADVANCED).
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Training the students in techniques of handling stress and examination pressure with ease.
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Top Ranks in JEE (MAIN & ADVANCED), SCIENCE OLYMPIAD & MATH OLYMPIAD.(Optional)
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <Link to={"tel:9155588414"} target='blank'>
                                    <Button w="full" colorScheme="red" variant="outline">
                                        Call Now
                                    </Button>
                                </Link>
                            </Box>
                        </VStack>
                    </PriceWrapper>

                    {/* ... (Repeat other PriceWrapper components) */}
                </Stack>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    textAlign="center"
                    justify="center"
                    spacing={{ base: 4, lg: 10 }}
                    pt={10} className='mx-4'>
                    <PriceWrapper>
                        <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl">
                                NEET UG
                            </Text>
                        </Box>
                        <VStack
                            bg={useColorModeValue('gray.50', 'gray.700')}
                            py={4}
                            borderBottomRadius={'xl'}>
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Preparing the students for both, Class 12 BOARD Exam, NEET-UG.
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Training the students in techniques of handling stress and examination pressure with ease.
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Top Ranks in NEET-UG & SCIENCE OLYMPIAD.(Optional)
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Top notch faculty
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <Link to={"tel:9155588414"} target='blank'>
                                    <Button w="full" colorScheme="red" variant="outline">
                                        Call Now
                                    </Button>
                                </Link>
                            </Box>
                        </VStack>
                    </PriceWrapper>

                    {/* ... (Repeat other PriceWrapper components) */}
                </Stack>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    textAlign="center"
                    justify="center"
                    spacing={{ base: 4, lg: 10 }}
                    pt={10} className='mx-4'>
                    <PriceWrapper>
                        <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl">
                                Foundation
                            </Text>
                        </Box>
                        <VStack
                            bg={useColorModeValue('gray.50', 'gray.700')}
                            py={4}
                            borderBottomRadius={'xl'}>
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Scoring high marks in School Examination
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Selection in NTSE, JUNIOR SCIENCE OLYMPIAD & MATHEMATICAL OLYMPIADS. (for Future)
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Solid Foundation for grabbing Top Ranks in JEE , NEET-UG & OLYMPIADS (for Future)
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <Link to={"tel:9155588414"} target='blank'>
                                    <Button w="full" colorScheme="red" variant="outline">
                                        Call Now
                                    </Button>
                                </Link>
                            </Box>
                        </VStack>
                    </PriceWrapper>

                    {/* ... (Repeat other PriceWrapper components) */}
                </Stack>
            </div>
        </Box>
    )
}
