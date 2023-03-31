import { LoadingOutlined } from "@ant-design/icons";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { instance, subscription } from "../api/auth";
import useSWR from "swr";

const stripePromise = loadStripe(
  "pk_test_51MRuPFJloZqbdR1uUvOKMgECphmJ2kL5NVzwuEaRcb2x3F5QLZSmSRhrkVn779nPKpZGL5P7RkiafILpN8sbnT7O00eSjU0xl3"
);

const CheckoutForm = ({ selectedPlan, intent, setShowSider, showSider }: any) => {
  const stripe: any = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    if (elements == null) {
      toast.error("Something went wrong!");
      return;
    }
    const { setupIntent, error }: any = await stripe.confirmCardSetup(
      intent?.data?.client_secret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    );

    if (error) {
      toast.error(error);
      setLoading(false);
    } else {
      subscription(selectedPlan, setupIntent.payment_method).then((res) => {
        toast.error(res.data.message);
        setLoading(false);
        setShowSider({...showSider, page: 'complete'})
      });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="stripe">
      <div className="bg-[#fff] border-[1px] border-[#00000033] p-3 rounded-[10px] mt-3 mb-[100px]">
        <CardElement />
      </div>

      <div className="btn-div without-secline mt-5">
        <button
          className="btn-primary w-100 mb-3"
          type="submit"
          disabled={!stripe || !elements}
        >
          {loading ? (
            <>
              <LoadingOutlined className="my-auto icon mr-2" /> Loading...
            </>
          ) : (
            "Continue"
          )}
        </button>
      </div>
    </form>
  );
};

export default function CardDetail({ showSider, setShowSider, selectedPlan }: any) {
  const fetcher = (url: any) => instance(url);
  const { data, error }: any = useSWR("plans", fetcher);
  const [loading, setLoading] = useState(false);
  const { data: intent, error: errorIntent }: any = useSWR(
    "get-intent",
    fetcher
  );

  // if(!intent){
  //   navigate('/register');
  // }

  return (
    <div className="d-flex justify-content-center relative px-[100px]">
      <div className="relative w-100">
        <div className="text-center my-5">
          <h1 className="font-[700] text-[#242331]">Enter card details</h1>
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm showSider={showSider} setShowSider={setShowSider} selectedPlan={selectedPlan} intent={intent} />
        </Elements>
      </div>
      {/* <SiderFooter>
        <button className="btn-primary w-100">Continue</button>
      </SiderFooter> */}
    </div>
  );
}
