import React from 'react'
import './profile.css';

const BodyInfo = (props) => {
    return (
        <div className="bodyInfo">
            <div className="bodyBlock">
                <article >
                    <h3 className="infoTitle">About Me</h3>
                    <p id="aboutMe" className="infoText">{props.description}</p>
                </article>
                <article className="wrapper"> 
                    <span className="spanTitle"><h3 className="infoTitle">Preferences</h3><img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Eye-slash.svg" id="slashedEye" alt="private"></img></span>
                    <ul id="lista" className="infoText">
                            <li>
                                {props.preferences}
                            </li>
                            {console.log(props.preferences)}


                    </ul>
                </article>
            </div>
        </div>
    )
}

export default BodyInfo
