import React, { useState } from 'react'
import FormAddPhoto from './Components/FormAddPhoto';
import FormRemovePhoto from './Components/FormRemovePhoto';
import FormSearchPhoto from './Components/FormSearchPhoto';
import Gallery from './Components/Gallery';

import './Style/Main.css'

function App() {

   const [photo, setPhoto] = useState([]);
   const [title, setTitle] = useState([]);

   const [gallery, setGallery] = useState([]);

   const [removeTitle, setRemoveTitle] = useState('');

   const [words, setWords] = useState('Нема картинки !');

   const [from, setFrom] = useState('0');
   const [to, setTo] = useState('2');

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

   const next = () => {
      let f = +from + 3;
      let t = +to + 3;
      setFrom(f);
      setTo(t);

      if (+to + 1 >= gallery.length) {
         setFrom('0');
         setTo('2');
      }
   }

   const prev = () => {
      let f = +from - 3;
      let t = +to - 3;
      setFrom(f);
      setTo(t);

      if (from <= 0) {
         setFrom(gallery.length - 3);
         setTo(gallery.length - 1);
      }
   }

   return (
      <>
         <FormAddPhoto addPhoto={addPhoto} addTitle={addTitle} addPhotoGallery={addPhotoGallery} />
         <FormRemovePhoto removePhoto={removePhoto} remove={remove} />
         <FormSearchPhoto />
         <Gallery words={words} gallery={gallery} from={from} to={to} prev={prev} next={next} />
      </>
   )
}

export default App;