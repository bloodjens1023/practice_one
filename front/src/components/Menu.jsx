import "../assets/css/menu.css";
import {NavLink} from 'react-router-dom'
export default function Menu(){
    return(
        <div className="menu">
            <ul>
                <li><NavLink to="/acceuil">Acceuil</NavLink></li>
                <li><NavLink to="/chat">Chat</NavLink></li>
                <li><NavLink to="/info">Info fako</NavLink></li>
                <li><NavLink to="/profil">Profil</NavLink></li>
                <li><NavLink to="/vente">Vente fako</NavLink></li>
            </ul>
        </div>
    )
}