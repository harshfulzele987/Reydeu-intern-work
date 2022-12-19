import './App.css';
import City from './Pages/City';
import Home from './Pages/Home';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import HomeNew from './Pages/HomeNew';
import BookingForm from './Pages/BookingForm';
function App() {
  return (
<BrowserRouter>
      <Routes>

        <Route index element={<City />} />
        <Route path="home" element={<Home />} />
        <Route path="homenew" element={<HomeNew />} />
        <Route path="booking" element={<BookingForm />} />


      </Routes>
    </BrowserRouter>

  );
}

export default App;
