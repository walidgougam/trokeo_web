import React, { useState } from 'react';
import './FollowCategory.scss';
/** COMPONENT */
import { Navbar, Footer, CardFollowCategory, HeaderGreen, BtnSetting } from '../../component/index'
/** REDUX */
import { useDispatch, useSelector } from "react-redux";
import { userRefreshAction } from "../../redux/actions/AuthAction";
import { followCategory } from "../../services/productService";

function FollowCategory(props) {
  const [activeGoods, setActiveGoods] = useState(false);
  const [activeServices, setActiveServices] = useState(false);

  /** REDUX */
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.authReducer);
  const goodCategories = useSelector((state) =>
    state.categoryReducer?.categories?.filter(
      (item) => item.type.type === 'bien'
    )
  );
  const serviceCategories = useSelector((state) =>
    state.categoryReducer?.categories?.filter(
      (item) => item.type.type === 'service'
    )
  );

  const handleFollowProduct = (categoryId, isUnfollow) => {
    return followCategory(token, user?._id, categoryId, isUnfollow, (res) =>
      dispatch(userRefreshAction(res.data.data))
    );
  };
  return (
    <>
      <Navbar history={props.history} />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <HeaderGreen title="Personnalisation" />
        <div className="container_central_follow">
          <BtnSetting
            active={activeGoods}
            onClick={() => setActiveGoods(!activeGoods)}
            titleBtn="Biens"
            component={goodCategories.map((category, index) => {
              return (
                <CardFollowCategory
                  onClick={() =>
                    handleFollowProduct(
                      category?._id,
                      user?.categoryFollow?.includes(category?._id)
                    )
                  }
                  arrayLength={goodCategories.length}
                  index={index}
                  key={index}
                  title={category.category}
                  followByUser={user?.categoryFollow?.includes(category?._id)}
                />
              );
            })}
          />
          <BtnSetting
            paddingTop={28}
            marginBottom={127}
            active={activeServices}
            onClick={() => setActiveServices(!activeServices)}
            titleBtn="Services"
            component={serviceCategories.map((category, index) => {
              return (
                <CardFollowCategory
                  onClick={() =>
                    handleFollowProduct(
                      category?._id,
                      user?.categoryFollow?.includes(category?._id)
                    )
                  }
                  arrayLength={serviceCategories.length}
                  key={index}
                  index={index}
                  title={category.category}
                  follow={category.followByUser}
                />
              );
            })}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default FollowCategory
