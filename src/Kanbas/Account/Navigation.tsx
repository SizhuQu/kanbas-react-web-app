import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

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

        <li className="nav-item">
          <Link to="/Kanbas" className="nav-link fs-5 text-danger">
            Kanbas
          </Link>

        </li>
      </ul>
    </div>
  );
}