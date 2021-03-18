import React from 'react'

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)} and Morty&limit=10&api_key=oenqecYb1IG4T2XV3vYLVcwbtrwSZ66S`
    const resp = await fetch(url);
    const { data } = await resp.json();


    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}