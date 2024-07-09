import './App.css'
import Footer from './components/footer';
import Navbar from './components/navbar';
import NotFound from './components/notfound';
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
            <Route path='/notfound' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
        
    </Router>
  )
}

export default App
