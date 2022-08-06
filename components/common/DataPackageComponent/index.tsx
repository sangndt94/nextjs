import { Col, Row } from "antd";
import { formatPrice } from "../../../utils/functions";
import { Styled_DataPackageComponent_Info_Package, Styled_DataPackageComponent_WrapperPackage } from "./styled";

const DataPackageComponent: React.FC = () => {
  const dataPackage = [
    {
      title: "A89S",
      sub_1: "120GB/ 30 ngày",
      sub_2: "4GB/ngày",
      description_1: "Hết 4GB, băng thông trở về 2 Mbps",
      description_2:
        "Tặng 1000 phút gọi nội mạng cho cuộc gọi dưới 10 phút (bao gồm cuộc gọi MobiFone và Local)",
      price: 118000,
    },
    {
      title: "A89S",
      sub_1: "120GB/ 30 ngày",
      sub_2: "4GB/ngày",
      description_1: "Hết 4GB, băng thông trở về 2 Mbps",
      description_2:
        "Tặng 1000 phút gọi nội mạng cho cuộc gọi dưới 10 phút (bao gồm cuộc gọi MobiFone và Local)",
      price: 118000,
    },
    {
      title: "A89S",
      sub_1: "120GB/ 30 ngày",
      sub_2: "4GB/ngày",
      price: 118000,
      className: "active",
    },
    {
      title: "A89S",
      sub_1: "120GB/ 30 ngày",
      sub_2: "4GB/ngày",
      description_1: "Hết 4GB, băng thông trở về 2 Mbps",
      description_2:
        "Tặng 1000 phút gọi nội mạng cho cuộc gọi dưới 10 phút (bao gồm cuộc gọi MobiFone và Local)",
      price: 118000,
    },
  ];

  return (
    <div>
      <Styled_DataPackageComponent_Info_Package >
        <div className="data-package_info-title">Gói cước du lịch</div>
        <div className="data-package_info-sub-title">
          Cùng myLocal.vn khám phá vẻ đẹp của cảnh và người, để hiểu sâu về văn
          hóa các vùng miền, để dâng trào cảm xúc tự hào dân tộc, và thêm yêu tổ
          quốc.
        </div>
      </Styled_DataPackageComponent_Info_Package>

      <Styled_DataPackageComponent_WrapperPackage>
        {dataPackage.map((item, index) => {
          return (
            <Col
              span={5}
              key={index}
              className={
                item?.className
                  ? `${item?.className} data-package_column`
                  : "data-package_column"
              }
            >
              {item?.className === "active" && (
                <div className="data-package--most-popular">MOST POPULAR</div>
              )}
              <div className="data-package_column--wrapper">
                {item.title && <h1>{item.title}</h1>}
                <h3>{item.sub_1}</h3>
                <h3>{item.sub_2}</h3>
                {item.description_1 && (
                  <div className="data-package_description">
                    <img src="/images/check-circle-red.png" />
                    {item.description_1}
                  </div>
                )}
                {item.description_2 && (
                  <div className="data-package_description">
                    <img src="/images/check-circle-red.png" />
                    {item.description_2}
                  </div>
                )}
                <Row
                  justify="space-between"
                  align="middle"
                  className="data-package_price--wrapper"
                >
                  <div className="data-package_price--title">Giá cước</div>
                  <div className="data-package_price">
                    {formatPrice({
                      locale: "vi",
                      number: item.price as number,
                    })}
                  </div>
                </Row>
                <div className="data-package_button">
                  <button>Mua ngay</button>
                </div>
              </div>
            </Col>
          );
        })}
      </Styled_DataPackageComponent_WrapperPackage>
    </div>
  );
};

export default DataPackageComponent;
