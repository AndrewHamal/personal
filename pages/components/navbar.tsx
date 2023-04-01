import { Close } from "@mui/icons-material";
import { Drawer } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

interface NavBarProps {
  handleClickSignup: () => void;
  isServerRendering? :boolean;
}

const NavBar = ({ handleClickSignup, isServerRendering = false }: NavBarProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleSignup = () =>{
    handleClickSignup();
  }

  function scroll(id: any)
  {
    setOpen(false);
       
    setTimeout(() => {
      let doc: any = document;
      doc.getElementById(id).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }, 500)
  }

  return (
    <>
      <Drawer
        title={(<Link className="navbar-brand d-flex" href="/">
        <img src="/img/logo.svg" width={180} alt="" />
        <p className="ml-auto my-auto" onClick={() =>  setOpen(false)}><Close/></p>
      </Link>)}
        placement={'left'}
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        key={'left'}
      >
        <p className="nav-link mb-3" onClick={() => scroll('howitworks')}>
            How it works <span className="sr-only">(current)</span>
        </p>
        <p className="nav-link mb-3" onClick={() => scroll('plans')}>
          Plans
        </p>
        <p className="nav-link mb-3" onClick={() => scroll('features')}>
          Upcoming features
        </p>
        <p className="nav-link mb-3" onClick={() => scroll('faqs')}>
          FAQs
        </p>
      </Drawer>

      <nav data-aos="fade-in"
     data-aos-duration="900" className="navbar navbar-expand-lg fixed-top navbar-light bg-[#F1F1F1] py-2">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <img src="/img/logo.svg" width={180} alt="" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
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

              <li className="d-flex">
                <div className="self-center">
                  <button className="bg-[#030128] text-white px-4 text-[15px] py-2 rounded-[90px]" onClick={() => handleSignup()}>
                    Sign up now
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
