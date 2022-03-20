import React from 'react'

function Gallery({ words, gallery, prev, next, from, to }) {
   return (
      <div className='gallery'>
         <div>
            <button onClick={prev}>prev</button>
         </div>
         <span>{words}</span>
         {
            gallery.map((item, index) => {
               if (from <= index & index <= to)
                  return <div key={index} className='photo'>
                     <span>{item.title}</span>
                     <img src={item.img} alt={item.title}></img>
                  </div>
            })
         }
         <div>
            <button onClick={next}>next</button>
         </div>
      </div>
   )
}

export default Gallery;