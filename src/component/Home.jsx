// import React from 'react'
// import { Link } from 'react-router-dom'
// import { auth } from '../firebase';

// const Home = (props) => {
//     const handleLogout = () => {
//         // Handle logout logic here
//         auth.signOut();
//         console.log('Logout the user');
//         };
//   return (
//     <div>
//         <h1>
//             <Link   to="/login">Login</Link>
//         </h1>
//         <h1>
//             <Link   to="/signup">Signup</Link>
//         </h1>
//         <br/>
//         <h1>
//         {
//             props.name ? `Welcome ${props.name}` : 'You are not logged in'
//         }
//         </h1>
       
//         
//     </div>
//   )
// }

// export default Home
import React from 'react'
import { auth } from '../firebase';
import Bg from './Bg'
import Secondary from './Secondary'

import Responsive from './Demo'
import Form from './Form'
import PostSecondary from './PostSecondary'
import Footer from './Footer'

const Home = (props) => {

  const handleLogout = () => {
         
            auth.signOut();
            console.log('Logout the user');
            };



  return (
    <div>
    {/* //sending props to the Bg component */}
      <Bg name = {props.name} />
      <Secondary/>
      <Responsive/>
      <Form/>
      <PostSecondary/>
      <Footer/>
    </div>
  )
}

export default Home