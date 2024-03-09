import { useState } from "react";
import CardeProduit from "../components/CardeProduit";
import Input from "../components/Input";
import Menu from "../components/Menu";

const ordure = [
    { nom: 'Papier', description: 'Le papier est une matière recyclable fabriquée à partir de fibres de bois, utilisée pour écrire, emballer ou imprimer.' },
    { nom: 'Carton', description: 'Le carton est un matériau recyclable souvent utilisé pour fabriquer des boîtes, des emballages et d\'autres produits.' },
    { nom: 'Plastique', description: 'Le plastique est une matière synthétique dérivée du pétrole, recyclable dans certains cas pour la fabrication de nouveaux produits.' },
    { nom: 'Verre', description: 'Le verre est un matériau recyclable fabriqué à partir de sable, utilisé pour fabriquer des bouteilles, des pots et d\'autres contenants.' },
    { nom: 'Métal', description: 'Le métal est un matériau recyclable utilisé dans la fabrication de divers produits comme les canettes, les emballages alimentaires et les pièces métalliques.' }
  ];
  


export default function InfoFako(){
    const [recherche, setRecherche] = useState('')
    const produit = ordure.filter(ar => {
        if(recherche && !ar.nom.includes(recherche)){
            return false
        }
        return true
    })
    return (
        <>
            <Menu />
            <Input value={recherche} placeholder = "rechercher .." onChange={setRecherche}/>
            <div className="card-group">
                {
                    produit.map((ordure, i) =>(
                        <CardeProduit
                            key={i}
                            nom={ordure.nom}
                            description={ordure.description}
                        />
                    ))
                }
            </div>
        </>
    )
}