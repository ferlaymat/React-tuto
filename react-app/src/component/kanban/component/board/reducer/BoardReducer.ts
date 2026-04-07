import type { Action, Task } from "../../../shared/model/Types";

//externalize and centralize handlers in one function 
function BoardReducer(columns: string[], withApiSync: boolean = false) {
    //add an action type to select which handler will be apply
    return function(state: Task[], action: Action): Task[] {
  switch (action.type) {
    case 'MOVE':
      return state.map(t => {
        if (t.id !== action.id) return t;
        const idx = columns.indexOf(t.column);
        const newIdx = Math.max(0, Math.min(columns.length - 1, idx + action.direction));
        return { ...t, column: columns[newIdx] };
      });

    case 'DELETE':
      return state.filter(t => t.id !== action.id);

    case 'ADD':
      if (withApiSync) {
            // Http version
            return [...state, {
              id: action.tempId,
              title: action.title,
              priority: action.priority,
              column: columns[0],
            }];
          } else {
            // Standard version 
            return [...state, {
              id: Date.now(),
              title: action.title,
              priority: action.priority,
              column: columns[0],
            }];
          }
    //only for http case
    case 'UPDATE_FROM_API':
          if (withApiSync) {
            //retrieve task by temporary ID then update it
            return state.map(t =>
              t.id === action.tempId ? action.payload : t
            );
          }
          return state;

    default:
      return state;
  }
};
}

export default BoardReducer;