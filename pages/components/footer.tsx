import { FacebookOutlined, InstagramOutlined, MailOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <footer className="py-[60px] container">
                <div className="row">
                    <div className="col-md-3">
                        <img src="/img/logo.svg" width={140} alt="" />
                        <p className="text-[#141516] mt-3 font-[Inter] text-[15px]">Safe & reliable
                            <br /> co-parenting <br /> management platform</p>
                        <div className="d-flex gap-2">
                            <InstagramOutlined />
                            <FacebookOutlined />
                        </div>

                    </div>
                    <div className="col-md-3 mt-2">
                        <h6 className="font-[Inter] font-[600]">Contact info</h6>

                        <div className="d-flex align-items-center gap-2 mt-3">
                            <MailOutlined color="#586FF3"/>
                            <a href="mailto:info@coparentingplus.com" className="text-[#141516] text-[14px] no-underline">info@coparentingplus.com</a>
                         </div>
                    </div>

                    <div className="col-md-3 mt-2">
                        <h6 className="font-[Inter] font-[600]">Support</h6>

                        <div className="d-flex align-items-center gap-2 mt-3">
                            <Link
                                href="/privacy-policy"
                                className="text-[#141516] no-underline text-[14px]"
                            >
                                Privacy Policy
                            </Link>
                         </div>
                    </div>

        
                </div>

            </footer>
            <div className="text-center py-3  border-t border-[#C9C9C9]">
                <p className="font-[Inter] text-[#141516] text-[14px] mb-0">©2022 co-parenting plus, All rights reserved</p>
            </div>
        </div>

    )
}