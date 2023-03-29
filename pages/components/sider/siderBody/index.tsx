import React from "react";

interface SiderFooterProps{
    children?: JSX.Element;
}

export default function SiderFooter({children}: SiderFooterProps){
    return(
        <div className="d-flex flex-column justify-content-center align-items-center pt-5 pb-3 w-100 btn-div text-center">
            {children}
        </div>
    )
}