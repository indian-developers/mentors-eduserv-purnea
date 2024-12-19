import { Card, Image, Stack, Heading, CardBody, Center, Divider, Badge } from '@chakra-ui/react';
import { MdOutlineDateRange } from "react-icons/md";
import {
    Tag,
    TagLabel, Avatar
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

const BlogCard = (props) => {
    const { blogData } = props;
    const { link, modified, title, excerpt, featured_media } = blogData;
    const [blogImg, setBlogImg] = useState([]);
    useEffect(() => {
        fetchImg();
    }, []);

    const fetchImg = async () => {
        const media = await fetch("https://blog.indiandevelopers.org/wp-json/wp/v2/media/" + featured_media);
        const mediajson = await media.json();
        setBlogImg(mediajson);
    }
    return (
        <Link to={link} target="_blank" rel='nofollow noindex' className='mx-4 mb-8 lg:mb-0 hover:shadow-md'>
            <Card maxW='sm'>
                <CardBody className='bg-cardbg w-80 md:w-72 cursor-pointer'>
                    {
                        blogImg.length === 0 ? (
                            <div className='bg-gray-200 w-64 rounded-md h-32'>
                            </div>
                        ) : (
                            <Image
                                src={blogImg.source_url}
                                alt='Mentors '
                                borderRadius='lg' loading="lazy" h={36}
                            />
                        )
                    }
                    <Stack mt='6' spacing='3'>
                        <Heading as="h3" size='sm' className="text-gray-700">{title.rendered.slice(0, 52)}..</Heading>
                        <span className="flex items-center justify-between">
                            <Tag size='sm' colorScheme='gray' borderRadius='lg' className='py-1'>
                                <Avatar
                                    src={"https://chingarimedia.com/assets/Gandharva-Dkz_DJdW.jpg"}
                                    size='xs'
                                    name='Gandharv'
                                    ml={-1}
                                    mr={2}
                                />
                                <TagLabel className='text-gray-400'>Gandharv</TagLabel>
                            </Tag>
                            <Center height='20px'>
                                <Divider orientation='vertical' />
                            </Center>
                            <span className="flex items-center">
                                <MdOutlineDateRange className="text-gray-400 text-sm mr-1" />
                                <p className="text-gray-400 text-sm">{modified.slice(0, 10)}</p>
                            </span>
                        </span>
                    </Stack>
                    <Stack mt='3' spacing='3'>
                        <p className="text-gray-400 text-sm text-justify">{excerpt.rendered.slice(3, 70)} ...</p>
                    </Stack>
                </CardBody>
            </Card>
        </Link>
    );
};
export default BlogCard;