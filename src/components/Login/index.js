import { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Cookie from "cookiejs";
export default function Login() {
  const [userDetails, setUserDetails] = useState({ email: "sai@gmail.com", password: "sai@1234" });
  const [errorMessage, setErrorMessage] = useState({});
  const [showError, setShowError] = useState("");

  const handleInput = (e) => {
    const { value, name } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let validationErrors = {};
      Object.keys(userDetails).forEach((field) => {
        const error = validateInputForm(field, userDetails[field]);
        if (error) validationErrors[field] = error;
      });
      setErrorMessage(validationErrors);
      if (Object.keys(validationErrors).length === 0) {
        const payload = {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(userDetails),
        };
        const dataFetch = await fetch(
          "https://review-manager-backend-1.onrender.com/user/login",
          payload
        );
        if (dataFetch.status === 200) {
          const response = await dataFetch.json();
          Cookie.set("jwtToken", response.token, { expires: 1 });
          setUserDetails({ email: "", password: "" });
          setErrorMessage({});
          navigate("/");
        } else if (dataFetch.status === 400) {
          const response = await dataFetch.json();
          setShowError(response.message);
          setUserDetails({ email: "", password: "" });
        }
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  //   console.log(showError);
  const validateInputForm = (name, value) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^.{8,}$/;
    let errorMsg;
    if (name === "email") {
      if (!value) {
        errorMsg = "Email is required";
      } else if (!emailRegex.test(value)) {
        errorMsg = "Please provide valid email";
      }
    }
    if (name === "password") {
      if (!value) {
        errorMsg = "Password is required";
      } else if (!passwordRegex.test(value)) {
        errorMsg = "Passwords must have 8 chars";
      }
    }
    return errorMsg;
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={userDetails.email}
              onChange={handleInput}
              required
              className="input"
            />
            {errorMessage.email ? (
              <p className="block text-red-600 mt-2">*{errorMessage.email}</p>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={userDetails.password}
              onChange={handleInput}
              required
              className="input"
            />
            {errorMessage.password ? (
              <p className="block text-red-600 mt-2">
                *{errorMessage.password}
              </p>
            ) : null}
          </div>

          <button type="submit" className="submit-btn">
            Sign In
          </button>
          {showError ? <p className="block text-red-600 mt-2">*{showError}</p> : null}
        </form>

        <p className="signup-link">
          Don’t have an account? <a href="/register">Sign up</a>
        </p>
      </div>
    </div>
  );
}
