import React from 'react'
import Title from './utils/Title'
import Item from './utils/Item'

const Sales = ( {ifExists,endpoint:{title,items}}) => {
    
  return (
    <div className='nike-container my-14'>

<Title title={title}/>
<div className={`grid items-center justify-items-center  gap:7 lag:gap-5 mt-7 ${ifExists ?'grid-cols-2 xl:grid-cols-3 sm:grid-cols-1':'grid-cols-3 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'}`}



>
{
    items?.map((val,i)=>(
        <Item key={i} {...val} ifExists={ifExists}/>

    ))
}
   
</div>
 
    </div>
  )
}

export default Sales