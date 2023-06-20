import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import frame1 from '../assets/frame1.png';
import frame2 from '../assets/frame2.png';
import frame3 from '../assets/frame3.png';
import wave from '../assets/wave.png';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';   
import '../Styles/bg.css';

const Bg = ({name}) => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const images = imageRefs.current;
    let currentImageIndex = 0;
    let timeoutId;

    const showNextImage = () => {
      images.forEach((img, index) => {
        img.style.opacity = '0'; 
        if (index === currentImageIndex) {
          img.style.opacity = '1'; 
        }
      });

      currentImageIndex = (currentImageIndex + 1) % images.length;

      timeoutId = setTimeout(showNextImage, 2000); // Adjust the delay between images (in milliseconds) as needed
    };

    showNextImage();

    return () => {
      clearTimeout(timeoutId); // Clear the timeout when the component unmounts
    };
  }, []);


      const handleLogout = () => {
        // Handle logout logic here
        auth.signOut();
        console.log('Logout the user');
        };




  return (
    <>
      <div className="bg">
        <Navbar />
        <div className="bg-content">
          <div className="ani-text">
            {[
              { imageSrc: frame1, altText: "Frame 1" },
              { imageSrc: frame2, altText: "Frame 2" },
              { imageSrc: frame3, altText: "Frame 3" },
            ].map((item, index) => (
              <img
                key={index}
                className="txt-img"
                ref={(ref) => (imageRefs.current[index] = ref)}
                src={item.imageSrc}
                alt={item.altText}
              />
            ))}
          </div>
          <div className="mob-view">
            <img className="mob-img" src={frame1} alt="Frame 1" />
          </div>
          <div className="bg-btn">
            <button className="bg-btn-s btn-1 brd">Explore →</button>
           
            {
              name ? <button className="bg-btn-s btn-1 brd" onClick={handleLogout}>Logout → 
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  color: 'orange',
                  backgroundColor: '#fff',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  top: '22px',
                  right: '25px',
                }}> {name && name.charAt(0)}</div>
              </button>
 : <button className="bg-btn-s btn-2 brd">
              <Link className='bg-link' to="/signup">Sign up now →</Link>
            </button>
            }
          </div>
        </div>
      </div>
      <div class="bg-footer">
        <div class="ocean">
          <div class="wave"></div>
          <div class="wave"></div>
          
          <div className="wave-img"></div>
        </div>
      </div>
    </>
  );
};

export default Bg;
