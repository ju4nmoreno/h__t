import React, { useState, useEffect } from 'react';
import Gif from './Gif';
import getGif from '../services/getGif';

export default function ListOfGifs({ params }) {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      getGif({ keyword }).then((e) => setGifs(e));
    },
    [keyword]
  );

  return (
    <div>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title} url={url} id={id} />
      ))}
    </div>
  );
}

