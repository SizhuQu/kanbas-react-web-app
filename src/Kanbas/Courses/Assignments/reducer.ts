import { createSlice } from "@reduxjs/toolkit";
import { assignments as initialAssignments } from "../../Database";

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState: { assignments: initialAssignments },
    reducers: {
        addAssignment: (state, action) => {
            state.assignments.push(action.payload);
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment: any) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            const index = state.assignments.findIndex(
                (assignment: any) => assignment._id === action.payload._id
            );
            if (index !== -1) {
                state.assignments[index] = action.payload;
            }
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;