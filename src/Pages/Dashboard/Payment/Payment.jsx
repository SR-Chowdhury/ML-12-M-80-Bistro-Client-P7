import React from 'react';
import ReactHelmet from '../../../Components/ReactHelmet/ReactHelmet';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Payment = () => {
    return (
        <div className='w-full'>
            <ReactHelmet title={'Payment'} />
            <SectionTitle subHeading={'spend money'} Heading={'Payment'} />
            <div className='flex gap-5 mx-auto w-1/2'>
                <div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
            </div>
        </div>
    );
};

export default Payment;