import React from "react";
import {useMediaQuery} from "react-responsive"
import "./Footer.css"
function Footer() {
    return (
        <div className="footer-wrapper">
            <h3>회사명: (주)이에스파워</h3>
            <h3>대표자: 양재희</h3>
            <h3>주소: 서울시 관악구 남부순환로226길 20, 3층(라온스테이)</h3>
            <h3>이메일: msublime@naver.com</h3>
        </div>
    );
}
export default Footer