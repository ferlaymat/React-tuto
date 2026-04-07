// services/taskService.ts
import { type Task } from '../model/Types';

const BASE_URL = 'http://localhost:8080/api/v1/task';

async function getTasks(): Promise<Task[]> {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error('Error during the fecth');
  return response.json();
}

async function postTask(task: Omit<Task, 'id'>): Promise<Task> {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  if (!response.ok) throw new Error('Error during data storage');
  return response.json(); 
}

async function putTask(task: Task): Promise<Task> {
  const response = await fetch(BASE_URL, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  if (!response.ok) throw new Error('Error during data modification');
  return response.json();
}

async function deleteTask(id: number): Promise<void> {
  const response = await fetch(`${BASE_URL}/id/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Error during data deletion');
}

export { getTasks, postTask, putTask, deleteTask };