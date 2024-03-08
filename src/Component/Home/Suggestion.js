import React from 'react'
import "../Home/Suggestion.css"

const Suggestion = () => {
  return (
    <div className='mt-10'>
        <div className='d-flex align-items-center justify-conetent-between'>
          <div>
              <a href="" className='d-flex align-item-center' style={{textDecoration:"none"}}>
                 <img src="data:image/jpeg;base64,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" alt="avatr"  className='big-avatar' />&nbsp;
                 <div className='ml-1' style={{transform:"translateY(-2px)"}}>
                      <span className='d-block'>shibin_shan</span>
                 </div>
              </a>
          </div>
        </div> 
        <div className='d-flex justify-content-between align-items-center my-8'>
       <h6 className='text-secondary suggestnbtn' style={{marginTop:"20px"}}>Suggestions for you</h6>
         {/* <i className='fa fa-redo' style={{cursor:"pointer"}}>see all</i> */}
         <span style={{fontWeight:"600",paddingLef:"30px"}}>see all</span>
        </div>
        <div className='suggestions'>
        <div className='d-flex justify-content-between align-items-center my-8'>
            <div>
              <a href="" className='d-flex align-item-center' style={{textDecoration:"none",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;"}}>
                <img src="data:image/jpeg;base64,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" alt=" avatarsug"  className='sug-avatar'/>&nbsp;
                 <div className='ml-1 ' style={{transform:"transalate(-2px)"}}>
                  <span className='d-block'>Shibin_shan</span>
                 </div>
              </a>
            </div>
            <button style={{marginLeft:"90px" }} className='sug-followbtn' >
            Follow
            </button>
        </div>
        </div>
    </div>
  )
}

export default Suggestion