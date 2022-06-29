import { useParams } from "react-router-dom"
import PostService from "../services/PostService";



function SinglePost() {

    const { id } = useParams();

    const post = PostService.get(id);
    return (
        <div>
            <p>Title: {post.title}</p>
            <p>Text: {post.text}</p>
        </div>
    )
}

export default SinglePost;