package com.tovis.worklog.service;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class WorkRequest {
    String workType;
    String worker;
    int quantity;
}
