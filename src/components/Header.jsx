import React from 'react'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import { Link } from 'react-router-dom';
import { jonescontext } from '../context/Productcontext';
import { useContext } from 'react';
import {auth} from '../Firebase'

function Header() {
  const {cartdata,setcartdata,user,setuser}=useContext(jonescontext);





function handlesignout(){
if(user){
  auth.signOut()
}



}

  return (
    <div className='Header py-[0.1rem]  bg-[#121920]  sticky top-0 z-50 flex  items-center'>
<Link to='/'><img className='w-[8rem] h-[2.9rem] mt-[1.3rem] object-cover mb-[0.6rem] ml-[0.7rem] mr-[1rem]'  src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' /></Link>

<div className='headersearch  flex flex-1 '>

<input type='text ' className=' h-[3rem] outline-none w-[100%]' />
<SearchIcon className='bg-yellow-500 w-[5rem] rounded-r 'style={{ fontSize: '3rem' }}/>

</div>

<div className='flex space-evenly'>
  <Link to={!user &&'/login'}>
    <div   onClick={handlesignout} className='flex flex-col text-white justify-evenly ml-[1rem] mr-[1rem]'>
<span className=''>Hello {user && user.email.slice(0,8)}</span>
<span className='font-bold'>{user ? "Sign Out":"Sign In"}</span>

</div></Link>
<div className='flex flex-col text-white  justify-evenly ml-[1rem] mr-[1rem]'>
    <span>
Return
    </span>
    <span className='font-bold'>
        order
    </span>
</div>
<Link to='/checkout'><div className='cart flex  justify-evenly gap-[1rem]   items-center  ml-[1rem] mr-[1rem]'>
<AddShoppingCartSharpIcon className='text-white te ' style={{ fontSize: '40px' }}/>
<span className='text-white'>{cartdata.length}</span>
</div></Link>


</div>


    </div>
  )
}

export default Header