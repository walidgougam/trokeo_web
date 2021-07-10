import React from 'react';
import './ProfileOption.scss';
import { allOptionsProfile } from '../../Helpers';
import ThumbnailProfile from '../thumbnailProfile/ThumbnailProfile';
import wording from '../../constant/wording';

function ProfileOption({ history }) {
    console.log(history, "historyyyy")

    const handleProfileOption = (option) => {
        switch (option)
        {
            case wording.SEE_PROFILE:
                return history.push('/profile/edit');
            case wording.FAVORITES:
                return history.push('/favorites');
            case wording.ORGANIZATION_MODE:
                return history.push('/hello');
            case wording.CUSTOMIZATION:
                return history.push('/hello');
            case wording.SETTINGS:
                return history.push('/setting');
            case wording.ABOUT_TROKEO:
                return history.push('/about');
            case wording.CGU:
                return history.push('/hello');
            case wording.EVALUATE_APP:
                return history.push('/hello');
            case wording.HELP_CENTER:
                return history.push('/helpcenter');
        }
    };
    return (
        <>
            <div className="container_profileoption">
                {allOptionsProfile.map((option, index) => {
                    return (
                        <div
                            className="wrapper_card_profileoption"
                            onClick={() => handleProfileOption(option.title)}>
                            <div>{option.icon}</div>
                            <p style={{ margin: '0px' }}>{option.title}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default ProfileOption;
