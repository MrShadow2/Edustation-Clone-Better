import React, { useState } from 'react'
import '../Styles/post.css'
import girl from '../assets/sidegirl.png'
import reGirl from '../assets/reGirl.png'
const PostSecondary = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    socialMediaHandle: "",
    phone: "",
    email: "",
    message: "",  
  });
  const postUserData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [name]: value });

  };  
  

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, socialMediaHandle, phone, email, message } = userData;
    if (firstName && socialMediaHandle && phone && email && message) {

    const res = await fetch('https://edu-database-a9083-default-rtdb.firebaseio.com/userDataRecords.json'
      , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            socialMediaHandle,
            phone,
            email,
            message,
            })



  })
  if (res) {
    setUserData({
      firstName: "",
      socialMediaHandle: "",
      phone: "",
      email: "",
      message: "",
    });
    alert("Data Stored");
  } else {
    alert("plz fill the data");
  }
} else {
  alert("plz fill the data");

}
};

  return (
    <div className="f-main-con">
      <h1 className='re-txt' style={{ color: "white" }}>reach us!</h1>
      <img src={girl} className='girl' alt='girl'/>
      <img src={reGirl} className='reGirl' alt='reGirl'/>
      <div className="f-con" >
        <form className="f-con-content" method='POST'>
          <input 
          className="spl-inp"
            name="firstName"
            id=""
            value={userData.firstName}
            onChange={postUserData}
           type="text"
            placeholder="Name" />
          <input 
          className="spl-inp"
            name="email"
            id=""
            value={ userData.email}
            onChange={postUserData}
           type="text"
            placeholder="Email" />
          <input 
          className="spl-inp"
            name="phone"
            id=""
            value={userData.phone}
            onChange={postUserData}
           type="text" 
           placeholder="Phone" />
          <input
            className="spl-inp"
              name="socialMediaHandle"
              id=""
              value={userData.socialMediaHandle}
              onChange={postUserData}
            type="text"
            placeholder="Social-media-handel"
          />
          <textarea
            name="message"
            id=""
            value={userData.message}
            onChange={postUserData}
             placeholder="Message" />
          <button
            style={{
              border: "1px solid white",
            }}
            type="submit"
            onClick={submitData}
            className="bg-btn-s btn-1 brd"
          >
            Submit →
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostSecondary