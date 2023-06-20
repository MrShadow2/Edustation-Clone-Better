import React from 'react'
// import './Styles/form.css'
import '../Styles/form.css'
import pen from '../assets/pen.png'
const Form = () => {
  return (
    <div className="form-main-con">
    


     <div class="book">
        <span class="page turn"></span>
        <span class="page turn"></span>
        <span class="page turn"></span>
        <span class="page turn"></span>
        <span class="page turn"></span>
        <span class="page turn"></span>
        <span class="cover"></span>
        <span class="page">
        <div class="content">
      
      <h1 
      style={{
       
        fontSize: "1.5rem",
      }}>let's write your future...</h1>
    </div>
        </span>
        <span class="cover turn"></span>
        
      </div>
      
  <img className='re-pen' src={pen} alt='txt'/>


      <div className="form-con-right">
        <div class="all">
          <div class="lefter">
            <div class="text">Hosting</div>
          </div>
          <div class="left">
            <div class="text">Web Design</div>
          </div>
          <div class="center">
            <div class="explainer">
              <span>Popular Courses</span>
            </div>
            <div class="text">Frontend Development</div>
          </div>
          <div class="right">
            <div class="text">Backend Development</div>
          </div>
          <div class="righter">
            <div class="text">SEO</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form