import React, { useEffect, useState } from 'react'
import APIKit from '../../spotify'
import './library.scss'
import { useNavigate } from 'react-router-dom'

export default function Library() {
  const [playlists, setPlaylists] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    APIKit.get('me/playlists').then((response) => {
      console.log(response.data);
      setPlaylists(response.data.items);
    })
  }, [])

  const playPlaylist = (playlistId) => {
    navigate('/player', { state: { id: playlistId } })
  }

  return (
    <div className='screen-container'>
      <div className='playlist-body flex'>
        {playlists?.map((playlist) => {
          return (
            <div
              className='playlist-card flex'
              key={playlist.id}
              onClick={() => playPlaylist(playlist.id)}
            >
              <img src={playlist.images[0].url} alt="" className='playlist-card-img' />
              <p className='playlist-card-title'>{playlist.name}</p>
              <p className='playlist-card-subTitle'>{playlist.tracks.total} Songs</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
