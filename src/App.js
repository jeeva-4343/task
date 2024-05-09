import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/Html/Heropage';
import Services from './Html/Another-pages/Servicepage';
import Prices from './Html/Another-pages/Pricespage';
import Testimonials from './Html/Another-pages/Testimonials';
import Blog from './Html/Another-pages/Blog';
import FreeTrial from './Html/Another-pages/Freetrial';
// import Navibar from '../src/Html/Navbar';
// import '../src/Css/Navbar.css'


function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navibar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} /> 
          <Route path="/prices" element={<Prices />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/free-trial" element={<FreeTrial />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
