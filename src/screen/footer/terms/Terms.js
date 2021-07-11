import React from 'react';
import './Terms.scss';
import { HeaderGreen, Navbar, Footer } from '../../../component/index';

function Terms(props) {
    return (
        <div className="all_container_terms">
            <Navbar history={props.history} />
            <div className="container_terms">
                <HeaderGreen title="Conditions d’utilisation" />
                <div className="wrapper_terms">
                    <p className="title_terms">Le geste eco-citoyen</p>
                    <p className="text_terms">
                        Date d’entrée en vigueur : 22 juillet 2020 <br />
                        <br />
                        trokeo est une société par actions simplifiée, au capital de 12 828,12
                        euros, immatriculée au Registre du commerce et des sociétés de
                        Nanterre sous le numéro 843 148 800, dont le siège social est sis 18
                        rue de l’ancienne Mairie, 92100 Boulogne-Billancourt (ci-après, «
                        Trokéo »).
                        <br />
                        <br /> Contact :<br /> Pour tout problème concernant l’utilisation de
                        l’Application Trokéo ou son fonctionnement l’Utilisateur peut
                        contacter le centre d’aide disponible sur l’application mobile Trokéo
                        et le site web.
                    </p>
                    <p className="title_terms">ARTICLE 1 – Définitions</p>
                    <p className="text_terms">
                        <span style={{ fontWeight: 'bold' }}>Application trokeo</span> désigne
                        l’application mobile trokeo déclinée sous les systèmes d’exploitation
                        Android et iOS et WEB et disponible en téléchargement sur l’Apple
                        Store et Google Play. Elle permet aux Utilisateurs de réaliser des
                        Échanges.
                        <br />
                        <br /> <span style={{ fontWeight: 'bold' }}>Association</span> désigne un type de Page créé par le représentant
                        légal d’une association soumise à la loi de 1901 (ou toute autre
                        personnes dûment habilitée à cet effet), légalement constituée,
                        utilisatrice de l’Application trokeo pour leur propre compte et à des
                        fins non-professionnelles.
                        <br />
                        <br /> <span style={{ fontWeight: 'bold' }}>Bien</span> désigne les objets mobiliers demandés ou proposés par un
                        Utilisateur dans le cadre d’une Demande ou d’une Offre sur
                        l’Application trokeo.
                        <br />
                        <br /> <span style={{ fontWeight: 'bold' }}>Personnalisation</span> désigne des groupes de catégories de Biens
                        et de Services renseignés par l’Utilisateur et lui permettant de
                        recevoir des annonces suggérées au regard des critères renseignés.
                        <br />
                        <br /> <span style={{ fontWeight: 'bold' }}>Chat</span> désigne le service de messagerie instantanée mis à la
                        disposition des Utilisateurs de l’Application trokeo. Le Chat a pour
                        vocation de simplifier les Échanges entre Utilisateurs, et de les
                        aider à planifier leurs rencontres.
                        <br />
                        <br /> <span style={{ fontWeight: 'bold' }}>Clients</span> désigne toute personne ayant souscrit un contrat de
                        prestation de services avec trokeo portant sur l’utilisation de
                        l’Application trokeo ou du Dashboard.
                        <br />
                        <br /> <span style={{ fontWeight: 'bold' }}>Compte</span> désigne le compte qui doit être créé par les
                        Utilisateurs, obligatoire pour l’utilisation de l’Application trokeo.
                        Le Compte rassemble l’ensemble des données relatives à l’Utilisateur
                        permettant notamment l’accès aux services de l’Application trokeo.
                        <br />
                        <br /> <span style={{ fontWeight: 'bold' }}>CGU</span> ou Conditions Générales d’Utilisation désigne les présentes
                        conditions générales d’utilisation de l’Application Trokéo.
                        <br />
                        <br /> <span style={{ fontWeight: 'bold' }}>Demande</span> désigne un besoin de Bien ou de Service exprimé sur
                        l’Application trokeo par un Utilisateur ou la réponse à une
                        proposition de mise à disposition d’un Bien ou offre de Service faite
                        sur l’Application trokeo par un Utilisateur.
                        <br />
                        <br /> <span style={{ fontWeight: 'bold' }}>Demandeur</span> désigne un Utilisateur qui a exprimé une Demande sur
                        l’Application trokeo. Le Demandeur peut également être un Utilisateur
                        qui répond à une proposition de Bien ou de Service déjà en ligne sur
                        l’Application trokeo.
                        <br />
                        <br /> <span style={{ fontWeight: 'bold' }}>Echange</span> désigne l’opération par laquelle les Utilisateurs
                        s’échangent des Biens ou des Services à la suite d’une Demande ou
                        d’une Offre faite sur l’Application trokeo.
                        <br />
                        <br /> <span style={{ fontWeight: 'bold' }}>Offrant</span> désigne l’Utilisateur ou la Page qui propose un Bien ou
                        un Service sur l’Application trokeo.
                        <br />
                        <br /> <span style={{ fontWeight: 'bold' }}>Offre</span> désigne une proposition de Bien ou de service mise en
                        ligne par un Utilisateur ou une Page sur l’Application trokeo.
                        <br />
                        <br /> <span style={{ fontWeight: 'bold' }}>Identifiants</span> désigne les informations suivantes : nom,
                        pseudonyme, et mot de passe choisis par l’Utilisateur, lui permettant
                        de créer un Compte pour accéder à l’Application trokeo. Pour créer un
                        Compte, un Utilisateur peut également se servir de son profil
                        Facebook. Certaines informations de son profil (nom, prénom, adresse
                        email, numéro de téléphone, photo de profil) sont alors communiquées à
                        trokeo pour que le Compte de l’Utilisateur soit synchronisé avec son
                        compte Facebook.
                        <br />
                        <br />
                        <span style={{ fontWeight: 'bold' }}>Identifiants</span> de la Page désignent les informations suivantes :
                        identifiants et mot de passe choisis par l’administrateur de la Page
                        et lui permettant d’ajouter d’autres administrateurs de la Page.
                        <br />
                        <br /> <span style={{ fontWeight: 'bold' }}>Service</span> désigne la ou les prestations demandées ou proposées
                        par un Utilisateur dans le cadre d’une Demande ou d’une Offre sur
                        l’Application trokeo.
                        <br />
                        <br />
                        <span style={{ fontWeight: 'bold' }}>Utilisateur</span> désigne toute personne physique, Entreprise, Association,
                        Organisme Public ou toute autre entité inscrite, disposant d’un Compte
                        ou d’une Page et utilisant l’Application trokeo, de manière régulière
                        ou occasionnelle, à titre non professionnel. Pour être en mesure
                        d’utiliser toutes les fonctionnalités de l’Application trokeo, un
                        Utilisateur doit créer un Compte. Il doit auparavant vérifier s’il est
                        éligible (voir les conditions d’inscription prévues à l’Article 6 des
                        CGU : Accès au contenu de l’Application trokeo).
                    </p>
                    <p className="title_terms">
                        ARTICLE 2 – Présentation générale de l’Application Trokéo
                    </p>
                    <p className="text_terms">
                        Le but premier d’trokeo est de promouvoir l’entraide sociale et le
                        réemploi au quotidien de Biens ou de Services, grâce à l’Application
                        trokeo.
                        <br />
                        <br /> L’Application trokeo est une plateforme collaborative, sur
                        laquelle les Utilisateurs peuvent proposer de leur temps pour rendre
                        des Services ou offrir des Biens à d’autres Utilisateurs.
                        <br />
                        <br /> A cette fin, l’Application offre différentes fonctionnalités
                        (voir Article 7 des CGU).
                        <br />
                        <br /> Les Associations peuvent demander ou offrir des Biens ou des
                        Services gratuitement.
                        <br />
                        <br /> Les Entreprises peuvent offrir des Biens gratuitement.
                        <br />
                        <br /> Les Organismes publics peuvent offrir des Biens ou des
                        Services.
                        <br />
                        <br /> La participation aux Échanges pour tous les Utilisateurs (y
                        compris les Associations, Entreprises, Organismes Publics et/ou toute
                        autre entité) est effectuée à titre non-professionnel, et en aucun cas
                        à titre professionnel.
                        <br />
                        <br /> L’Utilisateur qui agit à titre professionnel alors qu’il se
                        présente comme un consommateur ou un non-professionnel se rend
                        coupable du délit de pratiques commerciales trompeuses puni d’un
                        emprisonnement de 2 ans et d’une amende de 300.000 euros pour les
                        personnes physiques et 1.500.000 euros pour les personnes morales,
                        pouvant être portée à 10 % du chiffre d’affaires moyen annuel, calculé
                        sur les trois derniers chiffres d’affaires annuels, ou à 50 % des
                        dépenses engagées pour la réalisation de la publicité ou de la
                        pratique litigieuse. (articles L. 121-4 21° et L. 132-2 du code de la
                        consommation).
                        <br />
                        <br /> L’Application trokeo permet à ses Utilisateurs, selon les
                        catégories concernées, d’offrir et de bénéficier de Services ou de
                        Biens, gratuitement, sans rétribution d’argent et à titre non
                        professionnel. Aucun Service relevant d’une profession réglementée
                        (telles que médecin, pharmacien, avocat, agent immobilier, architecte
                        etc.) ne pourra être proposé ni faire l’objet d’un Échange entre les
                        Utilisateurs.
                    </p>
                    <p className="title_terms">
                        ARTICLE 3 – Acceptation, opposabilité et modifications des Conditions
                        Générales d’Utilisation (« CGU »)
                    </p>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Terms;
