import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type EnrollmentState = {
    enrollments: { userId: string; courseId: string }[];
};

const initialState: EnrollmentState = {
    enrollments: [],
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        enroll: (
            state,
            action: PayloadAction<{ userId: string; courseId: string }>
        ) => {
            const { userId, courseId } = action.payload;
            if (
                !state.enrollments.find(
                    (enrollment) =>
                        enrollment.userId === userId && enrollment.courseId === courseId
                )
            ) {
                state.enrollments.push({ userId, courseId });
            }
        },
        unenroll: (
            state,
            action: PayloadAction<{ userId: string; courseId: string }>
        ) => {
            const { userId, courseId } = action.payload;
            state.enrollments = state.enrollments.filter(
                (enrollment) =>
                    !(
                        enrollment.userId === userId && enrollment.courseId === courseId
                    )
            );
        },
        resetEnrollments: (state) => {
            state.enrollments = [];
        },
    },
});

export const { enroll, unenroll, resetEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;