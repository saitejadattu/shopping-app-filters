import { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({});
  const [showError, setShowError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateInputForm = (name, value) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^.{8,}$/;
    let errorMsg;
    if (name === "username") {
      if (!value) {
        errorMsg = "Username is required";
      }
    }
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let validationErrors = {};
      Object.keys(formData).forEach((field) => {
        const error = validateInputForm(field, formData[field]);
        if (error) validationErrors[field] = error;
      });
      setErrorMessage(validationErrors);
      if (Object.keys(validationErrors).length === 0) {
        const payload = {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(formData),
        };
        const dataFetch = await fetch(
          "https://review-manager-backend-1.onrender.com/user/register",
          payload
        );
        if (dataFetch.status === 200) {
          await dataFetch.json();
          setFormData({ email: "", password: "", name: "" });
          setErrorMessage({});
          navigate("/login");
        } else if (dataFetch.status === 409) {
          const response = await dataFetch.json();
          setShowError(response.message);
          setFormData({ email: "", password: "", name: "" });
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Create an Account</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input"
            />
            {errorMessage.email ? <p className="block text-red-600 mt-2">*{errorMessage.email}</p> : null}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input"
            />
            {errorMessage.password ? <p className="block text-red-600 mt-2">*{errorMessage.password}</p> : null}
          </div>

          <button type="submit" className="submit-btn">
            Sign Up
          </button>
          {showError ? <p className="block text-red-600 mt-2">*{showError}</p> : null}
        </form>

        <p className="toggle-text">
          Already have an account?
          <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
