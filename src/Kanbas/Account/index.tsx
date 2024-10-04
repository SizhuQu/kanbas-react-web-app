import Signin from "./Signin";
import Signup from "./Signup";
import Profile from "./Profile";
import Dashboard from "../Dashboard";
import Courses from "../Courses";
import AccountNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
export default function Account() {
  return (
    <div id="wd-kanbas">
      <div>
        <AccountNavigation />
        <Routes>
          <Route path="/" element={<Navigate to="Signin" />} />
          <Route path="/Account/Signin" element={<Signin />} />
          <Route path="/Account/Signup" element={<Signup />} />
          <Route path="/Account/Profile" element={<Profile />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Courses/:cid/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}