import React, { useEffect,useState } from 'react'
import Login from './component/Login'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Styles/App.css'
import Signup from './component/SignUp'
import Home from './component/Home'
import { auth } from './firebase'
import Loading from './component/Loading';
import Particles from 'react-particles';
import ParticlesBackground from './component/ParticlesBackground';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 4000)
  }, [])
  const [userName, setUserName] = useState('')
  useEffect(() => {
    auth.onAuthStateChanged((user)=>{
      console.log(user);
      if(user){
        setUserName(user.displayName)
      }
      else{
        setUserName('')
      }
    })
    
    

  }, [])
 


  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home name = {userName} />} />
          <Route path="/login" element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>

        
      </BrowserRouter>
      )
      }
      {/* <ParticlesBackground/> */}
    </>
  )
  }


export default App