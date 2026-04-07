package com.example.react.controller;

import com.example.react.model.Task;
import com.example.react.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/task")
public class TaskController {

    private final TaskService taskService;

    @PostMapping
    Task createTask(@RequestBody Task task){
        return this.taskService.createTask(task);
    }

    @GetMapping("/id/{id}")
    Task getTaskById(@PathVariable("id") Long id){
        return this.taskService.getTaskById(id);
    }

    @GetMapping
    List<Task> getAllTasks(){
        return this.taskService.getAllTasks();
    }

    @PutMapping
    Task updatTask(@RequestBody Task task){
        return this.taskService.updatTask(task);
    }

    @DeleteMapping("/id/{id}")
    void deleteTask(@PathVariable("id") Long id) {
        this.taskService.deleteTask(id);
    }

    @DeleteMapping
    void deleteTaskList(@RequestBody List<Long> idList){
        this.taskService.deleteTaskList(idList);
    }
}
