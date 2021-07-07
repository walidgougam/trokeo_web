import React from 'react'
import ReactDom from 'react-dom'
import BtnFinish from "../btn/BtnFinish";
import './Modal.scss'

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
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

function Modal({ open, onClose, btnTitle, title, description }) {
    if (!open) return null
    return (
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
                <button onClick={onClose}>Close Modal</button>
                <p className='title_modal'>{title}</p>
                <p className="description_modal">{description}</p>
                <BtnFinish width={236} height={47} fontSize={16} titleBtn={btnTitle} />
            </div>
        </>
    )
}

export default Modal