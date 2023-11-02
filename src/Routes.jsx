import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignsHome from './pages/SignsHome';
import SignInfo from './components/SignInfo';
import HoroscopeHome from './pages/HoroscopeHome';
import DailyHoroscope from './components/DailyHoroscope';

const Navigation = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/signs" element={<SignsHome />} />
      {/* <Route path="/signs/*" element={<SignInfo />} /> */}
      <Route path="/horoscopes" element={<HoroscopeHome />} />
      {/* <Route path="/horoscopes/*" element={<DailyHoroscope />} /> */}
    </Routes>
  );
};

export default Navigation;
