import React from 'react';
import "../Home/Post.css"
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { MdSaveAlt } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { timeSince } from '../../Utils/Util';
const Post = () => {
  return (
    <div  className='post-list'>
       <div className='post'>
            <div className='p_d'>
               <div className='p_inner'>
                  <img  className='p_p' src="data:image/jpeg;base64,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" alt="" />
                  <a href="#" style={{textDecoration:"none"}}>
                  <p className='p_name'>SRK</p>
                  </a>
               </div>
               <BsThreeDots className='threedots' />
            </div>
  

  <div className='p_image'>
       <img  className='pp_full' src="https://w0.peakpx.com/wallpaper/554/893/HD-wallpaper-shahrukh-khan-pathan-shirtless-shahrukh-khan-pathan-pathan-shirtless-king-khan-indian-actor.jpg" alt="post" />
  </div>
   <div className='reaction_icon'>
    <div  className='left_i'>
        <button className='reactionbtn'>
        <FaRegHeart className='hearticon' />
        </button>
        <button className='reactionbtn'> 
        <FaRegComment className='hearticon' />
        </button>
        <button className='reactionbtn'> 
        <LuSend  className='hearticon'/>
        </button>
    </div>
      <div className='right_i'>
           <button className='reactionbtn'>
           <MdSaveAlt className='hearticon' />
           </button>
      </div>
   </div>
           
<h6 className='numlike'>1 likes </h6>
      <span  className='posttitle'>Srk</span>
      <span className='postbody'>Lovely Nuture</span>
      <br />
      <button type='button' className='viewcommentbtn'>
         View all comment
      </button>
      <div style={{overflowY:"scroll",maxHeight:"85px"}}>
           <div style={{display:"flex", justifyContent:"space-between"}}>
               <h6>
                  <a href="#" style={{textDecoration:"none"}} className='comment'>
                     <img src="https://filmfare.wwmindia.com/content/2020/aug/aamirkhanfirstsalary41598273973.jpg" alt="" className='commentview' />
                     <span style={{fontWeight:"400", marginLeft:"8px"}} >ameer_khan</span>
                  </a>
                  &nbsp;
                  Nice!
               </h6>
           </div>
           </div>
           <p className='postdata'>
             {timeSince(new Date())}Ago
           </p>
           <div className='comment_section'>
                  <div className='input_box'>
                  
                       <input type="text" className='input_c'
                       
                       placeholder='Add a comment ...'/> 
                  </div>
                  <div className='c_text'>
                  <MdOutlineEmojiEmotions />
                     <button>Post</button>
                  </div>
          
      </div>
       </div>
      </div>
  );
};


export default Post;
