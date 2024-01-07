import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Banner from '../assets/Banner.png';
import spending from '../assets/Spending.jpg';

const ShowDetails = () => {
  return (
    <div className='containerss'>
      <div className='container-fluid'>
        <h2
          className='text-center mb-4'
          style={{
            fontWeight: '800',
            letterSpacing: '1.5px',
            lineBreak: '2px',
          }}
        >
          Elevating Card Programs with <br />
          Cutting-Edge Technology
        </h2>
        <p className='text-center mb-4' style={{ fontWeight: '500' }}>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          <br />
          labore et dolore magna aliqua.
        </p>
        <p className='text-center' style={{ fontWeight: 'bold' }}>
          Compare all Pro features
          <FontAwesomeIcon
            className='text-center'
            icon={faArrowAltCircleRight}
            style={{ marginLeft: '10px' }}
          />
        </p>
        <div className='row'>
          <div className='col-md-6 text-center'>
            <img src={Banner} className='img-fluid mt-5' alt='Banner' />
          </div>

          <div className='col-md-6 text-center'>
            <img src={spending} className='img-fluids mt-5' alt='Banner' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
