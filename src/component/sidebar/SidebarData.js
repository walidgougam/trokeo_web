import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { goodCategories, serviceCategories } from '../../Helpers'
/** SVG */
import { ReactComponent as ArrowFilter } from '../../asset/allSvg/arrow_filter.svg';

export const SidebarData = (isService) => {
  console.log(isService, "isService from sidebardata")
  return [
    {
      title: 'Catégorie',
      iconClosed: <ArrowFilter />,
      subNav: isService ? serviceCategories : goodCategories
    },
    {
      title: 'Etat',
      iconClosed: <ArrowFilter />,
      // iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [
        {
          titleCategory: 'Neuf avec étiquette',
        },
        {
          titleCategory: 'Neuf',
        },
        {
          titleCategory: 'Très bon état',
        },
        {
          titleCategory: 'Satisfaisant',
        }
      ]
    },
    {
      title: 'Distance maximum',
      iconClosed: <ArrowFilter />,
      subNav: [
        {
          titleCategory: '< 5 km',
        },
        {
          titleCategory: '< 10 km',
        },
        {
          titleCategory: '< 15 km',
        },
        {
          titleCategory: '< 20 km',
        }, {
          titleCategory: '< 25 km',
        }
      ]
    },
    {
      title: "Type d'annonce",
      iconClosed: <ArrowFilter />,
      subNav: [
        {
          titleCategory: 'Offres',
        },
        {
          titleCategory: 'Demandes',
        },
      ]
    },
  ];

}