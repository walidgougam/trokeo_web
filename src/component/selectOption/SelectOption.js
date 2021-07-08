import React from 'react'
import './SelectOption.scss'

function SelectOption({ title, isService, goodsCondition, serviceCategories, goodCategories, changeState }) {
    return (
        <div className="wrapper_input_createproduct">
            <label className="label_createproduct">
                {title}
                <select
                    className="input_createproduct"
                    onChange={changeState}>
                    <option value="" disabled selected>
                        Select your option
                    </option>
                    {
                        goodsCondition ? goodsCondition.map((condition, index) => {
                            return <option value={condition}>{condition}</option>;
                        }) :
                            (isService ? serviceCategories : goodCategories).map(
                                (category, index) => {
                                    return (
                                        <option value={category.titleCategory}>
                                            {category.titleCategory}
                                        </option>
                                    );
                                },
                            )
                    }
                </select>
            </label>
        </div>
    )
}

export default SelectOption;





// <div className="wrapper_input_createproduct">
//     <label className="label_createproduct">
//         Catégorie
//         <select
//             className="input_createproduct"
//             onChange={(e) => setState({ ...state, category: e.target.value })}>
//             <option value="" disabled selected>
//                 Select your option
//             </option>
//             { }
//         </select>
//     </label>
// </div>