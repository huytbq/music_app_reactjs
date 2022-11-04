import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IconContext } from 'react-icons'
import './sidebarButton.scss'

export default function SidebarButton({ title, to, icon }) {
    const location = useLocation();
    const isActive = location.pathname === to
    const btnClass = isActive ? "btn-body active" : "btn-body"
    return (
        <Link to={to}>
            <div className={btnClass + ' flex'}>
                <IconContext.Provider value={{ size: '24px' }}>
                    {icon}
                    <p className='btn-title'>{title}</p>
                </IconContext.Provider>
            </div>
        </Link>
    )
}
