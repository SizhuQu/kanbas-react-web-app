import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h3 className="text-center">Signup</h3>
          <input
            id="signup-username"
            placeholder="username"
            className="form-control mb-3"
          />
          <input
            id="signup-password"
            placeholder="password"
            type="password"
            className="form-control mb-3"
          />
          <Link
            id="signup-btn"
            to="/Kanbas/Account/Profile"
            className="btn btn-primary w-100 mb-3"
          >
            Signup
          </Link>
          <div className="text-center">
            <Link id="signin-link" to="/Kanbas/Account/Signin">
              Signin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}