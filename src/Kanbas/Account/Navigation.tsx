import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();

  return (
    <div className="col-md-2 p-3">
      <ul className="nav flex-column">
        {links.map((link) => (
          <li className="nav-item" key={link}>
            <Link
              to={`/Account/${link}`}
              className={`nav-link fs-5 ${active(link)} ${pathname.includes(`/Account/${link}`) ? "text-black" : "text-danger"
                }`}
            >
              {link === "Signin" ? <strong>{link}</strong> : link}
            </Link>
          </li>
        ))}
        <li className="nav-item">
          {currentUser && currentUser.role === "ADMIN" && (
            <Link
              to={`/Kanbas/Account/Users`}
              className={`nav-link fs-5 text-danger ${active("Users")} ${pathname.includes("Users") ? "text-black" : ""
                }`}
            >
              Users
            </Link>
          )}
        </li>

        <li className="nav-item">
          <Link
            to="/Kanbas"
            className={`nav-link fs-5 text-danger ${active("Kanbas")} ${pathname === "/Kanbas" ? "text-black" : ""
              }`}
          >
            Kanbas
          </Link>
        </li>
      </ul>
    </div>
  );
}