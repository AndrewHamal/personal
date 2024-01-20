5import { FacebookOutlined, InstagramOutlined, MailOutlined, MobileOutlined, SkypeOutlined } from "@ant-design/icons";
import React from "react";

export default function Footer() {
    return (
        <div>
            <footer className="py-[60px] container">
                <div className="row">
                    <div className="col-md-3">
                        <img src="/img/logo.svg" className="rounded-full" width={80} alt="" />
                        <p className="text-[#141516] mt-3 text-[15px]">Safe & reliable
                            <br /> Web/Mobile app  <br /> Developer</p>

                    </div>
                    <div className="col-md-3 mt-2">
                        <h6 className="font-[600]">Contact info</h6>

                        <div className="d-flex align-items-center gap-2 mt-3">
                            <MailOutlined color="#586FF3"/>
                            <a href="mailto:hamalanis1@gmail.com" className="text-[#141516] text-[14px] no-underline">hamalanis1@gmail.com</a>
                        </div>
                        <div className="d-flex align-items-center gap-2 mt-3">
                            <SkypeOutlined color="#586FF3"/>
                            <a href="https://join.skype.com/invite/kWT7bXEO59x4" className="text-[#141516] text-[14px] no-underline">https://join.skype.com/invite/kWT7bXEO59x4</a>
                        </div>

                        <div className="d-flex align-items-center gap-2 mt-3">
                            <MobileOutlined color="#586FF3"/>
                            <a href="tel:+9779821941408" className="text-[#141516] text-[14px] no-underline">+977 9821941408</a>
                        </div>
                    </div>        
                </div>

            </footer>
            <div className="text-center py-3  border-t border-[#C9C9C9]">
                <p className="text-[#141516] text-[14px] mb-0">©2024 Anis Hamal, All rights reserved Just Kidding LOL! ❤️</p>
            </div>
        </div>

    )
}
