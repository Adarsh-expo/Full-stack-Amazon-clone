import React from 'react'
import { useContext } from 'react'
import { jonescontext } from '../context/Productcontext'

function Product({id,title,image,price,rating}) {
    const {cartdata,setcartdata}=useContext(jonescontext);

// we are inserting to global data or context api so later on i can use it in my cart
function Insertocart(){

    let exist=cartdata.find((num)=>num.id==id)
    console.log(exist)
    exist?console.log('') :setcartdata((pre)=>
    
    [...pre,{id,title,image,price,rating}]
    
    )
}




  return (
    <div className='flex bg-white justify-end max-h-[400px] items-center pt-[1.5rem] w-[100%] z-40 pl-3   min-w-[4rem] flex-col'>
<div className='flex flex-col w-[100%] justify-center  items-left'>

<p>{title}</p>
<p>
    <small>$</small>
    <strong>{price}</strong>
</p>
<div className='stars flex'>
    {new Array(rating).fill('a',0).map((ele,index)=><span key={index}>⭐</span>)}



 </div>
</div>
<img  className='w-[45%] max-h-[200px] object-contain mb-[15px]' src={image}/>
   
   <button onClick={Insertocart} className='bg bg-yellow-500 h-[1.2rem] mb-2 flex items-center  justify-center border-black border-[1px] px-1'>Add to cart</button>
    </div>
  )
}

export default Product