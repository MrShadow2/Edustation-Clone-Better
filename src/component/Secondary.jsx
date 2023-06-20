import React from 'react'
import '../Styles/secondary.css'
const Secondary = () => {
  return (
    <div className="sec-main-containner">
      <div className="sec-left">
        <img src="https://edustation.co.in/wp-content/uploads/2021/08/about-img-2.png" alt="about" className="stl-img-1" />
        <img src="https://edustation.co.in/wp-content/uploads/2021/08/about-img-1.png" alt="about" className="stl-img-2" />
        <img src="https://edustation.co.in/wp-content/uploads/2021/08/about-img-3.png" alt="about" className="stl-img-3" />
        <div className="sec-left-content">
          <img
            src="https://edustation.co.in/wp-content/uploads/elementor/thumbs/about_01-pw00by1k4qbr963y6t0ix3xipexz7otmhadu5vmw5s.jpg"
            alt="about"
            className="sec-left-img-1"
          />
          
          <img
            src="https://edustation.co.in/wp-content/uploads/elementor/thumbs/about_02-pw00by1hzjnl6jymvflgx1i01sgdgxenx1vb6dgzds.jpg"
            alt="about"
            className="sec-left-img-2"
          />
          <div className='orange-box'>
            <h1 className='top'>10+</h1>
            <h2 className='mdm'>Years of</h2>
            <h2 className='btm'>Experience</h2>
          </div>
        </div>
      </div>
      <div className="sec-right">
        <div className="sec-right-content">
            <p className='org-top'>About Edu-Station</p>
            <p className="sec-right-heading">
            Online Graduate School
for Adults & Children
            </p>
            <p className="sec-right-para">
            Edu-station is a platform which provides students industry-specific training in a professional environment. Here, students are taught about the skills and knowledge needed to gain employment in the industry of their choice. From freshers, who are just starting out from their college studies, to experienced professionals who wish to upgrade their skills, we have an aptitude program for everyone.
            </p>
            <button className="bg-btn-s btn-1 brd">Learn more →</button>
        </div>
      </div>
    </div>
  );
}

export default Secondary