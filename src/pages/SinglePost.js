import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import PostService from "../services/PostService";



function SinglePost() {

    const history = useHistory();
    const { id } = useParams();

    const [post, setPost] = useState([])

    const [comment, setComment] = useState([]);

    const [newComment, setNewComment] = useState({

        text: ''
    })
    useEffect(() => {
        const fetchPost = async () => {
            const { ...restData } = await PostService.get(id);

            setPost({ ...restData });
        };

        if (id) {
            fetchPost();
        }
    }, [id]);

    const addComment = async (e) => {
        e.preventDefault();

        const dataComment = await PostService.addComment(newComment, post.id);

        setComment({ dataComment })

        history.push('/posts')


    };
    return (
        <div>
            <p>Title: {post.title}</p>
            <p>Text: {post.text}</p>
            <h2>Comments</h2>

            <form onSubmit={addComment}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 400,
                    marginLeft: 15,
                }}>
                <input required style={{ height: 100 }}
                    type='text' value={newComment.text} placeholder='Comment...' onChange={({ target }) =>
                        setNewComment({ ...newComment, text: target.value })
                    } />

                <button className="btn btn-outline-primary">Add comment</button>

            </form>

        </div>
    )
}

export default SinglePost;