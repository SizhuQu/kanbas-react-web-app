import { useParams, Link, useNavigate } from "react-router-dom";
import { FaPlus, FaCheckCircle, FaEllipsisV, FaBook, FaSearch, FaGripVertical } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";

type AssignmentsProps = {
  isFaculty: boolean;
};

export default function Assignments({ isFaculty }: AssignmentsProps) {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments || []);

  const filteredAssignments = assignments.filter((assignment: any) => assignment.course === cid);

  const handleAddAssignment = () => {
    if (isFaculty) {
      navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
    }
  };

  const handleDeleteAssignment = (assignmentId: string) => {
    if (isFaculty && window.confirm("Are you sure you want to delete this assignment?")) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div id="wd-assignments" className="container">
      <div className="row mb-3">
        <div className="col-12 d-flex justify-content-between align-items-center mb-4">
          <div className="input-group w-50">
            <span className="input-group-text bg-light">
              <FaSearch />
            </span>
            <input
              id="wd-search-assignment"
              className="form-control"
              placeholder="Search for Assignments"
            />
          </div>
          {isFaculty && (
            <div>
              <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
                + Group
              </button>
              <button id="wd-add-assignment" className="btn btn-danger" onClick={handleAddAssignment}>
                + Assignment
              </button>
            </div>
          )}
        </div>

        <div className="list-group border rounded-0">
          <div className="d-flex justify-content-between align-items-center list-group-item bg-light">
            <div className="d-flex align-items-center">
              <FaGripVertical className="me-2 text-secondary fs-4" />
              <h5 className="mb-0 ms-2 fw-bold">ASSIGNMENTS</h5>
            </div>
            <div className="d-flex align-items-center">
              <span
                className="badge bg-light text-dark px-3 py-1 me-3"
                style={{
                  borderRadius: "15px",
                  border: "1px solid #ddd",
                  fontSize: "0.9rem",
                  fontWeight: "normal",
                }}
              >
                40% of Total
              </span>
              {isFaculty && (
                <>
                  <button className="btn p-0 me-3" style={{ border: "none", background: "none" }}>
                    <FaPlus className="text-secondary" />
                  </button>
                  <button className="btn p-0" style={{ border: "none", background: "none" }}>
                    <FaEllipsisV className="text-secondary" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <ul className="list-group list-group-flush">
          {filteredAssignments.map((assignment: any) => (
            <li
              key={assignment._id}
              className="list-group-item d-flex align-items-center justify-content-between"
              style={{
                border: '1px solid #000',
                borderLeft: '5px solid #006400',
                borderRadius: '0',
              }}
            >
              <div className="d-flex align-items-center">
                <FaGripVertical className="me-2 text-secondary fs-4" />
                <FaBook className="me-2 text-success fs-4" />
                <div>
                  <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="fw-bold text-dark text-decoration-none">
                    {assignment.title}
                  </Link>
                  <p className="text-muted mb-0">
                    {assignment.course} | <strong>Not available until</strong> May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success fs-5 me-2" />
                {isFaculty && (
                  <button
                    onClick={() => handleDeleteAssignment(assignment._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}