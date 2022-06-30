import { useState } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import PostService from "../services/PostService";






function AddPost() {
    const { id } = useParams();

    const history = useHistory();

    const [newPost, setNewPost] = useState({
        title: '',
        text: '',

    });



    const reset = () => {
        setNewPost({
            title: '',
            text: '',
        })
    }

    const addPost = async (e) => {
        e.preventDefault();
        if (id) {
            await PostService.edit(id, newPost);
        } else {
            await PostService.add(newPost);
        }

        history.push('/posts');
    };

    return (
        <div className="container">

            <h1>Add Post</h1>

            <form onSubmit={addPost}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 400,
                    marginLeft: 15,
                }}>
                <input required minLength='2'
                    type='text' value={newPost.title} placeholder='Title' onChange={({ target }) =>
                        setNewPost({ ...newPost, title: target.value })
                    } />
                <input required maxLength='300'
                    type='text' value={newPost.text} placeholder='Text' onChange={({ target }) =>
                        setNewPost({ ...newPost, text: target.value })
                    } />
                <button type="submit" className="btn btn-outline-success">{id ? 'Edit' : 'Add'}</button>
                <button type="button" onClick={reset} className="btn btn-outline-primary">Reset</button>

            </form>


        </div>
    )
}


export default AddPost;