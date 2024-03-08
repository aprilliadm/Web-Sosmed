//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import Berhasil from './components/Berhasil';
import Footer from './components/Footer';
import Content2 from './components/Content2';
import Kembali from './components/Kembali'

function Proses() {
  return (
    <div className="App">
        <Navbar />
        <Berhasil />
        <Content2 />
        <br/>
        <Kembali />
        <div className='mt-4'>
        <Footer />  
        </div>
    </div>
  );
}

export default Proses;