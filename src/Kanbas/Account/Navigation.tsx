import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  return (
    <div className="col-md-2 p-3">
      <ul className="nav flex-column">
        {links.map((link) => (
          <li className="nav-item" key={link}>
            <Link to={`/Account/${link}`} className={`nav-link fs-5 ${link === "Signin" ? "text-dark" : "text-danger"}`}>
              {link === "Signin" ? <strong>{link}</strong> : link}
            </Link>
          </li>
        ))}
        <li className="nav-item">
          <Link to="/Kanbas" className="nav-link fs-5 text-danger">
            Kanbas
          </Link>
        </li>
      </ul>
    </div>
  );
}