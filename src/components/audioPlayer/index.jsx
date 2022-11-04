import React, { useState, useEffect, useRef } from 'react'
import './audioPlayer.scss';

import TimeSlider from 'react-input-slider';
import { MdSkipPrevious, MdSkipNext, MdPauseCircle, MdPlayCircle } from 'react-icons/md';

export default function AudioPlayer({ track, currentIndex, setCurrentIndex }) {
    // console.log(track);
    const audioRef = useRef();
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlay, setPlay] = useState(false);

    const handleLoadedData = () => {
        setDuration(audioRef.current.duration);
        if (isPlay) audioRef.current.play();
    };

    const handlePausePlayClick = () => {
        if (isPlay) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlay(!isPlay);
    };

    const handleTimeSliderChange = ({ x }) => {
        audioRef.current.currentTime = x;
        setCurrentTime(x);

        if (!isPlay) {
            setPlay(true);
            audioRef.current.play();
        }
    };
    return (
        <div className="App">
            <img className="Song-Thumbnail" src={track?.album?.images[0]?.url} alt="tet" />
            {/* <h2 className="Song-Title">{audios[audioIndex].title}</h2>
            <p className="Singer">{audios[audioIndex].artist}</p> */}
            <div className="Control-Button-Group">
                <div
                    className="Prev-Button"
                    onClick={() => setCurrentIndex(currentIndex - 1)}
                >
                    <MdSkipPrevious />
                </div>
                <div className="Pause-Play-Button"
                    onClick={handlePausePlayClick}
                >
                    {isPlay ? <MdPauseCircle /> : <MdPlayCircle />}
                </div>
                <div
                    className="Next-Button"
                    onClick={() => setCurrentIndex(currentIndex + 1)}
                >
                    <MdSkipNext />
                </div>
            </div>
            <TimeSlider
                axis="x"
                xmax={duration}
                x={currentTime}
                onChange={handleTimeSliderChange}
                styles={{
                    track: {
                        backgroundColor: "#e3e3e3",
                        height: "2px",
                    },
                    active: {
                        backgroundColor: "#333",
                        height: "2px",
                    },
                    thumb: {
                        marginTop: "-3px",
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#333",
                        borderRadius: 0,
                    },
                }}
            />
            <audio
                ref={audioRef}
                src={track?.preview_url}
                onLoadedData={handleLoadedData}
                onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                onEnded={() => setPlay(false)}
            />
        </div>
    )
}
