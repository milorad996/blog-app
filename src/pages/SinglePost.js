import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import PostService from "../services/PostService";



function SinglePost() {


    const { id } = useParams();

    const [post, setPost] = useState([])

    useEffect(() => {
        const fetchPost = async () => {
            const { ...restData } = await PostService.get(id);

            setPost({ ...restData });
        };

        if (id) {
            fetchPost();
        }
    }, [id]);
    return (
        <div>
            <p>Title: {post.title}</p>
            <p>Text: {post.text}</p>
        </div>
    )
}

export default SinglePost;