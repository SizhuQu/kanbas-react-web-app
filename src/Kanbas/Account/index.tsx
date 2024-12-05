import Signin from "./Signin";
import Signup from "./Signup";
import Profile from "./Profile";
import AccountNavigation from "./Navigation";
import Users from "./Users";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div className="d-flex" id="wd-home">
      <div className="container-fluid">
        <div className="row">
          <AccountNavigation />
          <div className="col-md-10 p-3">
            <Routes>
              <Route path="/" element={<Navigate to={currentUser ? "/Kanbas/Account/Profile" : "/Kanbas/Account/Signin"} />} />
              <Route path="Signin" element={<Signin />} />
              <Route path="Signup" element={<Signup />} />
              <Route path="Profile" element={<Profile />} />
              <Route path="/Users" element={<Users />} />
              <Route path="/Users/:uid" element={<Users />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}