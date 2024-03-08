import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Pembayaran from "./Pembayaran";
import Tentangkami from "./Tentangkami"
import Belisekarang from "./Belisekarang"
import Proses from "./Proses"


const rootElement = document.getElementById("root");
render(
<BrowserRouter>
  <Routes>
            <Route path='/' element={<App />} />
            <Route path='Pembayaran' element={<Pembayaran />} />
            <Route path='Tentangkami' element={<Tentangkami />} />
            <Route path='Belisekarang' element={<Belisekarang />} />
            <Route path='Proses' element={<Proses />} />
  </Routes>
</BrowserRouter>,
rootElement
);


          