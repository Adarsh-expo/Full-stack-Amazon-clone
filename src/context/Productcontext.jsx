import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';
 export const jonescontext=createContext();
function Productcontext(props) {
//   cart data
    const [cartdata,setcartdata]=useState([]);

    // userdata from backend
    const [user,setuser]=useState();
    
  return (

    <jonescontext.Provider value={{cartdata,setcartdata,user,setuser}}>{props.children}</jonescontext.Provider>
  )
}

export default Productcontext