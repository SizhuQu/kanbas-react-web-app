import { useState } from "react";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const collapseAll = () => setIsCollapsed(!isCollapsed);
  const viewProgress = () => console.log("View Progress");

  return (

    <div className="container">
      <div className="row mb-3">
        <div className="col-12 d-flex justify-content-end align-items-center">
          <ModulesControls collapseAll={collapseAll} viewProgress={viewProgress} />
        </div>
      </div>

      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1
            <ModuleControlButtons />

            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
                <LessonControlButtons /></li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                Introduction to the course
                <LessonControlButtons /> </li>
              <li className="wd-lesson list-group-item p-3 ps-1">Learn what is Web Development </li>
              <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
              <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
            </ul>
          </div>
        </li>


        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 2
            <ModuleControlButtons />

            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
                <LessonControlButtons /></li>
              <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
              <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>



  );
}
