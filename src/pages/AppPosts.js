import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostService from "../services/PostService";





function AppPosts() {

    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const getPosts = async () => {
            const data = await PostService.getAll();

            setPosts(data);
        };
        getPosts();
    }, []);

    return (
        <div>
            <h1>AppPosts</h1>


            <ul>
                {posts.map((post) =>
                    <li key={post.id}>
                        <span>{post.title}</span>
                        <Link to={`/posts/${post.id}`}>View Post</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default AppPosts;