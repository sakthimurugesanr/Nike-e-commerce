import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'

const CartCount = ({onCartToggle ,onClearedCartitems,totalQTY}) => {
  return (
    <>
<div className='bg-white h-10 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full'>
    <div className='flex items-center gap-3 ' >

        <div className='  '>
<ChevronDoubleLeftIcon className='w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2] ' onClick={onCartToggle}/>

        </div>
        <div className='flex items-center gap-2 '>
        <h1 className='text-base font-medium text-slate-900'>Your Cart</h1><span className='bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-sm'>({totalQTY}Items)</span>

        </div>
    
        </div>
    <div>
        <button type='button 'className='rounded bg-theme-cart active:scale-90 p-0.5' onClick={onClearedCartitems}> 

        <XMarkIcon className='text-white h-5 w-5'  />
        </button>


    </div>




</div>


    </>
  )
}

export default CartCount