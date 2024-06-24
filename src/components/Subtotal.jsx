import React, { useState } from 'react'
import {NumericFormat} from 'react-number-format';
import { useContext } from 'react';
import { jonescontext } from '../context/Productcontext';
import { useEffect } from 'react';

function Subtotal() {
const [sumtotal,setsumtotal]=useState();

const{cartdata,setcartdata}=useContext(jonescontext)

let sum=0;

useEffect(()=>{

    for(let i=0;i<cartdata.length;i++){

        sum=sum+cartdata[i].price;
        }
        setsumtotal(sum)

},[cartdata])





  return (
    <div className='subtotal bg-[#F3F3F2] flex flex-col justify-between  h-[12.6rem]  p-[2rem] w-[20rem]'>
<NumericFormat
renderText={(value)=>(
<>
<p>

    Subtotal ({cartdata.length} items):<strong>{value}</strong>
</p>
<small>
<input type="checkbox"/>This Order contains a gift

</small>
</>

)}
decimalScale={2}
value={sumtotal}
displayType={"text"}
thousandSeparator={true}
prefix={"₹"}

/>
<button className='bg-yellow-600  border-[1px] border-yellow-800  w-[100%] h-[2.2rem] rounded'>Proceed to Checkout</button>

    </div>
  );
}

export default Subtotal
