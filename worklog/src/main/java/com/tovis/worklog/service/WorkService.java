package com.tovis.worklog.service;

import com.tovis.worklog.entity.Work;
import com.tovis.worklog.repository.WorkRepository;
import com.tovis.worklog.snowflake.Snowflake;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class WorkService {
    private final WorkRepository workRepository;
    private final Snowflake snowflake = new Snowflake();

    @Transactional
    public WorkResponse create(WorkRequest request) {
        Work work = workRepository.save(
                Work.create(snowflake.nextId(), request.getWorkType() ,request.getWorker(), request.getQuantity())
        );

        return WorkResponse.from(work);
    }

    public List<WorkResponse> readAll() {
        List<Work> works = workRepository.findAll();

        return WorkResponse.fromList(works);
    }
}
