import { Visibility } from '@material-ui/icons'
import React from 'react'
import './WidgetSm.css'

function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">John Smith</span>
                        <span className="widgetSmUserTitle">React Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">John Smith</span>
                        <span className="widgetSmUserTitle">React Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">John Smith</span>
                        <span className="widgetSmUserTitle">React Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">John Smith</span>
                        <span className="widgetSmUserTitle">React Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">John Smith</span>
                        <span className="widgetSmUserTitle">React Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm
