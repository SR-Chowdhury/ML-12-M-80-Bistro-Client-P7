import React from 'react';
import './MenuCategory.css';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Menu from '../../../Components/Menu/Menu';
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';
import Cover from '../../../Components/Cover/Cover';

const MenuCategory = ({ coverImg, coverTitle, coverSubTitle, items, subHeading, Heading, btnInfo }) => {

    const customStyle = {
        color: '#1F2937',
        borderBottom: '3px solid #1F2937'
    };

    return (
        <div>

            <Cover coverImg={coverImg} coverTitle={coverTitle} coverSubTitle={coverSubTitle} />

            {
                subHeading && <SectionTitle subHeading={subHeading} Heading={Heading} />
            }

            <section className='mt-20'>
                <div className="popularMenuContainer">
                    {
                        items.map((item, index) => <Menu key={index} item={item} />)
                    }
                </div>
                <div className='text-center mb-5'>
                    <PrimaryBtn title={coverTitle} btnInfo={btnInfo} styles={customStyle} />
                </div>
            </section>
        </div>
    );
};

export default MenuCategory;