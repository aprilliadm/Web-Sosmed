//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import Tentang from './components/Tentang';
import Footer from './components/Footer';

function Tentangkami() {
  return (
    <div className="App">
        <Navbar />
        <Tentang />
        <Footer />
    </div>
  );
}

export default Tentangkami;