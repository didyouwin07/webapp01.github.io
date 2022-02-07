import './App.css';
import Navbar from './Navbar';
import Slider from './Slider';
import Popup from './Popup';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }


  return (
    <div className = 'wrapper'>
    <div className="App">
    <Navbar/>
    <Slider
    handleClick={togglePopup}
    />
    {isOpen && <Popup
      handleClose={togglePopup}
      content={
        <div className='popup-div'>
          <h3>Contact</h3>
          <p className='lorem-text'>Lorem Ipsum is simply dummy text of the printing</p>
          <div className='form-fields'>
          <label className='lbl' for="name">Name</label>
          <input type='text' name='name' id='name'/>
          </div>
          <div className='form-fields'>
          <label className='lbl' for="email">E-mail</label>
          <input type='email' name='email' id='email'/>
          </div>
          <div className='form-fields'>
          <label className='lbl' for="message">Message</label>
          <input type='text' name='message' id='message'/>
          </div>
          <div class="btn btn-dark cnt-submit">Submit</div>
          <p className='more-info'><span className='info-cnt'>Need more info? hello@newzera.com </span><span className='social-icons'><FontAwesomeIcon className="icon" icon={faFacebook} /> <FontAwesomeIcon className="icon" icon={faTwitter} /> <FontAwesomeIcon className="icon" icon={faInstagram} /> <FontAwesomeIcon className="icon" icon={faLinkedin} /></span>
          </p>
        </div>
      }
      />}
    </div>
    </div>
  );
}

export default App;
