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
    <div className='Image-container' style={{ marginTop: '45%' }}>
      <div className='slider'>
        <ul className='list-unstyled d-flex flex-wrap'>
          {[
            Image1,
            Image2,
            Image3,
            Image4,
            Image5,
            Image6,
            Image7,
            Image8,
            Image9,
            Image10,
          ].map((image, index) => (
            <li key={index} className='brand-item'>
              <img
                src={image}
                alt={`Brand Image ${index + 1}`}
                className='brand-image'
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Brand;
