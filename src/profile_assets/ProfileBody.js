import React from 'react'
import BodyInfo from './BodyInfo'

const ProfileBody = (props) => {
    return (
        <div>
            <BodyInfo description={props.description} preferences={props.preferenceProfile} />
        </div>

    )
}

export default ProfileBody
