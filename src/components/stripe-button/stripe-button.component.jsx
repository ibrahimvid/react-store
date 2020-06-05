import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; 
    const publishableKey = 'pk_test_51Gqo42JiAHmnU2VnKI0Pg8rAINlgzoerEsyrhKofI7GWWiJOeqWe8pUofy6JP7tCmEL4XpQl2DPuLdi363Txsft700ohjpiHSs';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Store React LLC.'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;