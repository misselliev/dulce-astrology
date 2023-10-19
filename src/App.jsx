import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Navigation from './Routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Navigation />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
