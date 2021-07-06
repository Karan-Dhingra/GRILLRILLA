import { loadStripe } from '@stripe/stripe-js';
import { placeOrder } from './apiService'
import { CardWidget } from './CardWidget'

export async function initStripe() {
    const stripe = await loadStripe('pk_test_51J8k41SCFPXzgBgtCfWLL6TzgedX6g7ACVpEhqk6LGFvfm05X1Q1X2Mgdqs5mOBEvor6XHaafA6B3EabUX5rl1iM00sePUaWMm');
    let card = null

    // Selector Payment
    const paymentType = document.querySelector('#paymentType')
    if (!paymentType) {
        return;
    }
    paymentType.addEventListener('change', (e) => {
        console.log("DISPLAY" + e.target.value);
        if (e.target.value === 'card') {
            // Display Widget
            console.log("CREATED");
            card = new CardWidget(stripe)
            card.mount();
            if (card) {
                console.log("YES");
            }
            if (!card) {
                console.log("NO");
            }
        } else if(e.target.value === 'COD') {
            // mountWidget();
            console.log("DESTROY");
            console.log(card);
            card.destroy();
            card = null;
            console.log(card);
            if(card){
                console.log("YES");
            }
            if (!card) {
                console.log("NO");
            }
        }
    })

    // Ajax Call
    const paymentForm = document.querySelector('#payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            let formData = new FormData(paymentForm);
            let formObject = {}
            for (let [key, value] of formData.entries()) {
                formObject[key] = value;
            }
            console.log(formObject);
            console.log(card, "CARD");
            if (!card) {
                // Ajax
                placeOrder(formObject);
                return;
            }

            const token = await card.createToken()
            formObject.stripeToken = token.id;
            placeOrder(formObject);


            // // Verify card
            // stripe.createToken(card).then((result) => {
            //     formObject.stripeToken = result.token.id;
            //     placeOrder(formObject);
            // }).catch((err) => {
            //     console.log(err)
            // })

        })
    }
}