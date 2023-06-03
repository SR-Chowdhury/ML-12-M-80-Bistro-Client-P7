import React from 'react';
import Menu from '../../../Components/Menu/Menu';
import './PopularMenu.css';
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {

    const customStyle = {
        color: '#1F2937',
        borderBottom: '3px solid #1F2937'
    };

    const [menu] = useMenu();
    const popular = menu?.filter(item => item.category === 'popular');

    return (
        <section>
            <div className="popularMenuContainer">
                {
                    popular.map((item, index) => <Menu key={index} item={item} />)
                }
            </div>
            <div className='text-center mb-5'>
                <PrimaryBtn btnInfo={'view full menu'} styles={customStyle} />
            </div>
        </section>
    );
};

export default PopularMenu;