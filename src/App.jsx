import './App.css'

import Navbar from './components/navbar';
import Products from './pages/products';
import Contact from './pages/contactus';
import Home from './pages/Home';
import MyCart from './pages/Cart';
import Checkout from './pages/Checkout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <Router>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/contactus' element={<Contact />} />
            <Route path='/mycart' element={<MyCart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </div>
        
    </Router>
  )
}

export default App
