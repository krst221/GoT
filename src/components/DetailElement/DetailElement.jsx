import React from 'react';
import './DetailElement.scss';

function DetailElement({character}) {

  return (
    <div className='c-detel'>
      <img src={character.image} alt=''></img>
      <span>{character.name}</span>
    </div>
  )
}

export default DetailElement