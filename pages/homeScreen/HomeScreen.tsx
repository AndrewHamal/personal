
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
        { description: 'Exp. with MobX, Redux, SWR' },
        { description: 'Pixel Perfect Design Implementation' },
        { description: 'Exp. with Zoom SDK, websocket' },
        { description: 'Exp. with Apple Pay, google Pay, stripe, stripe connect, revenue cat' },
        { description: 'Exp. with tailwind CSS' },
        { description: 'Exp. with CLI and expo' },
      ]
    },
    {
      price: 'React.JS & Next.JS',
      features: [
        { description: 'Exp. with SWR, Redux, MobX ' },
        { description: 'Pixel Perfect Design Implementation' },
        { description: 'Exp. with Zoom SDK, websocket' },
        { description: 'Exp. with Apple Pay, google Pay, stripe, stripe connect, revenue cat' },
        { description: 'Exp. with tailwind CSS, Ant.design, MUI, Chakra UI' }
      ]
    },
    {
      price: 'PHP (Laravel | Wordpress)',
      features: [
        { description: 'Pixel Perfect Design Implementation on Blade' },
        { description: 'Exp. with Websocket/Broadcasting' },
        { description: 'Stripe, stripe connect, apple and google pay API' },
        { description: 'Exp. with tailwind CSS, Ant.design, MUI' },
        { description: 'RESTFUL API and API services' },
        { description: 'Exp. with Unit and feature Testing' },
      ]
    }
  ];

  const handleSelectPlan = (id: number) => {
    if (id) {
      setCookie('selected_plan', id);
      setShowSider({ state: true, page: 'register' });
    }
  }
  useEffect(() => {
    AOS.init({
      delay: 7000,
      duration: 700
    });
    AOS.refresh();

    if (query?.screen === 'register') {
      toast("Please register with given email to accept invitation!");
      setShowSider({ state: true, page: 'plan' });
    }

  }, [query]);

  return (
    <>
      <div className="pt-[76px]">
        <div className="container relative" id="firstScreen">

          <div className="flex justify-center w-[100%]">
            <div className="w-[100%]" data-aos="fade-right">
              <h1 className="mt-20 text-center text-8xl">Revealing My Potential<span className="text-[#e4222b] text-[80px] font-[bentago-thin]">.</span></h1>

              <div className="mt-8">
                <div className="relative flex">
                  <div className="absolute relative left-[50%] top-[45px] translate-x-[-50%]">
                    <img src="/img/home.svg" alt="" className="w-[90px]" />
                    <img src="/img/arr.svg" alt="" className="absolute w-[10px] z-[99] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
                  </div>
                </div>
                <img src="/img/working.jpg" className="h-[600px] w-[100%] object-cover" alt="" />
              </div>


              {/* <div className="text-center">
                <button
                  className="px-[35px] mx-auto py-[13px] self-start font-[500] mt-5 text-white bg-[#030128]"
                  onClick={() => setShowSider({ page: 'plan', state: true })}
                >
                  HIRE NOW
                </button>
              </div> */}
            </div>

            {/* <div className="ml-auto my-auto pr-[55px] first-img"> */}
            {/* <MobileSvg> */}
            {/* <video
                  style={{
                    objectFit: 'cover',
                    height: '690px',
                    width: '320px'
                  }}
                  controls={false} autoPlay muted loop={true}>
                  <source src="/videos/ne.mp4" type="video/mp4" />
                </video> */}
            {/* </MobileSvg> */}
            {/* </div> */}
          </div>
        </div>

        <div className="bg-[#e3222b]">
          <div className="container d-flex relative h-[650px]" id="about-me">
            <div className="my-auto w-100">
              <div className="text-center w-100 relative leading-[60px]">
                <h1 className="text-white text-7xl">
                  What Fules Me
                </h1>
              </div>

              <div className="d-flex flex-wrap justify-between pt-4 max-w-[900px] mx-auto">
                <div data-aos="fade-right d-flex">
                  <div className="relative">
                    <div className="absolute opacity-[0.04] top-[10px]">
                      <Hash size={300} />
                    </div>
                    <p className="relative text-white z-[9] mt-3 font-[400] text-center text-[#030128] text-[20px] leading-[38px]">
                      Sometimes when I'm coding, I get totally lost in it, like I'm diving into this fascinating world where every line of code feels like a little adventure. It's like being a detective in a mystery novel, piecing together clues and solving puzzles. And in those moments, I just love getting lost in the beauty of it all.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-[100%] pt-3">
                <div className="relative flex white w-[100%]">
                  <div className="absolute relative left-[50%] top-[45px] translate-x-[-50%]">
                    <div className="absolute w-[10px] z-[99] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                      <svg className="scroll-arrow" x="0px" y="0px" viewBox="0 0 14 31.3">
                        <g id="Icon_feather-arrow-down" transform="translate(743 13372.368) rotate(180)">
                          <path id="Path_14" className="st0" d="M736,13371.4v-29.3"></path>
                          <path id="Path_15" className="st0" d="M730,13348.1l6-6l6,6"></path>
                        </g>
                      </svg>
                    </div>
                    <svg width="105.565" height="105.544" viewBox="0 0 105.565 105.544" className="scroll-icon-text">
                      <defs>
                        <clipPath id="clip-path">
                          <rect id="Rectangle_6" data-name="Rectangle 6" width="105.565" height="105.544" fill="none"></rect>
                        </clipPath>
                      </defs>
                      <g id="Group_40" data-name="Group 40" transform="translate(782.283 13420.272) rotate(180)">
                        <circle id="Ellipse_2" data-name="Ellipse 2" cx="34.5" cy="34.5" r="34.5" transform="translate(764 13402.001) rotate(180)" fill="#fff"></circle>
                        <g id="text-circle" className="text-circle" data-name="text-circle" transform="translate(782.283 13420.272) rotate(180)">
                          <g id="Group_32" data-name="Group 32" transform="translate(0 0)">
                            <g id="Group_31" data-name="Group 31" clip-path="url(#clip-path)">
                              <text id="S" transform="matrix(0.947, -0.32, 0.32, 0.947, 35.048, 13.927)" font-size="12" font-weight="200">
                                <tspan x="0" y="0">S</tspan>
                              </text>
                              <text id="c" transform="matrix(0.99, -0.141, 0.141, 0.99, 43.039, 11.264)" font-size="12" font-weight="200">
                                <tspan x="0" y="0">c</tspan>
                              </text>
                              <text id="r" transform="translate(50.185 10.353) rotate(-0.93)" font-size="12" font-weight="200">
                                <tspan x="0" y="0">r</tspan>
                              </text>
                              <text id="o" transform="matrix(0.99, 0.142, -0.142, 0.99, 54.947, 9.173)" font-size="11" font-weight="200">
                                <tspan x="0" y="0">o</tspan>
                              </text>
                              <text id="l" transform="translate(62.674 11.442) rotate(15.633)" font-size="12" font-weight="200">
                                <tspan x="0" y="0">l</tspan>
                              </text>
                              <text id="l-2" data-name="l" transform="translate(65.662 12.272) rotate(19.845)" font-size="12" font-weight="200">
                                <tspan x="0" y="0">l</tspan>
                              </text>
                            </g>
                          </g>
                          <text id="_" data-name=" " transform="translate(69.409 11.503) rotate(23.89)" font-size="10" font-weight="200">
                            <tspan x="0" y="0"> </tspan>
                          </text>
                          <text id="t" transform="translate(71.194 14.418) rotate(29.183)" font-size="12" font-weight="200">
                            <tspan x="0" y="0">t</tspan>
                          </text>
                          <text id="o-2" data-name="o" transform="matrix(0.791, 0.612, -0.612, 0.791, 76.113, 15.878)" font-size="11" font-weight="200">
                            <tspan x="0" y="0">o</tspan>
                          </text>
                          <text id="_2" data-name=" " transform="matrix(0.708, 0.706, -0.706, 0.708, 83.131, 20.257)" font-size="10" font-weight="200">
                            <tspan x="0" y="0"> </tspan>
                          </text>
                          <text id="E" transform="translate(83.777 23.522) rotate(51.667)" font-size="12" font-weight="200">
                            <tspan x="0" y="0">E</tspan>
                          </text>
                          <text id="x" transform="matrix(0.488, 0.873, -0.873, 0.488, 88.248, 29.196)" font-size="12" font-weight="200">
                            <tspan x="0" y="0">x</tspan>
                          </text>
                          <g id="Group_34" data-name="Group 34" transform="translate(0 0)">
                            <g id="Group_33" data-name="Group 33" clip-path="url(#clip-path)">
                              <text id="p" transform="translate(91.442 34.702) rotate(70.596)" font-size="12" font-weight="200">
                                <tspan x="0" y="0">p</tspan>
                              </text>
                              <text id="l-3" data-name="l" transform="translate(94.011 42.473) rotate(78.211)" font-size="12" font-weight="200">
                                <tspan x="0" y="0">l</tspan>
                              </text>
                              <text id="o-3" data-name="o" transform="translate(95.8 45.34) rotate(85.626)" font-size="11" font-weight="200">
                                <tspan x="0" y="0">o</tspan>
                              </text>
                              <text id="r-2" data-name="r" transform="translate(95.307 53.327) rotate(93.989)" font-size="12" font-weight="200">
                                <tspan x="0" y="0">r</tspan>
                              </text>
                              <text id="e-2" data-name="e" transform="translate(95.097 57.933) rotate(101.924)" font-size="12" font-weight="200">
                                <tspan x="0" y="0">e</tspan>
                              </text>
                              <text id="_3" data-name=" " transform="translate(95.367 65.675) rotate(108.741)" font-size="10" font-weight="200">
                                <tspan x="0" y="0"> </tspan>
                              </text>
                              <text id="_4" data-name=" " transform="translate(94.405 68.507) rotate(112.618)" font-size="10" font-weight="200">
                                <tspan x="0" y="0"> </tspan>
                              </text>
                            </g>
                          </g>
                          <text id="S-2" data-name="S" transform="translate(91.693 70.349) rotate(120.203)" font-size="12" font-weight="200">
                            <tspan x="0" y="0">S</tspan>
                          </text>
                          <text id="c-2" data-name="c" transform="matrix(-0.652, 0.758, -0.758, -0.652, 87.416, 77.628)" font-size="12" font-weight="200">
                            <tspan x="0" y="0">c</tspan>
                          </text>
                          <text id="r-3" data-name="r" transform="matrix(-0.751, 0.661, -0.661, -0.751, 82.661, 83.051)" font-size="12" font-weight="200">
                            <tspan x="0" y="0">r</tspan>
                          </text>
                          <text id="o-4" data-name="o" transform="matrix(-0.839, 0.545, -0.545, -0.839, 79.853, 87.03)" font-size="11" font-weight="200">
                            <tspan x="0" y="0">o</tspan>
                          </text>
                          <text id="l-4" data-name="l" transform="translate(72.544 90.411) rotate(154.426)" font-size="12" font-weight="200">
                            <tspan x="0" y="0">l</tspan>
                          </text>
                          <g id="Group_36" data-name="Group 36" transform="translate(0 0)">
                            <g id="Group_35" data-name="Group 35" clip-path="url(#clip-path)">
                              <text id="l-5" data-name="l" transform="translate(69.733 91.763) rotate(158.656)" font-size="12" font-weight="200">
                                <tspan x="0" y="0">l</tspan>
                              </text>
                              <text id="_5" data-name=" " transform="translate(67.406 94.813) rotate(162.723)" font-size="10" font-weight="200">
                                <tspan x="0" y="0"> </tspan>
                              </text>
                              <text id="t-2" data-name="t" transform="matrix(-0.978, 0.208, -0.208, -0.978, 64.162, 93.788)" font-size="12" font-weight="200">
                                <tspan x="0" y="0">t</tspan>
                              </text>
                              <text id="o-5" data-name="o" transform="translate(59.49 95.93) rotate(176.577)" font-size="11" font-weight="200">
                                <tspan x="0" y="0">o</tspan>
                              </text>
                              <text id="_6" data-name=" " transform="translate(51.322 97.253) rotate(-176.283)" font-size="10" font-weight="200">
                                <tspan x="0" y="0"> </tspan>
                              </text>
                              <text id="E-3" data-name="E" transform="matrix(-0.983, -0.182, 0.182, -0.983, 48.692, 95.225)" font-size="12" font-weight="200">
                                <tspan x="0" y="0">E</tspan>
                              </text>
                              <text id="x-2" data-name="x" transform="translate(41.593 93.9) rotate(-160.331)" font-size="12" font-weight="200">
                                <tspan x="0" y="0">x</tspan>
                              </text>
                            </g>
                          </g>
                          <text id="p-2" data-name="p" transform="translate(35.57 91.852) rotate(-150.533)" font-size="12" font-weight="200">
                            <tspan x="0" y="0">p</tspan>
                          </text>
                          <text id="l-6" data-name="l" transform="translate(28.527 87.695) rotate(-142.995)" font-size="12" font-weight="200">
                            <tspan x="0" y="0">l</tspan>
                          </text>
                          <text id="o-6" data-name="o" transform="matrix(-0.714, -0.7, 0.7, -0.714, 25.281, 86.705)" font-size="11" font-weight="200">
                            <tspan x="0" y="0">o</tspan>
                          </text>
                          <text id="r-4" data-name="r" transform="translate(20.396 80.381) rotate(-127.177)" font-size="12" font-weight="200">
                            <tspan x="0" y="0">r</tspan>
                          </text>
                          <text id="e-4" data-name="e" transform="translate(17.52 76.773) rotate(-119.25)" font-size="12" font-weight="200">
                            <tspan x="0" y="0">e</tspan>
                          </text>
                          <g id="Group_38" data-name="Group 38" transform="translate(0 0)">
                            <g id="Group_37" data-name="Group 37" clip-path="url(#clip-path)">
                              <text id="_7" data-name=" " transform="translate(12.217 71.118) rotate(-112.444)" font-size="10" font-weight="200">
                                <tspan x="0" y="0"> </tspan>
                              </text>
                              <text id="_8" data-name=" " transform="matrix(-0.318, -0.948, 0.948, -0.318, 11.076, 68.35)" font-size="10" font-weight="200">
                                <tspan x="0" y="0"> </tspan>
                              </text>
                              <text id="S-3" data-name="S" transform="matrix(-0.19, -0.982, 0.982, -0.19, 11.899, 65.166)" font-size="12" font-weight="200">
                                <tspan x="0" y="0">S</tspan>
                              </text>
                              <text id="c-3" data-name="c" transform="translate(10.363 56.89) rotate(-90.93)" font-size="12" font-weight="200">
                                <tspan x="0" y="0">c</tspan>
                              </text>
                              <text id="r-5" data-name="r" transform="matrix(0.129, -0.992, 0.992, 0.129, 10.34, 49.679)" font-size="12" font-weight="200">
                                <tspan x="0" y="0">r</tspan>
                              </text>
                              <text id="o-7" data-name="o" transform="translate(9.83 44.821) rotate(-74.144)" font-size="11" font-weight="200">
                                <tspan x="0" y="0">o</tspan>
                              </text>
                              <text id="l-7" data-name="l" transform="translate(13.104 37.489) rotate(-66.699)" font-size="12" font-weight="200">
                                <tspan x="0" y="0">l</tspan>
                              </text>
                            </g>
                          </g>
                          <text id="l-8" data-name="l" transform="translate(14.328 34.63) rotate(-62.488)" font-size="12" font-weight="200">
                            <tspan x="0" y="0">l</tspan>
                          </text>
                          <text id="_9" data-name=" " transform="translate(14.07 30.811) rotate(-58.458)" font-size="10" font-weight="200">
                            <tspan x="0" y="0"> </tspan>
                          </text>
                          <text id="t-3" data-name="t" transform="translate(17.191 29.441) rotate(-53.208)" font-size="12" font-weight="200">
                            <tspan x="0" y="0">t</tspan>
                          </text>
                          <text id="o-8" data-name="o" transform="translate(19.305 24.739) rotate(-44.659)" font-size="11" font-weight="200">
                            <tspan x="0" y="0">o</tspan>
                          </text>
                          <text id="_10" data-name=" " transform="translate(24.56 18.37) rotate(-37.477)" font-size="10" font-weight="200">
                            <tspan x="0" y="0"> </tspan>
                          </text>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <section className="container relative pt-[130px] overflow-hidden" id="portfolio-1">
          <div className="row justify-content-center">
            <div className="col-xs-12 px-[20vw] pb-[40px]">
              <h1 className="text-center font-[700] text-6xl text-[#000000]">My Work Speaks For Itself.</h1>
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-4 mt-8 h-100">
            <div className="d-flex flex-column" data-aos="fade-right">
              <div className="rounded-[30px] mx-auto overflow-hidden">
                <video
                  style={{
                    objectFit: 'cover',
                    height: '690px',
                    width: '330px'
                  }}
                  muted loop={true}>
                  <source src="/videos/quip tgsm.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="d-flex flex-column" data-aos="fade-left">
              <div className="rounded-[30px]  mx-auto overflow-hidden">
                <video
                  style={{
                    objectFit: 'cover',
                    height: '690px',
                    width: '330px'
                  }}
                  muted loop={true}>
                  <source src="/videos/coparentingplus.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="d-flex flex-column" data-aos="fade-left">
              <div className="rounded-[30px]  mx-auto overflow-hidden">
                <video
                  style={{
                    objectFit: 'cover',
                    height: '690px',
                    width: '330px'
                  }}
                  muted loop={true}>
                  <source src="/videos/coveredpress.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="d-flex flex-column" data-aos="fade-left">
              <div className="rounded-[30px] mx-auto overflow-hidden">
                <video
                  style={{
                    objectFit: 'cover',
                    height: '690px',
                    width: '330px'
                  }}
                   muted loop={true}>
                  <source src="/videos/quip-v2.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="d-flex flex-column" data-aos="fade-left">
              <div className="rounded-[30px] mx-auto overflow-hidden">
                <video
                  style={{
                    objectFit: 'cover',
                    height: '690px',
                    width: '330px'
                  }}
                   muted loop={true}>
                  <source src="/videos/emmaus.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="d-flex flex-column" data-aos="fade-left">
              <div className="rounded-[30px] mx-auto overflow-hidden">
                <video
                  style={{
                    objectFit: 'cover',
                    height: '690px',
                    width: '330px'
                  }}
                   muted loop={true}>
                  <source src="/videos/sales.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-4 mt-20 h-100">
            <div className="w-[100%] " data-aos="fade-right">
              <h3 className="mb-3 text-blue-500">Grihabhumi</h3>
              <div className="mx-auto overflow-hidden">
                <video
                  style={{
                    objectFit: 'contain',
                    width: '100%'
                  }} controls={true} muted>
                  <source src="/videos/grihabhumi.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="mt-4 w-[100%] flex-column" data-aos="fade-right">
              <h3 className="mb-3 text-blue-500">GodawariMart</h3>
              <div className="w-[100%] overflow-hidden">
                <video
                  style={{
                    objectFit: 'contain',
                    width: '100%'
                  }} controls={true} muted>
                  <source src="/videos/godawari.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="mt-4 w-[100%]  flex-column" data-aos="fade-right">
              <h3 className="mb-3 text-blue-500">Brighter Future</h3>
              <div className="">
                <video
                  style={{
                    objectFit: 'contain',
                    width: '100%'
                  }} controls={true} muted>
                  <source src="/videos/brighter.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="mt-4 w-[100%]  flex-column" data-aos="fade-right">
              <h3 className="mb-3 text-blue-500">Sales Force Automation (SFA)</h3>
              <div className="">
                <video
                  style={{
                    objectFit: 'contain',
                    width: '100%'
                  }} controls={true} muted>
                  <source src="/videos/sfa.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="mt-4 w-[100%]  flex-column" data-aos="fade-right">
              <h3 className="mb-3 text-blue-500">Nyboss-Job Portal</h3>
              <div className="">
                <video
                  style={{
                    objectFit: 'contain',
                    width: '100%'
                  }} controls={true} muted>
                  <source src="/videos/nyboss.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>

        <div className="relative bg-[#edf0f4] mt-20 overflow-hidden">
          <div className="absolute z-[0] top-0 bottom-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="809" viewBox="0 0 1440 809" fill="none">
              <circle cx="720" cy="514" r="1002.5" stroke="#D0D0D0" />
              <circle cx="720" cy="514" r="817.5" stroke="#D0D0D0" />
              <circle cx="720" cy="514" r="655.5" stroke="#D0D0D0" />
              <circle cx="720" cy="514" r="489.5" stroke="#D0D0D0" />
              <circle cx="720" cy="514" r="337.5" stroke="#D0D0D0" />
            </svg>
          </div>

          <section className="relative container w-100 d-flex h-[790px] pb-11" id="proficiency">
            <div className="my-auto">
              <div className="row justify-content-center">
                <div className="col-xs-12 pb-11">
                  <h1 className="text-center font-[700] text-6xl text-[#000000]">My Expertise</h1>
                </div>
              </div>

              <div className="flex flex-wrap">
                {!data ? <Skeleton /> :
                  data.map((res: any, key: number) => (
                    <React.Fragment key={key}>
                      <div className="p-1 col-xs-12 col-md-4" data-aos="zoom-in">
                        <PlanCard id={0} price={(res.price === 0 ? 'Free' : res.price)} title={res.price === 0 ? '' : res.intervel} features={res?.features} handleClick={() => handleSelectPlan(res.id)} />
                      </div>
                    </React.Fragment>
                  ))}

              </div>
            </div>
          </section>
        </div>

        <div className="bg-[#e3222b] h-[790px] d-flex w-100 relative" id="project-images">

          <div className="container my-auto pt-11">
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
                        <img src="img/co.png"></img>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div>
                      <div style={contentStyle}>
                        <img src="img/co1.png"></img>
                      </div>
                    </div>
                  </SwiperSlide>

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

                  <div className="d-flex">
                    <SwiperButtonPrev>
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                        <path d="M25 50.75C38.8672 50.75 50 39.5195 50 25.75C50 11.8828 38.8672 0.749999 25 0.749998C11.2305 0.749997 2.98262e-06 11.8828 1.77031e-06 25.75C5.66541e-07 39.5195 11.2305 50.75 25 50.75ZM10.3516 23.5039L20.4102 13.4453C21.582 12.1758 23.6328 12.1758 24.8047 13.4453C26.0742 14.6172 26.0742 16.668 24.8047 17.8398L20.1172 22.625L37.5 22.625C39.2578 22.625 40.625 23.9922 40.625 25.75C40.625 27.4102 39.2578 28.875 37.5 28.875L20.1172 28.875L24.9023 33.6602C26.1719 34.832 26.1719 36.8828 24.9023 38.0547C23.7305 39.3242 21.6797 39.3242 20.5078 38.0547L10.4492 27.9961C9.57031 27.1172 9.375 26.1406 9.375 25.75C9.375 25.2617 9.57031 24.2852 10.3516 23.5039Z" fill="white" />
                      </svg>
                    </SwiperButtonPrev>
                    <SwiperButtonNext>
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                        <path d="M25 0.25C11.1328 0.25 0 11.4805 0 25.25C0 39.1172 11.1328 50.25 25 50.25C38.7695 50.25 50 39.1172 50 25.25C50 11.4805 38.7695 0.25 25 0.25ZM39.6484 27.4961L29.5898 37.5547C28.418 38.8242 26.3672 38.8242 25.1953 37.5547C23.9258 36.3828 23.9258 34.332 25.1953 33.1602L29.8828 28.375H12.5C10.7422 28.375 9.375 27.0078 9.375 25.25C9.375 23.5898 10.7422 22.125 12.5 22.125H29.8828L25.0977 17.3398C23.8281 16.168 23.8281 14.1172 25.0977 12.9453C26.2695 11.6758 28.3203 11.6758 29.4922 12.9453L39.5508 23.0039C40.4297 23.8828 40.625 24.8594 40.625 25.25C40.625 25.7383 40.4297 26.7148 39.6484 27.4961Z" fill="white" />
                      </svg>
                    </SwiperButtonNext>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-[90px]" id="portfolio-2">
          <div className="px-[100px] py-11">

            <div className="pt-[90px] justify-content-center">
              <div className="col-xs-12 pb-[70px]">
                <h1 className="text-center font-[700] text-6xl text-[#000000]">More Web app/Websites</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12">
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <Accordion collapsed={false} title={"Co-parenting Plus"} link="https://coparentingplus.com" text={"The Most Effective Way To Connect Journalists And Publicists. We can preview all feature on Screenshare 😊"} />
                  <Accordion collapsed={false} title={"Grihabhumi"} link="https://grihabhumi.com" text={"The Most Effective Way To Connect Journalists And Publicists. We can preview all feature on Screenshare 😊"} />
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

        <div className="bg-[#e3222b]">
          <div className="container flex relative h-[650px]" id="about-me">
            <div className="my-auto w-100">
              <div className="text-center w-100 relative leading-[60px]">
                <h1 className="text-white text-7xl">
                  About Me
                </h1>
              </div>

              <div className="flex-wrap justify-between px-6 pt-4 mx-auto d-flex">
                <div data-aos="fade-right d-flex">
                  <div className="relative">
                    <div className="absolute opacity-[0.04] top-[10px]">
                      <Hash size={300} />
                    </div>
                    <p className="relative text-white z-[9] mt-3 font-[400] text-center text-[#030128] text-[20px] leading-[38px]">
                      I'm a technological visionary with full-stack engineer expertise. I have brought various products from ideation to conception including Co-parenting App, Dating coach App, Realestate marketplace, Grocery marketplace, PR management, job marketplace, Travel and tour solution, HR management, inventory management software and many AI modules including sentiment analyses to web scraping for real-life usage. Operating from a strong set of core principals, I have utilizes agile development to lead and manage engineers through the software development life cycle. I maintains a rigorous dedication to maintaining an organized infrastructure that allows for scalability and rapid growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default HomeScreen;
