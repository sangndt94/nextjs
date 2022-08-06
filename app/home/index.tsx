import { Layout } from "antd";
import { GetStaticProps } from "next";
import React from "react";
import BannerComponent from "../../components/common/BannerComponent";
import DataPackageComponent from "../../components/common/DataPackageComponent";
import LayoutComponent from "../../components/common/LayoutComponent";
import MapHomeComponent from "./Map.home";

const { Content } = Layout;
const HomePage: React.FC = () => (
  <LayoutComponent>
    <BannerComponent
      img={"/images/carousel.png"}
      bannerTitle={"Khám phá Việt Nam cùng Local"}
      bannerSubTitle={
        "Khắc họa một Việt Nam gần gũi, thân thương và sống động qua những câu chuyện giàu bản sắc văn hóa của từng địa phương"
      }
      key={"HomePage-1"}
    />
    <MapHomeComponent />

    <BannerComponent
      img={"/images/banner.png"}
      bannerTitle={"Việt Nam, Đi và Yêu"}
      bannerSubTitle={
        "Bước chân lên mỗi mảnh đất trên hình chữ S nhiệm màu để yêu thêm đất nước, con người Việt NamBước chân lên mỗi mảnh đất trên hình chữ S nhiệm màu để yêu thêm đất nước, con người Việt Nam Bước chân lên"
      }
      key={"HomePage-2"}
    />

    <DataPackageComponent />

  </LayoutComponent>
);

export default HomePage;

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
});