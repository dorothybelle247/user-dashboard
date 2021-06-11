import React from 'react'
import "./widgetLg.css"

export default function WidgetLg() {
  const Button = ({type}) =>{
    return <button className={"widgetLgButton " + type}>
      {type}
    </button>
  }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">
        Latest Transactions
      </h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh"> Mighty Customers</th>
          <th className="widgetLgTh"> Mighty Dates</th>
          <th className="widgetLgTh"> Mighty Amount</th>
          <th className="widgetLgTh"> Mighty Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfKEpMo5FgJhHZ01f9ru069GUssLNm4oDdww&usqp=CAU" alt="" className="widgetLgImg" />
            <span className="widgetLgName"> Z Ball </span>
          </td>
          <td className="widgetLgDate">Jun 10</td>
          <td className="widgetLgAmount">$2345</td>
          <td className="widgetLgStatus">
            <Button type="Approved">
            </Button>
          </td>
        </tr>

        <tr className="widgetLgTr">
          <th className="widgetLgTh"> Mighty Customers</th>
          <th className="widgetLgTh"> Mighty Dates</th>
          <th className="widgetLgTh"> Mighty Amount</th>
          <th className="widgetLgTh"> Mighty Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfKEpMo5FgJhHZ01f9ru069GUssLNm4oDdww&usqp=CAU" alt="" className="widgetLgImg" />
            <span className="widgetLgName"> Z Ball </span>
          </td>
          <td className="widgetLgDate">Jun 10</td>
          <td className="widgetLgAmount">$2345</td>
          <td className="widgetLgStatus">
            <Button type="Declined">
            </Button>
          </td>
        </tr>


        <tr className="widgetLgTr">
          <th className="widgetLgTh"> Mighty Customers</th>
          <th className="widgetLgTh"> Mighty Dates</th>
          <th className="widgetLgTh"> Mighty Amount</th>
          <th className="widgetLgTh"> Mighty Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfKEpMo5FgJhHZ01f9ru069GUssLNm4oDdww&usqp=CAU" alt="" className="widgetLgImg" />
            <span className="widgetLgName"> Z Ball </span>
          </td>
          <td className="widgetLgDate">Jun 10</td>
          <td className="widgetLgAmount">$2345</td>
          <td className="widgetLgStatus">
            <Button type="Pending">
            </Button>
          </td>
        </tr>


        <tr className="widgetLgTr">
          <th className="widgetLgTh"> Mighty Customers</th>
          <th className="widgetLgTh"> Mighty Dates</th>
          <th className="widgetLgTh"> Mighty Amount</th>
          <th className="widgetLgTh"> Mighty Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfKEpMo5FgJhHZ01f9ru069GUssLNm4oDdww&usqp=CAU" alt="" className="widgetLgImg" />
            <span className="widgetLgName"> Z Ball </span>
          </td>
          <td className="widgetLgDate">Jun 10</td>
          <td className="widgetLgAmount">$2345</td>
          <td className="widgetLgStatus">
            <Button type="Approved">
            </Button>
          </td>
        </tr>


        <tr className="widgetLgTr">
          <th className="widgetLgTh"> Mighty Customers</th>
          <th className="widgetLgTh"> Mighty Dates</th>
          <th className="widgetLgTh"> Mighty Amount</th>
          <th className="widgetLgTh"> Mighty Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfKEpMo5FgJhHZ01f9ru069GUssLNm4oDdww&usqp=CAU" alt="" className="widgetLgImg" />
            <span className="widgetLgName"> Z Ball </span>
          </td>
          <td className="widgetLgDate">Jun 10</td>
          <td className="widgetLgAmount">$2345</td>
          <td className="widgetLgStatus">
            <Button type="Approved">
            </Button>
          </td>
        </tr>
      </table>
    </div>
  )
}
