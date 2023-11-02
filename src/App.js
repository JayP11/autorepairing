import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Navbar from "./common/navbar/Navbar";
import Footer from "./common/footer/Footer";
import SearchStores from "./pages/search_stores/SearchStores";
import Appointment from "./pages/appointment/Appointment";
function App() {
  return (
    <>
      <BrowserRouter basename="landingpage">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Searchstores" element={<SearchStores />}></Route>
          <Route path="/AppointmentForm" element={<Appointment />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
