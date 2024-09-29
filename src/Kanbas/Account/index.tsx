import { Routes, Route, Navigate } from "react-router";
import KanbasNavigation from "./Navigation";
import Dashboard from "../Dashboard";
import Courses from "../Courses";
export default function Account() {
  return (
    <div id="wd-kanbas">
      <div>
        <KanbasNavigation />
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Courses/:cid/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}
