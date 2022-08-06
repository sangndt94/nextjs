import React from "react";
import styled from "styled-components";
const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  return <Styled_LayoutComponent>{children}</Styled_LayoutComponent>;
};

export default LayoutComponent;

const Styled_LayoutComponent = styled.div`
  background: #F6F6F6;
`;
