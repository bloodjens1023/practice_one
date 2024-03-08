import "../assets/css/menu.css";
import {NavLink} from 'react-router-dom'
export default function Menu(){
    return(
        <div className="menu">
            <ul>
                <li><NavLink to="/">Acceuil</NavLink></li>
                <li><NavLink to="chat">Chat</NavLink></li>
                <li>Info fako</li>
                <li>Profil</li>
                <li>Vente fako</li>
            </ul>
        </div>
    )
}