export default function Bouton({onclick, text, classe}){
    return (
        <button onClick={onclick} className={classe}>{text}</button>
    )
}