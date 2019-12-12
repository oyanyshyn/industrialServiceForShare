package com.example.customquery.dto.response;


import com.example.customquery.entity.Absenteeism;
import com.example.customquery.entity.PresenceWork;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
public class AbsenteeismResponse {

    private long id;
    private Integer collective;
    private String worker;
    private LocalDate date;
    private LocalTime time;
    private PresenceWork statusScan;

    public AbsenteeismResponse(Absenteeism absenteeism) {
        this.id = absenteeism.getId();
        this.collective = absenteeism.getCollective().getNameCollective();
        this.worker = absenteeism.getWorker().getNumberOperator();
        this.date = absenteeism.getDate();
        this.time = absenteeism.getTime();
        this.statusScan = absenteeism.getStatusScan();
    }
}
