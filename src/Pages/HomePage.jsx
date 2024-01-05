import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Matrix from '../assets/Matrix.avif';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const HomePage = () => {
  return (
    <>
      <div className='grid-container'>
        <div className='center-content'>
          <img
            src={Matrix}
            alt='Matrix'
            width='900px'
            height='500px'
            className='image-fluid transparent-image'
          />
          <div>
            <p className='overlay-text'>Seamless experience</p>
            <h3 className='overlay-texts' style={{ color: 'black' }}>
              Unleashing the Next
              <br />
              Generation of Card
              <br />
              Solutions
            </h3>
            <h6 className='overlay-sub' style={{ color: 'black' }}>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud
            </h6>
          </div>
          <button className='btn-custom'>
            Unlock your Card <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <p className='btn-sub-text'>*No credit card required</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
