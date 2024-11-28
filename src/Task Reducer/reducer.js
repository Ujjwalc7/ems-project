export const reducer = (state, action) =>{
    switch(action.type){
        case "ADD_TASK":
            return [...state, action.payload];
        case "DELETE_TASK":
            const updatedTasks = state.filter((task) => task.id !== action.payload);
            return updatedTasks;
        default:
            throw new Error();
    }
}