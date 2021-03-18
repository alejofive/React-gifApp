import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch']);


    //    const handleAdd = () => {
    //     setcategories(cast => ['Honter', ...categorias])
    //   }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories}></AddCategory>
            <hr />

            <ol>
                {
                    categories.map(category => (
                        < GifGrid
                            key={category}
                            category={category} >
                        </GifGrid>
                    ))
                }
            </ol>


        </div >
    )
}
