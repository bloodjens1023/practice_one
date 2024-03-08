export default function CardeProduit({nom, description}){
    return (
        <div>
            <h1>{nom}</h1>
            <p className="description">{description}</p>
        </div>
    )
}