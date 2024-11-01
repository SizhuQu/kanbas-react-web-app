import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type EnrollmentState = {
    enrollments: { [userId: string]: string[] };
};

const initialState: EnrollmentState = {
    enrollments: {},
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        enroll: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
            const { userId, courseId } = action.payload;
            state.enrollments[userId] = state.enrollments[userId] || [];
            if (!state.enrollments[userId].includes(courseId)) {
                state.enrollments[userId].push(courseId);
            }
        },
        unenroll: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
            const { userId, courseId } = action.payload;
            if (state.enrollments[userId]) {
                state.enrollments[userId] = state.enrollments[userId].filter(id => id !== courseId);
            }
        },
        resetEnrollments: (state) => {
            state.enrollments = {};
        }
    },
});

export const { enroll, unenroll, resetEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;