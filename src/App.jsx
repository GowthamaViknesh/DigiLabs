import './App.css';
import Brand from './Components/Brand';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Card from './Pages/Card';
import HomePage from './Pages/HomePage';
import Profile from './Pages/Profile';
import ShowDeatils from './Pages/ShowDeatils';
import TextFile from './Pages/TextFile';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <HomePage />
        <Brand />
        <About />
        <ShowDeatils />
        <TextFile />
        <Profile />
        <Card />
        <Footer />
      </div>
    </>
  );
}

export default App;
