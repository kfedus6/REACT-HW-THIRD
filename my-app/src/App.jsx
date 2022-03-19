import React, { useState } from 'react'
import './Main.css'

function App() {

   const [photo, setPhoto] = useState([]);
   const [title, setTitle] = useState([]);

   const [gallery, setGallery] = useState([]);

   const [removeTitle, setRemoveTitle] = useState('');

   const [words, setWords] = useState('Нема картинки');


   const addPhoto = (e) => {
      setPhoto(e.target.value)
   }

   const addTitle = (e) => {
      setTitle(e.target.value)

   }

   const addPhotoGallery = () => {
      setGallery([...gallery, { 'img': photo, 'title': title }])
      setWords('');
   }

   const removePhoto = (e) => {
      setRemoveTitle(e.target.value);
   }

   const remove = () => {
      let newGallery = gallery.filter(item => item.title !== removeTitle);
      setGallery(newGallery);
   }

   return (
      <>
         <div className='go'>
            <input onChange={addPhoto} type="text" placeholder='силка картинки' />
            <input onChange={addTitle} type="text" placeholder='назва' />
            <button onClick={addPhotoGallery}>go</button>
         </div>
         <div className='delete'>
            <input onChange={removePhoto} type="text" placeholder='удалить' />
            <button onClick={remove}>delete</button>
         </div>
         <div className='search'>
            <input type="text" placeholder='пошук' />
         </div>
         <div className='gallery'>
            <div>
               <button>prev</button>
            </div>
            <span>{words}</span>
            {gallery.map((item, index) => {
               return <div key={index} className='photo'>
                  <span>{item.title}</span>
                  <img src={item.img} alt={item.title}></img>
               </div>
            })}
            <div>
               <button>next</button>
            </div>
         </div>
      </>
   )
}

export default App