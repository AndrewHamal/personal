
import React from "react";
import { useNavigate } from "react-router-dom";
import Accordion from "../components/accordion";
import PlanCard from "../components/planCard/PlanCard";
import { Carousel } from "antd";
import VideoFrame from "../components/videoFrame";
import Typography from "@mui/material/Typography";

const contentStyle: React.CSSProperties = {
  marginLeft: '20%',
  marginRight: '20%',
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

const HomeScreen = ({ setShowSider }) => {
  const navigate = useNavigate();

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };


  const handleSelectPlan = (id: number) => {
    window.scrollTo(0, 0);
    setShowSider(true);
    navigate('/carddetail', { state: { selectedPlan: id } })
  }
  return (
    <>
      <div className="d-flex px-[15vw] h-[100vh]" id="firstScreen">
        <div className="" style={{ position: "absolute", top: "10%", right: 2 }}>
          <svg width="163" height="127" viewBox="0 0 163 127" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M92.792 13.9746L62.5996 30.3761L106.957 112.031L137.15 95.63L92.792 13.9746Z" fill="#6FE92F" />
            <path d="M148.896 55.9213L132.494 25.7289L50.8388 70.0866L67.2402 100.279L148.896 55.9213Z" fill="#6FE92F" />
            <path d="M6.54881 22.5701L3.01367 37.3615L43.017 46.9222L46.5521 32.1309L6.54881 22.5701Z" fill="#1D1D77" />
            <path d="M36.9574 16.5149L22.166 12.9798L12.6052 52.9831L27.3966 56.5182L36.9574 16.5149Z" fill="#1D1D77" />
          </svg>
        </div>
        <div className="row d-flex py-[200px]">
          <div className="d-flex flex-column col-xs-12 col-md-8  p-4">
            <img src="/img/logo.svg" width={240} alt="" />
            <Typography className="my-3" variant="h1">Safe & reliable co-parenting platform</Typography>
            <Typography className="my-3" variant="h2">
              Providing step-parent accessibility and inclusion for blended
              families
            </Typography>
            <button
              className="btn btn-primary bg-dark"
              onClick={() => setShowSider(true)}
            >
              Sign up now
            </button>
          </div>
          <div className="col-xs-12 col-md-4">
              <iframe style={{position:"relative", top:"0"}} className="video" src="https://www.youtube.com/embed/bQmzk05I3nw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

        </div>
      </div>
      <div className="container-fluid d-flex flex-column h-[100vh] bg-[#FBFBFD] box-shadow-main" id="secondScreen">
        <div style={{ position: "absolute", top: "10%", left: "2%" }}>
          <svg width="163" height="127" viewBox="0 0 163 127" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M92.792 13.9746L62.5996 30.3761L106.957 112.031L137.15 95.63L92.792 13.9746Z" fill="#6FE92F" />
            <path d="M148.896 55.9213L132.494 25.7289L50.8388 70.0866L67.2402 100.279L148.896 55.9213Z" fill="#6FE92F" />
            <path d="M6.54881 22.5701L3.01367 37.3615L43.017 46.9222L46.5521 32.1309L6.54881 22.5701Z" fill="#1D1D77" />
            <path d="M36.9574 16.5149L22.166 12.9798L12.6052 52.9831L27.3966 56.5182L36.9574 16.5149Z" fill="#1D1D77" />
          </svg>
        </div>
        <div className="row green-title d-flex justify-content-center py-[20vh] px-[15vw]">
          We acknowledge and support the integral role of step parents!
        </div>
        <div className="row mt-2 px-[15vw]">
          <div className="d-xs-none col-sm-6 random-text px-[10vw]">
            <svg
              width="64"
              height="64"
              viewBox="0 0 90 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 9.5H72V45.5H81V7.25C81 3.59375 77.9062 0.5 74.25 0.5H15.75C11.9531 0.5 9 3.59375 9 7.25V45.5H18V9.5ZM87.75 50H2.25C0.984375 50 0 50.9844 0 52.25V54.5C0 59.4219 3.9375 63.5 9 63.5H81C85.9219 63.5 90 59.4219 90 54.5V52.25C90 51.125 88.875 50 87.75 50Z"
                fill="#1D1D77"
              />
            </svg>
            <Typography variant="h3">
              An all inclusive platform for co-parents and blended families that
              takes away the need for outside communication
            </Typography>

          </div>
          <div className="d-xs-none col-sm-6 random-text  px-[10vw]">
            <svg
              width="64"
              height="64"
              viewBox="0 0 91 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M59.5 24.75C59.5 11.1094 46.2812 0 30.25 0C14.0781 0 1 11.1094 1 24.75C1 30.375 3.10938 35.4375 6.76562 39.6562C4.51562 44.2969 1.28125 47.6719 1.28125 47.8125C0.859375 48.0938 0.859375 48.5156 1 48.9375C1.14062 49.3594 1.5625 49.5 1.98438 49.5C7.46875 49.5 11.9688 47.9531 15.4844 46.125C19.8438 48.375 24.7656 49.5 30.25 49.5C46.2812 49.5 59.5 38.5312 59.5 24.75ZM85.2344 62.4375C88.75 58.2188 91 53.0156 91 47.25C91 33.6094 78.9062 22.5 64 22.5C63.8594 22.5 63.8594 22.6406 63.8594 22.6406C63.8594 23.3438 64 24.0469 64 24.75C64 38.6719 52.75 50.3438 37.7031 53.2969C40.6562 64.125 51.2031 72 64 72C68.6406 72 73.1406 70.875 76.9375 69.0469C80.4531 70.5938 84.8125 72 89.875 72C90.2969 72 90.7188 71.8594 90.8594 71.4375C91 71.0156 90.8594 70.5938 90.5781 70.3125C90.5781 70.1719 87.4844 66.9375 85.2344 62.4375Z"
                fill="#1D1D77"
              />
            </svg>
            <Typography variant="h3">
              Provides the ability to send standardised responses which
              encourages short, succinct and non-emotional communication
            </Typography>
          </div>
        </div>
      </div>
      <div className="container-fluid h-[100vh]  box-shadow-main" id="howitworks">
        <div className="row justify-content-center ">
          <div className="col-xs-12 px-[20vw] py-[10vh]">
            <h1 className="text-center">How it works?</h1>
          </div>
        </div>
        <div className="row justify-content-center px-[20vw]">
          <div className="col-xs-12 col-md-6 d-flex flex-column align-items-center">
            <h2>Sign up to a free account</h2>
            <span>Start using the app instantly. <a role="button" onClick={() => {
              window.scrollTo(0, 0);
              setShowSider(true);
            }} href="">Sign up now</a> </span>
            <VideoFrame>
              <iframe className="mt-[100px] video" src="https://www.youtube.com/embed/bQmzk05I3nw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </VideoFrame>
          </div>
          <div className="col-xs-12 col-md-6 d-flex flex-column align-items-center">
            <h2>Create journal entries</h2>
            <span>Track and view journal entries in the platform</span>
            <VideoFrame>
              <iframe className="mt-[100px] video" src="https://www.youtube.com/embed/bQmzk05I3nw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </VideoFrame>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-[#FBFBFD] w-100 h-[100vh] box-shadow-main" id="plans">
        <div className="row d-flex justify-content-center  py-[10vh]">
          <h1 className="text-center">Select a plan to get started</h1>
        </div>
        <div className="row px-[20vw]">
          <div className="col-xs-12 col-md-4">
            <PlanCard id={0} price={"Free"} features={["Feature to show journal"]} handleClick={handleSelectPlan} />
          </div>
          <div className="col-xs-12 col-md-4">
            <PlanCard id={1} price={"$9.99"} title={"per month"} features={["Feature to show journal", "Feature to show user"]} handleClick={handleSelectPlan} />
          </div>
          <div className="col-xs-12 col-md-4">
            <PlanCard id={2} price={"$99.99"} title={"per year"} features={["Feature to show journal", "Feature to show user"]} handleClick={handleSelectPlan} />
          </div>
        </div>
      </div>
      <div className="container-fluid features h-[100vh] w-100" id="features">
        <div className="row ">
          <div className="col-xs-12">
            <Carousel afterChange={onChange}>
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
            </Carousel>

          </div>
        </div>

      </div>
      <div className="container-fluid h-[100vh] bg-[#FBFBFD] w-100" id="faqs">
        <div className="row justify-content-center ">
          <div className="col-xs-12 px-[20vw] py-[20vh]">
            <h1 className="text-center">FAQs</h1>
          </div>
          <div className="row">
            <div className="col-xs-12 px-5">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <Accordion collapsed title={"Qustion"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
                <Accordion collapsed title={"Qustion"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
                <Accordion collapsed title={"Qustion"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default HomeScreen;
