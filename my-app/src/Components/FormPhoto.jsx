import React from 'react'

function FormPhoto({ addPhoto, addTitle, addPhotoGallery, removePhoto, remove, setQuery }) {
   return (
      <>
         <div className='go'>
            <input onChange={addPhoto} type="text" placeholder='силка картинки' />
            <input onChange={addTitle} type="text" placeholder='назва' />
            <button onClick={addPhotoGallery}>Go</button>
         </div>
         <div className='delete'>
            <input onChange={removePhoto} type="text" placeholder='удалить' />
            <button onClick={remove}>Delete</button>
         </div>
         <div className='search'>
            <input onChange={(e) => setQuery(e.target.value)} type="text" placeholder='пошук' />
         </div>
      </>
   )
}

export default FormPhoto;