import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import UnitConvertor from '../Components/UnitConvertor';
import { useLogoutUserMutation } from '../Redux/CommonApi';

const Topbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add state for login status

  // Check if the user is logged in (by the presence of a token in localStorage)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleNavigate = () => {
    navigate("/login");
  };

  const handleAddProperty = () => {
    navigate("/addproperty");
  };

  const [logoutUser, { isLoading, isError, isSuccess, error }] = useLogoutUserMutation();
  // Used for redirecting after logout
  const handleLogout = async () => {
    try {
      await logoutUser().unwrap(); // Call the logout mutation
      localStorage.removeItem("token"); // Remove the token from localStorage
      navigate("/login"); // Redirect to login page after logout
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const handlePropertyCategoryClick = (category) => {
    const formattedCategory = category.toLowerCase();
    const url = `/properties?purpose=${formattedCategory}`;
    console.log("Navigating to:", url); // Debugging log
    navigate(url);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src="/public/smalllogo.jpg"
              className="logo ps-5"
              alt="Logo"
            />
          </NavLink>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
              <li className="nav-item mx-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  to="/aboutUs"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : ""}`
                  }
                >
                  About us
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <button
                  className={`nav-link ${isLoggedIn ? 'active-link' : ''}`}
                  onClick={() => handlePropertyCategoryClick('sale')}
                >
                  Properties For Sale
                </button>
              </li>
              {isLoggedIn ? (
                     <li className="nav-item mx-2">
                <NavLink
                 className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
                 to="/addproperty"
                >
                  Add Property
                </NavLink>
              </li>
                ) : (
                 
               <></>
                )}
           
              <li className="nav-item mx-2">
                <NavLink
                  to="/contactUs"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : ""}`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <div className="px-2">
                <button
                  type="button"
                  className="btn btn-primary mx-2"
                  data-bs-toggle="modal"
                  data-bs-target="#centermodal"
                >
                  Unit Convertor
                </button>
                {isLoggedIn ? (
                  <button
                    className="btn btn-primary"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={handleNavigate}
                  >
                    Log In
                  </button>
                )}
                <UnitConvertor />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
