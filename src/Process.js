import Container from "react-bootstrap/Container";
import "./Process.css"
function Process(props){
    let image0 = require("./img/in-process/00_boxes.jpeg");
    let image1 = require("./img/in-process/00_delivery.jpeg");
    let image2 = require("./img/in-process/01_cutting.jpeg");
    let image3 = require("./img/in-process/01_wall_attach.jpeg");
    let image4 = require("./img/in-process/02_wall_routing.jpeg");
    let image5 = require("./img/in-process/02_wall_routing2.jpeg");
    let image6 = require("./img/in-process/03_ceiling_routing.jpeg");
    let image7 = require("./img/in-process/03_ceiling_routing2.jpeg");
    let image8 = require("./img/in-process/03_ceiling_routing3.jpeg");
    let image9 = require("./img/in-process/04_complete_check.jpeg");
    let image10 = require("./img/in-process/04_complete_solo_shot.jpeg");
    let image11 = require("./img/in-process/04_complete_multi_shot.jpeg");
    let image12 = require("./img/in-process/04_complete_employee.jpeg");
    return(
        <div className="process-wrapper">
            <Container className="process-container">
                <h2 className="process-title">시공 과정</h2>
                <h3 className="process-subtitle">전기 자동차 충전기</h3>
                <div className="process-scroll">
                    <img src={image0} alt="boxes"/>
                    <img src={image1} alt="delivery"/>
                    <img src={image2} alt="cutting"/>
                    <img src={image3} alt="wall attach"/>
                    <img src={image4} alt="wall routing"/>
                    <img src={image5} alt="wall routing"/>
                    <img src={image6} alt="ceiling routing"/>
                    <img src={image7} alt="ceiling routing"/>
                    <img src={image8} alt="ceiling routing"/>
                    <img src={image9} alt="final check"/>
                    <img src={image10} alt="single shot"/>
                    <img src={image11} alt="multi shot"/>
                    <img src={image12} alt="mission complete"/>
                </div>
            </Container>
        </div>
    );
}

export default Process