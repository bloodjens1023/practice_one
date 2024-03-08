import React, { useState } from 'react';
import Bouton from '../components/Bouton';


export default function Connexion() {
    const [nom, setNom] = useState('');
    const [description, setDescription] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulaire soumis !');
        console.log('Nom:', nom);
        console.log('Description:', description);

        setFormSubmitted(true);

        setNom('');
        setDescription('');

        setTimeout(() => {
            window.location.href = '/acceuil';
        }, 2000);
    };

    // if (formSubmitted) {
    //     return <div>Formulaire soumis avec succès. Redirection en cours...</div>;
    // }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nom </label>
                <input 
                    type="text"
                    value={nom}
                    placeholder="Entrer votre nom"
                    onChange={(e) => setNom(e.target.value)}
                />
            </div>
            <div>
                <label>Mot de passe</label>
                <input
                    type='password'
                    value={description}
                    placeholder="Mot de passe"
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <Bouton type="submit" text="Valider" classe="bouton"/>
        </form>
    );
}
