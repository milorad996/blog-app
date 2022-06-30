import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PostService from "../services/PostService";





function AppPosts() {

    const history = useHistory();

    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const getPosts = async () => {
            const data = await PostService.getAll();

            setPosts(data);
        };
        getPosts();
    }, []);

    const edit = (id) => {
        history.push(`edit/${id}`);
    };

    return (
        <div>
            <h1>AppPosts</h1>


            <ul>
                {posts.map((post) =>
                    <li key={post.id}>
                        <span>{post.title}</span>
                        <Link to={`/posts/${post.id}`}>View Post</Link>
                        <button onClick={() => edit(post.id)}>Edit</button>

                    </li>
                )}
            </ul>
        </div>
    )
}

export default AppPosts;