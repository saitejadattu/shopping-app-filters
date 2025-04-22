import React from "react";
import "./index.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtechtedRoute";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Routers>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route
          path="*"
          element={
            <div className="h-screen bg-gray-300 text-white m-auto">
              <p>Page Not Found</p>
            </div>
          }
        />
      </Routes>
    </Routers>
  );
};

export default App;
