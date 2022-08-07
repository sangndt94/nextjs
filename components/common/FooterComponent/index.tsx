import { Col, Row } from "antd";
import styled from "styled-components";
import {
  Styled_FooterComponent_CopyRight,
  Styled_FooterComponent_Wrapper,
} from "./styled";

interface Props {}

const FooterComponent: React.FC<Props> = ({}) => {
  return (
    <>
      <Styled_FooterComponent_Wrapper>
        <div className="footer_component">
          <div className={"footer_component--logo"}>
            <img src={"/images/logo-local.png"} />
          </div>

          <Row className="footer_component--about">
            <Col span={9}>
              <ul>
                <li>Về Local</li>
                <li>Điểm đến</li>
                <li>Tiện ích</li>
              </ul>
            </Col>
            <Col span={7} className="footer_component--about-download">
              <div className="footer_component--about-download--title">
                Tải ứng dụng Local
              </div>
              <span className="footer_component--about-download--wrap">
                <img src={"/images/app-store.png"} />
              </span>
              <span className="footer_component--about-download--wrap">
                <img src={"/images/ch-play.png"} />
              </span>
            </Col>
            <Col span={7} className="footer_component--about-social">
              <div className="footer_component--about-social--title">
                Kết nối với chúng tôi
              </div>
              <div>
                <img src={"/images/social/zalo.png"} />
                <img src={"/images/social/facebook.png"} />
                <img src={"/images/social/youtube.png"} />
              </div>
            </Col>
          </Row>

          <hr />

          <Row className="footer_component--info">
            <Col span={9} className="footer_component--info-company">
              <div className="footer_component--info-company--wrapper-1">
                <div className="footer_component--info-company--title">
                  Chịu trách nhiệm nội dung:
                </div>
                <div className="footer_component--info-company--text">
                  Ông Quách Mạnh Lâm, Phó Tổng giám đốc
                </div>
              </div>
              <div>
                <span className="footer_component--info-company--text">
                  Email:
                </span>{" "}
                <span className="footer_component--info-company--title">
                  lamquach@asimtelecom.vn
                </span>
              </div>
              <div>
                <span className="footer_component--info-company--text">
                  Điện thoại:
                </span>{" "}
                <span className="footer_component--info-company--title">
                  0934 551 602
                </span>
              </div>

              <div className="footer_component--info-company--title company">
                Công ty Cổ phần Viễn thông ASIM
              </div>
              <div className="footer_component--info-company--wrapper-2">
                <div className="footer_component--info-company--text">
                  Trụ sở chính: Toà nhà VPBank, Số 05, Điện Biên Phủ, Quận Ba
                  Đình, Hà Nội.
                </div>
                <div className="footer_component--info-company--text">
                  Trụ sở HCM: Số 18 Nguyễn Văn Mại, Quận Tân Bình, TP Hồ Chí
                  Minh.
                </div>
              </div>
            </Col>

            <Col span={4} className="footer_component--info-hotline">
              <div className="footer_component--info-hotline--title">
                Tổng đài
              </div>
              <div className="footer_component--info-hotline--text">
                1900 1900 (Nhánh 01)
              </div>
              <div>
                <span className="footer_component--info-hotline--text">
                  Email:
                </span>{" "}
                <span className="footer_component--info-hotline--text">
                  lamquach@asimtelecom.vn
                </span>
              </div>
            </Col>

            <Col span={7} className="footer_component--info-certificate">
              <div className="footer_component--info-certificate--first">
                Giấy chứng nhận đăng ký kinh doanh số 0315981331 do Sở Kế hoạch
                và Đầu tư TP Hồ Chí Minh cấp lần đầu ngày 24/10/2019, đăng ký
                thay đổi lần thứ 6 ngày 21/10/2021
              </div>
              <div>
                Giấy phép thiết lập Trang thông tin điện tử tổng hợp số
                19/GP-STTTT do Sở thông tin & Truyền thông Tp Hồ Chí Minh cấp
                ngày 15/4/2022
              </div>
            </Col>
          </Row>
        </div>
        <div className="footer_component--social">
          <img src="/images/social/messenger.png" />
        </div>
      </Styled_FooterComponent_Wrapper>
      <Styled_FooterComponent_CopyRight>
        <div>Copyright © 2021 ASIM</div>
      </Styled_FooterComponent_CopyRight>
    </>
  );
};

export default FooterComponent;
