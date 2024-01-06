import './App.css';
import Brand from './Components/Brand';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import HomePage from './Pages/HomePage';
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
      </div>
    </>
  );
}

export default App;
