import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import PostService from "../services/PostService";



function SinglePost() {
    const history = useHistory();

    const { id } = useParams();

    const [newPost, setNewPost] = useState({
        title: '',
        text: '',

    });

    useEffect(() => {
        const fetchPost = async () => {
            const { id: _, ...restData } = await PostService.get(id);

            setNewPost({ ...restData });
        };

        if (id) {
            fetchPost();
        }
    }, [id]);
    return (
        <div>
            <p>Title: {newPost.title}</p>
            <p>Text: {newPost.text}</p>
        </div>
    )
}

export default SinglePost;