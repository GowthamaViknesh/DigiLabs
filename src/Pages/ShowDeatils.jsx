import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Banner from '../assets/Banner.png';

const ShowDetails = () => {
  return (
    <div className='container'>
      <div className='container-fluid'>
        <h2 className='text-center'>
          Elevating Card Programs with <br />
          Cutting-Edge Technology
        </h2>
        <p className='text-center'>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          <br />
          labore et dolore magna aliqua.
        </p>
        <p className='text-center'>
          Compare all Pro features
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </p>
        <div className='row'>
          <div className='col-md-6 text-center'>
            <img src={Banner} className='img-fluid' alt='Banner' />
          </div>

          <div className='col-md-6 text-center'>
            <img src={Banner} className='img-fluid' alt='Banner' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
