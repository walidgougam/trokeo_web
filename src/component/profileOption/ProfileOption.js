import React from 'react';
import './ProfileOption.scss';
import { allOptionsProfile } from '../../Helpers';
import ThumbnailProfile from '../thumbnailProfile/ThumbnailProfile';
import wording from '../../constant/wording';

function ProfileOption(props) {

    const handleProfileOption = (option) => {
        switch (option)
        {
            case wording.SEE_PROFILE:
                return props.props.history.push('/profile/edit');
            case wording.FAVORITES:
                return props.props.history.push('/favorites');
            case wording.ORGANIZATION_MODE:
                return props.props.history.push('/hello');
            case wording.CUSTOMIZATION:
                return props.props.history.push('/hello');
            case wording.SETTINGS:
                return props.props.history.push('/setting');
            case wording.ABOUT_TROKEO:
                return props.props.history.push('/about');
            case wording.CGU:
                return props.props.history.push('/hello');
            case wording.EVALUATE_APP:
                return props.props.history.push('/hello');
            case wording.HELP_CENTER:
                return props.props.history.push('/helpcenter');
        }
    };
    return (
        <>
            <div className="container_profileoption">
                {console.log(props, "props")}
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
