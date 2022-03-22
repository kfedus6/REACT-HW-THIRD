import React, { useMemo, useState } from 'react'
import FormPhoto from './Components/FormPhoto';
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

   const [query, setQuery] = useState('')

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

   const galleryFinal = useMemo(() => {
      if (query != '') {
         return gallery.filter(item => item.title.includes(query))
      } else {
         return gallery
      }
   }, [query, gallery])

   return (
      <>
         <FormPhoto addPhoto={addPhoto} addTitle={addTitle} addPhotoGallery={addPhotoGallery} removePhoto={removePhoto} remove={remove} setQuery={setQuery} />
         <Gallery words={words} gallery={galleryFinal} from={from} to={to} prev={prev} next={next} />
      </>
   )
}

export default App;