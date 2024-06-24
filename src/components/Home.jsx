import React from 'react'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
<div className='homecontainer '>

<img className='w-full h-auto object-cover max-w-[1500px] z-20  ml-auto mr-auto mb-[-1rem]  img'    src='https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg'/>
 <div className='row1 mt-[3rem] ml-2 mr-2 mb-3  flex gap-3  z-40'>
    <Product id={123} title={'The names bond product how are you at the moment'} image={'https://images-eu.ssl-images-amazon.com/images/I/81dsWgzXLrL._AC_UL330_SR330,330_.jpg'} price={234} rating={4} />
    <Product/>
   
   
    </div>
 <div className='row1 ml-2 mr-2  mb-3  gap-3 flex   z-40'>
    <Product   id={765} title={'The Housemaid : An addictive psychological thriller with mind-bending twists'} image={'https://m.media-amazon.com/images/I/81keZ6LpNWL._AC_UL480_FMwebp_QL65_.jpg'} price={234} rating={4}/>
    <Product/>
    <Product/>
    
   
   
    </div>
  <div>  <Product  id={456} title={'Samsung 108 cm (43 inches) Full HD Smart LED TV UA43T5450AKXXL (Black)'} image={'https://m.media-amazon.com/images/I/91mRUNnqqnL._AC_UY327_FMwebp_QL65_.jpg'} price={234} rating={4}/>
  
    
   
   
    

    </div>

</div>

    </div>
  )
}

export default Home