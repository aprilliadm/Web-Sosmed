//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Content />
      <br/>
      <Footer />
    </div>
  );
}

export default App;