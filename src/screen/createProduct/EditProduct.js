import React, { useState } from 'react';
import './CreateProduct.scss';
/** COMPONENT */
import {
    HeaderChooseGoodOrService,
    HeaderGreen,
    Navbar,
    IconTakePicture,
    BtnNext,
    Footer,
} from '../../component/index';

function EditProduct({ location }) {
    /** STATE */
    const [state, setState] = useState({
        isService: '',
        title: '',
        description: '',
        condition: '',
        category: '',
        isRequestProduct: '',
    });
    const handleState = (event) => {
        const value = event.target.value;
        setState({ ...state, [event.target.name]: value });
    };

    const handleCreateProduct = () => { };
    return (
        <>
            <HeaderGreen title="Modifier l’annonce" />
            <HeaderChooseGoodOrService
                onChange={() => setState({ ...state, isService: !state.isService })}
                isService={state.isService}
            />
            {console.log(state, 'state edit product')}
            <div className="container_createproduct">
                <div className="container_icon_picture_createproduct">
                    <div className="wrapper_icon_picture_createproduct"></div>
                    <div className="wrapper_icon_picture_createproduct"></div>
                    <div className="wrapper_icon_picture_createproduct"></div>
                    <div className="wrapper_icon_picture_createproduct"></div>
                </div>
                <div className="separate_line_createproduct"></div>
                <div className="wrapper_input_createproduct">
                    <label className="label_createproduct">
                        Titre
                        <input
                            className="input_createproduct"
                            type="text"
                            value={state.title}
                            name="title"
                            onChange={(e) => handleState(e)}
                            placeholder="Titre: lampe, écahelle, cadre…"
                        />
                    </label>
                </div>
                <div className="wrapper_input_createproduct">
                    <label className="label_createproduct" style={{ marginTop: 25 }}>
                        Description
                        <textarea
                            className="textarea_createproduct"
                            value={state.description}
                            name="description"
                            onChange={(e) => handleState(e)}
                            placeholder="Donner les caractéristiques du bien proposé (taille, couleur, dimensions …)"
                        />
                    </label>
                </div>
                <div className="separate_line_createproduct"></div>
                <div className="wrapper_input_createproduct">
                    <label className="label_createproduct">
                        Etat du bien
                        <input
                            className="input_createproduct"
                            type="text"
                            value={state.condition}
                            name="condition"
                            onChange={(e) => handleState(e)}
                        />
                    </label>
                </div>
                <div className="separate_line_createproduct"></div>
                <div className="wrapper_input_createproduct">
                    <label className="label_createproduct">
                        Catégorie
                        <input
                            className="input_createproduct"
                            type="text"
                            name="category"
                            value={state.category}
                            onChange={(e) => handleState(e)}
                        />
                    </label>
                </div>
                <div className="separate_line_createproduct"></div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p className="text_annonce_createproduct">Type d'annonce</p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                            type="radio"
                            value={!state.isRequestProduct}
                            name="gender"
                            style={{ width: 22, height: 22 }}
                        />
                        <label className="input_annonce_createproduct">offres</label>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 11 }}>
                        <input
                            type="radio"
                            value={!state.isRequestProduct}
                            name="gender"
                            style={{ width: 22, height: 22, alignItems: 'center' }}
                        />
                        <label className="input_annonce_createproduct">demandes</label>
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: 42,
                        marginBottom: 164,
                    }}>
                    <BtnNext
                        title="Enregistrez"
                        onClick={() => handleCreateProduct()}
                        style={{ width: 252, height: 42 }}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default EditProduct;
