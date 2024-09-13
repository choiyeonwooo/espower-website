import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {FreeMode, Scrollbar, Mousewheel, Pagination} from 'swiper/modules';
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
//import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import bg_img from "./img/bg_img.png"
import bg_elecar from "./img/elecar-bg.jpg"
import bg_solpanel from "./img/solpanel-bg.jpeg"
import bg_ami from "./img/ami-bg.jpg"
import {cardDetails} from "./carousel-config.js"
import "./Home.css"
import AutoplayCarousel from "./AutoplayCarousel";
import { FaRegHandshake } from "react-icons/fa6";
import ReviewContainer from "./ReviewContainer.js";
import Process from "./Process.js";
function Menubox(props){
    return(
      <div className="menubox" id={props.id}>
        <div className="menubox-bg" style={{backgroundImage: `url(${props.bg_img})`}}/>
        <div className="menubox-content">
            <h3>{props.title}</h3>
            <p class="img_description">{props.content}</p>
        </div>
      </div>  
    );
}

function Home2(){
    return(
        <>
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                  clickable: true,
                }}
                autoHeight="true"
                modules={[Mousewheel, Pagination]}
                className="Home"
            >
                <SwiperSlide>
                    <div className="home1-wrapper"> 
                        <div className="home1-container">
                            <h2 className="home1-catchphrase">환경을 생각하는 기업 이에스파워입니다</h2>
                            <div className="home1-imgbox">
                                <Image src={bg_img} alt="bg_img" fluid/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="home2-wrapper" id="home2-wrapper">
                        <Container className="home2-container">
                            <h2 className="home2-title">이에스파워 주요사업</h2>
                            <div className="home2-menu-container">
                                <Menubox title="전기자동차 충전기" bg_img={bg_elecar} content="전국 전기차 충전기 인프라를 구축합니다." className="elecar-menubox"/>
                                <Menubox title="태양광판" bg_img={bg_solpanel} content="전국 태양광판 인프라를 구축합니다." className="solpanel-menubox"/>
                                <Menubox title="지능형 전력 계량 시스템(AMI)" content="무선 통신을 이용해 원격에서 에너지 사용량을 실시간으로 검침, 양방향 정보 교환을 통해 에너지 사용량을 효율적으로 관리하기 위한 인프라입니다." bg_img={bg_ami} id="ami-menubox"/>
                            </div>
                        </Container>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Process/>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="home3-wrapper">
                        <div className="home3-container" >
                            <FaRegHandshake className="handshake-icon"/> 
                            <h3>이에스파워와 함께 하는 파트너</h3>
                            <AutoplayCarousel className="home3-logos" cardDetails={cardDetails}/>
                        </div>
                        <div className="footer-wrapper">
                            <h3>회사명: (주)이에스파워</h3>
                            <h3>대표자: 양재희</h3>
                            <h3>주소: 서울시 관악구 남부순환로226길 20, 3층(라온스테이)</h3>
                            <h3>이메일: msublime@naver.com</h3>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Home2
