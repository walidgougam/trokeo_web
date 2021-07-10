import React from 'react';
// ICON GOODS
import { ReactComponent as AnimauxIcon } from './asset/iconGoods/animaux.svg';
import { ReactComponent as BeauteBienetreIcon } from './asset/iconGoods/beauteBienetre.svg';
import { ReactComponent as DecorationIcon } from './asset/iconGoods/decoration.svg';
import { ReactComponent as EntretientIcon } from './asset/iconGoods/entretient.svg';
import { ReactComponent as FeteEvenementIcon } from './asset/iconGoods/feteEvenement.svg';
import { ReactComponent as HightechIcon } from './asset/iconGoods/hightech.svg';
import { ReactComponent as LoisirIcon } from './asset/iconGoods/loisir.svg';
import { ReactComponent as MaterielJardinIcon } from './asset/iconGoods/materielJardin.svg';
import { ReactComponent as MaterielSportIcon } from './asset/iconGoods/materielSport.svg';
import { ReactComponent as MeubleIcon } from './asset/iconGoods/meuble.svg';
import { ReactComponent as ModeAccessoireIcon } from './asset/iconGoods/modeAccessoires.svg';

// ICON SERVICE
import { ReactComponent as BricolageTravauxIcon } from './asset/iconServices/bricolageTravaux.svg';
import { ReactComponent as CoursFormationIcon } from './asset/iconServices/coursFormation.svg';
import { ReactComponent as DemenagementManutentionIcon } from './asset/iconServices/demenagmenetManutention.svg';
import { ReactComponent as DepannageReparationIcon } from './asset/iconServices/depannageReparation.svg';
import { ReactComponent as GardePromenadeIcon } from './asset/iconServices/gardePromenade.svg';
import { ReactComponent as JardinagePiscineIcon } from './asset/iconServices/jardinagePiscine.svg';
import { ReactComponent as MenageIcon } from './asset/iconServices/menage.svg';
import { ReactComponent as ModeBeauteIcon } from './asset/iconServices/modeBeaute.svg';
import { ReactComponent as RestaurationReceptionIcon } from './asset/iconServices/restaurationReception.svg';
import { ReactComponent as SanteIcon } from './asset/iconServices/sante.svg';
import { ReactComponent as ServicePersonneIcon } from './asset/iconServices/servicePersonne.svg';

//OPTION PROFILE
import { ReactComponent as About } from './asset/iconProfile/about.svg';
import { ReactComponent as Custom } from './asset/iconProfile/custom.svg';
import { ReactComponent as Custom2 } from './asset/iconProfile/custom2.svg';
import { ReactComponent as Great } from './asset/iconProfile/great.svg';
import { ReactComponent as Hands } from './asset/iconProfile/hands.svg';
import { ReactComponent as Heart } from './asset/iconProfile/heart.svg';
import { ReactComponent as Pencil } from './asset/iconProfile/pencil.svg';
import { ReactComponent as Question } from './asset/iconProfile/question.svg';
import { ReactComponent as Setting } from './asset/iconProfile/setting.svg';

import Shave from './asset/allSvg/shave.jpg';
import wording from './constant/wording';


export const goodsCondition = [
  wording.NEUF_ETIQUETTE,
  wording.NEUF,
  wording.TRES_BON,
  wording.BON,
  wording.PASSABLE,
];

export const goodCategories = [
  { titleCategory: 'Animaux', isValue: 0, followByUser: false },
  { titleCategory: 'Beauté & bien être', isValue: 1, followByUser: false },
  { titleCategory: 'Décoration', isValue: 2, followByUser: false },
  { titleCategory: 'Entretien', isValue: 3, followByUser: false },
  { titleCategory: 'Fêtes & évènements', isValue: 4, followByUser: false },
  {
    titleCategory: 'High tech & fournitures de bureau',
    isValue: 5,
    followByUser: false,
  },
  { titleCategory: 'Matériel de jardin', isValue: 6, followByUser: false },
  { titleCategory: 'Matériel de sport', isValue: 7, followByUser: false },
  { titleCategory: 'Meubles', isValue: 8, followByUser: false },
  { titleCategory: 'Mode & accessoires', isValue: 9, followByUser: false },
  { titleCategory: 'Outillage et travaux', isValue: 10, followByUser: false },
  { titleCategory: 'Pièces auto/moto', isValue: 11, followByUser: false },
];

