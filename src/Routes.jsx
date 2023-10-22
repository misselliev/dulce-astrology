import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignsHome from './pages/SignsHome';
import SignInfo from './components/SignInfo';

const Navigation = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/signs" element={<SignsHome />} />
      <Route path="/signs/*" element={<SignInfo />} />
    </Routes>
  );
};

export default Navigation;
