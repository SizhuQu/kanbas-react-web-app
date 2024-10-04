import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 offset-md-3">
          <h1 className="text-center">Sign up</h1>
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
            to="/Account/Profile" 
            className="btn btn-primary w-100 mb-3"
          >
            Signup
          </Link>
          <div className="text-center">
            <Link id="signin-link" to="/Account/Signin">
              Signin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}