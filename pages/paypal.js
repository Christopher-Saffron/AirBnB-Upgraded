// App.js
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/router";

const initialOptions = {
    "client-id": process.env.PAYPAL_CLIENT_ID,
    currency: "PLN",
    intent: "capture",
    "data-client-token": "abc123xyz==",
    disableFunding: "card,giropay,sofort",
};


export default function App() {
    const router = useRouter()

    const approve = (data, actions) => {
            return actions.order.capture().then((details) => {
                const name = details.payer.name.given_name;
                alert(`Transaction completed by ${name}`);
                // router.push('/success?from=paypal', undefined, {shallow:true, state: {}})
                router.push('/success?from=paypal')
            });
        }
        
    
    return (
        <PayPalScriptProvider options={{ "client-id": initialOptions['client-id']}}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "1.99",
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                        // router.push('/success?from=paypal', undefined, {shallow:true, state: {}})
                        router.push('/success?from=paypal')
                    });
                }}
            />
        </PayPalScriptProvider>
    );
}

//fake acc sb-gzbsz26041526@personal.example.com
// u.j%rA1?