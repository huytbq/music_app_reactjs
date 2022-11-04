import React from 'react'
import './albumInfo.scss'

export default function AlbumInfo({ album }) {
    // console.log(album);
    return (
        <div className='album'>
            <div className="album-name">
                <p>{album?.name + ' - ' + album?.artists.map((item) => item.name).join(', ')}</p>
            </div>
            <div className="album-info">
                <p>{album?.name + ' is an ' + album?.album_type + ' by ' + album?.artists.map((item) => item.name).join(', ') + ' with ' + album?.total_tracks + ' track(s)'}</p>
            </div>
            <div className="album-release">
                <p>{'Release Date: ' + album?.release_date}</p>
            </div>
        </div>
    )
}
