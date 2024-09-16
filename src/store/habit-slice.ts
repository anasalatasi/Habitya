import { createSlice } from "@reduxjs/toolkit";

export interface Habit {
    id: String;
    name: String;
    frequency: "daily" | "weekly" | "monthly";
    complatedDates: string[];
    createdAt: String;
}

interface HabitState{
    habits: Habit[];
}

const initialState: HabitState = {
    habits:[],
};

const habitSlice = createSlice({
    name:"habits",
    initialState,
    reducers: {
        addHabit: () => {},
        removeHabit: () => {},
        toggleHabit: () => {},
    }
})



export const { addHabit, removeHabit, toggleHabit } = habitSlice.actions;

export default habitSlice.reducer;