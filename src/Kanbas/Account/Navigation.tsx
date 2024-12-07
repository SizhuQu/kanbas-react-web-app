import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  const { pathname } = useLocation();

  return (
    <div className="col-md-2 p-3 nav-link fs-5 text-danger">
      {links.map((link) => (
        <Link key={link}
          to={`/Kanbas/Account/${link}`}
          className={`list-group-item ${active(link)}`}>
          {link}
        </Link>
      ))}

      <Link to="/Account/Profile" className="nav-link fs-5 text-danger">
        Profile
      </Link>

      <Link to="/Kanbas" className="nav-link fs-5 text-danger">
        Kanbas
      </Link>
      {currentUser && currentUser.role === "ADMIN" && (
        <Link to={`/Kanbas/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link>)}
    </div >
  );
}