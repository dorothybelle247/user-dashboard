import React from 'react'
import './sidebar.css'
import {LineStyle, Timeline, AttachMoney, BarChart} from '@material-ui/icons';

function SideComponent() {
  return (
    <div>
      <div className="sidebar">
      <div className="sidebarWrapper">
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">Quick Menu</h3>
              <ul className="sidebarList">
                  <li className="sidebarListItem">
                      <LineStyle className="sidebarIcon"/> Users
                  </li>
                  <li className="sidebarListItem">
                     <Timeline className="sidebarIcon"/> Products
                  </li>
                  <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
              </ul>
          </div>
      </div>
    </div>
    </div>
  )
}

export default SideComponent

