import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51RLtz6Ggdr4JlelogrsWRMCpW5rE2PGeIWxSBLM13OxL2wUdgZMB4vLDUuBONNSwejeb5VUiLj8NtClkPsuEimnE00QAQjgXk3"
);

createRoot(document.getElementById("root")).render(
  <Elements stripe={stripePromise}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Elements>
);
