import React from "react";
import { Link } from "react-router-dom";
import "./css/BasicLayout.css"; // CSS 파일 추가

export default function BasicLayout({ children }) {
  return (
    <div className="layout-container">
      {/* 로고 */}
      <div className="layout-header">
        <h1>작업 일지 시스템</h1>
      </div>

      {/* 네비게이션 바 */}
      <nav className="navbar">
      <Link to="/">
        <button className="nav-button">작업 일지</button>
      </Link>
      <Link to="/works">
        <button className="nav-button">작업 작성</button>
      </Link>
      </nav>

      <div>{children}</div>
    </div>
  );
}
