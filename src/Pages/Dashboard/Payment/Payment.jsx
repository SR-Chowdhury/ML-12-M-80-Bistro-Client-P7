import React from 'react';
import ReactHelmet from '../../../Components/ReactHelmet/ReactHelmet';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../Hooks/useCart';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Key);

const Payment = () => {

    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    console.log('Total Price: ', total, price);

    return (
        <div className='w-full'>
            <ReactHelmet title={'Payment'} />
            <SectionTitle subHeading={'spend money'} Heading={'Payment'} />
            <div className='w-2/3 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm cart={cart} price={price}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;