export const serviceCategories = [
  { titleCategory: 'Mode/beauté', isValue: 0, followByUser: false },
  { titleCategory: 'Cours & formations', isValue: 1, followByUser: false },
  { titleCategory: 'Bricolage & travaux', isValue: 2, followByUser: false },
  {
    titleCategory: 'Déménagement & manutention',
    isValue: 3,
    followByUser: false,
  },
  {
    titleCategory: 'Dépannage & réparation de matériel',
    isValue: 4,
    followByUser: false,
  },
  {
    titleCategory: 'Entretien & réparation auto/moto',
    isValue: 5,
    followByUser: false,
  },
  { titleCategory: 'Garde d’enfants', isValue: 6, followByUser: false },
  {
    titleCategory: 'Garde/promenade d’animaux',
    isValue: 7,
    followByUser: false,
  },
  { titleCategory: 'Jardinage & piscine', isValue: 7, followByUser: false },
  { titleCategory: 'Ménage à domicile', isValue: 9, followByUser: false },
  {
    titleCategory: 'Restauration & réception',
    isValue: 10,
    followByUser: false,
  },
  { titleCategory: 'Services à la personne', isValue: 11, followByUser: false },
  { titleCategory: 'Santé & bien être', isValue: 12, followByUser: false },
];

export const allIcon = [
  { title: 'Animaux', icon: <AnimauxIcon /> },
  { title: 'Beauté & bien être', icon: <BeauteBienetreIcon /> },
  { title: 'Décoration', icon: <DecorationIcon /> },
  { title: 'Entretien', icon: <EntretientIcon /> },
  { title: 'Fêtes & évènements', icon: <FeteEvenementIcon /> },
  { title: 'High tech & fournitures de bureau', icon: <HightechIcon /> },
  { title: 'ferf', icon: <LoisirIcon /> },
  { title: 'Matériel de jardin', icon: <MaterielJardinIcon /> },
  { title: 'Matériel de sport', icon: <MaterielSportIcon /> },
  { title: 'Meubles', icon: <MeubleIcon /> },
  { title: 'Mode & accessoires', icon: <ModeAccessoireIcon /> },
  { title: 'Outillage et travaux', icon: <BricolageTravauxIcon /> },
  { title: 'frefr', icon: <CoursFormationIcon /> },
  { title: 'Déménagement & manutention', icon: <DemenagementManutentionIcon /> },
  {
    title: 'Dépannage & réparation de matériel',
    icon: <DepannageReparationIcon />,
  },
  { title: 'Garde/promenade d’animaux', icon: <GardePromenadeIcon /> },
  { title: 'Jardinage & piscine', icon: <JardinagePiscineIcon /> },
  { title: 'Ménage à domicile', icon: <MenageIcon /> },
  { title: 'Mode/beauté', icon: <ModeBeauteIcon /> },
  { title: 'Restauration & réception', icon: <RestaurationReceptionIcon /> },
  { title: 'Santé & bien être', icon: <SanteIcon /> },
  { title: 'Services à la personne', icon: <ServicePersonneIcon /> },
];

export const messages = [
  {
    text: "Hello",
    user: { _id: "60e323bddde4e76bb78f45df" },
    _id: "60e4c01505272e8be2646f6f",
    createdAt: "2021-07-06T20:41:57.181Z"
  }
];

export const allOptionsProfile = [
  { title: wording.SEE_PROFILE, icon: <Pencil /> },
  { title: wording.FAVORITES, icon: <Heart /> },
  { title: wording.ORGANIZATION_MODE, icon: <Hands /> },
  { title: wording.CUSTOMIZATION, icon: <Custom /> },
  { title: wording.SETTINGS, icon: <Setting /> },
  { title: wording.ABOUT_TROKEO, icon: <About /> },
  { title: wording.CGU, icon: <Custom2 /> },
  { title: wording.EVALUATE_APP, icon: <Great /> },
  { title: wording.HELP_CENTER, icon: <Question /> },
];

