import React, { useEffect, useState } from "react";
import axios from 'axios';
import Sidebar from "../Sidebar/Sidebar";
import "./profail.css";
import { useNavigate } from "react-router-dom";


const Profail = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate=useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await axios.get(`http://localhost:9001/api/getUser/${userId}`);
        setUser(response.data.user);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    const fetchUserPosts = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await axios.get(`http://localhost:9001/api/post/${userId}`); // Assuming your backend endpoint for getting user posts is '/api/getUserPost/:id'
        setPosts(response.data.posts);
      } catch (error) {
        console.error("Error fetching user posts:", error);
      }
    };

    fetchUserProfile();
    fetchUserPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <>
        <div>
        <Sidebar />
        </div>

        <div className="profail-main-container">
        <div className=" dp-image-conainer">
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzq6NgrpIR3NsdunE4LWENb4PIruU1QY_ZywaXhnMRKPg2wdTHaKdtW6XmlrA7L1h7mE&usqp=CAU/x"
            alt=""
            className="dp_image"
          />
        </div>
        <div className="dp-side-box">
          
            <span className="idd-name"> {user.username}</span>
          
          <div>
            <button className="butns" onClick={()=>navigate("/EditProfail")}>Edit Profail</button>
            <button className="butns">View archive</button>
            <button className="butns">Ad tools</button>
          </div>
          </div>
          </div>
          <div className="second-sec">
              <button className="item">1  <span>post</span></button>
              <button  className="item">{user.followers.length}  <span>followers</span></button>
              <button  className="item">{user.following}   <span>following</span></button>      
          </div>
          
          <div className="dicription">
                      <p>shibin shan</p>
          </div>

          {/* <hr className="line" /> */}

   <div  className="footer">
  
      <div  >
           <button className="item-btn">POSTS</button>
      </div>
      <div>
           <button  className="item-btn">SAVED</button>
      </div>
      <div>
          <button  className="item-btn">TAGGED</button>
      </div>
     
   </div>


      <div  className="3-section">
    

    <div className="post">
         
          {posts.map(post => (
            <div key={post._id} className="post-item">
              <img src={post.image} alt="Post" className="imagez" />
            </div>
          ))}
    </div>
      <div className="saved"></div>
      <div className="taged"></div>

      </div>








    </>
  );
};

export default Profail;
