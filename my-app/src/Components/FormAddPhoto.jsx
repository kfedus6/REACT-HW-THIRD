import React from 'react'

function FormAddPhoto({ addPhoto, addTitle, addPhotoGallery }) {
   return (
      <div className='go'>
         <input onChange={addPhoto} type="text" placeholder='силка картинки' />
         <input onChange={addTitle} type="text" placeholder='назва' />
         <button onClick={addPhotoGallery}>Go</button>
      </div>
   )
}

export default FormAddPhoto;