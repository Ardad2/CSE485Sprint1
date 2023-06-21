import { createSlice } from '@reduxjs/toolkit';

const behaviorsSlice = createSlice({
    name: 'behaviors',
    initialState: {
        ids: [],   
        texts: [],
        dates: [],
        icons: [],

    },

    reducers: {
        addBehavior: (state, action) => {
            state.ids.push(action.payload.id);
            state.ids.push(action.payload.text);
            state.ids.push(action.payload.date);
            state.ids.push(action.payload.icon);

        },
        removeBehavior: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
            state.ids.splice(state.ids.indexOf(action.payload.text), 1);
            state.ids.splice(state.ids.indexOf(action.payload.date), 1);
            state.ids.splice(state.ids.indexOf(action.payload.icon), 1);

        }
    }
});

export const addBehavior = behaviorsSlice.actions.addBehavior;
export const removeBehavior = behaviorsSlice.actions.removeBehavior;
export default behaviorsSlice.reducer;