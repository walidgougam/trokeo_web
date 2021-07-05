import React from 'react';
import './ProposeGoodHelpCenter.scss';

function ProposeGoodHelpCenter() {
    return (
        <div className="container_proposegoodelpcenter">
            <div className="title_proposegoodelpcenter">
                Comment créer une annonce ?
            </div>
            <br />
            Pour créer un annonce, commencez par appuyer sur l’icon « « + » créer et
            sélectionner « offre» ou « « demande »<br />
            <br />
            Ensuite, il suffit de cliquer de renseigner les informations demandées.
            <br />
            <br />
            Important : Votre adresse ne sera pas communiquée aux autres trokeurs. Un
            point aléatoire est sélectionné dans un rayon de plusieurs mètres autour
            de l'adresse ou du point géo-localisé sur la carte.
            <br />
            <br />
            <div className="title_proposegoodelpcenter">
                Comment modifier une annonce ?
            </div>
            <br />
            Vous pouvez facilement modifier vos annonces depuis votre profil en
            suivant les étapes ci-dessous :<br /><br /> Appuyez sur l’icône de votre profil<br />
            Appuyez sur Mes annonces<br /> Sélectionnez l’annonce à modifier, sur la fiche
            de votre annonce appuyez sur l’icon trois points en haut à droite,
            sélectionnez l’entrée « modifiez l’annonce » puis effectuer les
            changements nécessaires.<br /> Les mises à jour sont enregistrées
            automatiquement avant de quitter la fiche.
        </div>
    );
}

export default ProposeGoodHelpCenter;
