import { useState } from "react";
import CardDetail from "./card-detail";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import Plan from "./plan/[id]";
import Register from "./register";
import HomeScreen from "./homeScreen/HomeScreen";
import Success from "./success";
import Verify from "./verify";
import { Drawer } from "antd";
import ProfileDetail from "./profile-detail";

export default function Home() {
  const [showSider, setShowSider] = useState({
    page:'plan',
    state: false,
    id: ''
  });

  const render = () => {
    switch(showSider.page)
    {
      case 'register': 
        return <Register showSider={showSider} setShowSider={setShowSider}/> 
      case 'verify': 
        return <Verify showSider={showSider} setShowSider={setShowSider}/>
      case 'plan': 
        return <Plan showSider={showSider} setShowSider={setShowSider}/>
      case 'cardVerify': 
        return <CardDetail selectedPlan={showSider.id} showSider={showSider} setShowSider={setShowSider}/>
      case 'complete': 
        return <ProfileDetail showSider={showSider} setShowSider={setShowSider}/>
      case 'success': 
        return <Success showSider={showSider} setShowSider={setShowSider}/>
    }
  }

  return (
    <>
        <Drawer width={(window.innerWidth > 800 && window.innerWidth < 900) ? "60%" : window.innerWidth > 900 ? '50%' : "100%"} title={<img  className="ml-auto" src="/img/logo.svg" width={180} alt="" />} closeIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M24 12C24 18.6094 18.6563 24 12 24C5.39063 24 1.25807e-06 18.6094 1.83588e-06 12C2.41779e-06 5.34375 5.39063 -1.62688e-06 12 -1.04907e-06C18.6563 -4.67165e-07 24 5.34375 24 12ZM15.7969 14.2031L13.5938 12L15.7969 9.79687C16.2656 9.32812 16.2656 8.625 15.7969 8.20312C15.375 7.73437 14.6719 7.73437 14.25 8.20312L12.0469 10.4062L9.79688 8.20312C9.375 7.73437 8.67188 7.73437 8.25 8.20312C7.78125 8.625 7.78125 9.32812 8.25 9.79687L10.4531 12L8.25 14.2031C7.78125 14.625 7.78125 15.3281 8.25 15.7969C8.67188 16.2187 9.375 16.2187 9.79688 15.7969L12.0469 13.5469L14.25 15.7969C14.6719 16.2187 15.375 16.2187 15.7969 15.7969C16.2656 15.3281 16.2656 14.625 15.7969 14.2031Z" fill="#030128"/>
          </svg>} placement={'right'} open={showSider.state} onClose={() => setShowSider({...showSider, state: false})}>

          { render() }
        </Drawer>
      
        <NavBar handleClickSignup={() => setShowSider({...showSider, state: !showSider.state})} />
        <HomeScreen setShowSider={setShowSider} />
        
        <Footer />
    </>
  );
}


