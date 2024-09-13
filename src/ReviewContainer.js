import ReviewAsset from './ReviewAsset.json'
import Container from "react-bootstrap/Container";
import './ReviewContainer.css'
import thumbnail from './img/thumbnail.jpeg'
function Reviewbox(props){
    return(
      <div className="reviewbox" id={props.id}>
        <div className="reviewbox-bg" style={{backgroundImage: `url(${props.bg_img})`}}/>
        <div className="reviewbox-content">
            <h3>{props.title}</h3>
            <p class="img_description">{props.content}</p>
        </div>
      </div>  
    );
}
function ReviewContainer(props){
    return(
        <div className='review-wrapper'>
            <Container className='review-container'>
                <div className="review-titlebox">
                    <h2>시공사례</h2>
                    <h3>이에스파워의 공사현장을 보여드립니다</h3>
                </div>
                <div className='review-content-wrapper'>
                    {ReviewAsset.map((e,index) => {
                        return <Reviewbox id={index} bg_img={thumbnail} title={e.title} content={e.content}/>
                    })}
                </div>
            </Container>
        </div>
    );
}
export default ReviewContainer