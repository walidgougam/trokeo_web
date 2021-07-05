import React from 'react';
import './ResearchHelpCenter.scss';

function ResearchHelpCenter() {
    return (
        <div className="container_researchhelpcenter">
            <div className="title_researchhelpcenter">
                Comment rechercher une annonce ? :
            </div><br />
            Dans la liste des annonces, cliquez sur la loupe dans le menu.<br /><br /> Vous pouvez
            sélectionner tous les critères spécifiques à votre recherche et il n’y a
            plus qu’à cliquer sur “Rechercher”.<br /><br />
            <div className="title_researchhelpcenter">
                Comment personnaliser l’accueil ?
            </div><br />
            La personnalisation de votre profil vous permet de sélectionner les
            contenus que vous souhaitez voir sur Trokéo. En personnalisant Trokéo,
            vous verrez les offres et demandes qui vous correspondent dès que vous
            ouvrirez Trokéo.<br /><br /> Vous pouvez personnaliser votre fil d’actualité en
            fonction :<br /><br /> Des catégories de biens et services que vous avez sélectionnées
            Les offres et demandes qui correspondent à ces catégories seront affichés
            dans votre fil d’actualité. Vous pouvez aussi vous abonner à d'autres
            membres, afin de voir leurs annonces dans votre espaces de notification.<br /><br />
            <div className="title_researchhelpcenter">
                Comment consulter mes favoris ?
            </div><br />
            Vous pouvez facilement retrouvez vos favoris en suivant les étapes
            ci-dessous :<br /><br /> Appuyez sur l’icône de ton profil<br />Appuyez sur Mes favoris<br />
            Supprimez vos favoris depuis cet espace, la mise à jour est effectuée
            automatiquement.<br /><br /> Pour ajouter un favori:<br /><br /> Vous pouvez le mettre vos favoris
            pour le retrouver plus tard<br /><br /> Pour mettre en favori un article, il vous
            suffit de cliquer sur l’icône en forme de cœur directement sous la photo
            de l’article depuis le fil d'actualité ou bien depuis la page de l'article
            en question.<br /><br /> Pour retirer un article de tes favoris, il te suffit de
            cliquer sur l'icône en forme de cœur située sur l'article qui ne
            t'intéresse plus Si un trokeur met votre article dans ses favoris, vous
            recevrez une notification. En cliquant sur la notification, vous pourrez
            entrer en contact avec le membre qui a aimé votre article
        </div>
    );
}

export default ResearchHelpCenter;
