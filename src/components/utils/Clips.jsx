import React from 'react'
import { PlayIcon } from '@heroicons/react/24/solid'

const Clips = ({clip,imgsrc}) => {
  return (
    <>
     <div className='relative w-32 h-28 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300
     lg:w-28 md:-24 sm:w-16 lg:h-24 md:h-20 sm:h-14' >
<img src={imgsrc} alt="shoeimg " className='inset-0 w-full h-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10 transition-opacity duration-500 ' />
<div className='bg-white blur-effect-theme absolute top-11 left-11  lg:top-8 lg:left-9  md:top-6 md:left-5 sm:top-4 sm:left-5 right-0 opacity-100 z-[100] w-8 h-8 md:w-5 md:h-5 flex items-center justify-center rounded-full hover:hidden '>
    <PlayIcon className='icon-style text-slate-900 '/>
</div>
<video 
    autoPlay={true} 
    muted={true}
    loop={true}
    playsInline={true}
    className='absolute top-0 left-0 right-0 flex w-full h-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-50 rounded-xl'
>
<source  type='video/mp4'  src={clip}/>

</video>
    </div>
    
    </>
   
  )
}

export default Clips