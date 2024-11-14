import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const KEY =
  "pk_test_51My4EdFm7P5IudQXTmceeYA5CjHlti80BbVk5ydWhojsVfFWLn3KJCozyPs4CyMFJWk8xrsGawjkFBmXdu3jJkOI00l4zViceY";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 50000,
          }
        );
        <button
        style={{ padding: 10, marginTop: 20 }}
        onClick={() => navigate("/success")}
      >
        Succesfull
      </button>;
        console.log(res.data);
       
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {stripeToken ? (
        <span>Precessing. Please wait...</span>
      ) : (
        <StripeCheckout
          name="TICKETI"
          image=""
          billingAddress
          shippingAddress
          description="Your total is 50DT"
          amount={50000}
          token={onToken}
          stripeKey={KEY}
        >
          <button
            style={{
              border: "none",
              width: 120,
              borderRadius: 5,
              padding: "20px",
              backgroundColor: "black",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Pay now
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};
export default Pay;
