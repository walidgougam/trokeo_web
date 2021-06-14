import React from 'react';
import './HeaderChooseGoodOrService.scss';

function HeaderChooseGoodOrService({onChange, isService}) {
  return (
    <div className="good_or_service_organization">
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
  );
}

export default HeaderChooseGoodOrService;
