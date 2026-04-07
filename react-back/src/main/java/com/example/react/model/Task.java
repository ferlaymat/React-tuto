package com.example.react.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class Task {
    private Long id;
    private String title;
    private String column;
    private Priority priority;

}
