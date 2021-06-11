import React from 'react'
import './topbar.css'
import {NotificationsNone, Public, SettingsTwoTone} from '@material-ui/icons';
// import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';



export default function Topbar() {
  return (
    <div className="topbar">
    <div className="topbarWrapper">
        <div className="logo">
        Dragon Finance
        
        </div>
        <div className="topright">
            <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge"></span>
            </div>


            <div className="topbarIconContainer">
            <Public/>
            <span className="topIconBadge"></span>
            </div>

            <div className="topbarIconContainer">
            <SettingsTwoTone/>
           
            </div>
            <img src="" 
            alt="userImage" classclassName="topAvatar"/>
        </div>
    </div>
    </div>
  )
}
