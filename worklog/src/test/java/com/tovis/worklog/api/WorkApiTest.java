package com.tovis.worklog.api;

import com.tovis.worklog.service.WorkRequest;
import com.tovis.worklog.service.WorkResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.junit.jupiter.api.Test;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.web.client.RestClient;

import java.util.List;

public class WorkApiTest {
    RestClient restClient = RestClient.create("http://localhost:8080");

    @Test
    void createTest() {
        WorkResponse response = create(new WorkRequest(
                "김규혁", 300
        ));

        System.out.println("response = " + response);
    }

    WorkResponse create(WorkRequest request) {
        return restClient.post()
                .uri("/v1/worklogs")
                .body(request)
                .retrieve()
                .body(WorkResponse.class);
    }

    @Test
    void readAllTest() {
        List<WorkResponse> response = restClient.get()
                .uri("/v1/datas")
                .retrieve()
                .body(new ParameterizedTypeReference<List<WorkResponse>>() {});

        System.out.println("datas = " + response);
    }

    @Getter
    @AllArgsConstructor
    static class WorkRequest {
        private String worker;
        private int quantity;
    }
}
