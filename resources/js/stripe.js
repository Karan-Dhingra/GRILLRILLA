import { loadStripe } from '@stripe/stripe-js';
import { placeOrder } from './apiService'
import { CardWidget } from './CardWidget'

export async function initStripe() {
    const stripe = await loadStripe('pk_test_51J8k41SCFPXzgBgtCfWLL6TzgedX6g7ACVpEhqk6LGFvfm05X1Q1X2Mgdqs5mOBEvor6XHaafA6B3EabUX5rl1iM00sePUaWMm');
    let card = null

    // Selector Payment
    const paymentType = document.querySelector('#paymentType')
    if (!paymentType) {
        return
    }
    paymentType.addEventListener('change', (e) => {
        console.log(e.target.value);
        if (e.target.value === 'card') {
            // Display Widget
            card = new CardWidget(stripe)
            card.mount()
        } else {
            // mountWidget();
            card.destroy()
        }
    })

    // Ajax Call
    const paymentForm = document.querySelector('#payment-form')
    if (paymentForm) {
        paymentForm.addEventListener('submit', async(e) => {
            e.preventDefault()
                // console.log(e);
            let formData = new FormData(paymentForm)
            let formObject = {}
            for (let [key, value] of formData.entries()) {
                formObject[key] = value
            }

            // Verify Card
            if (!card) {
                placeOrder(formObject);
                return;
            }

            const token = await card.createToken()
            formObject.stripeToken = token.id;
            placeOrder(formObject);
        })
    }

}