import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/auth.css";
import logo from "../../assets/images/website_logo.jpg";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    email: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleGetOtp = (e) => {
    e.preventDefault();

    setError("");
    navigate("/verify-otp");
  };

  return (
    <div className="auth-container">
      <div className="auth-card animate">
        <img src={logo} alt="BHARATMART" className="auth-logo" />

        <h2>Password assistance</h2>

        <p className="auth-desc">
          Enter the email address associated with your BHARATMART account to receive OTP.
        </p>

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

          <button type="submit" className="login-btn">
            Get OTP
          </button>
        </form>

        <div className="auth-links">
          <Link to="/login">Back to Login</Link>
        </div>
      </div>
    </div>
  );
}
