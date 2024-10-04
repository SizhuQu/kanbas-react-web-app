import { Link } from "react-router-dom";

export default function AccountNavigation() {
  return (
    <div className="col-md-2 p-3">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/Account/Signin" className="nav-link fs-5 text-dark">
            <strong>Signin</strong>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Account/Signup" className="nav-link fs-5 text-danger">
            Signup
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Account/Profile" className="nav-link fs-5 text-danger">
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}