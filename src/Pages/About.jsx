import { faArrowCircleLeft, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
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
          <FontAwesomeIcon icon={faArrowCircleLeft} />
        </p>
        <div className='row'>
          <div className='col-md-4'>
            <FontAwesomeIcon icon={faGlobe} />
            <h6 className='mt-2'>Globally Accepted</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{' '}
            </p>
          </div>

          <div className='col-md-4'>
            <FontAwesomeIcon icon={faGlobe} />
            <h6 className='mt-2'>Globally Accepted</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{' '}
            </p>
          </div>

          <div className='col-md-4'>
            <FontAwesomeIcon icon={faGlobe} />
            <h6 className='mt-2'>Globally Accepted</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
