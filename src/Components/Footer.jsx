import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaSquareXTwitter,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='section bg-footer' style={{ marginTop: '200px' }}>
      <div className='containers'>
        <h3 className='text-center mb-4'>Model Ui</h3>
        <p
          className='text-center'
          style={{
            letterSpacing: '1px',
            lineBreak: 'auto',
            lineHeight: '26px',
            fontWeight: '500',
          }}
        >
          Model UI is a comprehensive design system that empowers
          <br /> designers and developers to create cohesive and visually
          stunning <br />
          user interfaces across various platforms and devices.
        </p>

        <div className='row' style={{ marginTop: '50px' }}>
          <div className='col-lg-3'>
            <div className='mx-5'>
              <h6 className='footer-heading text-uppercase'>Information</h6>
              <ul className='list-unstyled footer-link mt-3 mx-2'>
                <li>
                  <a href=''>Pages</a>
                </li>
                <li>
                  <a href=''>Our Team</a>
                </li>
                <li>
                  <a href=''>Features</a>
                </li>
                <li>
                  <a href=''>Pricing</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-lg-3'>
            <div className='mx-5'>
              <h6 className='footer-heading text-uppercase '>Resources</h6>
              <ul className='list-unstyled footer-link mt-3'>
                <li>
                  <a href=''>Monitoring Grader </a>
                </li>
                <li>
                  <a href=''>Video Tutorial</a>
                </li>
                <li>
                  <a href=''>Terms &amp; Service</a>
                </li>
                <li>
                  <a href=''>Zeeko API</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-lg-2'>
            <div className='mx-5'>
              <h6 className='footer-heading text-uppercase '>Help</h6>
              <ul className='list-unstyled footer-link mt-3'>
                <li>
                  <a href=''>Sign Up </a>
                </li>
                <li>
                  <a href=''>Login</a>
                </li>
                <li>
                  <a href=''>Terms of Services</a>
                </li>
                <li>
                  <a href=''>Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-lg-4'>
            <div className='mx-5'>
              <h6 className='footer-heading text-uppercase '>Contact Us</h6>
              <p className='contact-info mt-3' style={{ color: 'black' }}>
                Contact us if you need help with anything
              </p>
              <p className='contact-info' style={{ color: 'black' }}>
                +01 123-456-7890
              </p>
              <div className='mt-4'>
                <ul className='list-inline'>
                  <li className='list-inline-item'>
                    <a href='#'>
                      <FaFacebook className='fab facebook footer-social-icon fa-facebook-f' />
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='#'>
                      <FaSquareXTwitter className='fab twitter footer-social-icon fa-twitter' />
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='#'>
                      <FaGoogle className='fab google footer-social-icon fa-google' />
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='#'>
                      <FaInstagram className='fab apple footer-social-icon fa-apple' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center mt-5'>
        <p className='footer-alt mb-0 f-14' style={{ color: 'black' }}>
          Designed by @Gowthama Viknesh
        </p>
      </div>
    </footer>
  );
};

export default Footer;