export const allConversation = [
  {
    messages: [{
      text: "Salut hamza ca va?",
      user: { _id: "60e0eaf56cd6680b0270febd" },
      _id: "60e20333acd5830489eaa580",
      createdAt: "2021-07-04T18:51:31.183Z"
    }],
    _id: "60e20333acd5830489eaa581",
    reciever: {},
    sender: "60e0eaf56cd6680b0270febd",
    product: {
      isFromOrganisation: false,
      productPicture: [{
        _id: "60e0f262b686334daefb1585",
        picture: "photos_1625354850509_rn_image_picker_lib_temp_85454502-1738-474c-91b4-29b1093fea74.jpg",
        createdAt: "2021-07-03T23:27:30.925Z",
        updatedAt: "2021-07-03T23:27:30.925Z"
      }], likes: 1, _id: "60e0f263b686334daefb1586"
    },
    createdAt: "2021-07-04T18:51:31.304Z",
    updatedAt: "2021-07-04T18:51:31.304Z"
  },
  {
    messages: [{
      text: "Salut hamza ca va?",
      user: { _id: "60e0eaf56cd6680b0270febd" },
      _id: "60e20333acd5830489eaa580",
      createdAt: "2021-07-04T18:51:31.183Z"
    }],
    _id: "60e20333acd5830489eaa581",
    reciever: {},
    sender: "60e0eaf56cd6680b0270febd",
    product: {
      isFromOrganisation: false,
      productPicture: [{
        _id: "60e0f262b686334daefb1585",
        picture: "photos_1625354850509_rn_image_picker_lib_temp_85454502-1738-474c-91b4-29b1093fea74.jpg",
        createdAt: "2021-07-03T23:27:30.925Z",
        updatedAt: "2021-07-03T23:27:30.925Z"
      }], likes: 1, _id: "60e0f263b686334daefb1586"
    },
    createdAt: "2021-07-04T18:51:31.304Z",
    updatedAt: "2021-07-04T18:51:31.304Z"
  },

];

export const showCategoryPicture = (category) => {
  console.log(category, 'category helopers');
  for (let i = 0; i < allIcon.length; i++)
  {
    if (allIcon[i].title === category)
    {
      return allIcon[i].icon;
    }
  }
};


