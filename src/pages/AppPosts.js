import { useEffect, useState } from "react";
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
                        <span>{post.text}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default AppPosts;