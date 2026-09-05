import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login details submitted:", { email, password });
    // Yahan aap apna login API logic laga sakte hain baad mein
  };

  return (
    <div className="login-page-wrapper">
      {/* Background Matrix Grid Mesh Layout */}
      <div className="login-matrix-grid-overlay"></div>

      <div className="login-card-container">
        <div className="login-header-zone">
          <h2>Welcome Back</h2>
          <p>Please enter your details to access your account</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form-element">
          {/* Email Input Field */}
          <div className="input-group-block">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input Field */}
          <div className="input-group-block">
            <div className="password-label-row">
              <label htmlFor="password">Password</label>
              <a href="#forgot" className="forgot-password-link">Forgot?</a>
            </div>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="remember-me-row">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me for 30 days</label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="login-submit-btn">
            Sign In
          </button>
        </form>

        <div className="login-footer-notes">
          <p>
            Don't have an account? <a href="#signup">Sign up for free</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
