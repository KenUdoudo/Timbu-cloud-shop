import './App.css'
import Footer from './components/footer';
import Navbar from './components/navbar';
import Products from './pages/products';
function App() {

  return (
    <Router>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/contactus' element={<Events />} />
            <Route path='/mycart' element={<About />} />
          </Routes>
        </div>
        <Footer />
    </Router>
  )
}

export default App
