import React from 'react'

export const GifGridltem = ({ title, url }) => {

    return (
        <div className='card animate__animated animate__bounce animate__delay-2s'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
