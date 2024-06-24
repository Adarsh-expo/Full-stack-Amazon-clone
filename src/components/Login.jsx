import React from 'react'
import {useState,useEffect} from 'react'
import {db,auth} from '../Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useNavigate} from 'react-router-dom';
function Login() {

const [email,setemail]=useState('')
const [password,setpassword]=useState('')

const navto=useNavigate();
   async function signup(e){
e.preventDefault();
try{
const response=await signInWithEmailAndPassword(auth,email,password)
console.log(response.user)
console.log("JNHN")
navto('/')
}
catch(err){
    alert(err.message)
}



}

const register=async(e)=>{
e.preventDefault()
try{
const usercredential= await createUserWithEmailAndPassword(auth,email,password);
console.log(usercredential)
navto('/')}

catch(err){
alert(err.message)
}

}

  return (
    <div className='bg-white  flex flex-col  items-center h-[100vh]'>

<img className=' w-[5rem] ml-auto mr-auto mt-[1rem] object-contain '  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>

<div className='flex  mt-[2rem] flex-col  w-[17rem]  px-2 pb-3 h-fit border-[1px] border-gray-300  items-center ' >
<span className=' font-bold text-[1.6rem]'>
    Sign-In</span>
<form className='flex   w-[90%] flex-col justify-center'>
    <label className='font-semibold'>Email</label>
    <input  onChange={(e)=>{setemail(e.target.value)}} className='outline-none border-[0.1rem] rounded-sm   hover:border-blue-600 border-zinc-500'/>
<label  className='font-semibold'   >Password</label>
<input  onChange={(e)=>{setpassword(e.target.value)}}     type='password' className='outline-none border-[0.1rem] rounded-sm      hover:border-blue-600  border-zinc-500'/>
<button  onClick={signup}  type='submit'   className='bg-yellow-400 rounded-sm border-yellow-800 border-[1px] w-[100%] mt-[1rem]   h'>Sign up</button>
</form>
<p className='text-[0.7rem]'>
By signing-in you agree to Amazon's fake clone Condition of Use & sale.Please see our Privacy Notice 
,out Cookies Notice and our Interest-Based Ads

</p>
<button  onClick={register}  type='submit' className='border-[1px] text-center bg-zinc-200 px-1 rounded-sm text-[1rem] border-zinc-400'>Create Your Amazon Account</button>
</div>


    </div>
  )
}

export default Login