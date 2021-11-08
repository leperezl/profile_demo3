import React from 'react'
import BodyInfo from './BodyInfo'

const ProfileBody = (props) => {
    return (
        <div>
            <BodyInfo description={props.description ?? "add your description with edit profile !"} preferences={props.preferences ?? "add your preferences with onboarding !"} />
        </div>

    )
}

export default ProfileBody
