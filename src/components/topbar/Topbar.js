import React from 'react'
import './topbar.css'
import {NotificationsNone, Language, Settings} from '@material-ui/icons';
import { Link } from 'react-router-dom';

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <Link className="link active" to="/">
                    <span className="logo">Dexteradmin</span>
                    </Link>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar;
