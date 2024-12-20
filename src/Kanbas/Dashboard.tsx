import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { enroll, unenroll } from "./Enrollment/reducer";

export default function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse,
  updateCourse, enrolling, setEnrolling, updateEnrollment }: {
    courses: any[]; course: any; setCourse: (course: any) => void; addNewCourse: () => void;
    deleteCourse: (course: any) => void; updateCourse: () => void; enrolling: boolean;
    setEnrolling: (enrolling: boolean) => void; updateEnrollment: (courseId: string, enrolled: boolean) => void;

  }) {

  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const toggleEnrollments = () => setShowAllCourses(!showAllCourses);
  const enrollments: any[] = [];
  const [enrolledCourses, setEnrolledCourses] = useState(
    enrollments.map((course) => course)
  );

  const filteredCourses = showAllCourses ? courses : courses.filter((course) => enrolledCourses.includes(course._id));
  const handleEnroll = (courseId: string) => {
    dispatch(enroll({ userId: currentUser._id, courseId }));
    setEnrolledCourses((prev) => [...prev, courseId]);
  };

  const handleUnenroll = (courseId: string) => {
    dispatch(unenroll({ userId: currentUser._id, courseId }));
    setEnrolledCourses((prev) => prev.filter((id) => id !== courseId));
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
        <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      </h1>

      {currentUser?.role === "FACULTY" && (<>
        <h5> New Course
          <button className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          > Add </button>

          <button className="btn btn-warning float-end me-2"
            onClick={updateCourse}
            id="wd-update-course-click"
          > Update
          </button></h5><br />

        <input defaultValue={course.name}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />

        <textarea defaultValue={course.description}
          className="form-control"
          onChange={(e) => setCourse({ ...course, description: e.target.value })}
        /></>
      )}

      {currentUser?.role === "STUDENT" && (
        <button className="btn btn-primary float-end" onClick={toggleEnrollments}>
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </button>)}

      <h2 id="wd-dashboard-published">
        Published Courses ({filteredCourses.length})</h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-4 g-5">
          {courses.map((course) => {
            const isEnrolled = enrolledCourses.includes(course._id);
            return (
              <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                <div className="card rounded-3 overflow-hidden">
                  <Link to={`/Kanbas/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <img src="/images/reactjs.jpg" alt=" " width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {enrolling && (
                          <button onClick={(event) => {
                            event.preventDefault();
                            updateEnrollment(course._id, !course.enrolled);
                          }}
                            className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                            {course.enrolled ? "Unenroll" : "Enroll"}
                          </button>
                        )}
                        {course.name}
                      </h5>
                      <p className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>

                      <button className="btn btn-primary">Go</button>

                      {currentUser?.role === "FACULTY" && (
                        <>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                          > Delete
                          </button>

                          <button id="wd-edit-course-click" onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                            className="btn btn-warning me-2 float-end"
                          > Edit
                          </button>
                        </>
                      )}

                      {currentUser?.role === "STUDENT" && (
                        <button onClick={(event) => {
                          event.preventDefault();
                          isEnrolled ? handleUnenroll(course._id) : handleEnroll(course._id);
                        }}
                          className={`btn float-end ${isEnrolled ? "btn-danger" : "btn-success"}`}
                        >
                          {isEnrolled ? "Unenroll" : "Enroll"}
                        </button>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}