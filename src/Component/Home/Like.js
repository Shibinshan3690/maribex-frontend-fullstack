import React, { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import "../Home/Post.css";

const Like = ({ postId }) => { // Receive postId as a prop
  const [isLiked, setIsLiked] = useState(false); // State to track if the post is liked
  const [likeCount, setLikeCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null); // State to handle error message
  const userId = JSON.parse(window.localStorage.getItem('user'))
  
        const handleLike = async () => {
        try {
        // Call the likePost API endpoint with the postId
        const response = await fetch(`http://localhost:9001/api/post/like/${postId}`, {
        method: 'POST',
        headers: {
       'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });
        const data = await response.json();
        if (response.ok) {
        console.log(data.message); 
        setIsLiked(!isLiked);
      } else {
        // If response is not OK, set error message
        setErrorMessage(data.error || 'Internal server error');
      }
    }     catch (error) {
          console.error('Error liking/unliking post:', error);
          //Set error message for network error
          setErrorMessage('Network error');
    }
  };
          const handleUnlike = async () => {
          try {
          const response = await fetch(`http://localhost:9001/api/post/unlike/${postId}`, {
          method: 'POST',
          headers: {
         'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId }),
          });
          const data = await response.json();
          if (response.ok) {
          setIsLiked(false); // Set isLiked to false since the post is unliked
          setLikeCount(data.likeCount); // Update likeCount with the new value
          console.log(data.message);
      }   else {
           setErrorMessage(data.error || 'Internal server error');
      }
    }     catch (error) {
          console.error('Error unliking post:', error);
          setErrorMessage('Network error');
    }
  };
  


  return (
    <div>
    {isLiked ? (
      <button className='button' onClick={handleUnlike}>
        <FaRegHeart color="red" />
      </button>
    ) : (
      <button className='button' onClick={handleLike}>
        <FaRegHeart color="black" />
      </button>
    )}
  
   
  </div>
  );
};

export default Like;
