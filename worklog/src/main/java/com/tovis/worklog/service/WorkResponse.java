package com.tovis.worklog.service;

import com.tovis.worklog.entity.Work;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@ToString
public class WorkResponse {
    private Long workId;
    private String workType;
    private String worker;
    private int quantity;
    private LocalDateTime workFinished;

    public static WorkResponse from(Work work) {
        WorkResponse response = new WorkResponse();
        response.workId = work.getWorkId();
        response.workType = work.getWorkType();
        response.worker = work.getWorker();
        response.quantity = work.getQuantity();
        response.workFinished = work.getWorkFinished();
        return response;
    }

    public static List<WorkResponse> fromList(List<Work> works) {
        return works.stream().map(WorkResponse::from).toList();
    }
}
