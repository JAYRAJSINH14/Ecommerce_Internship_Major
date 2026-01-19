import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/auth.css";
import logo from "../../assets/images/website_logo.jpg";
import eyeOpen from "../../assets/images/icons/eye-open.jpg";
import eyeClosed from "../../assets/images/icons/eye-closed.jpg";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    mobile: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = (e) => {
    e.preventDefault();

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setError("");

    localStorage.setItem("token", "dummy-jwt-token");
    navigate("/verify-otp");
  };

  return (
    <div className="auth-container">
      <div className="auth-card animate">
        <img src={logo} alt="BHARATMART" className="auth-logo" />

        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleLogin}>
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
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

          {/* Login Button */}
          <button type="submit" className="login-btn">
            Continue
          </button>
        </form>

        {/* Links */}
        <div className="auth-links">
          <p>
            New to <strong>BHARATMART</strong>?{" "}
            <Link to="/register">Create an account</Link>
          </p>

          <Link className="forgot-link" to="/forgot-password">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}
