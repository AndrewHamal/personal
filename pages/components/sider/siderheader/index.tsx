import React from "react";

interface SiderHeaderProps{
    title: string;
    text?: string;
}

export default function SiderHeader({title, text}: SiderHeaderProps) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}
