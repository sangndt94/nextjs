import React from "react";
import styled from "./layout.module.scss"
const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  return <div className={styled.layout}>{children}</div>;
};

export default LayoutComponent;
