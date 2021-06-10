import React from 'react'
import './chart.css'
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";



export default function Chart({title, data, datakey, grid}) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
            <XAxis datakey="name" stroke="#B35700"></XAxis>

            <Line type="monotone" datakey={datakey} stroke="#021013"></Line>
            <Tooltip />
          {grid && <CartesianGrid stroke="#021013" strokeDasharray="5 5"/>}
            <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
