import React, { useState } from "react";
import axios from "axios";
import "./AddPost.css";


function AddPost() {

    const [postData, prevPostData] = useState({

    })

    const textValueChange = e => {
        const target = e.target
        const name = target.name

        prevPostData(prevData => {
            return {
                ...prevData, [name]: target.value
            }
        })
    }

    const addNewPost = (e) => {

        let newUserPost = {
            "content": postData.postcontent
        }

        e.preventDefault()
        axios
            .post("https://akademia108.pl/api/social-app/post/add", newUserPost)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }


    return (
        <div className="post-creator">
            <form className="add-post-content">
                <textarea onChange={textValueChange} name="postcontent" placeholder="Add post..."></textarea>
                <button onClick={addNewPost} className="add-post-btn">Add</button>
            </form>
        </div>

    );
}

export default AddPost;