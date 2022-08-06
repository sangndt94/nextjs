import { Col, Row } from "antd";
import styled from "styled-components";
import { STYLE_UTILS, VERSION_STYLE_1 } from "../../styles";

const MapHomeComponent: React.FC = () => {
  const locationMap = [
    {
      key: 1,
      top: 10,
      left: 135,
      left_arrow: "20%",
      title: "Hà Giang",
      icon: "/images/location.png",
    },
    {
      key: 2,
      top: 35,
      left: 60,
      width: 110,
      left_arrow: "20%",
      title: "Sapa",
      icon: "/images/location.png",
    },
    {
      key: 3,
      top: 50,
      left: 270,
      left_arrow: "10%",
      title: "Quảng Ninh",
      icon: "/images/location.png",
    },
    {
      key: 4,
      top: 100,
      left: 10,
      left_arrow: "75%",
      title: "Mộc Châu",
      icon: "/images/location.png",
    },
    {
      key: 5,
      top: 70,
      left: 155,
      left_arrow: "10%",
      title: "Hà Nội",
      icon: "/images/location.png",
    },
    {
      key: 6,
      top: 120,
      left: 200,
      left_arrow: "10%",
      title: "Hải Phòng",
      icon: "/images/location.png",
    },
    {
      key: 7,
      top: 330,
      left: 200,
      left_arrow: "60%",
      title: "Huế",
      icon: "/images/location.png",
    },
    {
      key: 8,
      top: 350,
      left: 280,
      left_arrow: "10%",
      title: "Đà Nẵng",
      icon: "/images/location.png",
    },
    {
      key: 9,
      top: 380,
      left: 300,
      left_arrow: "10%",
      title: "Hội An",
      icon: "/images/location.png",
    },
    {
      key: 10,
      top: 520,
      left: 350,
      left_arrow: "5%",
      title: "Nha Trang",
      icon: "/images/location.png",
    },
    {
      key: 11,
      top: 565,
      left: 280,
      left_arrow: "5%",
      title: "Đà Lạt",
      icon: "/images/location.png",
    },
    {
      key: 12,
      top: 620,
      left: 180,
      left_arrow: "25%",
      title: "Hồ Chí Minh",
      icon: "/images/location.png",
    },
    {
      key: 13,
      top: 670,
      left: 170,
      left_arrow: "25%",
      title: "Cần Thơ",
      icon: "/images/location.png",
    },
    {
      key: 14,
      top: 650,
      left: 20,
      left_arrow: "55%",
      title: "Phú Quốc",
      icon: "/images/location.png",
    },
    {
      key: 15,
      top: 330,
      left: 450,
      left_arrow: "55%",
      title: (
        <div className="map_container-location">
          <span>
            Quần đảo Hoàng Sa
            <div> (Đà Nẵng)</div>
          </span>{" "}
        </div>
      ),
      icon: "/images/star.png",
    },
    {
      key: 16,
      top: 700,
      left: 400,
      left_arrow: "55%",
      title: (
        <div className="map_container-location">
          <span>
            Quần đảo Trường Sa
            <div>(Khánh Hoà)</div>
          </span>{" "}
        </div>
      ),
      icon: "/images/star.png",
    },
  ];
  return (
    <div>
      <Styled_MapHomeComponent_Container>
        <Col span={12} className="map_left"></Col>
        <Col span={12} className="map_right">
          <img src="/images/map.png" />
          {locationMap.map((item) => {
            return (
              <Styled_MapHomeComponent_Location
                key={item.key}
                width={item.width}
                top={item.top}
                left={item.left}
                color={STYLE_UTILS[VERSION_STYLE_1].colorMapTitle}
                left_arrow={item.left_arrow}
              >
                <img src={item.icon} />
                <span className="map_title">{item.title}</span>
              </Styled_MapHomeComponent_Location>
            );
          })}
        </Col>
      </Styled_MapHomeComponent_Container>
    </div>
  );
};

export default MapHomeComponent;

const Styled_MapHomeComponent_Container = styled(Row)`
  height: 979px;
  .map_right {
    position: relative;
  }
`;

const Styled_MapHomeComponent_Location = styled(Row)<{
  width?: number;
  top: number;
  left: number;
  color: string;
  left_arrow?: string;
}>`
  box-sizing: border-box;
  padding: 8px;
  position: absolute;
  width: ${(props) => (props.width ? props.width + "px" : "auto")};
  height: 45px;
  left: ${(props) => props.left + "px"};
  top: ${(props) => props.top + "px"};
  background: #ffffff;
  border: 1.5px solid #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 3px -2px;
  .map_title {
    margin-left: 8px;
    font-size: 20px;
    font-weight: 700;
    color: ${(props) => props.color};
  }
  img {
    width: 30px;
    height: 30px;
  }
  :after {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid white;
    content: " ";
    position: absolute;
    top: 100%;
    left: ${(props) => props.left_arrow};
  }
  .map_container-location {
    display: flex;
    font-size: 12px;
    align-items: center;
    font-weight: 500;
  }
`;
