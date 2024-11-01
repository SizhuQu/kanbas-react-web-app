import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { Route, Routes, useParams, useLocation } from "react-router";
import { useSelector } from "react-redux";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state: any) => state.account);
  const isFaculty = currentUser?.role === "FACULTY";

  return (
    <div id="wd-courses">
      <h2 className="text-danger">

        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules isFaculty={isFaculty} />} />
            <Route path="Assignments" element={<Assignments isFaculty={isFaculty} />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor isFaculty={isFaculty} />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
