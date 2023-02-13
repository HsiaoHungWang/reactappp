import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Customer from './pages/Customer';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Marketing from './components/Marketing';

function App() {
  return (
    <main>
      <div class="container py-4">
        <Header />
        <div class="p-5 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            {/* 設定路由 */}
            <Routes>
              {/* http://localhost:3000/home */}
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              {/* http://localhost:3000/about */}
              <Route path="/about" element={<About />} />
              {/* http://localhost:3000/contact */}
              <Route path="/contact" element={<Contact />} />
              {/* http://localhost:3000/customer */}
              <Route path="/customer" element={<Customer />} />
            </Routes>
          </div>
        </div>
        <Marketing />
        <Footer />
      </div>
    </main>



    // <div className="App">
    //   <Link to="/">Home</Link> |
    //   <Link to="/about">About</Link> |
    //   <Link to="/contact">Contact</Link> |
    //   <Link to="/customer">Customer</Link>
    //   <hr />


    //   <button type="click" className="btn btn-primary">Submit</button>
    // </div>
  );
}

export default App;
