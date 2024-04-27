import { FacebookOutlined, InstagramOutlined, MailOutlined, MobileOutlined, SkypeOutlined } from "@ant-design/icons";
import React from "react";

export default function Footer() {
    return (
        <div className="border-t-[1px] bg-white">
            <footer className="py-[60px] container">
                <div className="row">
                    <div className="col-md-3">
                        <img src="/img/logo-anis.png" width={80} alt="" />
                        <p className="text-[#141516] mt-3 text-[16px] font-[Sora-Regular]">Safe & reliable
                            <br /> Web/Mobile app  <br /> Developer</p>

                    </div>
                    <div className="mt-2 col-md-3">
                        <h3 className="font-[600] pb-2">Contact info</h3>

                        <div className="gap-2 mt-3 d-flex align-items-center">
                            <MailOutlined color="#e3222b" />
                            <a href="mailto:hamalanis1@gmail.com" className="text-blue-500 text-[16px] no-underline font-[Sora-Regular]">hamalanis1@gmail.com</a>
                        </div>
                        <div className="gap-2 mt-3 d-flex align-items-center">
                            <SkypeOutlined color="#e3222b" />
                            <a href="https://join.skype.com/invite/kWT7bXEO59x4" className="text-blue-500 font-[Sora-Regular] text-[16px] no-underline">Skype Link</a>
                        </div>

                        <div className="gap-2 mt-3 d-flex align-items-center">
                            <MobileOutlined color="#e3222b" />
                            <a href="tel:+9779821941408" className="text-blue-500 font-[Sora-Regular] text-[16px] no-underline">+977 9821941408</a>
                        </div>
                    </div>
                </div>

            </footer>
            <div className="text-center py-3 bg-white border-t-[1px]">
                <p className="text-gray-900 font-[Sora-Regular] text-[16px] mb-0">©2024 Anis Hamal, All rights reserved Just Kidding LOL! ❤️</p>
            </div>
        </div>

    )
}
