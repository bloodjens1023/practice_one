import React, { useEffect } from 'react';

const BuyBtn = ({ id_produit }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <stripe-buy-button
      buy-button-id={id_produit}
      publishable-key="pk_test_51OsAfMFDP4bEYovMxgekldjZEbHkuvuZRq2HfCLbG2KnvjIXioJ9xmDdIVA1Ebg6MVN863hgNl1FMGhCkDi6HAj10051QD7oLX"
    />
  );
};

export default BuyBtn;
