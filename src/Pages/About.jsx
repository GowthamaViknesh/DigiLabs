import {
  faArrowCircleRight,
  faGlobe,
  faKey,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
  return (
    <div className='container'>
      <div className='container-fluid text-center'>
        <h2
          className='text-center mb-4'
          style={{ fontWeight: '900', letterSpacing: '1px' }}
        >
          Elevating Card Programs with <br />
          Cutting-Edge Technology
        </h2>
        <p
          className='text-center'
          style={{ fontWeight: '600', letterSpacing: '1px' }}
        >
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          <br />
          labore et dolore magna aliqua.
        </p>
        <p
          className='text-center'
          style={{ fontWeight: 'bold', marginTop: '50px' }}
        >
          Compare all Pro features
          <FontAwesomeIcon
            icon={faArrowCircleRight}
            style={{ marginLeft: '15px' }}
          />
        </p>
        <div className='row mb-4' style={{ marginTop: '70px' }}>
          <div className='col-md-4 mb-5 text-center'>
            <FontAwesomeIcon icon={faGlobe} className='mb-2' size='2x' />
            <h6 className='mt-2 mb-3' style={{ fontWeight: '800' }}>
              Globally Accepted
            </h6>
            <p style={{ fontSize: '13px' }} className='text-truncate'>
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit, sed do eiusmod
            </p>
          </div>

          <div className='col-md-4 mb-5 text-center'>
            <FontAwesomeIcon icon={faKey} className='mb-2' size='2x' />
            <h6 className='mt-2 mb-3' style={{ fontWeight: '800' }}>
              Biometric Integrated
            </h6>
            <p style={{ fontSize: '13px' }} className='text-truncate'>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit, sed do eiusmod
            </p>
          </div>

          <div className='col-md-4 mb-5 text-center'>
            <FontAwesomeIcon icon={faLock} className='mb-2' size='2x' />
            <h6 className='mt-2 mb-3' style={{ fontWeight: '800' }}>
              Fully Secured
            </h6>
            <p style={{ fontSize: '13px' }} className='text-truncate'>
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit, sed do eiusmod
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
