import React from 'react'
import './ImageColumn.scss'

function ImageColumn({image, title}) {
    return (
      <div className='c-imgc'>
        <h2>{title}</h2>
        <img src={image} alt='' />
      </div>
    )
}

export default ImageColumn