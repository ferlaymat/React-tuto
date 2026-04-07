// hooks/useTasks.ts
import { useReducer, useEffect, useState } from 'react';
import { getTasks, postTask, putTask, deleteTask } from '../service/TaskService';
import { type Action } from '../model/Types';
import BoardReducer from '../../component/board/reducer/BoardReducer';

function useTasks(columnList: string[]) {
  const [tasks, dispatch]   = useReducer(BoardReducer(columnList,true), []);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState<string | null>(null);

  // GET load data at the first call
  useEffect(() => {
    getTasks()
      .then(data => dispatch({ type: 'INIT', payload: data }))
      .catch(e  => setError(e.message))
      .finally(  () => setLoading(false));
  }, []);

  //Synchronization with the API
  async function dispatchWithSync(action: Action) {
    if(action.type != 'ADD'){
    dispatch(action); // optimistic update
  }

    try {
      switch (action.type) {
        case 'ADD':
          const tempId = Date.now();
        // 1. Optimistic update with temporary ID
        // temporary ID is needed in order to be able to retrieve the task to update
          dispatch({ type: 'ADD', title: action.title, priority: action.priority, tempId });
        //2. call TaskService method
          const createdTask = await postTask({
            title:    action.title,
            priority: action.priority,
            column:   columnList[0],
          });
        // 3. replace temporary id with generated id
          dispatch({ type: 'UPDATE_FROM_API', payload: createdTask, tempId });
          break;
        case 'MOVE': {
          const task = tasks.find(t => t.id === action.id);
          if (task) await putTask(task);
          break;
        }
        case 'DELETE':
          await deleteTask(action.id);
          break;
      }
    } catch (e) {
      setError('Error of synchronization');
      // reload data from API
      getTasks()
        .then(data => dispatch({ type: 'INIT', payload: data }))
        .catch(() => {});
    }
  }

  return { tasks, dispatch: dispatchWithSync, loading, error };
}

export default useTasks;