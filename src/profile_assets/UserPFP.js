
import './profile.css';

const UserPFP = (props) => {
    return (
        <div id="pfp">
             <img src={props.img} alt="Girl in a jacket" id="pfpimg" /> 
        </div>
    )
}

export default UserPFP
