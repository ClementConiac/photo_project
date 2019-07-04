document.addEventListener("DOMContentLoaded", function(event) { 
  const stripe = Stripe('pk_test_6AGwTFQ4NxLa3P3VmPnT8ZJ8');
  const elements = stripe.elements();
  
  var style = {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };
    
    const card = elements.create('card', {style});
    
    card.mount('#card-element');
  
    card.addEventListener('change', ({error}) => {
      const displayError = document.getElementById('card-errors');
      if (error) {
        displayError.textContent = error.message;
      } else {
        displayError.textContent = '';
      }
    });
  
  const form = document.getElementById('payment-form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const {token, error} = await stripe.createToken(card);
  
    if (error) {
      const errorElement = document.getElementById('card-errors');
      errorElement.textContent = error.message;
    } else {
      stripeTokenHandler(token);
    }
  });
  
  const stripeTokenHandler = (token) => {
      const form = document.getElementById('payment-form');
      const hiddenInput = document.createElement('input');
      hiddenInput.setAttribute('type', 'hidden');
      hiddenInput.setAttribute('name', 'stripeToken');
      hiddenInput.setAttribute('value', token.id);
      form.appendChild(hiddenInput);
    
      form.submit();
    };
  })

import Api from '@/services/Api'

export default{
  payement () {
    return Api().post('payement')
},
}