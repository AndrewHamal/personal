import { ArrowLeftOutlined, CloseOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import SiderBody from "./siderBody";
import SiderHeader from "./siderheader";

interface SiderProps {
  onClose: () => void;
  children?: JSX.Element;
}

const Titles: any = {
  "/register": "Sign up",
  "/verify": "Verify",
  "/plan": "Select your plan",
  "/carddetail": "Enter card details",
  "/success": "Success",
  "/": "Sign up",
};

const Texts: any = {
  "/register": "It will only take a few minutes to sign up",
  "/verify": "A unique OTP has been sent yo your email address",
  "/plan": "",
  "/carddetail": "",
  "/success": "Go to your account to start taking control today!",
  "/": "It will only take a few minutes to sign up",
};

export default function Sider({ onClose, children }: SiderProps) {
  const [title, setTitle] = useState<any>("Sign up");
  const [text, setText] = useState(
    "It will only take a few minutes to sign up "
  );


  useEffect(() => {
    setTitle(Titles[location.pathname] ?? "");
    setText(Texts[location.pathname] ?? "");
    return () => {
      setText("/");
      setTitle("/");
    };
  }, [location.pathname]);



  return (
    <div
      className="sider flex-column justify-content-center h-100 mt-0 p-4"
      style={{ position: "absolute", right: 0 }}
      id="register"
    >
      <div className="d-flex justify-content-between p-2">
        <div className="xs-col-6">
          {location.pathname === "/" || location.pathname === "/register" || location.pathname === "/success"? (
            <button onClick={onClose}>
              <CloseOutlined />
            </button>
          ) : (
            <button>
              <ArrowLeftOutlined />
            </button>
          )}
        </div>
        <div className="xs-col-6">
          <img src="/img/logo.svg" width={150} alt="" />
        </div>
      </div>
      <SiderHeader title={title} text={text} />
      {children}
    </div>
  );
}
