import React from 'react';
import './Gig.css';

export default function Gif({ title, url }) {
  return (
    <div className="Gif">
      <h4>{title}</h4>
      <img src={url} alt={title} />
    </div>
  );
}
