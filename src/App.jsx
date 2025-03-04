import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Topbar from './Maincomponent/Topbar';
import Footer from './Maincomponent/Footer';
import Home from './Components/Home';
import Login from './Maincomponent/Login';
import Register from './Maincomponent/register';
import PropertyTypecards from './Components/ProperytyTypecards';
import Propertydetail from './Components/Propertydetail';
import Propertyform from './Components/Propertyform';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';

function App() {
  const location = useLocation();

  // Define paths where Topbar and Footer should be hidden
  const hideTopbarFooter = location.pathname === "/login" || location.pathname === "/register";

  return (
    <div>
      {!hideTopbarFooter && <Topbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addproperty" element={<Propertyform />} />
        {/* <Route
          path="/properties/:City?/:location?/:propertyType?/:areasize?/:areasizeunit?/:minprice?/:maxprice?"
          element={<PropertyTypecards />}
        /> */}
        {/* <Route
    path="/properties/:City?/:location?/:propertyType/:areasize?/:areasizeunit?/:minprice?/:maxprice?"
    element={<PropertyTypecards />}
  /> */}
        {/* <Route path="/properties/:propertyType" element={<PropertyTypecards />} />
        <Route path="/properties/:propertyType/:areasize/:areasizeunit" element={<PropertyTypecards />} />
        <Route path="/properties/:City/:propertyType/:miniprice/:maxiprice" element={<PropertyTypecards />} />
        <Route path="/properties/:propertyType/:miniprice/:maxiprice" element={<PropertyTypecards />} />
        <Route path="/properties/:location/:propertyType/:miniprice/:maxiprice" element={<PropertyTypecards />} />
        <Route path="/properties/:City/:location/:propertyType/:areasize/:areasizeunit/:miniprice/:maxiprice" element={<PropertyTypecards />} />
        <Route path="/properties/:City/:propertyType/:areasize/:areasizeunit/:miniprice/:maxiprice" element={<PropertyTypecards />} />
        <Route path="/properties/:location/:propertyType/:areasize/:areasizeunit/:miniprice/:maxiprice" element={<PropertyTypecards />} />
        <Route path="/properties/:propertyType/:areasize/:areasizeunit/:miniprice/:maxiprice" element={<PropertyTypecards />} />
        <Route path="/properties/:City/:location/:propertyType/:miniprice/:maxiprice" element={<PropertyTypecards />} /> */}
        {/* <Route path="/properties/:propertyType" element={<PropertyTypecards />} /> */}
        <Route path="/properties" element={<PropertyTypecards />} />
        <Route path="/property/:id" element={<Propertydetail />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        {/* Additional routes */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      {!hideTopbarFooter && <Footer />}
    </div>
  );
}

export default App;
