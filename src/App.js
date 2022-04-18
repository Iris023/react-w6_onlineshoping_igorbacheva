import './App.css';
import logo from './logo.svg'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import Delivery from './Delivery';
import Show from './Show';

function App() {
  return (
    <div >
      <div>
            <p className="info font">Интернет магазин работает: с 10:00 до 18:00 по будням</p>
      </div>
      <Router>
        <div className='center'>
          <img src={logo} className='logo'/>
        </div>
        <nav>
          <Link className='link font' to="/">Товары</Link>
          <Link className='link font' to="/delivery">Доставка</Link>
          <Link className='link font' to="/about">О нас</Link>
          <Link className='link font' to="/contacts">Контакты</Link>
          <Link className='link font' to="/vsshow">Шоу</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/vsshow" element={<Show />} />
        </Routes>
      </Router>

      <p className="info font footer">© 2022 Victoria's Secret. All rights reserved.</p>
    </div>
  );
}

export default App;
