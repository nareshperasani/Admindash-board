import React from 'react'
import './WidgetLg.css'

function WidgetLg() {

    const Button = ({type})=>{
        return <button className={"widgetLgButton   " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest translations</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Data</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Sk Rossi</span>
                    </td>
                    <td className="widgetLgData">21 Feb 2021</td>
                    <td className="widgetLgAmount">$222.45</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Sk Rossi</span>
                    </td>
                    <td className="widgetLgData">21 Feb 2021</td>
                    <td className="widgetLgAmount">$222.45</td>
                    <td className="widgetLgStatus"><Button type="Declined"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Sk Rossi</span>
                    </td>
                    <td className="widgetLgData">21 Feb 2021</td>
                    <td className="widgetLgAmount">$222.45</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Sk Rossi</span>
                    </td>
                    <td className="widgetLgData">21 Feb 2021</td>
                    <td className="widgetLgAmount">$222.45</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg
