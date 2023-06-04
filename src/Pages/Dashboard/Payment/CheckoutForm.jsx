import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useEffect } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';

const CheckoutForm = ({ price }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const {user} = useAuth();

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);
        if (card === null) return;

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setCardError(error.message);
        } else {
            // console.log('payment method', paymentMethod);
            setCardError('');
        }

        setProcessing(true);
        // Confirm Card Payment
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonymous',
                    email: user?.email || 'unknown'
                },
            },
        })

        if (confirmError) {
            console.log(confirmError);
        }

        setProcessing(false);

        console.log('paymentIntent', paymentIntent);
        if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id);
            // TOTO NEXT STEPS
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-warning btn-sm mt-5' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-800 mt-3'>{cardError}</p>
            }
            {
                transactionId && <p className='text-green-800 mt-3'>Transaction completed with Transaction ID: {transactionId}</p>
            }
        </>
    );
};

export default CheckoutForm;