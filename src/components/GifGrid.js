import React from 'react'
import { useFetcheGifs } from '../hooks/useFetcheGifs'
import { GifGridltem } from './GifGridltem';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetcheGifs(category);


    return (

        <div>
            <h3>{category}</h3>

            { loading && <p>loading</p>}

            { <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGridltem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>}
        </div>
    )
}


