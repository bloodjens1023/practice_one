export default function Bouton({type, text, classe}){
    return (
        <button type={type} className={classe}>{text}</button>
    )
}