import type { Action, Task } from "../../shared/model/Types";

//externalize and centralize handlers in one function 
function BoardReducer(columns: string[]) {
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
      return [
        ...state,
        {
          id: Date.now(),
          title: action.title,
          priority: action.priority,
          column: columns[0],
        },
      ];

    default:
      return state;
  }
};
}

export default BoardReducer;