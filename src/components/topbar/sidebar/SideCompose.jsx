import React from 'react';
import './sidebar.css'
import {Report, Timeline, WorkOutline} from '@material-ui/icons';

export default function SideCompose() {
  return (
    <div>
       <div className="sidebar">
      <div className="sidebarWrapper">
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">Staff</h3>
              <ul className="sidebarList">
              <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>

              </ul>
          </div>
      </div>
    </div>
    </div>
  );
}