export const allProduct = [
  {
    coordinates: { longitude: "-122.406417", latitude: "37.785834" },
    productPicture: [{ _id: "60d4dbf561dd5216180decb8", picture: "photos_1624562677763_EE78EAA4-6289-463E-8EFB-6E93B51DBA54.jpg", createdAt: "2021-06-24T19:24:37.885Z", updatedAt: "2021-06-24T19:24:37.885Z" }],
    likes: 0,
    isFromOrganization: true,
    _id: "60d4dbf661dd5216180decb9",
    title: "Prod org",
    description: "Prod org describe",
    condition: "Neuf avec étiquette",
    category: { _id: "60b773bdbbf66be4e9027071", type: "60b613b87d7bf5e5e6134f9a", category: "Beauté & bien être" },
    type: { _id: "60b613b87d7bf5e5e6134f9a", type: "bien" },
    user: {
      reviews: [],
      userProduct: (2)["60d4dbf661dd5216180decb9", "60d4dbf661dd5216180decb9"],
      productLikes: [],
      productBooked: [],
      categoryGoodsFollow: [],
      categoryServicesFollow: [],
      _id: "60d4db5961dd5216180decb7",
      email: "walidgougam@gmail.com",
      password: "$2b$10$d.vFfpIqCa1zjSsMmbfh5uDbAGCCEBeAYsEs9C4Ou3XB9YDH.p7qm",
      firstName: "Walid",
      lastName: "Goug",
      female: false,
      isOrganisation: true,
      userPicture: "60d4db5961dd5216180decb6",
      notification: [],
      createdAt: "2021-06-24T19:22:01.367Z",
      updatedAt: "2021-06-24T19:24:38.177Z"
    },
    createdAt: "2021-06-24T19:24:38.077Z",
    updatedAt: "2021-06-24T19:24:38.077Z"
  },
  {
    coordinates: { longitude: "-122.406417", latitude: "37.785834" },
    productPicture: [{ _id: "60d4dbf561dd5216180decb8", picture: "photos_1624562677763_EE78EAA4-6289-463E-8EFB-6E93B51DBA54.jpg", createdAt: "2021-06-24T19:24:37.885Z", updatedAt: "2021-06-24T19:24:37.885Z" }],
    likes: 0,
    isFromOrganization: true,
    _id: "60d4dbf661dd5216180decb9",
    title: "Prod org",
    description: "Prod org describe",
    condition: "Neuf avec étiquette",
    category: { _id: "60b773bdbbf66be4e9027071", type: "60b613b87d7bf5e5e6134f9a", category: "Beauté & bien être" },
    type: { _id: "60b613b87d7bf5e5e6134f9a", type: "bien" },
    user: {
      reviews: [],
      userProduct: (2)["60d4dbf661dd5216180decb9", "60d4dbf661dd5216180decb9"],
      productLikes: [],
      productBooked: [],
      categoryGoodsFollow: [],
      categoryServicesFollow: [],
      _id: "60d4db5961dd5216180decb7",
      email: "walidgougam@gmail.com",
      password: "$2b$10$d.vFfpIqCa1zjSsMmbfh5uDbAGCCEBeAYsEs9C4Ou3XB9YDH.p7qm",
      firstName: "Walid",
      lastName: "Goug",
      female: false,
      isOrganisation: true,
      userPicture: "60d4db5961dd5216180decb6",
      notification: [],
      createdAt: "2021-06-24T19:22:01.367Z",
      updatedAt: "2021-06-24T19:24:38.177Z"
    },
    createdAt: "2021-06-24T19:24:38.077Z",
    updatedAt: "2021-06-24T19:24:38.077Z"
  },
  {
    coordinates: { longitude: "-122.406417", latitude: "37.785834" },
    productPicture: [{ _id: "60d4dbf561dd5216180decb8", picture: "photos_1624562677763_EE78EAA4-6289-463E-8EFB-6E93B51DBA54.jpg", createdAt: "2021-06-24T19:24:37.885Z", updatedAt: "2021-06-24T19:24:37.885Z" }],
    likes: 0,
    isFromOrganization: true,
    _id: "60d4dbf661dd5216180decb9",
    title: "Prod org",
    description: "Prod org describe",
    condition: "Neuf avec étiquette",
    category: { _id: "60b773bdbbf66be4e9027071", type: "60b613b87d7bf5e5e6134f9a", category: "Beauté & bien être" },
    type: { _id: "60b613b87d7bf5e5e6134f9a", type: "bien" },
    user: {
      reviews: [],
      userProduct: (2)["60d4dbf661dd5216180decb9", "60d4dbf661dd5216180decb9"],
      productLikes: [],
      productBooked: [],
      categoryGoodsFollow: [],
      categoryServicesFollow: [],
      _id: "60d4db5961dd5216180decb7",
      email: "walidgougam@gmail.com",
      password: "$2b$10$d.vFfpIqCa1zjSsMmbfh5uDbAGCCEBeAYsEs9C4Ou3XB9YDH.p7qm",
      firstName: "Walid",
      lastName: "Goug",
      female: false,
      isOrganisation: true,
      userPicture: "60d4db5961dd5216180decb6",
      notification: [],
      createdAt: "2021-06-24T19:22:01.367Z",
      updatedAt: "2021-06-24T19:24:38.177Z"
    },
    createdAt: "2021-06-24T19:24:38.077Z",
    updatedAt: "2021-06-24T19:24:38.077Z"
  },
  {
    coordinates: { longitude: "-122.406417", latitude: "37.785834" },
    productPicture: [{ _id: "60d4dbf561dd5216180decb8", picture: "photos_1624562677763_EE78EAA4-6289-463E-8EFB-6E93B51DBA54.jpg", createdAt: "2021-06-24T19:24:37.885Z", updatedAt: "2021-06-24T19:24:37.885Z" }],
    likes: 0,
    isFromOrganization: true,
    _id: "60d4dbf661dd5216180decb9",
    title: "Prod org",
    description: "Prod org describe",
    condition: "Neuf avec étiquette",
    category: { _id: "60b773bdbbf66be4e9027071", type: "60b613b87d7bf5e5e6134f9a", category: "Beauté & bien être" },
    type: { _id: "60b613b87d7bf5e5e6134f9a", type: "bien" },
    user: {
      reviews: [],
      userProduct: (2)["60d4dbf661dd5216180decb9", "60d4dbf661dd5216180decb9"],
      productLikes: [],
      productBooked: [],
      categoryGoodsFollow: [],
      categoryServicesFollow: [],
      _id: "60d4db5961dd5216180decb7",
      email: "walidgougam@gmail.com",
      password: "$2b$10$d.vFfpIqCa1zjSsMmbfh5uDbAGCCEBeAYsEs9C4Ou3XB9YDH.p7qm",
      firstName: "Walid",
      lastName: "Goug",
      female: false,
      isOrganisation: true,
      userPicture: "60d4db5961dd5216180decb6",
      notification: [],
      createdAt: "2021-06-24T19:22:01.367Z",
      updatedAt: "2021-06-24T19:24:38.177Z"
    },
    createdAt: "2021-06-24T19:24:38.077Z",
    updatedAt: "2021-06-24T19:24:38.077Z"
  },
  {
    coordinates: { longitude: "-122.406417", latitude: "37.785834" },
    productPicture: [{ _id: "60d4dbf561dd5216180decb8", picture: "photos_1624562677763_EE78EAA4-6289-463E-8EFB-6E93B51DBA54.jpg", createdAt: "2021-06-24T19:24:37.885Z", updatedAt: "2021-06-24T19:24:37.885Z" }],
    likes: 0,
    isFromOrganization: true,
    _id: "60d4dbf661dd5216180decb9",
    title: "Prod org",
    description: "Prod org describe",
    condition: "Neuf avec étiquette",
    category: { _id: "60b773bdbbf66be4e9027071", type: "60b613b87d7bf5e5e6134f9a", category: "Beauté & bien être" },
    type: { _id: "60b613b87d7bf5e5e6134f9a", type: "bien" },
    user: {
      reviews: [],
      userProduct: (2)["60d4dbf661dd5216180decb9", "60d4dbf661dd5216180decb9"],
      productLikes: [],
      productBooked: [],
      categoryGoodsFollow: [],
      categoryServicesFollow: [],
      _id: "60d4db5961dd5216180decb7",
      email: "walidgougam@gmail.com",
      password: "$2b$10$d.vFfpIqCa1zjSsMmbfh5uDbAGCCEBeAYsEs9C4Ou3XB9YDH.p7qm",
      firstName: "Walid",
      lastName: "Goug",
      female: false,
      isOrganisation: true,
      userPicture: "60d4db5961dd5216180decb6",
      notification: [],
      createdAt: "2021-06-24T19:22:01.367Z",
      updatedAt: "2021-06-24T19:24:38.177Z"
    },
    createdAt: "2021-06-24T19:24:38.077Z",
    updatedAt: "2021-06-24T19:24:38.077Z"
  },
  {
    coordinates: { longitude: "-122.406417", latitude: "37.785834" },
    productPicture: [{ _id: "60d4dbf561dd5216180decb8", picture: "photos_1624562677763_EE78EAA4-6289-463E-8EFB-6E93B51DBA54.jpg", createdAt: "2021-06-24T19:24:37.885Z", updatedAt: "2021-06-24T19:24:37.885Z" }],
    likes: 0,
    isFromOrganization: true,
    _id: "60d4dbf661dd5216180decb9",
    title: "Prod org",
    description: "Prod org describe",
    condition: "Neuf avec étiquette",
    category: { _id: "60b773bdbbf66be4e9027071", type: "60b613b87d7bf5e5e6134f9a", category: "Beauté & bien être" },
    type: { _id: "60b613b87d7bf5e5e6134f9a", type: "bien" },
    user: {
      reviews: [],
      userProduct: (2)["60d4dbf661dd5216180decb9", "60d4dbf661dd5216180decb9"],
      productLikes: [],
      productBooked: [],
      categoryGoodsFollow: [],
      categoryServicesFollow: [],
      _id: "60d4db5961dd5216180decb7",
      email: "walidgougam@gmail.com",
      password: "$2b$10$d.vFfpIqCa1zjSsMmbfh5uDbAGCCEBeAYsEs9C4Ou3XB9YDH.p7qm",
      firstName: "Walid",
      lastName: "Goug",
      female: false,
      isOrganisation: true,
      userPicture: "60d4db5961dd5216180decb6",
      notification: [],
      createdAt: "2021-06-24T19:22:01.367Z",
      updatedAt: "2021-06-24T19:24:38.177Z"
    },
    createdAt: "2021-06-24T19:24:38.077Z",
    updatedAt: "2021-06-24T19:24:38.077Z"
  },
  {
    coordinates: { longitude: "-122.406417", latitude: "37.785834" },
    productPicture: [{ _id: "60d4dbf561dd5216180decb8", picture: "photos_1624562677763_EE78EAA4-6289-463E-8EFB-6E93B51DBA54.jpg", createdAt: "2021-06-24T19:24:37.885Z", updatedAt: "2021-06-24T19:24:37.885Z" }],
    likes: 0,
    isFromOrganization: true,
    _id: "60d4dbf661dd5216180decb9",
    title: "Prod org",
    description: "Prod org describe",
    condition: "Neuf avec étiquette",
    category: { _id: "60b773bdbbf66be4e9027071", type: "60b613b87d7bf5e5e6134f9a", category: "Beauté & bien être" },
    type: { _id: "60b613b87d7bf5e5e6134f9a", type: "bien" },
    user: {
      reviews: [],
      userProduct: (2)["60d4dbf661dd5216180decb9", "60d4dbf661dd5216180decb9"],
      productLikes: [],
      productBooked: [],
      categoryGoodsFollow: [],
      categoryServicesFollow: [],
      _id: "60d4db5961dd5216180decb7",
      email: "walidgougam@gmail.com",
      password: "$2b$10$d.vFfpIqCa1zjSsMmbfh5uDbAGCCEBeAYsEs9C4Ou3XB9YDH.p7qm",
      firstName: "Walid",
      lastName: "Goug",
      female: false,
      isOrganisation: true,
      userPicture: "60d4db5961dd5216180decb6",
      notification: [],
      createdAt: "2021-06-24T19:22:01.367Z",
      updatedAt: "2021-06-24T19:24:38.177Z"
    },
    createdAt: "2021-06-24T19:24:38.077Z",
    updatedAt: "2021-06-24T19:24:38.077Z"
  },
  {
    coordinates: { longitude: "-122.406417", latitude: "37.785834" },
    productPicture: [{ _id: "60d4dbf561dd5216180decb8", picture: "photos_1624562677763_EE78EAA4-6289-463E-8EFB-6E93B51DBA54.jpg", createdAt: "2021-06-24T19:24:37.885Z", updatedAt: "2021-06-24T19:24:37.885Z" }],
    likes: 0,
    isFromOrganization: true,
    _id: "60d4dbf661dd5216180decb9",
    title: "Prod org",
    description: "Prod org describe",
    condition: "Neuf avec étiquette",
    category: { _id: "60b773bdbbf66be4e9027071", type: "60b613b87d7bf5e5e6134f9a", category: "Beauté & bien être" },
    type: { _id: "60b613b87d7bf5e5e6134f9a", type: "bien" },
    user: {
      reviews: [],
      userProduct: (2)["60d4dbf661dd5216180decb9", "60d4dbf661dd5216180decb9"],
      productLikes: [],
      productBooked: [],
      categoryGoodsFollow: [],
      categoryServicesFollow: [],
      _id: "60d4db5961dd5216180decb7",
      email: "walidgougam@gmail.com",
      password: "$2b$10$d.vFfpIqCa1zjSsMmbfh5uDbAGCCEBeAYsEs9C4Ou3XB9YDH.p7qm",
      firstName: "Walid",
      lastName: "Goug",
      female: false,
      isOrganisation: true,
      userPicture: "60d4db5961dd5216180decb6",
      notification: [],
      createdAt: "2021-06-24T19:22:01.367Z",
      updatedAt: "2021-06-24T19:24:38.177Z"
    },
    createdAt: "2021-06-24T19:24:38.077Z",
    updatedAt: "2021-06-24T19:24:38.077Z"
  }
]


export const allReview = () => [
  {
    name: 'marine_w',
    messageReview: 'joli sac',
    createdAd: 1,
  },
  {
    name: 'marine_w',
    messageReview: 'joli sac',
    createdAd: 2,
  },
  {
    name: 'marine_w',
    messageReview: 'joli sac',
    createdAd: 3,
  }
]