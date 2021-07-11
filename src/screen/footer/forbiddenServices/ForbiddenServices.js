import React from 'react';
/** COMPONENT */
import { Footer, HeaderGreen, Navbar } from '../../../component/index'
import wording from '../../../constant/wording';
import './ForbiddenServices.scss';

function ForbiddenServices(props) {
  return (
    <div className="all_container_forbiddenservice">
      <Navbar history={props.history} />
      <HeaderGreen title={wording.FORBIDDEN_SERVICE} />
      <div className="container_forbidden_service">
        <p className="title_forbidden_service">Interdictions générales</p>
        <p className="text_forbidden_service">
          Toute annonce contenant des éléments de texte (mots, expressions,
          phrases… etc.) qui sembleraient contraires aux dispositions légales ou
          réglementaires, aux bonnes mœurs, aux règles de diffusion de notre
          site ou susceptible de troubler ou choquer les lecteurs sera refusée
          par leboncoin, donc non référencée sur notre site, sans que cela ne
          fasse naître au profit de l'annonceur un quelconque droit à indemnité.
        </p>
        <p>Contenus non autorisés</p>
        <p className="text_forbidden_service">
          Il est interdit de déposer une annonce : <br />
          <br />
          Exclusivement rédigée en termes étrangers. Les annonces doivent être
          rédigées en français (obligation légale imposée par la loi n°94-345 du
          4 août 1994). Lorsqu'un terme étranger ne peut trouver son équivalent
          en français, il doit être circonscrit d'une manière assez précise pour
          ne pas induire en erreur l'utilisateur du site. Comportant des termes
          ou des descriptions sans lien avec le contenu proposé. Présentant une
          utilisation abusive de mots clefs. Dirigeant directement ou
          indirectement vers un site autre que le nôtre. Comportant un numéro de
          téléphone surtaxé. A caractère politique, sectaire, discriminatoire,
          sexiste, en lien avec des organisations ou des personnes responsables
          de crimes contre l'humanité etc. L'article 225-1 du code pénal définit
          notamment la discrimination comme toute distinction opérée entre les
          personnes physiques à raison notamment de leur origine, de leur sexe,
          de leur handicap, de leurs caractéristiques génétiques, de leurs
          mœurs, de leur orientation sexuelle, de leur identité de genre, de
          leur appartenance ou de leur non-appartenance, vraie ou supposée, à
          une ethnie, une Nation, une prétendue race ou une religion déterminée
          [..]. Le délit de discrimination, incriminé à l'article 225-2 4° du
          code pénal, est puni de trois ans d'emprisonnement et de 45 000 euros
          d'amende.
        </p>
        <p className="title_forbidden_service">
          Produits et services non autorisés
        </p>
        <p className="text_forbidden_service">
          En tant qu'utilisateur du service leboncoin, vous devez vous assurer
          que le bien que vous cherchez à vendre ou à acheter est un produit
          autorisé sur le site et dont la vente est légale.
          <br />
          <br /> Nous vous invitons à prendre connaissance des
          produits/biens/services interdits sur notre site :<br />
          <br /> Tabac, drogue et objets associés, substances dangereuses et
          illicites Cosmétique, médicament et parapharmacie Armes blanches de
          combat ou d’autodéfense, armes à feu, explosifs, pièges de chasse
          Contenu réservé aux adultes (pornographie, nudité, etc.) Certaines
          espèces végétales et animales protégées, menacées ou prélevées dans
          leur milieu naturel Objets consignés Appel aux dons financiers privés
          ou à but humanitaire Offres pouvant mener à des pratiques
          tendancieuses Avis de recherche d’une personne La majorité des
          produits de grande consommation de manufacture industrielle Produits
          amincissants, de compléments alimentaires ou présentés comme étant
          miraculeux Produit portant des emblèmes protégés Le détournement des
          emblèmes (le signe de la croix rouge, du croissant rouge, du cristal
          rouge, des casques bleus, le drapeau blanc etc.) et de leur
          dénomination et/ou leur usage illégal ou abusif sont des actes graves
          sanctionnés par le droit international humanitaire, et notamment les
          Conventions de Genève du 12 août 1949, ainsi que par les articles
          433-14 et 433-15 du code pénal. Cette liste est non exhaustive.
        </p>
        <p className="title_forbidden_service">
          Interdiction des produits ou services portant atteinte aux droits de
          propriété intellectuelle
        </p>
        <p className="text_forbidden_service">
          Seule la diffusion d'annonce proposant la vente de produits originaux
          est autorisée (appareils électroniques, DVD, CD, jeux vidéo, logiciels
          informatiques, cartes pour télévision payante, vêtements de marque et
          accessoires de marque …). Nous vous rappelons que la vente de copie ou
          de reproduction de toute sorte est susceptible de constituer un acte
          de contrefaçon, passible de trois ans d'emprisonnement et 300.000
          euros d'amende sur le fondement de l'article L. 335-2 alinéa 2 du Code
          de la propriété intellectuelle. Vous devez être légalement
          propriétaire du contenu ou être autorisé à le vendre par le
          propriétaire, par son mandataire agréé ou par la loi. La vente de
          certains biens immatériels n’est pas autorisée sur notre site. Il est
          autorisé d’insérer des photos comportant un watermark (tatouage
          numérique) dans le but d'assurer la protection des droits de propriété
          intellectuelle. Seules les mentions des propriétaires de la photo sous
          forme de texte sont acceptées. Ces textes doivent obligatoirement être
          de couleur noire ou blanche. L’insertion d’adresse de site internet
          sur les photos reste strictement interdite.
        </p>
        <p className="title_forbidden_service">Photographies non autorisées</p>
        <p className="text_forbidden_service">
          Les photographies insérées doivent représenter le bien à vendre et ne
          peuvent être utilisées pour illustrer plusieurs annonces.
          <br />
          <br /> Il est interdit d’insérer des photos comportant :<br />
          <br /> Enfants mineurs
          <br />
          Logos seuls (à l'exception des catégories d'annonces Emploi et
          Services)
          <br />
          Lien vers un site internet Numéro de téléphone ou adresse mail
          Représentations sans lien avec l’offre proposée
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default ForbiddenServices;
