import React from 'react'
import './albumImage.scss'

export default function AlbumImage({ url }) {
    // console.log(url);
    return (
        <div className="albumImage flex">
            <img src={url} alt='art' className="albumImage-art" />
            <div className='albumImage-shadow'>
                <img src={url} alt='shadow' className="albumImage-shadow" />
            </div>
        </div>
    )
}
