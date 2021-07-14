import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  margin-right:14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 14px;
  // fontFamily:Open Sans SemiBold;
  &:hover { 
    border-left: 4px solid green;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 9px;
  margin-right:14px;
  width:100%;
  color:#3A3A3A;
  display:flex;
  justify-content:space-between;
  overflow-y: scroll;
`;

const DropdownLink = styled(Link)`
  // background: #414757;
  height: 60px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 14px;
  &:hover {
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink onClick={item.subNav && showSubnav}>
        <div>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
              ? item.iconClosed
              : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink key={index}>
              {item.icon}
              <SidebarLabel>
                <label>{item?.titleCategory?.length > 18 ? item?.titleCategory.substring(0, 18) + '...' : item?.titleCategory}</label>
                <input
                  style={{ width: 20, height: 20 }}
                  type="radio"
                  checked={false}
                  onChange={() => console.log("hello")}
                />
              </SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
