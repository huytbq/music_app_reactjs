import React, { useState, useEffect } from 'react'
import './sidebar.scss'
import SidebarButton from './sidebarButton'
import { IoLibrary } from 'react-icons/io5'
import { GoSignOut } from 'react-icons/go'
import { MdDashboard, MdFavorite } from "react-icons/md"
import { FaHotjar, FaPlay } from "react-icons/fa"
import appClient from '../../spotify'

export default function SideBar() {

    const [avatar, setAvatar] = useState('https://ih1.redbubble.net/image.2341081622.3541/st,small,507x507-pad,600x600,f8f8f8.jpg');
    useEffect(() => {
        appClient.get("me").then((response) => {
            setAvatar(response.data.images[0].url);
        })
    })
    return (
        <div className='sidebar-container flex'>
            <img src={avatar} alt="avatar" className='profile-img' />
            <div>
                <SidebarButton title="Feed" to="/feed" icon={<MdDashboard />} />
                <SidebarButton title="Trending" to="/trending" icon={<FaHotjar />} />
                <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
                <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />} />
                <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
            </div>
            <SidebarButton title="Sign out" to="" icon={<GoSignOut />} />
        </div>
    )
}
