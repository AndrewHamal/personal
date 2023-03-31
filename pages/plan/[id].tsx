import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { instance } from "../api/auth";
import Skeleton from "../components/skeleton";
import SiderFooter from "../components/sider/siderBody";
import { getCookie, setCookie } from "cookies-next";

export default function Plan({ showSider, setShowSider }: any) {
  let refPlan: any = useRef();
  let selected_plan = getCookie('selected_plan');
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const fetcher = (url: any) => instance(url);
  const { data, error }: any = useSWR("plans", fetcher);

  useEffect(() => {
    if(selected_plan)
    {
      setSelectedPlan(selected_plan)
    }
  }, [selected_plan]);

  return (
    <>
      <div className="d-flex flex-column gap-2 relative z-[99] align-items-center px-5">
        <div className="text-center my-5">
            <h1 className="font-[sf] text-[#242331]">Select your plan</h1>
        </div>

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
                    setCookie('selected_plan', res.id);
                  }}
                  className={`${
                    selectedPlan == res.id && "selected"
                  } cursor-pointer bg-[#FFFFFF80] d-flex min-h-[70px] py-3 shadow w-100 m-2 rounded-[10px]`}
                >
                  <div className="my-auto px-4 text-center d-flex">
                    <div className="my-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M0 12C0 5.39062 5.34375 0 12 0C18.6094 0 24 5.39062 24 12C24 18.6562 18.6094 24 12 24C5.34375 24 0 18.6562 0 12ZM17.3906 9.9375C17.9063 9.42187 17.9063 8.625 17.3906 8.10937C16.875 7.59375 16.0781 7.59375 15.5625 8.10937L10.5 13.1719L8.39063 11.1094C7.875 10.5938 7.07813 10.5938 6.5625 11.1094C6.04688 11.625 6.04688 12.4219 6.5625 12.9375L9.5625 15.9375C10.0781 16.4531 10.875 16.4531 11.3906 15.9375L17.3906 9.9375Z" fill="#030128"/>
                      </svg>
                    </div>

                    <div className="my-auto ml-6">
                      <div className="d-flex">
                        <p className="my-auto text-[19px] font-[700] pr-2">${res.price}</p>
                        <p className="my-auto text-[#030128] text-[14px] font-[600] capitalize">
                          {" "}
                          {res.price === 0 ? " Free" : ' per '+res.intervel}
                        </p>
                      </div>
                      <div>
                        {res.features.map((res: any, key:number) => (
                          <p className="w-100 mb-0 text-left text-[#757575]" key={key}>{res.description}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))
        )}
        <SiderFooter>
          <button disabled={!data} className="btn-primary w-100 mt-5" onClick={()=>{
            setShowSider({...showSider, page: 'register', id: selectedPlan})
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
