import React from 'react'

function FormRemovePhoto({ removePhoto, remove }) {
   return (
      <div className='delete'>
         <input onChange={removePhoto} type="text" placeholder='удалить' />
         <button onClick={remove}>Delete</button>
      </div>
   );
}

export default FormRemovePhoto;