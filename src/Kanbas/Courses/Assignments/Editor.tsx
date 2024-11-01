import { useParams, Link } from "react-router-dom";
import { assignments } from "../../Database";

type AssignmentsProps = {
  isFaculty: boolean;
};

export default function AssignmentEditor({ isFaculty }: AssignmentsProps) {
  const { aid } = useParams();
  const assignment = assignments.find((assignment) => assignment._id === aid);

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="row mb-1">
        <div className="col-md-10">
          <label htmlFor="wd-name" className="form-label fw-bold">Assignment Name</label>
          <input
            id="wd-name"
            className="form-control"
            value={assignment?.title || ''}
            readOnly={!isFaculty} 
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-10">
          <label htmlFor="wd-description" className="form-label fw-bold">Description</label>
          <textarea
            id="wd-description"
            className="form-control"
            rows={5}
            value="The assignment is available online."
            readOnly={!isFaculty} 
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-2">
          <label htmlFor="wd-points" className="form-label fw-bold">Points</label>
        </div>
        <div className="col-md-8">
          <input id="wd-points" className="form-control" value={100} readOnly={!isFaculty} />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-2">
          <label htmlFor="wd-group" className="form-label fw-bold">Assignment Group</label>
        </div>
        <div className="col-md-8">
          <select id="wd-group" className="form-control" disabled={!isFaculty}>
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>EXAMS</option>
            <option>PROJECT</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-2">
          <label htmlFor="wd-display-grade-as" className="form-label fw-bold">Display Grade as</label>
        </div>
        <div className="col-md-8">
          <select id="wd-display-grade-as" className="form-control" disabled={!isFaculty}>
            <option>Percentage</option>
            <option>Complete/Incomplete</option>
            <option>Points</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-2">
          <label htmlFor="wd-submission-type" className="form-label fw-bold">Submission Type</label>
        </div>
        <div className="col-md-8">
          <div className="border p-3">
            <select id="wd-submission-type" className="form-control mb-3" disabled={!isFaculty}>
              <option>Online</option>
              <option>On Paper</option>
            </select>

            <fieldset className="border p-3">
              <legend className="fw-bold">Online Entry Options</legend>
              <div className="form-check">
                <input type="checkbox" id="wd-text-entry" className="form-check-input" disabled={!isFaculty} />
                <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="wd-website-url" className="form-check-input" defaultChecked disabled={!isFaculty} />
                <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="wd-media-recordings" className="form-check-input" disabled={!isFaculty} />
                <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="wd-student-annotation" className="form-check-input" disabled={!isFaculty} />
                <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="wd-file-upload" className="form-check-input" disabled={!isFaculty} />
                <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end mt-4">
        <Link
          to={`/Kanbas/Courses/${assignment?.course || ''}/Assignments`}
          id="wd-cancel"
          className="btn btn-light me-2"
        >
          Cancel
        </Link>
        {isFaculty && (
          <button id="wd-save" className="btn btn-danger">
            Save
          </button>
        )}
      </div>
    </div>
  );
}