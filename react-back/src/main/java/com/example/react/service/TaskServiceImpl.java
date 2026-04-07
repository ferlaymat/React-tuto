package com.example.react.service;

import com.example.react.model.Task;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class TaskServiceImpl implements TaskService{
    private Map<Long, Task> mapOfTasks = new HashMap<>();
    @Override
    public Task createTask(Task task) {
        Long id = new Date().getTime();
        task.setId(id);
        this.mapOfTasks.put(id, task);
        return task;
    }

    @Override
    public Task getTaskById(Long id) {
        return this.mapOfTasks.get(id);
    }

    @Override
    public List<Task> getAllTasks() {
        return this.mapOfTasks.values().stream().toList();
    }

    @Override
    public Task updatTask(Task task) {
        if(this.mapOfTasks.get(task.getId())!=null){
            this.mapOfTasks.put(task.getId(), task);
            return task;
        }
        throw new IllegalArgumentException("task not found");
    }

    @Override
    public void deleteTask(Long id) {
        if(this.mapOfTasks.get(id)!=null){
            this.mapOfTasks.remove(id);
        }
        throw new IllegalArgumentException("task not found");
    }

    @Override
    public void deleteTaskList(List<Long> idList) {
       if(this.mapOfTasks.keySet().containsAll(idList)){
           for(long id: idList) {
               this.mapOfTasks.remove(id);
           }
       }
        throw new IllegalArgumentException("All least once task not found");
    }
}
