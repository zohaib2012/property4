import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useLoginUserMutation } from "../Redux/CommonApi";


const Loginn = () => {

  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({email:"", password: "" });
    const [LoginUser, { isLoading }] = useLoginUserMutation ();
    const navigate = useNavigate();
   
    const validate = () => {
      const newErrors = {};
      Object.keys(formData).forEach((key) => {
       if (!formData[key] || formData[key].toString().trim() === "") {
              newErrors[key] = `${key} is required.`;
          }
      });
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const response = await LoginUser(formData).unwrap();
      
      if (response && response.status === 200) {
        // If login is successful
        alert("Login successful!");
        localStorage.setItem("token", response.logintoken);
        localStorage.setItem("loginuserName", response.name);
        navigate("/");
      } else {
        // If response status is not 200
        console.error("Login failed: Invalid credentials or other error");
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      // Check if the error is related to a user not signed up
      if (error.response && error.response.status === 400) {
        alert("You are not registered. Please sign up first.");
      } else {
        toastr.error("An error occurred during login.");
        console.error("Login error:", error);
      }
    }
  };
  
    const handleChange = (e) => {
      
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }; 
     const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  

  return (
    <div className="login-img">
    <div className="account-content container ">
   
      <div className="glassy-card">
  
        <div className="login-content   ">
          <form className="card-body" onClick={handleSubmit}>
            <div className="login-user-info">
              <div className="">
              <img
                  src="/public/smalllogo.jpg"
                  className="img-fluid login-logo"
                  alt="Logo"
                />
              </div>
              <div className="login-heading">
                <h4 className="py-2">Sign In</h4>
               
              </div>
              <div className="form-wrap">
                <label className="col-form-label">Email Address</label>
                <div className="form-wrap-icon">
                  <input type="text" className="form-control" 
                     id="email"
                     onChange={handleChange}
                     value={formData.email}
                     type="email"
                     required
                     />
                  <i className="ti ti-mail" />
                </div>
              </div>
              <div className="form-wrap">
                <label className="col-form-label">Password</label>
                <div className="pass-group">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    className="pass-input form-control"
                    id="password"
                    onChange={handleChange}
                    value={formData.password}
                    required
                  />
                  <span
                    className={`ti toggle-password ${
                      isPasswordVisible ? "ti-eye" : "ti-eye-off"
                    }`}
                    onClick={togglePasswordVisibility}
                  ></span>
                </div>
              </div>
              <div className="form-wrap form-wrap-checkbox">
                
                {/* <div className="text-end">
                  <Link to="/" className="forgot-link">
                    Forgot Password?
                  </Link>
                </div> */}
              </div>
              <div className="form-wrap">
              <button
                  type="submit"
                  className="btn btn-primary mumclr login-btn"
                  disabled={isLoading}
                >
                  {isLoading && (
                    <span className="spinner-border spinner-border-sm mr-1"></span>
                  )}
                  Sign In
                </button>
              </div>
              <div className="login-form">
                <h6>
                  New on our platform?
                  <Link to="/register" className="hover-a">
                    {" "}
                    Create an account
                  </Link>
                </h6>
              </div>
              

              {/* <div className="login-social-link">
                <ul className="nav">
                  <li>
                    <Link to="#" className="facebook-logo">
                      <ImageWithBasePath
                        src="assets/img/icons/facebook-logo.svg"
                        alt="Facebook"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/icons/google-logo.svg"
                        alt="Google"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="apple-logo">
                      <ImageWithBasePath
                        src="assets/img/icons/apple-logo.svg"
                        alt="Apple"
                      />
                    </Link>
                  </li>
                </ul>
                <div className="copyright-text">
                  <p>Copyright ©2024 - CRMS</p>
                </div>
              </div> */}
            </div>
          </form>
        </div>
      
      </div>
    </div>
    </div>
  );
};

export default Loginn;
