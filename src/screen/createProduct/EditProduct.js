import React, { useState } from 'react';
import HeaderChooseGoodOrService from '../../component/headerChooseGoodOrService/HeaderChooseGoodOrService';
import HeaderGreen from '../../component/headerGreen/HeaderGreen';
import Navbar from '../../component/navbar/Navbar';
import IconTakePicture from '../../component/picture/iconTakePicture/IconTakePicture';
import './CreateProduct.scss';
import BtnNext from '../../component/btn/BtnNext';
import Footer from '../../component/footer/Footer';

function EditProduct({ location }) {
    /** STATE */
    const [isService, setIsService] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [condition, setCondition] = useState();
    const [category, setCategory] = useState();
    const [isRequestProduct, setIsRequestProduct] = useState();

    const handleCreateProduct = () => { };
    return (
        <div>
            <HeaderGreen title="Modifier l’annonce" />
            <HeaderChooseGoodOrService
                onChange={() => setIsService(!isService)}
                isService={isService}
            />
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
                            value={title}
                            onChange={(e) => setTitle(e)}
                            placeholder="Titre: lampe, écahelle, cadre…"
                        />
                    </label>
                </div>
                <div className="wrapper_input_createproduct">
                    <label className="label_createproduct" style={{ marginTop: 25 }}>
                        Description
                        <textarea
                            className="textarea_createproduct"
                            value={description}
                            onChange={(e) => setDescription(e)}
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
                            value={condition}
                            onChange={(e) => setCondition(e)}
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
                            value={category}
                            onChange={(e) => setCategory(e)}
                        />
                    </label>
                </div>
                <div className="separate_line_createproduct"></div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p className="text_annonce_createproduct">Type d'annonce</p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <input
                            type="radio"
                            value={!isRequestProduct}
                            name="gender"
                            style={{ width: 22, height: 22 }}
                        />
                        <label className="input_annonce_createproduct">
                            offres
                        </label>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginTop: 11 }}>
                        <input
                            type="radio"
                            value={!isRequestProduct}
                            name="gender"
                            style={{ width: 22, height: 22, alignItems: "center" }}
                        />
                        <label className="input_annonce_createproduct">
                            demandes
                        </label>
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
        </div>
    );
}

export default EditProduct;
