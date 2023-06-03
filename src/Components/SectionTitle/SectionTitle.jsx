import React from 'react';
import './SectionTitle.css';


const SectionTitle = ({ subHeading, Heading }) => {
    return (
        <div className='my-10'>
            <div className='SectionTitle'>
                <p className='subHeading'>--- {subHeading} ---</p>
                <h1 className='sectionHeading'>{Heading}</h1>
            </div>
        </div>
    );
};

export default SectionTitle;