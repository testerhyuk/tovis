package com.tovis.worklog.controller;

import com.tovis.worklog.service.WorkRequest;
import com.tovis.worklog.service.WorkResponse;
import com.tovis.worklog.service.WorkService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class WorkController {
    private final WorkService workService;

    @PostMapping("/v1/worklogs")
    public WorkResponse create(@RequestBody WorkRequest request) {
        return workService.create(request);
    }

    @GetMapping("/v1/datas")
    public List<WorkResponse> readAll() {
        return workService.readAll();
    }
}
