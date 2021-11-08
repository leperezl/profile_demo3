import React from 'react'
import './profile.css';

const UserInfo = (props) => {
    return (
        <div className="userInfo">
                <div className="infoBlock">
                <h1 id="myUsername"> {props.name}</h1>
                <p id="myPhone">{props.phone}</p>
                </div>
        </div>
    )
}

export default UserInfo
