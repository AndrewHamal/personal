import { MailOutlined, MobileOutlined, SkypeOutlined } from "@ant-design/icons";
import React, { useRef } from "react";
import { Phone } from "react-feather";

export default function Plan() {

  return (
    <>
      <div className="d-flex flex-column gap-2 relative z-[99] px-5">
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
    </>
  );
}
