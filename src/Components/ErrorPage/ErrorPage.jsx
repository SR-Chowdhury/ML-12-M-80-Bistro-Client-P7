import React from 'react';

const ErrorPage = () => {
    return (
        <div className='d-flex align-items-center justify-content-center' style={{ height: '500px'}}>
            <div>
                <h1 className='text-danger'>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
            </div>
        </div>
    );
};

export default ErrorPage;