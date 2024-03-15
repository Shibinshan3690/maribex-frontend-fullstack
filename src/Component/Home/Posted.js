// Post.js

import React, { useEffect, useState } from 'react';
import "../Home/Post.css"
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { MdSaveAlt } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { timeSince } from '../../Utils/Util';


const Post = () => {
   const user = JSON.parse(window.localStorage.getItem('user'))
  const userId=user._id
    
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:9001/api/allpost");
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='post-list'>
      {posts.map(post => (
        <div key={post._id} className='post'>
          <div className='p_d'>
            <div className='p_inner'>
              <img className='p_p' src={post.postById.profilePic} alt="User profile" />
              <a href="#" style={{ textDecoration: "none" }}>
                <p className='p_name'>{post.postById.username}</p>
              </a>
            </div>
            <BsThreeDots className='threedots' />
          </div>
          <div className='p_image'>
            <img className='pp_full' src={post.image} alt="Post" />
          </div>
          <div className='reaction_icon'>
            <div className='left_i'>
              <button className='reactionbtn'>
                <FaRegHeart className='hearticon' />
              </button>
              <button className='reactionbtn'>
                <FaRegComment className='hearticon' />
              </button>
              <button className='reactionbtn'>
                <LuSend className='hearticon' />
              </button>
            </div>
            <div className='right_i'>
              <button className='reactionbtn'>
                <MdSaveAlt className='hearticon' />
              </button>
            </div>
          </div>
          <h6 className='numlike'>{post.likes} likes </h6>
          <span className='posttitle'>{post.title}</span>
          <span className='postbody'>{post.body}</span>
          <br />
          <button type='button' className='viewcommentbtn'>
            View all comment
          </button>
          <div style={{ overflowY: "scroll", maxHeight: "85px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h6>
                <a href="#" style={{ textDecoration: "none" }} className='comment'>
                  <img src="" alt="Commenter avatar" className='commentview' />
                  <span style={{ fontWeight: "400", marginLeft: "8px" }}></span>
                </a>
               
               
              </h6>
            </div>
          </div>
          <p className='postdata'>
            {timeSince(new Date(post.createdAt))} Ago
          </p>
          <div className='comment_section'>
            <div className='input_box'>
              <input type="text" className='input_c' placeholder='Add a comment ...' />
            </div>
            <div className='c_text'>
              <MdOutlineEmojiEmotions />
              <button>Post</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
