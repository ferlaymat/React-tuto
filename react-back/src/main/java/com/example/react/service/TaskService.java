package com.example.react.service;

import com.example.react.model.Task;

import java.util.List;

public interface TaskService {

    Task createTask(Task task);
    Task getTaskById(Long id);
    List<Task> getAllTasks();
    Task updatTask(Task task);
    void deleteTask(Long id);
    void deleteTaskList(List<Long> idList);
}
