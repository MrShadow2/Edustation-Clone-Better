import React from 'react'
import '../Styles/navbar.css'
//link
import { Link } from 'react-router-dom'
//importing logo from assets
import logo from '../assets/logoEdu.png'
const Navbar = () => {
  return (
    <div className='main-container'>
        <div className='outer-navContainer'>
           
                <img src={logo} alt='logo' className='logo'/>
                <ul className='inner-navContainer'>
                    <li className='nav-item hover-line'><Link className='login-link' to ='/'>Home</Link></li>
                    <a href='https://edustation.co.in/about-us/'    className='login-link'>

                    <li className='nav-item hover-line'>About Us</li></a>
                    <div className='has-dropdown'>
                    <li className='nav-item hover-line'>Courses {'>'}</li>
                    <div className='dropdown pos'>
                        <ul className='list-nav-drop'>
                        <li>
                            <a className='login-link' href='#'>Intermediate</a>
                        </li>
                        <li>
                            <a className='login-link' href='#'>Advanced</a>
                        </li>
                        </ul>
                    </div>
                    </div>

                    
                    <a className='login-link' href='https://edustation.co.in/blogs/' >
                    <li className='nav-item hover-line'>Blogs</li>
                    </a>
                    <a className='login-link' href='https://edustation.co.in/contacts-us/'><li className='nav-item hover-line'>Contact Us</li></a>
                    
                    {/* <li className='nav-item hover-line'><Link className='login-link' to='/login'>Login</Link></li> */}
                </ul>
                <div className='ham-con'>
                    <i class="ri-menu-3-line icon"></i>
                    <div className='hamburger'>
                        <ul  className='hamburger-nav'>
                            <li className='nav-item hover-line'><Link className='login-link' to ='/'>Home</Link></li>
                            <li className='nav-item hover-line'><Link className='login-link' to ='/'>About Us</Link></li>
                            <li className='nav-item hover-line'><a href='' className='login-link'>Blogs</a></li>
                            <li className='nav-item hover-line'><a href='' className='login-link'>Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                
            

        </div>
        
    </div>
  )
}

export default Navbar