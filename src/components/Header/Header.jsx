import React from "react";
import { Link } from "@reach/router";
import "./Header.less";
import HeaderPrimary from "./HeaderPrimary/HeaderPrimary";
import { Row, Col } from "antd";
import {
  SearchOutlined,
  UserOutlined,
  StarOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
const Header = () => {
  return (
    <header className="header">
      <Row className="nav container">
        <Col span={8} className="nav-left"></Col>

        <Col span={8} className="nav-center">
          <h1 className="heading-1">Chamel</h1>
        </Col>
        <Col span={8} className="nav-right">
          <Link to="/" className="header__nav-bars-search">
            {" "}
            <SearchOutlined style={{ fontSize: "20px", color: "#08c" }} />
          </Link>
          <Link to="/" className="header__nav-bars-user">
            {" "}
            <UserOutlined style={{ fontSize: "20px", color: "#08c" }} />
          </Link>
          <Link to="/" className="header__nav-bars-like">
            {" "}
            <StarOutlined style={{ fontSize: "20px", color: "#08c" }} />
          </Link>
          <Link to="/" className="header__nav-bars-cart">
            {" "}
            <ShoppingOutlined style={{ fontSize: "20px", color: "#08c" }} />
          </Link>
        </Col>
      </Row>
      <HeaderPrimary />
    </header>
  );
};

export default Header;
