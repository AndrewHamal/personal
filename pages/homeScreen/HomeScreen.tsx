
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
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { Hash } from "react-feather";

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
  const { query } = useRouter();
  const data: any[] = [
    {
      price: 'React Native',
      features: [
        {description: 'Exp. with MobX, Redux, SWR'},
        {description: 'Pixel Perfect Design Implementation'},
        {description: 'Exp. with Zoom SDK, websocket'},
        {description: 'Exp. with Apple Pay, google Pay'},
        {description: 'Exp. with tailwind CSS'},
        {description: 'Exp. with CLI and expo'},
      ]
    },
    {
      price: 'React.JS (Next.JS)',
      features: [
        {description: 'Exp. with SWR, Redux, MobX '},
        {description: 'Pixel Perfect Design Implementation'},
        {description: 'Exp. with Zoom SDK, websocket'},
        {description: 'Exp. with tailwind CSS, Ant.design, MUI'}
      ]
    },
    {
      price: 'PHP (Laravel | Wordpress)',
      features: [
        {description: 'Pixel Perfect Design Implementation on Blade'},
        {description: 'Exp. with Websocket/Broadcasting'},
        {description: 'Stripe, apple and google pay API'},
        {description: 'Exp. with tailwind CSS, Ant.design, MUI'},
        {description: 'RESTFUL API and API services'},
        {description: 'Exp. with Unit and feature Testing'},
      ]
    }
  ];

  const handleSelectPlan = (id: number) => {
    if (id) {
        setCookie('selected_plan', id);
        setShowSider({state:true, page: 'register'});
    }
  }
  useEffect(() => {
    AOS.init({
      delay: 7000,
      duration : 700
    });
    AOS.refresh();

    if(query?.screen === 'register'){
      toast("Please register with given email to accept invitation!");
      setShowSider({state:true, page: 'plan'});
    }

  }, [query]);

  return (
    <>
    <div className="pt-[76px]">
      <div className="relative container" id="firstScreen">
        <div data-aos="zoom-in" style={{ position: "absolute", top: "10%", right: '-100px' }}>
          <svg width="163" height="127" viewBox="0 0 163 127" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M92.792 13.9746L62.5996 30.3761L106.957 112.031L137.15 95.63L92.792 13.9746Z" fill="#6FE92F" />
            <path d="M148.896 55.9213L132.494 25.7289L50.8388 70.0866L67.2402 100.279L148.896 55.9213Z" fill="#6FE92F" />
            <path d="M6.54881 22.5701L3.01367 37.3615L43.017 46.9222L46.5521 32.1309L6.54881 22.5701Z" fill="#1D1D77" />
            <path d="M36.9574 16.5149L22.166 12.9798L12.6052 52.9831L27.3966 56.5182L36.9574 16.5149Z" fill="#1D1D77" />
          </svg>
        </div>

        <div className="d-flex h-[730px] w-100">
          <div className="d-flex my-auto flex-column" data-aos="fade-right">
            <Typography className="my-3" variant="h1">Hi, I'm Anis!</Typography>
            <Typography className="my-3" variant="h2">
              I’m a web 🚀 and mobile app developer 🧱 <br /><br />

              I am a technological visionary based in nepal. <br />
              I am a full-stack engineer who is proficient in industry   leading  technology  <br /> like React(Next JS), React Native, PHP(Laravel), and HTML/CSS
            </Typography>

            <button
              className="px-[35px] py-[13px] self-start font-[500] mt-5 text-white bg-[#030128]"
              onClick={() => setShowSider({page: 'plan', state: true})}
            >
              HIRE NOW
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
                    <source src="/videos/ne.mp4" type="video/mp4" />
                </video>
            </MobileSvg>
          </div>
        </div>
      </div>

      <div className="h-[20px] bg-[#fff]"></div>

      <div className="container d-flex relative h-[790px] bg-[#FBFBFD]" id="about-me">
        <div  data-aos="zoom-in" style={{ position: "absolute", top: "7%", left: 0 }}>
          <svg width="163" height="127" viewBox="0 0 163 127" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M92.792 13.9746L62.5996 30.3761L106.957 112.031L137.15 95.63L92.792 13.9746Z" fill="#6FE92F" />
            <path d="M148.896 55.9213L132.494 25.7289L50.8388 70.0866L67.2402 100.279L148.896 55.9213Z" fill="#6FE92F" />
            <path d="M6.54881 22.5701L3.01367 37.3615L43.017 46.9222L46.5521 32.1309L6.54881 22.5701Z" fill="#1D1D77" />
            <path d="M36.9574 16.5149L22.166 12.9798L12.6052 52.9831L27.3966 56.5182L36.9574 16.5149Z" fill="#1D1D77" />
          </svg>
        </div>

        <div className="my-auto w-100">
          <div className="text-center w-100 relative green-title leading-[60px]">
            <p>
              I acknowledge and support <br /> all projects and businesses with my magic!
            </p>
          </div>

          <div className="d-flex flex-wrap justify-between pt-[60px] max-w-[950px] mx-auto">
            <div data-aos="fade-right d-flex">
              <div className="relative">
                <div className="absolute opacity-[0.04] top-[10px]">
                  <Hash size={300}/> 
                </div>
                <p className="relative z-[9] mt-3 font-[400] text-[#030128] text-[20px] leading-[38px]">
                  Anis Hamal is a technological visionary. He is a full-stack engineer
                  who is proficient in industry leading technology like React(Next JS), React Native, PHP(Laravel), and HTML/CSS (Bootstrap and tailwind CSS). He has brought various products from ideation to conception including PR management, job
                  marketplace, Co parenting Application, Dating course application, Travel and tour solution, HR management, inventory management software and many AI modules including sentiment analyses to web scraping for real-life usage. Operating from a strong set of core principals, Anis utilizes agile development to lead and manage engineers through the software development life cycle. Anis maintains a rigorous dedication to maintaining an organized infrastructure that allows for scalability and rapid growth.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="h-[20px] bg-[#fff]"></div>


      <section className="container relative pb-9 overflow-hidden" id="portfolio-1">
        <div data-aos="zoom-in"  style={{ position: "absolute", top: "5%", right: "5%" }}>
          <svg width="163" height="127" viewBox="0 0 163 127" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M92.792 13.9746L62.5996 30.3761L106.957 112.031L137.15 95.63L92.792 13.9746Z" fill="#6FE92F" />
            <path d="M148.896 55.9213L132.494 25.7289L50.8388 70.0866L67.2402 100.279L148.896 55.9213Z" fill="#6FE92F" />
            <path d="M6.54881 22.5701L3.01367 37.3615L43.017 46.9222L46.5521 32.1309L6.54881 22.5701Z" fill="#1D1D77" />
            <path d="M36.9574 16.5149L22.166 12.9798L12.6052 52.9831L27.3966 56.5182L36.9574 16.5149Z" fill="#1D1D77" />
          </svg>
        </div>

        <div className="row justify-content-center">
          <div className="col-xs-12 px-[20vw] pb-[40px] pt-[70px]">
            <h1 className="text-center font-[700] text-[44px] text-[#000000]">Portfolio (Mobile APP)</h1>
          </div>
        </div>

        <div className="d-flex flex-wrap h-100 justify-between w-100">
          <div className="d-flex flex-column" data-aos="fade-right">
            <div className="text-center mb-[35px] text-center">
              <h2 className="text-[#1D1D1F] font-[500] text-[22px]">*Quip TGSM</h2>
            </div>
              
            <div className="rounded-[30px] mx-auto overflow-hidden">
              <video 
                  style={{
                    objectFit: 'cover',
                    height: '690px',
                    width: '320px'
                  }}
                controls={false} autoPlay muted loop={true}>
                    <source src="/videos/quip tgsm.mp4" type="video/mp4" />
                </video>
            </div>
          </div>

          <div className="bar-middle bg-[#fff] w-[20px]"></div>

          <div className="d-flex flex-column" data-aos="fade-left">
            <div className="mx-auto mb-[35px] text-center">
              <h2 className="text-[#1D1D1F] font-[500] text-[22px]">*CoParenting Plus</h2>
            </div>

            <div className="rounded-[30px]  mx-auto overflow-hidden">
              <video 
                  style={{
                    objectFit: 'cover',
                    height: '690px',
                    width: '320px'
                  }}
                controls={false} autoPlay muted loop={true}>
                    <source src="/videos/coparentingplus.mp4" type="video/mp4" />
                </video>
            </div>
          </div>

          <div className="bar-middle bg-[#fff] w-[20px]"></div>

          <div className="d-flex flex-column" data-aos="fade-left">
            <div className="mx-auto mb-[35px] text-center">
              <h2 className="text-[#1D1D1F] font-[500] text-[22px]">*Coveredpress</h2>
            </div>

            <div className="rounded-[30px]  mx-auto overflow-hidden">
              <video 
                  style={{
                    objectFit: 'cover',
                    height: '690px',
                    width: '320px'
                  }}
                controls={false} autoPlay muted loop={true}>
                    <source src="/videos/coveredpress.mp4" type="video/mp4" />
                </video>
            </div>
          </div>
        </div>
      </section>


      <div className="h-[20px] bg-[#fff]"></div>


      <section className="relative container w-100 d-flex h-[790px]" id="proficiency">

        <div data-aos="zoom-in"  style={{ position: "absolute", top: "9%", right: -50 }}>
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
              <h1 className="text-center font-[700] text-[44px] text-[#000000]">Proficent In</h1>
            </div>
          </div>

          <div className="row">
          {!data ? <Skeleton /> :
            data.map((res: any, key: number) => (
              <React.Fragment key={key}>
                <div className="col-xs-12 col-md-4 p-1" data-aos="zoom-in">
                  <PlanCard id={0} price={(res.price === 0 ? 'Free' : res.price)} title={res.price === 0 ? '' : res.intervel} features={res?.features} handleClick={() => handleSelectPlan(res.id)} />
                </div>
              </React.Fragment>
          ))}
  
          </div>
        </div>
      </section>


      <div className="h-[20px] bg-[#fff]"></div>


      <div className="features h-[790px] d-flex w-100" id="previews">

        <div className="container my-auto">
          <div className="row ">
            <div className="col-xs-12" data-aos="fade-in">
            <Swiper
              centeredSlides={true}
              spaceBetween={30}
              breakpoints={{
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
              }}
            >

              <SwiperSlide>            
                <div>
                    <div style={contentStyle}>
                      <img src="img/9.png"></img>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>            
                <div>
                    <div style={contentStyle}>
                      <img src="img/8.png"></img>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>            
                <div>
                    <div style={contentStyle}>
                      <img src="img/6.png"></img>
                    </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>            
                <div>
                    <div style={contentStyle}>
                      <img src="img/5.png"></img>
                    </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>            
                <div>
                    <div style={contentStyle}>
                      <img src="img/4.png"></img>
                    </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>            
                <div>
                    <div style={contentStyle}>
                      <img src="img/1.png"></img>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>            
                <div>
                    <div style={contentStyle}>
                      <img src="img/2.png"></img>
                    </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>            
                <div>
                    <div style={contentStyle}>
                      <img src="img/3.png"></img>
                    </div>
                </div>
              </SwiperSlide>


              <SwiperSlide>            
                <div>
                    <div style={contentStyle}>
                      <img src="img/.png"></img>
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


      <div className="container mb-[90px] bg-[#FBFBFD]" id="portfolio-2">
        <div className="px-[100px]">
          
          <div className="pt-[90px] justify-content-center">
            <div className="col-xs-12 pb-[70px]">
              <h1 className="text-center font-[700] text-[44px] text-[#000000]">Portfolio (Web APP)</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <Accordion collapsed={false} title={"Coveredpress"} link="https://coveredpress.com" text={"The Most Effective Way To Connect Journalists And Publicists. We can preview all feature on Screenshare 😊"} />
                <Accordion collapsed={true} title={"God of trek"} link="https://godoftrek.com/" text={"Travel and tourish plan Booking web application. We can preview Admin CMS on Screenshare 😊"} />
                <Accordion collapsed={true} title={"Admin Coparentingplus"} link="https://admin.coparentingplus.com/admin/login" text={"An all inclusive co-parenting platform aiming to help you safeguard your families future. We can preview all feature on Screenshare 😊"} />
                <Accordion collapsed={true} title={"Admin Quip TGSM"} link="https://admin.quiptgsm.com/" text={"Live chat with Coach Kyle or his team, and learn how to create engaging and meaningful conversation with woman on dating apps, or over text. We can preview all feature on Screenshare 😊"} />
                <Accordion collapsed={true} title={"Fabtex"} link="http://fabtex.com/" text={"Fabric Booking Custom wordpress website theme with image hotspot, fabric seach by color or image feature"} />
                <Accordion collapsed={true} title={"Saastock"} link="http://saastock.com/" text={"Saastock is a Custom wordpress website theme."} />
                <Accordion collapsed={true} title={"Revealize"} link="https://revealize.com/" text={"Revealize is a Custom wordpress website theme."} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[20px] bg-[#fff]"></div>
    </div>
    </>
  );
};

export default HomeScreen;
