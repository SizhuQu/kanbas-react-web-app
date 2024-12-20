import { useLocation, Link } from "react-router-dom";

export default function TOC() {
  const { pathname } = useLocation();
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link to="/Labs" className="nav-link">
          Labs
        </Link>
      </li>
      <li
        className="nav-item">
        <a
          id="wd-a1"
          href="#/Labs/Lab1"
          className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>Lab 1</a>
      </li>
      <li
        className="nav-item">
        <a
          id="wd-a2"
          href="#/Labs/Lab2"
          className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>Lab 2</a>
      </li>
      <li
        className="nav-item">
        <a
          id="wd-a3"
          href="#/Labs/Lab3"
          className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>Lab 3</a>
      </li>
      <li
        className="nav-item">
        <a
          id="wd-a4"
          href="#/Labs/Lab4"
          className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}>Lab 4</a>
      </li>
      <li
        className="nav-item">
        <a
          id="wd-a5"
          href="#/Labs/Lab5"
          className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}>Lab 5</a>
      </li>
      <li
        className="nav-item">
        <a
          id="wd-k"
          href="#/Kanbas"
          className="nav-link">Kanbas</a></li>
      <li
        className="nav-item">
        <a
          id="wd-github"
          href="https://github.com/SizhuQu/kanbas-react-web-app.git"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link">
          My GitHub
        </a>
      </li>
      <li
        className="nav-item">
        <a
          id="wd-github"
          href="https://github.com/SizhuQu/kanbas-react-web-app/tree/A5"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link">
          My GitHub React Repository A5
        </a>
      </li>
      <li
        className="nav-item">
        <a
          id="wd-github"
          href="https://github.com/SizhuQu/kanbas-node-server-app.git"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link">
          My GitHub Node Repository
        </a>
      </li>
      <li
        className="nav-item">
        <a
          id="wd-node"
          href="https://sizhu-kanbas-node-server-app-879b30afbe20.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link">
          Deplyed Node Server
        </a>
      </li>


    </ul>
  );
}
