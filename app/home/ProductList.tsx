import React from "react";
import { Card, Row } from "antd";
// import style from "./home-style.module.scss";

const ProductList = () => {
  return (
    <Row gutter={[16, 16]} justify="space-between">
      {[
        { id: 1, name: "product1", title: "Yến tinh luyện" },
        { id: 1, name: "product1", title: "Yến tinh luyện" },
        { id: 1, name: "product1", title: "Yến tinh luyện" },
      ].map((item, index) => {
        return (
          <Card
            key={index}
            title={item.title}
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            {/* <img src="/images/banner.jpg" className={style["home__banner"]} /> */}
          </Card>
        );
      })}
    </Row>
  );
};

export default ProductList;
