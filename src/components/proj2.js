import React from 'react'
import './proj2.css'
const proj2 = (props) => {
  return (
    <>
       <div className='parent'>
          <div className='child'>
               <div className='child1'>
                  <h2 className='tit'>{props.id}</h2>
                 <img  className='imgn' src={props.image}/>
                 <h3>{props.name}</h3>
               </div>
          </div>

       </div>
    </>
  )
}

export default proj2