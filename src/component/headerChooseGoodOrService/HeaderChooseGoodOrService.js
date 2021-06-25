import React from 'react';
import './HeaderChooseGoodOrService.scss';
/** COMPONENT */
import {
  Sidebar,
} from '../index';

function HeaderChooseGoodOrService({ onChange, isService }) {
  return (
    <>
      <div className="good_or_service_organization">
        <div style={{ position: "absolute", left: 0 }}>
          <Sidebar isService={isService} />
        </div>
        <div style={{ display: "flex", alignSelf: "center" }}>
          <p
            onClick={onChange}
            style={{
              color: !isService ? '#3AD06B' : '#BFBDBD',
              borderBottom: !isService ? '3px solid #3AD06B' : 'none',
              marginRight: 63,
            }}>
            Biens
          </p>
          <p
            onClick={onChange}
            style={{
              color: isService ? '#3AD06B' : '#BFBDBD',
              borderBottom: isService ? '3px solid #3AD06B' : 'none',
            }}>
            Services
          </p>
        </div>

      </div>
    </>
  );
}

export default HeaderChooseGoodOrService;
