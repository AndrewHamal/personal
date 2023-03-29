import { FacebookOutlined, InstagramOutlined, MailOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <div className="container">
            <footer className="p-4">
                <div className="row">
                    <div className="col-xs-12 col-sm-2">
                        <img src="/img/logo.svg" width={150} alt="" />
                        <p>Safe & reliable
                            co-parenting management platform</p>
                        <div className="d-flex align-items-center gap-2">
                            <InstagramOutlined />
                            <FacebookOutlined />
                        </div>

                    </div>
                    <div className="col-xs-12 col-sm-2">
                        <h4>Contact info</h4>
                        <div className="d-flex align-items-center gap-2"><MailOutlined /><a href="mailto:info@coparentingplus.com" >info@coparentingplus.com</a> </div>
                        <Link
                            href="/privacy-policy"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </div>

            </footer>
        </div>

    )
}