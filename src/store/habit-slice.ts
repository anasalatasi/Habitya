import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Habit {
    id: String;
    name: String;
    frequency: "daily" | "weekly" | "monthly";
    completedDates: string[];
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
        addHabit: (
            state,
            action: PayloadAction<{ name: string; frequency: "daily" | "weekly" | "monthly" }>
          ) => {
            const newHabit: Habit = {
              id: Date.now().toString(),
              name: action.payload.name,
              frequency: action.payload.frequency,
              completedDates: [],
              createdAt: new Date().toISOString(),
            };
            state.habits.push(newHabit);
          },
        removeHabit: () => {},
        toggleHabit: () => {},
    }
})



export const { addHabit, removeHabit, toggleHabit } = habitSlice.actions;

export default habitSlice.reducer;