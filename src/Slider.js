import './Slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const img1 = "/photo-1563460716037-460a3ad24ba9.png";
const img2 = "/Group.png";

const Slider = (props)=>{
  return (
    <div>
    <div className = 'nav-buttons'>
    <p><span className="button-nav">About</span> <span className="button-nav">Blog</span> <span className="button-nav">Careers</span> <span className="button-nav contact" onClick={props.handleClick}>Contact</span></p>
    </div>
    <div id="carouselExampleCaptions" className="carousel " data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>

  <div className="carousel-inner">

    <div className="carousel-item active">
      <img src={img1} className="d-block myImg1" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Type Text</h5>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p className = "socials"><FontAwesomeIcon className="icon" icon={faFacebook} /> <FontAwesomeIcon className="icon" icon={faTwitter} /> <FontAwesomeIcon className="icon" icon={faInstagram} /> <FontAwesomeIcon className="icon" icon={faLinkedin} />
        </p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block myImg2" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Type Text</h5>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p className = "socials"><FontAwesomeIcon className="icon" icon={faFacebook} /> <FontAwesomeIcon className="icon" icon={faTwitter} /> <FontAwesomeIcon className="icon" icon={faInstagram} /> <FontAwesomeIcon className="icon" icon={faLinkedin} />
        </p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  );
}

export default Slider;
