import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/auth.css";
import logo from "../../assets/images/website_logo.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function OtpVerification() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error] = useState("");

  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const inputsRef = useRef([]);

  /* Countdown Timer */
  useEffect(() => {
    if (timer === 0) {
      setCanResend(true);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  /* OTP input change */
  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  /* Backspace handling */
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  /* Verify OTP */
  const email = localStorage.getItem("otpEmail");

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    const enteredOtp = otp.join("");

    await axios.post("http://localhost:8080/api/auth/verify-otp", {
      email,
      otp: enteredOtp
    });

    alert("Email verified successfully");
    navigate("/login");
  };


  /* Resend OTP */
  const handleResendOtp = () => {
    // Call RESEND OTP API here
    alert("OTP resent successfully");

    setOtp(["", "", "", "", "", ""]);
    setTimer(60);
    setCanResend(false);
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-card animate">
        <img src={logo} alt="BHARATMART" className="auth-logo" />

        <h2>Verify OTP</h2>

        <p className="auth-desc">
          Enter the 6 digit OTP sent to your registered email address.
        </p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleVerifyOtp}>
          <div className="otp-container">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                ref={(el) => (inputsRef.current[index] = el)}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="otp-input"
              />
            ))}
          </div>
            {/* Resend Section */}
            <div className="otp-resend-section">
                {!canResend ? (
                    <p className="timer-text">
                    Please wait <strong>{timer}</strong> seconds before requesting
                    another OTP.
                    </p>
                    ) : (
                        <button className="resend-btn" onClick={handleResendOtp}>
                        Resend OTP
                        </button>
                    )}
            </div>

          <button type="submit" className="login-btn">
            Verify
          </button>
        </form>

        <div className="auth-links">
          <Link to="/login">Back to Login</Link>
        </div>
      </div>
    </div>
  );
}
