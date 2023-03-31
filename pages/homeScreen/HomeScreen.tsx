
import React, { useEffect, useState } from "react";
import Accordion from "../components/accordion";
import PlanCard from "../components/planCard/PlanCard";
import { Carousel, Drawer } from "antd";
import useSWR from 'swr'
import Typography from "@mui/material/Typography";
import { instance } from "../api/auth";
import Skeleton from "../components/skeleton";
import { setCookie } from "cookies-next";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/css";
import MobileSvg from "../components/Mobile";

const contentStyle: React.CSSProperties = {
  marginTop: '5%',
  marginBottom: '10%',
  height: '60vh',
  color: 'grey',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#FFFFFF',
  borderRadius: '30px',
  display: 'flex',
  overflow: 'hidden'
};

const SwiperButtonNext = ({ children }: any) => {
  const swiper = useSwiper();
  return <p className="mr-auto w-[80px]" onClick={() => swiper.slideNext()}>{children}</p>;
};

const SwiperButtonPrev = ({ children }: any) => {
  const swiper = useSwiper();
  return <p className="ml-auto w-[80px]" onClick={() => swiper.slidePrev()}>{children}</p>;
};

const HomeScreen = ({ setShowSider }: any) => {
  const { data, error }: any = useSWR('plans', instance);
  const [open, setOpen] = useState(false);

  const handleSelectPlan = (id: number) => {
    if (id) {
        setCookie('selected_plan', id);
        setShowSider({state:true, page: 'register'});
    }
  }

  return (
    <>
    <div className="pt-[76px]">
      <div className=" relative container" id="firstScreen">
        <div className="" style={{ position: "absolute", top: "10%", right: '-100px' }}>
          <svg width="163" height="127" viewBox="0 0 163 127" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M92.792 13.9746L62.5996 30.3761L106.957 112.031L137.15 95.63L92.792 13.9746Z" fill="#6FE92F" />
            <path d="M148.896 55.9213L132.494 25.7289L50.8388 70.0866L67.2402 100.279L148.896 55.9213Z" fill="#6FE92F" />
            <path d="M6.54881 22.5701L3.01367 37.3615L43.017 46.9222L46.5521 32.1309L6.54881 22.5701Z" fill="#1D1D77" />
            <path d="M36.9574 16.5149L22.166 12.9798L12.6052 52.9831L27.3966 56.5182L36.9574 16.5149Z" fill="#1D1D77" />
          </svg>
        </div>

        <div className="d-flex h-[730px] w-100">
          <div className="d-flex my-auto flex-column">
            <img src="/img/logo.svg" width={240} alt="" />
            <Typography className="my-3" variant="h1">Safe & reliable <br/> co-parenting platform</Typography>
            <Typography className="my-3" variant="h2">
              Providing step-parent accessibility and <br /> inclusion for blended
              families
            </Typography>

            <button
              className="px-[35px] py-[13px] font-Inter self-start font-[500] mt-3 rounded-[90px] text-white bg-[#030128]"
              onClick={() => setShowSider({page: 'plan', state: true})}
            >
              Sign up now
            </button>

          </div>

          <div className="ml-auto my-auto pr-[55px] first-img">
            <MobileSvg>        
                <video 
                  style={{
                    objectFit: 'cover',
                    height: '690px',
                    width: '320px'
                  }}
                controls={false} autoPlay muted loop={true}>
                    <source src="/videos/main.mp4" type="video/mp4" />
                </video>
            </MobileSvg>
          </div>
        </div>

      </div>

      <div className="h-[20px] bg-[#fff]"></div>

      <div className="container d-flex relative h-[790px] bg-[#FBFBFD]" id="secondScreen">
        <div style={{ position: "absolute", top: "7%", left: 0 }}>
          <svg width="163" height="127" viewBox="0 0 163 127" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M92.792 13.9746L62.5996 30.3761L106.957 112.031L137.15 95.63L92.792 13.9746Z" fill="#6FE92F" />
            <path d="M148.896 55.9213L132.494 25.7289L50.8388 70.0866L67.2402 100.279L148.896 55.9213Z" fill="#6FE92F" />
            <path d="M6.54881 22.5701L3.01367 37.3615L43.017 46.9222L46.5521 32.1309L6.54881 22.5701Z" fill="#1D1D77" />
            <path d="M36.9574 16.5149L22.166 12.9798L12.6052 52.9831L27.3966 56.5182L36.9574 16.5149Z" fill="#1D1D77" />
          </svg>
        </div>

        <div className="my-auto w-100">
          <div className="text-center w-100 relative green-title leading-[60px] font-[sf]">
            <p>
              We acknowledge and support <br /> the integral role of step parents!
            </p>
          </div>

          <div className="d-flex flex-wrap justify-between pt-[100px] max-w-[950px] mx-auto">
            <div >
              <svg
                width="74"
                height="74"
                viewBox="0 0 90 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 9.5H72V45.5H81V7.25C81 3.59375 77.9062 0.5 74.25 0.5H15.75C11.9531 0.5 9 3.59375 9 7.25V45.5H18V9.5ZM87.75 50H2.25C0.984375 50 0 50.9844 0 52.25V54.5C0 59.4219 3.9375 63.5 9 63.5H81C85.9219 63.5 90 59.4219 90 54.5V52.25C90 51.125 88.875 50 87.75 50Z"
                  fill="#1D1D77"
                />
              </svg>
              <p className="font-[sf-semi] mt-3 text-[#030128] text-[30px] leading-[38px]">
                An all inclusive platform <br /> for co-parents and <br /> blended families that <br />
                takes away the need for <br /> outside communication
              </p>

            </div>
            <div >
              <svg
                width="74"
                height="74"
                viewBox="0 0 91 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M59.5 24.75C59.5 11.1094 46.2812 0 30.25 0C14.0781 0 1 11.1094 1 24.75C1 30.375 3.10938 35.4375 6.76562 39.6562C4.51562 44.2969 1.28125 47.6719 1.28125 47.8125C0.859375 48.0938 0.859375 48.5156 1 48.9375C1.14062 49.3594 1.5625 49.5 1.98438 49.5C7.46875 49.5 11.9688 47.9531 15.4844 46.125C19.8438 48.375 24.7656 49.5 30.25 49.5C46.2812 49.5 59.5 38.5312 59.5 24.75ZM85.2344 62.4375C88.75 58.2188 91 53.0156 91 47.25C91 33.6094 78.9062 22.5 64 22.5C63.8594 22.5 63.8594 22.6406 63.8594 22.6406C63.8594 23.3438 64 24.0469 64 24.75C64 38.6719 52.75 50.3438 37.7031 53.2969C40.6562 64.125 51.2031 72 64 72C68.6406 72 73.1406 70.875 76.9375 69.0469C80.4531 70.5938 84.8125 72 89.875 72C90.2969 72 90.7188 71.8594 90.8594 71.4375C91 71.0156 90.8594 70.5938 90.5781 70.3125C90.5781 70.1719 87.4844 66.9375 85.2344 62.4375Z"
                  fill="#1D1D77"
                />
              </svg>
              <p className="font-[sf-semi] mt-3 text-[#030128] text-[30px] leading-[38px]">
                Provides the ability to send <br /> standardised responses <br /> which
                encourages short, <br /> succinct and non-emotional <br /> communication
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="h-[20px] bg-[#fff]"></div>


      <div className="container relative h-[650px] overflow-hidden" id="howitworks">
        <div style={{ position: "absolute", top: "5%", right: "5%" }}>
          <svg width="163" height="127" viewBox="0 0 163 127" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M92.792 13.9746L62.5996 30.3761L106.957 112.031L137.15 95.63L92.792 13.9746Z" fill="#6FE92F" />
            <path d="M148.896 55.9213L132.494 25.7289L50.8388 70.0866L67.2402 100.279L148.896 55.9213Z" fill="#6FE92F" />
            <path d="M6.54881 22.5701L3.01367 37.3615L43.017 46.9222L46.5521 32.1309L6.54881 22.5701Z" fill="#1D1D77" />
            <path d="M36.9574 16.5149L22.166 12.9798L12.6052 52.9831L27.3966 56.5182L36.9574 16.5149Z" fill="#1D1D77" />
          </svg>
        </div>

        <div className="row justify-content-center">
          <div className="col-xs-12 px-[20vw] pb-[40px] pt-[70px]">
            <h1 className="text-center font-[sf] text-[48px] text-[#000000]">How it works?</h1>
          </div>
        </div>

        <div className="d-flex flex-wrap h-100 justify-between w-100">
          <div className="d-flex flex-column">
            <div className="text-center mb-[55px] mr-auto">

                <h2 className="text-[#1D1D1F] font-[sf] text-[32px]">Sign up to a free account</h2>
                <div className="d-flex">
                  <span className="text-[#1D1D1F]">Start using the app instantly. <span role="button" onClick={() => {
                   setShowSider({page: 'plan', state: true})
                  }} className="text-[#1D1D77]">Sign up now</span> </span>
                </div>
            </div>
              
            <div className=" mx-auto overflow-hidden">
              <img src="img/phoneaccount.svg" className="w-[321px]"/>
            </div>
          </div>

          <div className="bar-middle bg-[#fff] w-[20px]"></div>

          <div className="d-flex flex-column">
            <div className="mx-auto mb-[55px] text-center">
              <h2 className="text-[#1D1D1F] font-[sf] text-[32px]">Create journal entries</h2>
              <span className="text-[#1D1D1F]">Track and view journal entries in the platform</span>
            </div>

            <div className=" mx-auto overflow-hidden">
              <img src="img/phonejournal.svg" className="w-[321px]"/>
            </div>
          </div>
        </div>
      </div>


      <div className="h-[20px] bg-[#fff]"></div>


      <div className="relative container bg-[#FBFBFD] w-100 d-flex h-[790px]" id="plans">

        <div style={{ position: "absolute", top: "9%", right: -50 }}>
          <svg width="163" height="127" viewBox="0 0 163 127" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M92.792 13.9746L62.5996 30.3761L106.957 112.031L137.15 95.63L92.792 13.9746Z" fill="#6FE92F" />
            <path d="M148.896 55.9213L132.494 25.7289L50.8388 70.0866L67.2402 100.279L148.896 55.9213Z" fill="#6FE92F" />
            <path d="M6.54881 22.5701L3.01367 37.3615L43.017 46.9222L46.5521 32.1309L6.54881 22.5701Z" fill="#1D1D77" />
            <path d="M36.9574 16.5149L22.166 12.9798L12.6052 52.9831L27.3966 56.5182L36.9574 16.5149Z" fill="#1D1D77" />
          </svg>
        </div>


        <div className="my-auto">
          <div className="row justify-content-center">
            <div className="col-xs-12 pb-[100px]">
              <h1 className="text-center font-[sf] text-[48px] text-[#000000]">Select a plan to get started</h1>
            </div>
          </div>

          <div className="row">
          {!data ? <Skeleton /> :
           data?.data.map((res: any, key: number) => (
              <React.Fragment key={key}>
                <div className="col-xs-12 col-md-4 p-1">
                  <PlanCard id={0} price={(res.price === 0 ? 'Free' : res.price)} title={res.price === 0 ? '' : res.intervel} features={res?.features} handleClick={() => handleSelectPlan(res.id)} />
                </div>
              </React.Fragment>
          ))}
  
          </div>
        </div>
      </div>


      <div className="h-[20px] bg-[#fff]"></div>


      <div className="features h-[790px] d-flex w-100" id="features">

        <div className="container my-auto">
          <div className="row ">
            <div className="col-xs-12">
            <Swiper
              // slidesPerView={2}
              centeredSlides={true}
              spaceBetween={30}
              breakpoints={{
                // when window width is >= 640px
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide>            
                <div>
                    <div style={contentStyle}>
                      <img src="img/iPhone12_part.png" style={{ position: "relative", top: '50%' }}></img>
                      <img src="img/iPhone_12_Pro_Max.png"></img>
                      <div className="d-flex flex-column text-start my-[20vh] mr-[10vw]">
                        <Typography variant="h1">
                          Instant messaging
                        </Typography>
                        <Typography variant="h2">
                          Standardised responses and sending delays within the instant messaging component.
                        </Typography>
                      </div>

                    </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>            
                <div>
                    <div style={contentStyle}>
                      <img src="img/iPhone12_part.png" style={{ position: "relative", top: '50%' }}></img>
                      <img src="img/iPhone_12_Pro_Max.png"></img>
                      <div className="d-flex flex-column text-start my-[20vh] mr-[10vw]">
                        <Typography variant="h1">
                          Instant messaging
                        </Typography>
                        <Typography variant="h2">
                          Standardised responses and sending delays within the instant messaging component.
                        </Typography>
                      </div>

                    </div>
                  </div>
              </SwiperSlide>

              <SwiperSlide>            
                <div>
                    <div style={contentStyle}>
                      <img src="img/iPhone12_part.png" style={{ position: "relative", top: '50%' }}></img>
                      <img src="img/iPhone_12_Pro_Max.png"></img>
                      <div className="d-flex flex-column text-start my-[20vh] mr-[10vw]">
                        <Typography variant="h1">
                          Instant messaging
                        </Typography>
                        <Typography variant="h2">
                          Standardised responses and sending delays within the instant messaging component.
                        </Typography>
                      </div>

                    </div>
                  </div>
              </SwiperSlide>

              <div className="d-flex">
                <SwiperButtonPrev>   
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                  <path d="M25 50.75C38.8672 50.75 50 39.5195 50 25.75C50 11.8828 38.8672 0.749999 25 0.749998C11.2305 0.749997 2.98262e-06 11.8828 1.77031e-06 25.75C5.66541e-07 39.5195 11.2305 50.75 25 50.75ZM10.3516 23.5039L20.4102 13.4453C21.582 12.1758 23.6328 12.1758 24.8047 13.4453C26.0742 14.6172 26.0742 16.668 24.8047 17.8398L20.1172 22.625L37.5 22.625C39.2578 22.625 40.625 23.9922 40.625 25.75C40.625 27.4102 39.2578 28.875 37.5 28.875L20.1172 28.875L24.9023 33.6602C26.1719 34.832 26.1719 36.8828 24.9023 38.0547C23.7305 39.3242 21.6797 39.3242 20.5078 38.0547L10.4492 27.9961C9.57031 27.1172 9.375 26.1406 9.375 25.75C9.375 25.2617 9.57031 24.2852 10.3516 23.5039Z" fill="white"/>
                  </svg>
                </SwiperButtonPrev>
                <SwiperButtonNext>   
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                    <path d="M25 0.25C11.1328 0.25 0 11.4805 0 25.25C0 39.1172 11.1328 50.25 25 50.25C38.7695 50.25 50 39.1172 50 25.25C50 11.4805 38.7695 0.25 25 0.25ZM39.6484 27.4961L29.5898 37.5547C28.418 38.8242 26.3672 38.8242 25.1953 37.5547C23.9258 36.3828 23.9258 34.332 25.1953 33.1602L29.8828 28.375H12.5C10.7422 28.375 9.375 27.0078 9.375 25.25C9.375 23.5898 10.7422 22.125 12.5 22.125H29.8828L25.0977 17.3398C23.8281 16.168 23.8281 14.1172 25.0977 12.9453C26.2695 11.6758 28.3203 11.6758 29.4922 12.9453L39.5508 23.0039C40.4297 23.8828 40.625 24.8594 40.625 25.25C40.625 25.7383 40.4297 26.7148 39.6484 27.4961Z" fill="white"/>
                    </svg>
                </SwiperButtonNext>
              </div>
            </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[20px] bg-[#fff]"></div>


      <div className="container mb-[90px] bg-[#FBFBFD]" id="faqs">
        <div className="px-[100px]">
          
          <div className="pt-[90px] justify-content-center">
            <div className="col-xs-12 pb-[70px]">
              <h1 className="text-center font-[sf] text-[48px] text-[#000000]">FAQs</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <Accordion collapsed title={"Question"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
                <Accordion collapsed title={"Question"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
                <Accordion collapsed title={"Question"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[20px] bg-[#fff]"></div>


    </div>
      <Drawer
        placement={'left'}
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        key={'left'}
      >
     
      </Drawer>
    </>
  );
};

export default HomeScreen;
