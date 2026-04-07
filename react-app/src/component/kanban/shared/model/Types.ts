export type Priority = 'high' | 'medium' | 'low';

export interface Task{
    id: number;
    title: string;
    column: string;
    priority: Priority;
}

export type Action =
  | { type: 'MOVE';   id: number; direction: number }
  | { type: 'DELETE'; id: number }
  | { type: 'ADD';    title: string; priority: Priority; tempId: number }
  | { type: 'INIT';   payload: Task[] }
  | { type: 'UPDATE_FROM_API';   payload: Task; tempId: number };