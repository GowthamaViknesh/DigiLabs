import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <>
      <p
        style={{
          fontSize: '14px',
          marginTop: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontStyle: 'bolder',
          fontWeight: '800',
        }}
      >
        <span className='announce'>Announcement</span>We are happy to announce
        that we raise $2 Million in Seed Funding
      </p>
      <nav className='navbar navbar-expand-lg'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            Model UI
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse justify-content-center'
            id='navbarNav'
          >
            <ul className='navbar-nav '>
              <li className='nav-item'>
                <select className='nav-link active'>
                  <option>Card access</option>
                  <option>Limited</option>
                  <option>Premium</option>
                  <option>Master Card</option>
                  <option>Visa Card</option>
                </select>
              </li>
              <li className='nav-item'>
                <a className='nav-link active' href='#'>
                  Banking
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link active' href='#'>
                  Processing
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link active' href='#'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link active' href='#'>
                  Carrier
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link active' href='#'>
                  Contact
                </a>
              </li>
              {/* Move the button inside the navbar for smaller devices */}
              <li className='nav-item d-lg-none'>
                <button className='btn'>
                  Login
                  <FontAwesomeIcon
                    icon={faArrowRightToBracket}
                    className='mx-1'
                  />
                </button>
              </li>
            </ul>
          </div>
          {/* Display the button outside the navbar for larger devices */}
          <div className='d-none d-lg-flex justify-content-end button-custom'>
            <button className='btn'>
              Login
              <FontAwesomeIcon icon={faArrowRightToBracket} className='mx-1' />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
