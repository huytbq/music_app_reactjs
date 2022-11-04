import React from 'react'
import './queue.scss'

export default function Queue({ tracks, currentIndex, setCurrentIndex }) {
    // console.log(tracks);
    return (
        <div className="queue-container flex">
            <div className="queue flex">
                <div className="queue-list flex">
                    {
                        tracks.map((item, index) => {
                            // console.log(item);
                            return (
                                <div
                                    className={index === currentIndex ? 'queue-list-item active' : 'queue-list-item'}
                                    onClick={() => setCurrentIndex(index)}
                                >
                                    <p key={item.track?.id}>{(index + 1) + '. ' + item.track?.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
