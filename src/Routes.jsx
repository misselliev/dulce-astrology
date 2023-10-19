import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignsHome from './pages/SignsHome';

const Navigation = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/signs" element={<SignsHome />} />
    </Routes>
  );
};

export default Navigation;
