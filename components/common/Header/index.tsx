import { Dropdown, Menu, Row, Space } from "antd";
import React from "react";
import Link from "next/link";
import { DownOutlined, SmileOutlined, SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { STYLE_UTILS, VERSION_STYLE_1 } from "../../../styles";
const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item (disabled)
          </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item (disabled)
          </a>
        ),
        disabled: true,
      },
      {
        key: "4",
        danger: true,
        label: "a danger item",
      },
    ]}
  />
);
const menuItems = [
  {
    key: "home",
    // icon: <UserOutlined />,
    label: <Link href={"/khamphavietnam"}>Trang chủ</Link>,
  },
  {
    key: "location",
    // icon: <SettingOutlined />,
    label: (
      <Dropdown overlay={menu}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Điểm đến
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    ),
  },
  {
    key: "utilities",
    // icon: <LogoutOutlined />,
    label: (
      <Dropdown overlay={menu}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Tiện ích
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    ),
  },
  {
    key: "about",
    // icon: <LogoutOutlined />,
    label: <Link href={"/contact"}>Về Local</Link>,
  },
];
const HeaderComponent: React.FC = () => (
  <>
    <Styled_HeaderComponent_Header
      backgroundcolor={STYLE_UTILS[VERSION_STYLE_1].backgroundColorHeader}
    >
      <Styled_HeaderComponent_Row justify="space-between" align="middle">
        <div className="logo">
          <img src="/images/logo.png" />
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          items={menuItems}
        ></Menu>
        <div className="search">
          <SearchOutlined />
          <span>Tìm kiếm</span>
        </div>
      </Styled_HeaderComponent_Row>
    </Styled_HeaderComponent_Header>
  </>
);

export default HeaderComponent;

const Styled_HeaderComponent_Header = styled.header<{
  backgroundcolor: string;
}>`
  background-color: ${(props) => props.backgroundcolor};
  position: fixed !important;
  width: 100%;
  height: 80px;
  line-height: 80px;
  padding: 0 70px;
  z-index: 10000;
  .search {
    font-size: 16px;
    color: white;
    span {
      margin-left: 15px;
    }
  }
`;

const Styled_HeaderComponent_Row = styled(Row)`
  .ant-menu-root {
    background-color: transparent;
    border-bottom: unset !important;
    width: 500px;
    a {
      color: white;
      font-size: 16px;
    }
  }
`;
