import React from 'react';
import ReactHelmet from '../../../Components/ReactHelmet/ReactHelmet';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Key);

const Payment = () => {
    return (
        <div className='w-full'>
            <ReactHelmet title={'Payment'} />
            <SectionTitle subHeading={'spend money'} Heading={'Payment'} />
            <div className='w-2/3 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;