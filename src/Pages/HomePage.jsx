import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Matrix from '../assets/Matrix.avif';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  return (
    <div className='container-fluid'>
      <div className='row align-items-center'>
        <div className='col-lg-6 center-content text-center order-2 order-lg-1'>
          {/* <img
            src={Matrix}
            alt='Matrix'
            className='img-fluid transparent-image'
          /> */}
        </div>
        <div className='col-lg-6 center-content text-center order-1 order-lg-2'>
          <p className='overlay-text mt-5'>Seamless experience</p>
          <h3 className='overlay-texts mt-5' style={{ color: 'black' }}>
            Unleashing the Next
            <br />
            Generation of Card
            <br />
            Solutions
          </h3>
          <h6 className='overlay-sub' style={{ color: 'black' }}>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </h6>
          <button className='btn btn-custom'>
            Unlock your Card <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <p className='btn-sub-text'>*No credit card required</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
