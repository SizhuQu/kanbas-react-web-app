import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-signin-screen" className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h3 className="text-center">Profile</h3>
          <input
            id="wd-username"
            value="alice"
            placeholder="Username"
            readOnly
            className="form-control mb-3"
          />
          <input
            id="wd-password"
            value="123"
            placeholder="Password"
            type="password"
            readOnly
            className="form-control mb-3"
          />
          <input
            id="wd-firstname"
            value="Alice"
            placeholder="First Name"
            readOnly
            className="form-control mb-3"
          />
          <input
            id="wd-lastname"
            value="Wonderland"
            placeholder="Last Name"
            readOnly
            className="form-control mb-3"
          />
          <input
            id="wd-dob"
            value="mm/dd/yyyy"
            type="date"
            readOnly
            className="form-control mb-3"
          />
          <input
            id="wd-email"
            value="alice@wonderland.com"
            type="email"
            readOnly
            className="form-control mb-3"
          />
          <select id="wd-role" value="USER" disabled className="form-control mb-4">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <Link to="/Account/Signin" className="btn btn-danger w-100">
            Signout
          </Link>
        </div>
      </div>
    </div>
  );
}