import React from 'react'
import "./featuredInfo.css"
import {ArrowDownward, ArrowUpwardSharp} from '@material-ui/icons';

export default function featuredInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
          <span className="featuredTitle">Revenuee</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">$2000</span>
              <span className="featuredMoneyRate"> 12.3
              <ArrowDownward className="featuredIcon negative"/>
              </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div>


      <div className="featuredItem">
          <span className="featuredTitle">Sales</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">$2000</span>
              <span className="featuredMoneyRate">-12.3
              <ArrowDownward className="featuredIcon positive"/>
              </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">$2900</span>
              <span className="featuredMoneyRate">-12.3
              <ArrowUpwardSharp className="featuredIcon negative"/>
              </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}
