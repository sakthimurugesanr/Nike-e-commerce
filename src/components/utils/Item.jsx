import React from 'react'
import { useDispatch } from 'react-redux'
import { StarIcon,ShoppingBagIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'
import {  setAddItemToCart, setOpenCart } from '../../app/cartSlice.js'
import { useSelector } from 'react-redux';


const Item = ({ifExists,id,color,shadow,title,text,img,btn,rating,price}) => {
  const dispatch = useDispatch()


  const onCartToggle =()=>{

    dispatch(setOpenCart({
        cartState : true
    }))
    
}
  

  const onAddTOCart = ()=>{
    const item = {id,title,text,img,color,shadow,price}
    dispatch(setAddItemToCart(item))
  }
 

    
  return (
      <div className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center  ${ifExists ? 'justify-items-start' : 'justify-items-center'} rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full gap-10   hover:scale-105 `}>
      
        <div className={` grid items-center ${ifExists ? 'justify-items-start' : 'justify-items-center'}`}>
            <h1 className='text-slate-200 text-xl lg:text-large md:text-base font-medium filter drop-shadow'>{title}</h1>
            <p className='text-slate-200 filter drop-shadow text-base md:text:sm font-normal'>{text}</p>
            
            
            <div className=' flex items-center justify-between w-28 my-3'>
                <div className=' flex items-center'><h1 className='bg-white /80 px-1 rounded text-black font-medium' >${price}</h1></div>
                <div className=' flex items-center '> <StarIcon className='icon-style  w-5 h-5 md:w-4 md:h-4'/><h1 className='md:text-sm font-normal text-white'>{rating}</h1></div>
            </div>


            <div className='flex items-center gap-3 '><button type='button' className='blur-effect-theme button-theme p-0.5 shadow shadow-sky-200' onClick={()=>{onAddTOCart(); }}><ShoppingBagIcon className='icon-style  '/></button>
            <button type='button' className='bg-white /80 px-1 rounded py-1 ' onClick={()=>{onAddTOCart();onCartToggle(); }}>{btn}</button>
            </div>
        </div>


        <div className={`flex items-center ${ifExists ? 'absolute top-5 right-1' : 'justify-center'}`}>

            <img src={img} alt={`shoes ${id}`} 
            
            className={`
            
            transitions-theme
            hover:-rotate-12 ${ifExists ? 'h-auto w-64 lg:w-56 md:w=48 -rotate-[35deg]' : 'h-36 w-64'}
            `}
            
            />
        </div>



    </div> 
  )
}

export default Item