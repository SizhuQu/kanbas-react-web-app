import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addAssignment, updateAssignment } from "./reducer";

type AssignmentEditorProps = {
  isFaculty: boolean;
};

export default function AssignmentEditor({ isFaculty }: AssignmentEditorProps) {
  const { aid, cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments || []);
  const assignment = assignments.find((assignment: any) => assignment._id === aid);

  const [title, setTitle] = useState(assignment ? assignment.title : "");
  const [description, setDescription] = useState(assignment ? assignment.description : "");
  const [points, setPoints] = useState(assignment ? assignment.points : 100);
  const [dueDate, setDueDate] = useState(assignment ? assignment.dueDate : "2024-05-13T23:59");
  const [availableFrom, setAvailableFrom] = useState(assignment ? assignment.availableFrom : "2024-05-06T00:00");
  const [availableUntil, setAvailableUntil] = useState(assignment ? assignment.availableUntil : "2024-05-20T23:59");
  

  const handleSave = () => {
    const newAssignment = {
      _id: aid || new Date().toISOString(),
      course: cid,
      title,
      description,
      points,
      dueDate,
      availableFrom,
      availableUntil,
    };

    if (aid) {
      dispatch(updateAssignment(newAssignment));
    } else {
      dispatch(addAssignment(newAssignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };
  // eslint-disable-next-line
  const handleCancel = () => navigate(`/Kanbas/Courses/${cid}/Assignments`);

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="row mb-1">
        <div className="col-md-10">
          <label htmlFor="wd-name" className="form-label fw-bold">Assignment Name</label>
          <input
            id="wd-name"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            readOnly={!isFaculty}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-2">
          <label htmlFor="wd-points" className="form-label fw-bold">Points</label>
        </div>
        <div className="col-md-8">
          <input
            id="wd-points"
            className="form-control"
            type="number"
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}
            readOnly={!isFaculty}
          />
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

      <div className="row mb-3">
        <div className="col-md-2">
          <label htmlFor="wd-assign-to" className="form-label fw-bold">Assign</label>
        </div>
        <div className="col-md-8">
          <div className="border p-3">
            <div className="row mb-3">
              <div className="col-md-12">
                <label htmlFor="wd-assign-to" className="form-label fw-bold">Assign to</label>
                <input id="wd-assign-to" className="form-control" value="Everyone" readOnly={!isFaculty} />
              </div>
              <div className="col-md-12">
                <label htmlFor="wd-due-date" className="form-label fw-bold">Due</label>
                <input
                  id="wd-due-date"
                  type="datetime-local"
                  className="form-control"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  readOnly={!isFaculty}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label>
                <input
                  id="wd-available-from"
                  type="datetime-local"
                  className="form-control"
                  value={availableFrom}
                  onChange={(e) => setAvailableFrom(e.target.value)}
                  readOnly={!isFaculty}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
                <input
                  id="wd-available-until"
                  type="datetime-local"
                  className="form-control"
                  value={availableUntil}
                  onChange={(e) => setAvailableUntil(e.target.value)}
                  readOnly={!isFaculty}
                />
              </div>
            </div>
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
          <button id="wd-save" className="btn btn-danger" onClick={handleSave}>
            Save
          </button>
        )}
      </div>
    </div>
  );
}