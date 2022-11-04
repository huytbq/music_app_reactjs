import React, { useEffect, useState } from 'react'
import './player.scss'
import { useLocation } from 'react-router-dom'
import apiClient from '../../spotify';
import SongCard from '../../components/songCard';
import Queue from '../../components/queue';
import AudioPlayer from '../../components/audioPlayer';

export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currrentTrack, setCurrrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  // console.log(location);
  useEffect(() => {
    if (location?.state?.id) {
      apiClient(`playlists/${location.state.id}/tracks`).then((response) => {
        // console.log(response);
        setTracks(response.data.items)
        setCurrrentTrack(response.data.items[0].track)
      })
    }
  }, [location.state?.id])
  // console.log(tracks);
  useEffect(() => {
    setCurrrentTrack(tracks[currentIndex]?.track)
  }, [currentIndex])

  return (
    <div className='screen-container'>
      <div className="player-body flex">
        <div className="player-body-left">
          <AudioPlayer
            track={currrentTrack}
            currentIndex={currentIndex}
            setCurrentIndex={(i) => setCurrentIndex(i)}
          />
        </div>
        <div className="player-body-right flex">
          <SongCard
            album={currrentTrack?.album}
          />
          <Queue
            tracks={tracks}
            currentIndex={currentIndex}
            setCurrentIndex={(i) => setCurrentIndex(i)}
          />
        </div>
      </div>
    </div>
  )
}
