import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

function Home() {

  const [posts, setPosts] = useState([]);

  const getNextPosts = () => {

    let latestPostData = {
      date: posts[posts.length - 1].created_at
    }

    axios.post("https://akademia108.pl/api/social-app/post/older-then", latestPostData)
      .then((res) => {
        setPosts(posts.concat(res.data));
      })
  }

  const getPosts = () => {
    axios.post("https://akademia108.pl/api/social-app/post/latest")
      .then((res) => {
        setPosts(res.data);

      });
  };

  useEffect(() => {
    getPosts()
  }, [])

  console.log(posts);

  return (
    <div className="main-div">
      {posts.map((post) => {

        return (
          <div className="posts-holder">
            <div className="posts">
              <div className="avatar">
                <img src={post.user.avatar_url} alt={post.user} />
              </div>
              <div className="post-data">
                <div className="post-info">
                  <div className="user-name">
                    <strong>{post.user.username}</strong>
                  </div>
                  <div className="post-create-date">
                    <span> {post.created_at.substring(0, 10)}</span>
                  </div>
                </div>
                <div className="post-content">
                  {post.content}
                </div>
                <div className="likes">
                  {post.likes.length}
                </div>
              </div>
            </div>
          </div>

        )
      })}
      <button onClick={getNextPosts} className="load-morebtn">Load More</button>
    </div>
  );
}

export default Home;
