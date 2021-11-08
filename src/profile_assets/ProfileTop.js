import React from 'react'
import UserInfo from './UserInfo'
import UserPFP from './UserPFP'

import 'bootstrap/dist/css/bootstrap.min.css';

const ProfileTop = (props) => {
     //ill have to make the buttons here
    return (
        <div className="grad">
            <UserInfo name={props.name} phone={props.phone}/>
            <div className="bottomProfileTop">

            <UserPFP img={props.profilePicture} />

            </div>
        </div>
    )
}

export default ProfileTop
