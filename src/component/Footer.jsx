import React from 'react'
import '../Styles/footer.css'
const Footer = () => {
  return (
    <div className="main-foot-con">
      <div className="foot-con">
        <div className="foot-con-content">
          <h3
            cl
            style={{
              color: "orange",
            }}
            className="foot-txt"
          >
            Join Us Today
          </h3>
          <h1 className="header-foot">Ready To Kick Start Your Career?</h1> 
         
          <button className="foot-btn bg-btn-s btn-1 brd">Get Started →</button>
         
        </div>
      </div>
      <div className="foot-label">
            
           {/* //write the copywrite linee */}
            <p className="foot-label-txt">© 2023 Edu. All rights reserved</p>


      </div>
    </div>
  );
}

export default Footer