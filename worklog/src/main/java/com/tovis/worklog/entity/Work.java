package com.tovis.worklog.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;

@Entity
@Table(name = "work")
@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Work {
    @Id
    private Long workId;
    private String workType;
    private String worker;
    private int quantity;
    private LocalDateTime workFinished;

    public static Work create(Long workId, String workType, String worker, int quantity) {
        Work work = new Work();
        work.workId = workId;
        work.workType = workType;
        work.worker = worker;
        work.quantity = quantity;
        work.workFinished = LocalDateTime.now();

        return work;
    }
}
