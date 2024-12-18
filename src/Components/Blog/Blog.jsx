import { useEffect, useState } from "react";
import CardSkelton from "../CardSkelton.jsx"
import BlogCard from "./BlogCard.jsx";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Blog = () => {
    const [blogInfo, setBlogInfo] = useState([]);
    useEffect(() => {
        fetchBlog();
    }, []);

    const fetchBlog = async () => {
        const data = await fetch("https://blog.indiandevelopers.org/wp-json/wp/v2/posts");
        const json = await data.json();
        setBlogInfo(json);
    }

    return blogInfo.length === 0 ? (
        <div className="flex flex-col">
            <h2 className="font-bold text-2xl mt-6 mb-4">Our Blogs</h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <CardSkelton />
                <CardSkelton />
                <CardSkelton />
            </div>
        </div>
    ) : (
        <div className="flex flex-col justify-center items-center py-2">
            <h2 className="font-bold text-2xl my-6">Our Blogs</h2>
            <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center items-center md:mb-0 lg:mb-4">
                {
                    blogInfo.slice(0, 3).map((blog) => {
                        return <BlogCard key={blog.id} blogData={blog} />
                    })
                }
            </div>
            <Link to={"https://blog.indiandevelopers.org/"} target="_blank">
                <Button colorScheme="red">
                    Read More
                </Button>
            </Link>
        </div>
    );
};
export default Blog;