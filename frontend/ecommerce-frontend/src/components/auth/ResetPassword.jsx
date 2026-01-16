import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/auth.css";
import logo from "../../assets/images/website_logo.jpg";
import eyeOpen from "../../assets/images/icons/eye-open.jpg";
import eyeClosed from "../../assets/images/icons/eye-closed.jpg";

export default function ResetPassword() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    newPassword: "",
    confirmPassword: ""
  });

  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = (e) => {
    e.preventDefault();

    if (form.newPassword.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    // 🔐 Call RESET PASSWORD API here
    alert("Password updated successfully");

    // Redirect to login
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-card animate">
        <img src={logo} alt="BHARATMART" className="auth-logo" />

        <h2>Create new password</h2>

        <p className="auth-desc">
          Please create a strong password to keep your account secure
        </p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSave}>
          {/* New Password */}
          <div className="password-box">
            <input
              type={showNew ? "text" : "password"}
              name="newPassword"
              placeholder="New Password"
              value={form.newPassword}
              onChange={handleChange}
              required
            />
            <img
              src={showNew ? eyeOpen : eyeClosed}
              alt="toggle password"
              className="eye-icon"
              onClick={() => setShowNew(!showNew)}
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

          <button type="submit" className="login-btn">
            Save Changes & Login
          </button>
        </form>

        {/* Security Tips */}
        <div className="password-tips">
          <h4>Secure password tips:</h4>
          <ul>
            <li>Use at least 8 characters,a combination of numbers and letters is best.</li>
            <li>Do not use the same password you have used with us previously.</li>
            <li>Do not use dictionary words, your name, e-mail address, mobile number or other personal information that can be easily obtained.</li>
            <li>Do not use the same password for multiple online accounts.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
