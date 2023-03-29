import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useLocation } from "react-router-dom";

interface NavBarProps {
  handleClickSignup: () => void;
  isServerRendering? :boolean;
}

const NavBar = ({ handleClickSignup, isServerRendering = false }: NavBarProps) => {
  const router = useRouter();
  const handleSignup = () =>{
    if(isServerRendering){
      return router.push('/');
    }
    handleClickSignup();
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <Link className="navbar-brand ms-5" href="/">
        <img src="/img/logo.svg" width={150} alt="" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active m-2">
            <Link className="nav-link" href="/#howitworks">
              How it works <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item m-2">
            <a className="nav-link" href="#plans">
              Plans
            </a>
          </li>
          <li className="nav-item m-2">
            <Link className="nav-link" href="/#features">
              Upcoming features
            </Link>
          </li>
          <li className="nav-item m-2">
            <Link className="nav-link" href="/#faqs">
              FAQs
            </Link>
          </li>
        </ul>
      </div>
      <div className="me-5">
        <button className="btn btn-primary bg-dark" onClick={handleSignup}>
          Sign up now
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
