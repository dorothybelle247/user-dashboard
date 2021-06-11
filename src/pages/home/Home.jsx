import React from 'react'
import "./home.css"
import {userData} from "../../DummyData"

import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import Chart from '../../chart/Chart'
import WidgetSm from '../widgetSmall/WidgetSm.jsx'
import WidgetLg from '../widgetLg/WidgetLg.jsx'

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo data={userData} title="User Analytics" grid datakey="Active User"/>
      <Chart />
      <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
      </div>
    </div>
  )
}
