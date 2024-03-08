//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import Beli from './components/Beli';
import Footer from './components/Footer';

function Belisekarang() {
  return (
    <div>
        <Navbar />
        <Beli />
        <div className='mt-4'>
        <Footer />
        </div>
    </div>
  );
}

export default Belisekarang;