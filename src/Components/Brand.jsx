import Image1 from '../assets/Image1.png';
import Image2 from '../assets/Image2.png';
import Image3 from '../assets/Image3.png';
import Image4 from '../assets/Image4.png';
import Image5 from '../assets/Image5.png';
import Image6 from '../assets/Image6.png';
import Image7 from '../assets/Image7.png';
import Image8 from '../assets/Image8.png';
import Image9 from '../assets/Image9.jpeg';
import Image10 from '../assets/Image10.png';

const Brand = () => {
  return (
    <>
      <div className='conatiner'>
        <div className='slider'>
          <ul style={{ marginTop: '100px' }}>
            <li>
              <img src={Image1} alt='' className='brand-image' />
            </li>
            <li>
              <img src={Image2} alt='' className='brand-image' />
            </li>
            <li>
              <img src={Image3} alt='' className='brand-image' />
            </li>
            <li>
              <img src={Image4} alt='' className='brand-image' />
            </li>
            <li>
              <img src={Image5} alt='' className='brand-image' />
            </li>
            <li>
              <img src={Image6} alt='' className='brand-image' />
            </li>
            <li>
              <img src={Image7} alt='' className='brand-image' />
            </li>
            <li>
              <img src={Image8} alt='' className='brand-image' />
            </li>
            <li>
              <img src={Image9} alt='' className='brand-image' />
            </li>
            <li>
              <img src={Image10} alt='' className='brand-image' />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Brand;
