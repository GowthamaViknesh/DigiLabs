import { faCreditCard, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = () => {
  return (
    <div className='container text-center' style={{ marginTop: '100px' }}>
      <div className='pricing-header text-center'>
        <p
          className='lead'
          style={{
            fontWeight: '800',
            lineHeight: '30px',
            letterSpacing: '1px',
            marginBottom: '50px',
          }}
        >
          Unlock Limitless Possibilities with <br />
          Our New Card Solutions
        </p>
        <div className='mb-3'>
          <button
            className='btn btn-card mb-2 mb-md-0'
            style={{ color: 'black' }}
          >
            Unlock your Card{' '}
            <FontAwesomeIcon
              icon={faCreditCard}
              style={{ marginLeft: '6px' }}
            />
          </button>
          <button
            className='btn btn-cards'
            style={{ width: '200px', height: '8vh' }}
          >
            Customer Support{' '}
            <FontAwesomeIcon icon={faPhone} style={{ marginLeft: '6px' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
