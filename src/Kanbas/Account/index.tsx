import Signin from "./Signin";
import Signup from "./Signup";
import Profile from "./Profile";
import AccountNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";

export default function Account() {
  return (
    <div className="container-fluid">
      <div className="row">
        <AccountNavigation />
        <div className="col-md-10 p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Signin" />} />
            <Route path="Signin" element={<Signin />} />
            <Route path="Signup" element={<Signup />} />
            <Route path="Profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}