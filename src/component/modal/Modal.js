import React from 'react';
import ReactDom from 'react-dom';
import BtnFinish from '../btn/BtnFinish';
import './Modal.scss';
/** SVG */
import { ReactComponent as CrossForClose } from '../../asset/allSvg/cross_for_close.svg';

const MODAL_STYLES = {
    position: 'fixed',
    width: 321,
    height: 205,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    // padding: '50px',
    zIndex: 1000,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "space-between"
};

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000,
};

function Modal({ open, onClose, btnTitle, title, description, btnPress }) {
    if (!open) return null;
    return (
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
                <div
                    onClick={onClose}
                    className="close_btn_modal"
                >
                    <CrossForClose />
                </div>
                <div
                    className="wrapper_text_modal"
                >
                    <p className="title_modal">{title}</p>
                    {description && <p className="description_modal">{description}</p>}
                </div>
                <div
                    className="wrapper_btn_modal"
                >
                    <BtnFinish
                        width={236}
                        height={47}
                        fontSize={16}
                        titleBtn={btnTitle}
                        onClick={btnPress}
                    />
                </div>
            </div>
        </>
    );
}

export default Modal;
