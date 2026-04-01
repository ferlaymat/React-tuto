export type Priority = 'high' | 'medium' | 'low';

export interface Task{
    id: number;
    title: string;
    column: string;
    priority: Priority;
}