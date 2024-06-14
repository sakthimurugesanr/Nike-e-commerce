import React, { useEffect } from 'react'
import CartCount from './cart/CartCount'
import CartEmpty from './cart/CartEmpty'
import CartItem from './cart/CartItem'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { setCloseCart,selectCartState, selectCartItems,setClearCartItems, setgetTotals, selectTotalAmount, selectTotalQTY} from '../app/cartSlice.js'



const Cart = () => {
  const dispatch = useDispatch()

  const ifselect = useSelector(selectCartState)
  const cartItems = useSelector(selectCartItems)
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);

  
  

  useEffect(()=>{
      dispatch(setgetTotals())

  },[cartItems,dispatch])


  const onCartToggle =()=>{

      dispatch(setCloseCart({
          cartState : false
      }))
      
  }

  const onClearedCartitems =()=>{
    dispatch(setClearCartItems())
  }

  return (
    <div>
        <div className={`fixed top-0 left-0 right-0  w-full h-screen blur-effect-theme opacity-100 z-[250] ${ifselect ? 'opacity-100 visible translate-x-0' :'opacity-0 invisible translate-x-9'}`}>

        

        <div className={`absolute  right-0 blur-effect-theme max-w-xl  h-screen  w-full  `}> 
        <CartCount totalQTY={totalQTY} onCartToggle={onCartToggle} onClearedCartitems={onClearedCartitems}/>
        { cartItems.length === 0  ? <CartEmpty onCartToggle={onCartToggle} /> :  
          
          <div>
            <div className='flex iems-start justify-start flex-col gap-y-7 overflow-y-scroll h-[81vh]  scroll-hidden '>
              {

                  cartItems?.map((item,i)=>(

                    <CartItem key={i} item={item}/>

                  ))

              }


            </div>
            <div className='fixed bottom-0 w-full bg-white px-5 py-3 grid items-center'>
              <div className='flex items-center justify-between'>
                <h1 className='text-base font-semibold uppercase'>Subtotal</h1>
                <h1 className='bg-theme-cart text-slate-100 px-1 py-0.5'>${totalAmount}</h1>
              </div>
              <div className='grid items-center gap-2'>
              <p className='text-sm font-medium text-center'>Texas and shipping will Calclulate At Shipping </p>
              <button className='bg-theme-cart w-full text-slate-100' type="button"> Check Out </button>
            </div>
            </div>
            
            
            
          </div>
          
          }


        
        
        
        
        </div>


        </div >

        
            


    </div>
   
  )
}

export default Cart