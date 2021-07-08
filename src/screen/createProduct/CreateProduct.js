import React, { useState } from 'react';
import './CreateProduct.scss';
import { goodsCondition, goodCategories, serviceCategories } from '../../Helpers';
import wording from '../../constant/wording';
/** COMPONENT */
import {
  HeaderChooseGoodOrService,
  HeaderGreen,
  Navbar,
  IconTakePicture,
  BtnNext,
  Footer,
} from '../../component/index';
/** SVG */
import { ReactComponent as AddPicture } from '../../asset/allSvg/addPicture.svg';
import { ReactComponent as PictureIcon } from '../../asset/allSvg/picture_icon.svg';
/** REDUX */
import { useDispatch, useSelector } from "react-redux";
import { getSpecificProductAction } from "../../redux/actions/ProductAction";
import { userRefreshAction } from "../../redux/actions/AuthAction";
import { createProductCategoryAction } from "../../redux/actions/ProductAction";
/** API */
import axios from "axios";
import { createProductUrl } from "../../API/constant";
/** SERVICE */
import { refreshUser } from "../../services/userService";

function CreateProduct(props) {
  /** STATE */
  const [state, setState] = useState({
    isService: false,
    title: '',
    description: '',
    condition: '',
    category: '',
    isRequestProduct: '',
    productPicture: [],
    errorOnCreateProduct: ''
  });

  /** REDUX */
  const dispatch = useDispatch();
  const userStore = useSelector((state) => state.authReducer);
  const locationStore = useSelector((state) => state.productReducer.location);
  const createProductCategoryStore = useSelector(
    (state) => state.createProductCategoryReducer
  );

  const handleState = (event) => {
    const value = event.target.value;
    setState({ ...state, [event.target.name]: value });
  };

  const cleanStateOfScreen = () => {
    setState({ ...state, title: '' })
    setState({ ...state, description: '' })
    setState({ ...state, productPicture: '' })
    setState({ ...state, conditionProduct: '' })
    setState({ ...state, title: '' })
    dispatch(
      createProductCategoryAction({
        category: {},
      })
    );
  };

  const prepareData = (productPicture, body) => {
    const data = new FormData()
    if (productPicture)
    {
      data.append('photos', productPicture)
      Object.keys(body).forEach((key) => {
        data.append(key, body[key])
      })
      return data
    } else
    {
      setState({ ...state, errorOnCreateProduct: "true" })
    }
  }

  const handleCreateProduct = () => {
    const userId = userStore.user._id
    console.log(state, "state all")
    axios
      .post(
        createProductUrl,
        prepareData(state.productPicture, {
          title: state.title,
          description: state.description,
          condition: state.condition,
          category: createProductCategoryStore.id,
          userId,
          type: state.isService ? 'service' : 'bien',
          isFromOrganization: userStore.user.isOrganisation,
          longitude: locationStore.longitude,
          latitude: locationStore.latitude
        }),
        {
          headers: {
            'content-type': 'multipart/form-data',
            Authorization: 'Bearer ' + userStore.token,
          },
        },
      )
      .then(async (res) => {
        await refreshUser(userStore.user._id, (res) => {
          dispatch(userRefreshAction(res))
        }, (err) => { console.log("ERROR TO HANDLE", err.response) })
        dispatch(getSpecificProductAction(res?.data))
        cleanStateOfScreen()
        // navigation.navigate(constant.HOME_STACK, {
        //   screen: constant.PRODUCT_DETAIL,
        //   params: { product: res?.data?.product }
        // })
      })
      .catch((err) => {
        console.log('ERROR', err.response.data.error)
        setState({ ...state, errorOnCreateProduct: 'true' })
      })
  };


  const uploadPicture = (e) => {
    setState({ ...state, productPicture: e.target.files })
  };

  return (
    <>
      <Navbar props={props} />
      <HeaderGreen title="Créer une annonce" />
      <HeaderChooseGoodOrService
        onChange={(e) => setState({ ...state, isService: !state.isService })}
        isService={state.isService}
      />
      <div className="container_createproduct">
        <div className="container_icon_picture_createproduct">
          <div className="wrapper_icon_picture_createproduct">
            {console.log(state.productPicture, "productpicture")}
            {state.productPicture.length >= 1 ?
              <img
                src={
                  URL.createObjectURL(state.productPicture[0])
                }
                style={{ width: 94, height: 94 }}
                alt="msg picture"
              /> : <PictureIcon />}
          </div>
          <div className="wrapper_icon_picture_createproduct">
            {state.productPicture.length >= 2 ?
              <img
                src={
                  URL.createObjectURL(state.productPicture[1])
                }
                style={{ width: 94, height: 94 }}
                alt="msg picture"
              /> : <PictureIcon />}
          </div>
          <div className="wrapper_icon_picture_createproduct">
            {state.productPicture.length === 3 ?
              <img
                src={
                  URL.createObjectURL(state.productPicture[2])
                }
                style={{ width: 94, height: 94 }}
                alt="msg picture"
              /> : <PictureIcon />}
          </div>
          <div
            className="wrapper_icon_picture_createproduct"
            style={{ borderColor: '#0091FF' }} >
            <label for="file-input" style={{ cursor: "pointer" }}>
              <AddPicture />
            </label>
            <input id="file-input" type="file" onChange={uploadPicture} multiple />
          </div>
        </div>
        <div className="separate_line_createproduct"></div>
        <div className="wrapper_input_createproduct">
          <label className="label_createproduct">
            Titre
            <input
              className="input_createproduct"
              type="text"
              name="title"
              value={state.title}
              onChange={(e) => handleState(e)}
              placeholder={wording.TITLE_PLACEHOLDER}
            />
          </label>
        </div>
        <div className="wrapper_input_createproduct">
          <label className="label_createproduct" style={{ marginTop: 25 }}>
            Description
            <textarea
              className="textarea_createproduct"
              value={state.description}
              onChange={(e) => handleState(e)}
              name="description"
              placeholder={wording.DESCRIPTION_PLACEHOLDER}
            />
          </label>
        </div>
        <div className="separate_line_createproduct"></div>
        <div className="wrapper_input_createproduct">
          <label className="label_createproduct">
            Etat du bien
            <select
              className="input_createproduct"
              onChange={(e) => setState({ ...state, condition: e.target.value })}>
              <option value="" disabled selected>
                Select your option
              </option>
              {goodsCondition.map((condition, index) => {
                return <option value={condition}>{condition}</option>;
              })}
            </select>
          </label>
        </div>
        <div className="separate_line_createproduct"></div>
        <div className="wrapper_input_createproduct">
          <label className="label_createproduct">
            Catégorie
            <select
              className="input_createproduct"
              onChange={(e) => setState({ ...state, category: e.target.value })}>
              <option value="" disabled selected>
                Select your option
              </option>
              {(state.isService ? serviceCategories : goodCategories).map(
                (category, index) => {
                  return (
                    <option value={category.titleCategory}>
                      {category.titleCategory}
                    </option>
                  );
                },
              )}
            </select>
          </label>
        </div>
        <div className="separate_line_createproduct"></div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="text_annonce_createproduct">Type d'annonce</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="radio"
              value={!state.isRequestProduct}
              name="isRequestProduct"
              style={{ width: 22, height: 22 }}
              onChange={() => setState({ ...state, isRequestProduct: false })}
            />
            <label className="input_annonce_createproduct">offres</label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 11 }}>
            <input
              type="radio"
              value={state.isRequestProduct}
              name="isRequestProduct"
              onChange={() => setState({ ...state, isRequestProduct: true })}
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

export default CreateProduct;
