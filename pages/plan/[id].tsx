import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { register, instance, subscription } from "../api/auth";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { useRouter as mainRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import Particle from "../components/particle";
import Skeleton from "../components/skeleton";
import { LoadingOutlined } from "@ant-design/icons";
import SiderFooter from "../components/sider/siderBody";
import { useNavigate } from "react-router-dom";

export default function Plan() {
  let refPlan: any = useRef();
  const navigate = useNavigate();
  const router = useRouter();
  const { query }: any = mainRouter();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);


  const fetcher = (url: any) => instance(url);
  const { data, error }: any = useSWR("plans", fetcher);

  const { data: intent, error: errorIntent }: any = useSWR(
    "get-intent",
    fetcher
  );

  useEffect(() => {
    if (query?.id) setSelectedPlan(query?.id);
    if (data) {
      setTimeout(() => {
        refPlan?.current?.click();
      }, 50);
    }

    if (errorIntent && errorIntent?.data?.message === "email_not_verified") {
      toast.error(errorIntent?.data?.message);
      setTimeout(() => {
        // router.push("/verify");
      }, 500);
    }
  }, [query?.id, data, errorIntent]);

  return (
    <>
      <div className="d-flex flex-column gap-2 relative z-[99] align-items-center px-5">
        {!data ? (
          <Skeleton />
        ) : (
          data.data.map((res: any, key: number) => (
            <React.Fragment key={key}>
              <div className="w-100 d-flex d-column">
                <div
                  ref={selectedPlan == res.id ? refPlan : null}
                  onClick={() => {
                    setSelectedPlan(res.id);
                    setSelectedFeature(res.features);
                  }}
                  className={`${
                    selectedPlan == res.id && "selected"
                  } cursor-pointer bg-[#FFFFFF80] d-flex h-[60px] border-[#03012826] w-100 m-2  border-[1px] rounded-[10px]`}
                >
                  <div className="m-auto text-center">
                    <p className="mb-0 text-[#030128] text-[14px] font-[600] capitalize">
                      {" "}
                      {res.price === 0 ? "Free" : res.intervel}
                    </p>
                    <p className="mb-0 text-[19px] font-[700]">${res.price}</p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))
        )}
        <SiderFooter>
          <button disabled={!data} className="btn-primary w-100" onClick={()=>{
            navigate('/carddetail',{state:{selectedPlan}})
          }}>Continue</button>
        </SiderFooter>
      </div>

      {/* {selectedFeature && (
        <div className="px-[35px] plan-list z-[999] relative">
          {selectedFeature?.map((res: any, key: number) => (
            <li className="text-[14px] d-flex mb-2" key={key}>
              <img src="/img/tick.svg" className="w-[16px] mr-2" alt="" />
              {res.description}
            </li>
          ))}
        </div>
      )} */}

      <div className="bg-fade absolute top-[47%] left-0 right-0 bottom-0 rounded-b-[20px]"></div>

      {/* {intent && (
        <div className="px-[30px] py-3 relative w-100">
          <Elements stripe={stripePromise}>
            <CheckoutForm intent={intent} />
          </Elements>
        </div>
      )} */}
    </>
  );
}
