import { Link } from "react-router-dom";

export default function Signin() {
  console.log("Signin component rendered");
  return (
    <div id="wd-signin-screen" className="container mt-5">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h1 className="text-center">Sign in</h1>
          <input
            id="wd-username"
            placeholder="username"
            className="form-control mb-3"
          />
          <input
            id="wd-password"
            placeholder="password"
            type="password"
            className="form-control mb-3"
          />
          <Link
            id="wd-signin-btn"
            to="/Kanbas/Account/Profile"
            className="btn btn-primary w-100 mb-3"
          >
            Sign in
          </Link>
          <div className="text-center">
            <Link id="wd-signup-link" to="/Kanbas/Account/Signup">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}