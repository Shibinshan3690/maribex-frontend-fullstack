import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar';
import "../Home/EditProfail.css";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
const EditProfail = () => {
  const [image, setImage] = useState(null); // State for storing image file
  const handleImageChange = (event) => setImage(event.target.files[0]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const formData = new FormData();
        formData.append('image', image);
        const id = localStorage.getItem('userId')
        // Send formData to backend API using axios
        const response = await axios.post(`http://localhost:9001/api/createpost/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        console.log(response.data);
        toast.success("Profail created successfully!"); // Display success toast
    } catch (error) {
        console.error("Error creating post:", error);
    }
};
  return (
   <>
    <Sidebar/>
   
  <div className='editPrifail-container'  >
        <h1  className='heading'> Edit Profile</h1>
    <form onSubmit={handleSubmit}>
    <ToastContainer />
      <div className='pic-box'>
   
        <div className='innersection'>
               <img   className="image" src="" alt=""  />
        </div>
       
          <span className='id'>
            <p className='id-name'>shibin shan</p>
          </span>
          <div className='btn-div'> 
          <input  className='btnp' type='file' required
                                            autoComplete='off' name='image'  onChange={handleImageChange} 
         change photo
        /></div>
 
      </div>

  <div>
      <h1 className='hed'>Website</h1>
        <div>
            <input type="text" className='input-web' placeholder='Website'  autoComplete='off' name='image' onChange={handleImageChange} />
        </div>
        <span style={{fontSize:"12px"}}>Editing your links is only available on mobile. Visit the Instagram app and edit your profile to change the websites in your bio.</span>
         <h1 className='hed'> Bio</h1>
         <textarea  className='textarea'>

         </textarea>
  </div>
    <div>
    <h1 className='hed'>Gender</h1>
    <select  name="select" className='select'>
    <option value="male">male</option>
    <option value="female">feamle</option>
   
          
  </select>
    </div>

     <div className='submitBtn'>
          <button className='bttn'type='submit' >Submit</button>
     </div>
     </form>
  </div>
   
   
   </>
  )
}

export default EditProfail
