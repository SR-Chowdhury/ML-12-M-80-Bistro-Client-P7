import React from 'react';
import './Menu.css';

const Menu = ({item}) => {

    const {name, image, recipe, price} = item;
    return (
        <div className='menuContainer'>
            <div className="menuImg">
                <img src={image} alt="" />
            </div>
            <div>
                <h1 className="menuTitle">{name} -----------------</h1>
                <p className='menuInfo'>{recipe}</p>
            </div>
            <p className='text-[#BB8506;]'>${price}</p>
        </div>
    );
};

export default Menu;