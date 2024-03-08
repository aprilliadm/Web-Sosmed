//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import Bayar from './components/Bayar';
import Footer from './components/Footer';

function Pembayaran() {
  return (
    <div className="App">
        <Navbar />
        <Bayar />
        <Footer />
    </div>
  );
}

export default Pembayaran;