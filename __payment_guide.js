/**
 * 1. install stripe and react stripe js 
 *      npm install @stripe/react-stripe-js @stripe/stripe-js
 * 2. create a checkout form with CardElement
 *    N>B> CardElement contain: card number, expiration date, cvs, zipcode
 * 3. get card informtion
 * 4. create a payment method
 * 5. use test card to test payment
 * -------On the sever Side-----------------------
 * 6. install stripe (npm i --save stripe)
 * 7. Create a payment intent api with payment method types: ['card'], currency : 'usd', amount: price * 100
 * 
 */