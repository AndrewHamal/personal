import { Close } from "@mui/icons-material";
import { Drawer } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { Mail } from "react-feather";

interface NavBarProps {
  handleClickSignup: () => void;
  isServerRendering?: boolean;
}

const NavBar = ({ handleClickSignup, isServerRendering = false }: NavBarProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleSignup = () => {
    handleClickSignup();
  }

  function scroll(id: any) {
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
          <img src="/img/logo-anis.png" width={180} alt="" />
          <p className="my-auto ml-auto" onClick={() => setOpen(false)}><Close /></p>
        </Link>)}
        placement={'left'}
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        key={'left'}
      >
        <div className="m-2 nav-item active">
          <Link className="mb-4 nav-link" onClick={() => setOpen(false)} href="/#about-me">
            About Me <span className="sr-only">(current)</span>
          </Link>
        </div>
        <div className="m-2 nav-item">
          <a className="mb-4 nav-link" onClick={() => setOpen(false)} href="#portfolio-1">
            Portfolio
          </a>
        </div>
        <div className="m-2 nav-item">
          <Link className="mb-4 nav-link" onClick={() => setOpen(false)} href="/#proficiency">
            Proficiency
          </Link>
        </div>
        <div className="m-2 nav-item">
          <Link className="mb-4 nav-link" onClick={() => setOpen(false)} href="/#project-images">
            Project Images
          </Link>
        </div>
      </Drawer>

      <nav data-aos="fade-in"
        data-aos-duration="900" className="py-2 border-b-[1px] bg-[#F5F7FA] navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link className="navbar-brand d-flex" href="/">
            <img src="/img/logo-anis.png" width={60} alt="" />
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
              <li className="m-2 nav-item active">
                <Link className="nav-link" href="/#about-me">
                  About Me <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="m-2 nav-item">
                <a className="nav-link" href="#portfolio-1">
                  Portfolio
                </a>
              </li>
              <li className="m-2 nav-item">
                <Link className="nav-link" href="/#proficiency">
                  Proficiency
                </Link>
              </li>
              <li className="m-2 nav-item">
                <Link className="nav-link" href="/#project-images">
                  Project Images
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
