import { useState } from "react";
import "../../styles/auth.css";
import logo from "../../assets/images/website_logo.jpg";
import eyeOpen from "../../assets/images/icons/eye-open.jpg";
import eyeClosed from "../../assets/images/icons/eye-closed.jpg";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleGetOtp = async (e) => {
    e.preventDefault();

    if (form.password.length < 8)
      return setError("Password must be at least 8 characters");

    if (form.password !== form.confirmPassword)
      return setError("Passwords do not match");

    if (form.mobile.length !== 10) {
      setError("Enter valid 10 digit mobile number");
      return;
    }
    await axios.post("http://localhost:8080/api/auth/register", {
      email: form.email,
      password: form.password
    });

    localStorage.setItem("otpEmail", form.email);
    navigate("/verify-otp");
  };

  return (
    <div className="auth-container">
      <div className="auth-card animate">
        <img src={logo} alt="BHARATMART" className="auth-logo" />

        <h2>Create Account</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleGetOtp}>
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          {/* Mobile */}
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            required
          />

          {/* Password */}
          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <img
              src={showPassword ? eyeOpen : eyeClosed}
              alt="toggle password"
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          {/* Confirm Password */}
          <div className="password-box">
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
            <img
              src={showConfirm ? eyeOpen : eyeClosed}
              alt="toggle confirm password"
              className="eye-icon"
              onClick={() => setShowConfirm(!showConfirm)}
            />
          </div>

          {/* Get OTP Button */}
          <button type="submit" className="login-btn">
            Continue
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
