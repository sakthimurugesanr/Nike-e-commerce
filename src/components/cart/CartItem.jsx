import React from 'react'
import { useDispatch } from 'react-redux'
import { MinusIcon,PlusIcon,TrashIcon } from '@heroicons/react/24/outline'


import { setIncreaseItemQty, setRemoveItemFromCart ,setDecreaseItemQty} from '../../app/cartSlice.js'


const CartItem = ({item:{id,title,text,img,shadow,price,cartQuantity,color}}) => {
    const dispatch=useDispatch()
  const onRemoveItem = () =>{
    dispatch(setRemoveItemFromCart({id,title,text,img,shadow,price,cartQuantity,color}))
  }
  

  const onIncreasedCartQty = ()=>{
    dispatch(setIncreaseItemQty({id,title,text,img,shadow,price,cartQuantity,color}))
    
  }
  const ondecreasedCartQty = ()=>{

    dispatch(setDecreaseItemQty({id,title,text,img,shadow,price,cartQuantity,color}))


  }

  return (
    <>
      

      <div className=' flex items-center justify-between px-5  w-full' >

        <div className='flex items-center  gap-5'>
          <div className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-110 transition-all duration-700  ease-in-out grid items-center`}>
            <img src={img} alt={`cart-item ${id}`} className='w-30 h-auto object-fill lg:w-28 ' />
          </div>
          <div className=' grid items-center  gap-4 '>
            <div className='grid items-center leading-none'>
              <h1 className='font-medium text-lg text-slate-900 lg:text-md'>{title}</h1>
              <p className='text-slate-600 text-sm lg:text-xsm'>{text}</p>
            </div>
            <div className='flex items-center justify-around w-full'>   
              <button className=' bg-theme-cart text-white rounded-md w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-75 ' type='button' onClick={ondecreasedCartQty}>
                  <MinusIcon className='w-5 h-5'/>
              </button>
              <div className='bg-theme-cart rounded text-white w-6 h-6 flex items-center justify-center font-medium lg:text-sm'>{cartQuantity}</div>
              <button className='  stroke-[2] bg-theme-cart text-white rounded-md w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-75 ' type='button'onClick={onIncreasedCartQty} >
                  <PlusIcon/>
              </button>
              
            </div>
          </div>
        </div>
        <div className=' grid items-center gap-5 '>
          <div className=' grid items-center'>
            <h1 className='text-lg lg:text-base text-slate-900 font-medium'> ${price * cartQuantity}</h1>
          </div>
          <div className='grid items-center'>
          <button className='w-6 h-6 bg-theme-cart rounded text-white' type='button cursur-pointer' onClick={onRemoveItem}>
                  <TrashIcon className='h-5 w-6 flex items-center justify-center'/>
              </button> 
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem