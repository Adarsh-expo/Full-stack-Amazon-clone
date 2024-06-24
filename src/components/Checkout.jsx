import React from 'react'
import Header from './Header'
import Subtotal from './Subtotal'
import { useContext } from 'react'
import { jonescontext } from '../context/Productcontext'
function Checkout() {
    const {cartdata,setcartdata}=useContext(jonescontext)
   
   
    function removecart(e){
        console.log(e.target.id)
   let final =cartdata.filter((ele)=>ele.id!=e.target.id)

setcartdata([...final])


    }

  return (
    <div><Header/><div className='flex bg-white'>
    <div className='left ml-2'>
<img className='w-[100%] mb-2 mt-0 h-[9rem] object-cover  object-center'  src='https://m.media-amazon.com/images/G/01/GiftCards/2024/Q1/VX-2440/Desktop_GCLP_Hero_3400x680_EN._SX3000_QL85_.jpg' alt=''/>
<div className='flex flex-col justify-center pl-4'>

    <h1 className='text-[1.4rem] font-semibold border-b-[.1rem] pb-[.7rem] border-zinc-400 '>Your Shopping Cart</h1>
    {/* product */}
    {/* product */}
    {/* product */}
    {/* product */}
    
    {cartdata && cartdata.length ?   cartdata.map((ele,index)=> <div  className='flex gap-[2rem]   mt-[3rem]  '  key={index}>
    
    <img  className=' w-[20rem]  h-[15rem]  object-contain' src={ele.image}/>

    <div className='flex flex-col align-center '>
<span className='text-[1rem] font-bold'>{ele.title}</span>
<p><small>
₹
    </small>
    <strong>{ele.price}</strong>
    </p>
    <div className='stars flex'>
    {new Array(ele.rating).fill('a',0).map((ele,index)=><span key={index}>⭐</span>)}
</div>
<button   id={ele.id}      onClick={removecart} className='bg-yellow-600 mt-[1rem] w-[15rem] border-[1px] border-yellow-800  w-[100%] h-[2.2rem] rounded'  >Remove From The Cart</button>
    </div>
    </div>
    
    
    
    ):<h1 >Youe acrt is empty dude</h1>}

    
</div>
    </div>
    <div className=' ml-[1rem] rounded right'>


<Subtotal/>
    </div>
    
    </div></div>
  )
}

export default Checkout