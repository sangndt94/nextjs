import styled from "styled-components";

interface Props {
  img: string;
  bannerTitle?: string;
  bannerSubTitle?: string;
}

const BannerComponent: React.FC<Props> = ({
  img = "",
  bannerTitle = "",
  bannerSubTitle = "",
}) => {
  return (
    <Styled_BannerComponent_Container>
      <Styled_BannerComponent_Img src={img} className={"home__banner"} />
      <Styled_BannerComponent_BannerTitle>
        {bannerTitle}
        <Styled_BannerComponent_BannerSubTitle>
          {bannerSubTitle}
        </Styled_BannerComponent_BannerSubTitle>
      </Styled_BannerComponent_BannerTitle>
    </Styled_BannerComponent_Container>
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
