import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENT_API = `${REMOTE_SERVER}/api/enrollments`;

export const enrollUserInCourse = async () => {
    const { data } = await axios.get(ENROLLMENT_API);
    return data;
};

export const unenrollUserFromCourse = async () => {
    const { data } = await axios.delete(ENROLLMENT_API);
    return data;
}
