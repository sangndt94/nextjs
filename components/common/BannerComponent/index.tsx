import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import required modules
import { Pagination, Navigation } from "swiper";
import { SwiperModel } from "./../../../models/SwiperModel";
interface Props {
  img: string;
  bannerTitle?: string;
  bannerSubTitle?: string;
  haveCarousel?: boolean;
  swiper?: {
    list: SwiperModel[];
  };
}

const BannerComponent: React.FC<Props> = ({
  img = "",
  bannerTitle = "",
  bannerSubTitle = "",
  haveCarousel = false,
  swiper = null,
}) => {
  return (
    <div>
      <Styled_BannerComponent_Container>
        <Styled_BannerComponent_Img src={img} className={"home__banner"} />
        <Styled_BannerComponent_BannerTitle>
          {bannerTitle}
          <Styled_BannerComponent_BannerSubTitle>
            {bannerSubTitle}
          </Styled_BannerComponent_BannerSubTitle>
        </Styled_BannerComponent_BannerTitle>
        {haveCarousel && (
          <Styled_BannerComponent_Swiper>
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              grabCursor={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              navigation={true}
              // loop={true}
            >
              {(swiper?.list || []).map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Styled_BannerComponent_Img
                      src={item.background}
                      className={"home__banner"}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Styled_BannerComponent_Swiper>
        )}
      </Styled_BannerComponent_Container>
    </div>
  );
};

export default BannerComponent;

const Styled_BannerComponent_Img = styled.img`
  width: 100%;
`;

const Styled_BannerComponent_Container = styled.div`
  position: relative;
`;

const Styled_BannerComponent_BannerTitle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 64px;
  font-weight: 700;
  color: white;
  text-align: center;
`;
const Styled_BannerComponent_BannerSubTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding-top: 40px;
`;
const Styled_BannerComponent_Swiper = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-wrapper{
    padding-left: 50px;
  }
  .swiper-pagination {
    position: relative;
    &-bullet {
      background: white;
    }
  }
`;
