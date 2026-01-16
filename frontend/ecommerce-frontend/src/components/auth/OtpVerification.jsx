import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/auth.css";
import logo from "../../assets/images/website_logo.jpg";

export default function OtpVerification() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");

  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const inputsRef = useRef([]);

  /* ⏱️ Countdown Timer */
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
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      setError("Please enter valid 6 digit OTP");
      return;
    }

    setError("");
    // 🔐 Call VERIFY OTP API here
    alert("OTP Verified Successfully!");
  };

  /* 🔁 Resend OTP */
  const handleResendOtp = () => {
    // 🔐 Call RESEND OTP API here
    alert("OTP resent successfully");

    setOtp(["", "", "", "", "", ""]);
    setTimer(60);
    setCanResend(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-card animate">
        <img src={logo} alt="BHARATMART" className="auth-logo" />

        <h2>Verify OTP</h2>

        <p className="auth-desc">
          Enter the 6 digit OTP sent to your registered mobile number.
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
