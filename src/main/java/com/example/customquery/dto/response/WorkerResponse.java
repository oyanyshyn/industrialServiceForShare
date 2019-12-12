package com.example.customquery.dto.response;

import com.example.customquery.entity.Worker;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class WorkerResponse {

    private long id;
    private long cardId;
    private  String numberOperator;

    public WorkerResponse(Worker worker) {
        this.id = worker.getId();
        this.cardId = worker.getCardId();
        this.numberOperator = worker.getNumberOperator();
    }
}
