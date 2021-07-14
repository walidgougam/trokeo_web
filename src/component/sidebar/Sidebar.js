import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import './Sidebar.scss'
/** SVG */
import { ReactComponent as BtnFilterClose } from '../../asset/allSvg/btn_filter_close.svg';
import { ReactComponent as BtnFilterOpen } from '../../asset/allSvg/btn_filter_open.svg';

const Nav = styled.div`
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: white;
  width: 186px;
  height: 900px;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  // top: 120px;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = ({ isService }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          {
            <div onClick={showSidebar} className="wrapper_btn_filter_sidebar">
              {!sidebar ? <BtnFilterClose /> : <BtnFilterOpen />}
              <p className="title_mask_filter_sidebar">{!sidebar ? 'Filtres' : 'Masquer les filtres'}</p>
            </div>
          }
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <div className="sideBarContent">
              {SidebarData(isService).map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </div>
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
