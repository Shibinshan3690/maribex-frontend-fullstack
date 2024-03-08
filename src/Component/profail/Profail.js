import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./profail.css";

const Profail = () => {
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
          
            <span className="id-name"> _shibin_shan__</span>
          
          <div>
            <button className="butns">Edit Profail</button>
            <button className="butns">View archive</button>
            <button className="butns">Ad tools</button>
          </div>
          </div>
          </div>
          <div className="second-sec">
              <button className="item">1  <span>post</span></button>
              <button  className="item">1,743  <span>followers</span></button>
              <button  className="item">509    <span>following</span></button>      
          </div>

          <div className="dicription">
              
          </div>

  





    </>
  );
};

export default Profail;
