import { Breadcrumb, Layout, Menu } from "antd";
import Image from "next/image";
import React from "react";
import HeaderComponent from "../../components/common/Header";
import LayoutComponent from "../../components/common/Layout";
import ProductList from "./ProductList";
// import "./home-style.scss";

const { Content } = Layout;
const App: React.FC = () => (
  <LayoutComponent>
    <Content>
      <img src="/images/banner.jpg" className={"home__banner"} />
      <ProductList />
    </Content>
  </LayoutComponent>
);

export default App;
