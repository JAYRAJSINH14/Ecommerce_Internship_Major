import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/auth.css";
import logo from "../../assets/images/website_logo.jpg";

export default function ForgotPassword() {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleGetOtp = (e) => {
    e.preventDefault();

    if (mobile.length !== 10) {
      setError("Enter valid 10 digit mobile number");
      return;
    }

    setError("");
    // 🔐 Call Forgot Password OTP API here
    alert("OTP sent to your mobile number");
  };

  return (
    <div className="auth-container">
      <div className="auth-card animate">
        <img src={logo} alt="BHARATMART" className="auth-logo" />

        <h2>Password assistance</h2>

        <p className="auth-desc">
          Enter the mobile number associated with your BHARATMART account to receive OTP.
        </p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleGetOtp}>
          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
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
