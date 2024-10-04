import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center">Sign in</h1>
          <input
            id="signin-username"
            placeholder="username"
            className="form-control mb-3"
          />
          <input
            id="signin-password"
            placeholder="password"
            type="password"
            className="form-control mb-3"
          />
          <Link
            id="signin-btn"
            to="Profile" 
            className="btn btn-primary w-100 mb-3"
          >
            Sign in
          </Link>
          <div className="text-center">
            <Link id="signup-link" to="Signup">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}