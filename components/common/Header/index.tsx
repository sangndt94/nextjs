import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const { Header, Content, Footer } = Layout;
const HeaderComponent: React.FC = () => (
  <>
    <header>
      <div>HOTLINE: 0903121136</div>
      <div className="logo" />
      <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
        <Menu.Item key="mail">
          <Link href={"/"}>Trang chủ</Link>
        </Menu.Item>
        <Menu.Item key="products">
          <Link href={"/products"}>Sản phẩm</Link>
        </Menu.Item>
        <Menu.Item key="knowledge">
          <Link href={"/knowledge"}>Kiến thức về yến</Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link href={"/contact"}>Liên hệ</Link>
        </Menu.Item>
      </Menu>
    </header>
  </>
);

export default HeaderComponent;
