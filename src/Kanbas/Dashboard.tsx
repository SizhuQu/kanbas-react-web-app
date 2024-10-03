import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-4 g-5">


          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">

                <img src="/images/reactjs.jpg" alt="" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>

                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/2345/Home">
                <img src="/images/java.jpg" alt="java" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS2345 Java
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Welcome to Java Programming
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/3456/Home">
                <img src="/images/python.jpg" alt="python" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS3456 Python
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Welcome to Python Programming
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/4567/Home">
                <img src="/images/C++.jpg" alt="C++" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS4567 C++
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Welcome to C++ Programming
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5678/Home">
                <img src="/images/javascript.jpg" alt="javascript" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5678 JavaScript
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Welcome to JavaScript Programming
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/6789/Home">
                <img src="/images/Ca.jpg" alt="C#" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS6789 C#
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Welcome to C# Programming
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/7890/Home">
                <img src="/images/Html.jpg" alt="html" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS7890 HTML
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Welcome to HTML Programming
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
