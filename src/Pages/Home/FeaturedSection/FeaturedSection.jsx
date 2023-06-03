import React from 'react';
import './FeaturedSection.css';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import img from '../../../assets/home/featured.jpg';
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';

const FeaturedSection = () => {

    const customStyle = {
        color: 'white',
        borderBottom: '3px solid white' 
    };

    return (
        <section className='featuredContainer bg-fixed'>
            <SectionTitle subHeading={'Check it Out'} Heading={'From Our Menu'} />
            <div className='featuredItem'>
                <div className="feature-img">
                    <img src={img} alt="" />
                </div>
                <div className='feature-details'>
                    <h3 className='fetaure-date'>March 20, 2023</h3>
                    <h1 className="feature-title">WHERE CAN I GET SOME?</h1>
                    <p className='feature-info'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat possimus obcaecati aliquam, iusto, quidem rerum sapiente impedit repellat, harum nostrum voluptate exercitationem accusantium doloremque eos maxime excepturi accusamus vitae!
                    </p>
                    <PrimaryBtn btnInfo={'Read More'} styles={customStyle}/>
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;