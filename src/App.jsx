import { useEffect, useState } from 'react'
import Homepage from './components/Homepage'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Checkout from './components/Checkout'
import Login from './components/Login'
import {db,auth} from './Firebase'
import { jonescontext } from './context/Productcontext'
import { useContext } from 'react'



function App() {
  const {cartdata,setcartdata,user,setuser}=useContext(jonescontext);

useEffect(()=>{

  auth.onAuthStateChanged((authuser)=>{
    console.log("The user is",authuser)
    if(authuser){
      setuser(authuser)
      console.log(user)

    }
    else{
      setuser(null)
    }
  })
},[])
  return (
    <Router>

<Routes>

  <Route path='/' element={<Homepage/>}/>
  <Route path='/checkout' element={<Checkout/>}/>
  <Route path='/login' element={<Login/>}/>
</Routes>


    </Router>

  )
}

export default App
