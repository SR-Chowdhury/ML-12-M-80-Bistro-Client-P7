import React from 'react';
import { Helmet } from 'react-helmet-async';

const ReactHelmet = ({title}) => {
    return (
        <Helmet>
            <title>{title} | Bistro Boss</title>
            {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
        </Helmet>
    );
};

export default ReactHelmet;