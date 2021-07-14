import React from 'react'
import './SelectOption.scss'

function SelectOption({ title, isService, goodsCondition, serviceCategories, goodCategories, changeState, style, placeholder }) {
    return (
        <div className="wrapper_input_createproduct">
            <label className="label_createproduct">
                {title}
                <div className="style-select">

                    <select
                        style={style}
                        className="input_createproduct"
                        onChange={changeState}>
                        <option value="" disabled selected>
                            {placeholder ? placeholder : 'Select your option'}
                        </option>
                        {
                            goodsCondition ? goodsCondition.map((condition, index) => {
                                return <option value={condition}>{condition}</option>;
                            }) :
                                goodCategories.map(
                                    (category, index) => {
                                        return (
                                            <option value={category._id}>
                                                {category.category}
                                            </option>
                                        );
                                    },
                                )
                        }
                    </select>
                </div>
            </label>
        </div>
    )
}

export default SelectOption;