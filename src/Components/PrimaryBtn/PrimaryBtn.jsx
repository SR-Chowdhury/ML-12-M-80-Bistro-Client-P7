import React from 'react';
import './PrimaryBtn.css';
import { Link } from 'react-router-dom';

const PrimaryBtn = ({btnInfo, styles, title}) => {
    return (
        <Link to={`/order/${title}`}>
            <button className="primaryBtn" style={styles}>{btnInfo}</button>
        </Link>
        
    );
};

export default PrimaryBtn;