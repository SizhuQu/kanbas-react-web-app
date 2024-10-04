import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" style={{ width: 120 }}
      className="list-group rounded-0 position-fixed
      bottom-0 top-0 d-none d-md-block bg-black z-2">

      <a id="wd-neu-link" target="_blank"
        href="https://www.northeastern.edu/"
        rel="noopener noreferrer"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" alt=" " width="75px" /></a>

      <NavLink
        to="/Kanbas/Account"
        className={({ isActive }) =>
          isActive ? "list-group-item bg-danger text-white text-center border-0"
            : "list-group-item bg-black text-white text-center border-0"
        }
      >
        <FaRegCircleUser className="fs-1" /><br />
        Account
      </NavLink>

      <NavLink
        to="/Kanbas/Dashboard"
        className={({ isActive }) =>
          isActive ? "list-group-item bg-danger text-white text-center border-0"
            : "list-group-item bg-black text-white text-center border-0"
        }
      >
        <AiOutlineDashboard className="fs-1" /><br />
        Dashboard
      </NavLink>

      <NavLink
        to="/Kanbas/Courses"
        className={({ isActive }) =>
          isActive ? "list-group-item bg-danger text-white text-center border-0"
            : "list-group-item bg-black text-white text-center border-0"
        }
      >
        <LiaBookSolid className="fs-1" /><br />
        Courses
      </NavLink>

      <NavLink
        to="/Kanbas/Calendar"
        className={({ isActive }) =>
          isActive ? "list-group-item bg-danger text-white text-center border-0"
            : "list-group-item bg-black text-white text-center border-0"
        }
      >
        <IoCalendarOutline className="fs-1" /><br />
        Calendar
      </NavLink>

      <NavLink
        to="/Kanbas/Inbox"
        className={({ isActive }) =>
          isActive ? "list-group-item bg-danger text-white text-center border-0"
            : "list-group-item bg-black text-white text-center border-0"
        }
      >
        <FaInbox className="fs-1" /><br />
        Inbox
      </NavLink>

      <NavLink
        to="/Kanbas/Labs"
        className={({ isActive }) =>
          isActive ? "list-group-item bg-danger text-white text-center border-0"
            : "list-group-item bg-black text-white text-center border-0"
        }
      >
        <LiaCogSolid className="fs-1" /><br />
        Labs
      </NavLink>
    </div>
  );
}