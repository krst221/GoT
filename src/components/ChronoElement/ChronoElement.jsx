import React from 'react'
import './ChronoElement.scss'
import classNames from 'classnames'

function ChronoElement({character, index}) {

  const {age} = character;


/*   console.log(character.age);
  console.log(age); */

  return (
    <div className={classNames({
      chrono: true,
      left: index % 2 === 0,
      right: index % 2 !== 0,
    })}>
      <span>{age.age}</span>
      <h2>{age.name}</h2>
      <img src={character.image} alt='' />
    </div>
  )
}

export default ChronoElement