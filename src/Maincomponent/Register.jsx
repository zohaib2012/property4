import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useSignupUserMutation } from "../Redux/CommonApi";

const Register = () => {
    const [formData, setFormData] = useState({email:"",name: "", password: "" });
    const [SignupUser, { isLoading }] = useSignupUserMutation ();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await SignupUser(formData).unwrap();
        if (response) {
          alert("Register successful! Now Please login yourself");
          // localStorage.setItem("token", response.signuptoken);
          // localStorage.setItem("name", response.name);
          navigate("/login");
        } else {
          alert("Access denied");
        }
      } catch (error) {
        toastr.error("An error occurred during login.");
        console.error("Login error:", error);
      }
    };
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    };
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  return (
    <div className="register-img">
    <div className="account-content container">
      <div className="">
        <div className="login-content logincard card py-2">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="login-user-info">
              <div className="login-logo">
                <img
                  src="/public/smalllogo.jpg"
                  className="img-fluid"
                  alt="Logo"
                />
              </div>
              <div className="login-heading">
                <h4 className="text-center pb-1">Registeration</h4>
                <p>Create new  account</p>
              </div>
              <div className="form-wrap">
                <label className="col-form-label">Name</label>
                <div className="form-wrap-icon">
                  <input type="text" className="form-control" 
                    id="name"
                    onChange={handleChange}
                    value={formData.name}/>
                  <i className="ti ti-user" />
                </div>
              </div>
              <div className="form-wrap">
                <label className="col-form-label">Email Address</label>
                <div className="form-wrap-icon">
                  <input type="text" className="form-control"
                  id="email"
                  onChange={handleChange}
                  value={formData.email} />
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
                  />
                  <span
                    className={`ti toggle-password ${
                      isPasswordVisible ? "ti-eye" : "ti-eye-off"
                    }`}
                    onClick={togglePasswordVisibility}
                  ></span>
                </div>
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
                  Sign Up
                </button>
              </div>
              <div className="login-form">
                <h6>
                  Already have an account?
                  <Link to="/login" className="hover-a">
                    {" "}
                    Sign In Instead
                  </Link>
                </h6>
              </div>
             
                         </div>
          </form>
        </div>
      </div>
    </div>  
    </div>
  );
};

export default Register;
