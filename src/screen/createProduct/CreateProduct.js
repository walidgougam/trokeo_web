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
import { useDispatch, useSelector } from 'react-redux';
import { getSpecificProductAction } from '../../redux/actions/ProductAction';
import { userRefreshAction } from '../../redux/actions/AuthAction';
import { createProductCategoryAction } from '../../redux/actions/ProductAction';
/** API */
import axios from 'axios';
import { createProductUrl } from '../../API/constant';
/** SERVICE */
import { refreshUser } from '../../services/userService';
import SelectOption from '../../component/selectOption/SelectOption';

function CreateProduct(props) {
  /** STATE */
  const [state, setState] = useState({
    isService: false,
    title: '',
    description: '',
    condition: '',
    category: '',
    isRequestProduct: false,
    productPicture: [],
    errorOnCreateProduct: '',
  });

  /** REDUX */
  const dispatch = useDispatch();
  const userStore = useSelector((state) => state.authReducer);
  const locationStore = useSelector((state) => state.productReducer.location);
  const createProductCategoryStore = useSelector(
    (state) => state.createProductCategoryReducer,
  );
  const value = state.isService ? 'service' : 'bien';
  const categories = useSelector((state) =>
    state.categoryReducer?.categories?.filter(
      (item) => item.type.type === value
    )
  );

  const handleState = (event) => {
    const value = event.target.value;
    setState({ ...state, [event.target.name]: value });
  };

  const cleanStateOfScreen = () => {
    setState({ ...state, title: '' });
    setState({ ...state, description: '' });
    setState({ ...state, productPicture: '' });
    setState({ ...state, conditionProduct: '' });
    setState({ ...state, title: '' });
    dispatch(
      createProductCategoryAction({
        category: {},
      }),
    );
  };

  const prepareData = (productPicture, body) => {
    const data = new FormData();
    if (productPicture)
    {
      for (let i = 0; i < productPicture.length; i++)
        data.append('photos', productPicture[i])
      Object.keys(body).forEach((key) => {
        data.append(key, body[key]);
      });
      return data;
    } else
    {
      setState({ ...state, errorOnCreateProduct: 'true' });
    }
  };

  const handleCreateProduct = () => {
    const userId = userStore.user._id;
    console.log(state, 'state all');
    axios
      .post(
        createProductUrl,
        prepareData(state.productPicture, {
          title: state.title,
          description: state.description,
          condition: state.condition,
          category: state.category,
          userId,
          isOffer: !state.isRequestProduct,
          type: state.isService ? 'service' : 'bien',
          isFromOrganisation: userStore.user.isOrganisation,
          // longitude: //locationStore.longitude,
          // latitude: locationStore.latitude,
        }),
        {
          headers: {
            'content-type': 'multipart/form-data',
            Authorization: 'Bearer ' + userStore.token,
          },
        },
      )
      .then(async (res) => {
        await refreshUser(
          userStore.user._id,
          (res) => {
            dispatch(userRefreshAction(res));
          },
          (err) => {
            console.log('ERROR TO HANDLE', err.response);
          },
        );
        dispatch(getSpecificProductAction(res?.data));
        cleanStateOfScreen();
      })
      .catch((err) => {
        console.log('ERROR create product', err);
        setState({ ...state, errorOnCreateProduct: 'true' });
      });
  };

  const handleUploadPicture = (e) => {
    setState({ ...state, productPicture: e.target.files });
  };

  return (
    <>
      <Navbar history={props.history} />
      <HeaderGreen title="Créer une annonce" />
      <HeaderChooseGoodOrService
        fromCreateProduct
        onChange={(e) => setState({ ...state, isService: !state.isService })}
        isService={state.isService}
      />
      <div className="container_createproduct">
        <div className="container_icon_picture_createproduct">
          <div className="wrapper_icon_picture_createproduct">
            {state.productPicture.length >= 1 ? (
              <img
                src={URL.createObjectURL(state.productPicture[0])}
                style={{ width: 94, height: 94 }}
                alt="msg picture"
              />
            ) : (
              <PictureIcon />
            )}
          </div>
          <div className="wrapper_icon_picture_createproduct">
            {state.productPicture.length >= 2 ? (
              <img
                src={URL.createObjectURL(state.productPicture[1])}
                style={{ width: 94, height: 94 }}
                alt="msg picture"
              />
            ) : (
              <PictureIcon />
            )}
          </div>
          <div className="wrapper_icon_picture_createproduct">
            {state.productPicture.length === 3 ? (
              <img
                src={URL.createObjectURL(state.productPicture[2])}
                style={{ width: 94, height: 94 }}
                alt="msg picture"
              />
            ) : (
              <PictureIcon />
            )}
          </div>
          <div
            className="wrapper_icon_picture_createproduct"
            style={{ borderColor: '#0091FF' }}>
            <label for="file-input" style={{ cursor: 'pointer' }}>
              <AddPicture />
            </label>
            <input
              id="file-input"
              type="file"
              onChange={handleUploadPicture}
              multiple
            />
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
        <SelectOption
          title="Etat du bien"
          goodsCondition={goodsCondition}
          changeState={(e) => setState({ ...state, condition: e.target.value })}
        />
        <div className="separate_line_createproduct"></div>
        <SelectOption
          title="Catégorie"
          isService={state.isService}
          goodCategories={categories}
          changeState={(e) => setState({ ...state, category: e.target.value })}
        />
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
        <div className="wrapper_btn_createproduct">
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
