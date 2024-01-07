import Image1 from '../assets/Image4.png';
import Image2 from '../assets/Profile.jpeg';

const Profile = () => {
  return (
    <div className='containerss text-center'>
      <div className='pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center'>
        <img src={Image1} className='image-fluid' width='130px' />
        <p
          className='lead mt-2'
          style={{ letterSpacing: '1px', fontWeight: '800' }}
        >
          I had the pleasure of experiencing the next generation <br />
          of card solutions with this incredible product. It's <br />
          refreshing to see such innovation in the financial <br />
          industry.
        </p>
        <img
          src={Image2}
          style={{ width: '100px', borderRadius: '100px' }}
          className='mt-3'
        />
        <p className='mt-2' style={{ fontWeight: '800' }}>
          Nick Babich
        </p>
        <p>Lead Designer</p>
        <p>⭐⭐⭐⭐</p>
      </div>
    </div>
  );
};

export default Profile;
