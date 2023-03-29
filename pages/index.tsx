import Head from "next/head";
import { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import CardDetail from "./card-detail";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import Sider from "./components/sider";
import Plan from "./plan/[id]";
import Plans from "./plans";
import Register from "./register";
import HomeScreen from "./homeScreen/HomeScreen";
import Success from "./success";
import Verify from "./verify";
import Privacy from "./privacy-policy";

export default function Home() {
  const [showSider, setShowSider] = useState(false);
  return (
    <>
      <Router >
        {showSider && (
          <Sider onClose={() => setShowSider(false)}>
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/verify" element={<Verify />} />
              <Route path="/success" element={<Success />} />
              <Route path="/plan/:id" element={<Plan />} />
              <Route path="/carddetail" element={<CardDetail />} />
              <Route path="/" element={<Register />} />
            </Routes>
          </Sider>
        )}

        <NavBar handleClickSignup={() => setShowSider(!showSider)} />
        <HomeScreen setShowSider={setShowSider} />
        
        <Footer />
      </Router>
    </>
  );
}


