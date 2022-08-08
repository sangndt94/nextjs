import React from "react";
import BannerComponent from "../../components/common/BannerComponent";
import DataPackageComponent from "../../components/common/DataPackageComponent";
import FooterComponent from "../../components/common/FooterComponent";
import HeaderComponent from "../../components/common/Header";
import LayoutComponent from "../../components/common/LayoutComponent";
import MapHomeComponent from "./Map.home";

const HomePage: React.FC = () => (
  <>
    <HeaderComponent />
    <LayoutComponent>
      <BannerComponent
        img={"/images/carousel.png"}
        bannerTitle={"Khám phá Việt Nam cùng Local"}
        bannerSubTitle={
          "Khắc họa một Việt Nam gần gũi, thân thương và sống động qua những câu chuyện giàu bản sắc văn hóa của từng địa phương"
        }
        key={"HomePage-1"}
        haveCarousel={true}
        swiper={{
          list: [
            {
              title: "Visit the Sa Phin H'Mong Palace",
              background: "/images/bg-location.png",
            },
            {
              title: "Visit the Sa Phin H'Mong Palace",
              background: "/images/bg-location.png",
            },
            {
              title: "Visit the Sa Phin H'Mong Palace",
              background: "/images/bg-location.png",
            },
            {
              title: "Visit the Sa Phin H'Mong Palace",
              background: "/images/bg-location.png",
            },
            {
              title: "Visit the Sa Phin H'Mong Palace",
              background: "/images/bg-location.png",
            },
            {
              title: "Visit the Sa Phin H'Mong Palace",
              background: "/images/bg-location.png",
            },
            {
              title: "Visit the Sa Phin H'Mong Palace",
              background: "/images/bg-location.png",
            },
            {
              title: "Visit the Sa Phin H'Mong Palace",
              background: "/images/bg-location.png",
            },
            {
              title: "Visit the Sa Phin H'Mong Palace",
              background: "/images/bg-location.png",
            },
          ],
        }}
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

      <FooterComponent />
    </LayoutComponent>
  </>
);

export default HomePage;
