
import ProfileBody from './ProfileBody'
import ProfileTop from './ProfileTop'
import Button from 'react-bootstrap/Button';
import './profile.css';
import React, { useState, useEffect } from 'react'

const Profile = () => {
    const initialState= {
        username:"derp",
        phone:"008123456", 
        inforpersonal: {
            names: "derp herp",
            surname: "bing bong",
            phone: "008123456"
        },
        profilePicture:"https://64.media.tumblr.com/b5a0817bdcdc5a7c8b44c93c19fb1902/d6d2f0dcf565ef5e-1d/s400x600/b39735f602acec74a52358aaa5804062d012ffa7.jpg",
        social_media:{
            twitter: "https://www.twitter.com",
            facebook:"https://www.facebook.com"
        },
        description:"no description yet !",
        preferenceProfile: {
            tipoPersona: "joven",
            tamanio: "grande",
            banios:" {{$randomInt}}",
            habitaciones: "{{$randomInt}}",
            estrato: "{{$randomInt}}",
        }
        
    }
   const [user, setUser] = useState(initialState)
    return (
        <div>
            <ProfileTop name={user.username} phone={user.phone} profilePicture={user.profilePicture} />
            <div className="profileBtns">
                    <Button variant="primary" className="profileBtn">Edit Profile</Button>
                    <Button variant="primary" className="profileBtn">Onboarding</Button>
                </div>
            <ProfileBody description={user.description} preferences={user.preferenceProfile} />
        </div>
    )
}

export default Profile
