import { createSelector } from "reselect";

const userDataSelector = (state)=>[];

const getUserState =(state,{index}) =>({
    ...userDataSelector(state)[index]
})

const getUserStateById = (state,{userId}) => ({
    ...userDataSelector(state).find(user => user.id === userId)})

export const userSelector = createSelector(
    getUserState,
    user=>user,
)