import { useState } from "react";
export default function Modules() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const expandCollapse = () => { 
        setIsCollapsed(!isCollapsed); 
      };

    return (
      <div>
        <div>
            <button onClick={expandCollapse}>Collapse All</button>
            <button>
                View Progress
            </button>
            <select>
                <option>Publish All</option>
                <option>Publish Module 1</option>
                <option>Publish Module 2</option>
                <option>Publish Module 3</option>
            </select>
            <button>+ Module</button>
           
        </div>
        <ul id="wd-modules">
            <li className="wd-module">
            <div className="wd-title">Week 1</div>
            {!isCollapsed && (
                <ul className="wd-lessons">
                <li className="wd-lesson">
                    <span className="wd-title">LEARNING OBJECTIVES</span>
                    <ul className="wd-content">
                    <li className="wd-content-item">Introduction to the course</li>
                    <li className="wd-content-item">Learn what is Web Development</li>
                    </ul>
                </li>
                </ul>
            )}
            </li>
            
            <li className="wd-module">
          <div className="wd-title">Week 2</div>
          {!isCollapsed && (
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}
  