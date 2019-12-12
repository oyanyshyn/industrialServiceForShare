package com.example.customquery.dto.response;

import com.example.customquery.entity.LevelProcess;
import com.example.customquery.entity.ResultOfTest;
import com.example.customquery.entity.ResultTest;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@ToString
@Getter
@Setter
@NoArgsConstructor
public class ResultOfTestResponse {

    private LocalDate date;
    private LocalTime time;
    private LevelProcess level;
    private String worker;
    private Integer valueOhmeter;
    private ResultTest ohmeterRes;
    private ResultTest bubbleTest;
    private ResultTest bendingTest;
    private ResultTest pullForce;
    private Integer pullForceOs1;
    private Integer pullForceOs2;
    private Integer pullForceOs3;
    private Integer pullForcePovz1;
    private Integer pullForcePovz2;
    private Integer pullForcePovz3;
    private ResultTest statusValidation;
    private LocalDateTime timeValidation;
    private String qaOperator;

    public ResultOfTestResponse(ResultOfTest resultOfTest) {
        if (resultOfTest.getQaOperator()!= null) {
            this.qaOperator = resultOfTest.getQaOperator().getWorker().getNumberOperator();
        }
        this.date = resultOfTest.getDate();
        this.time = resultOfTest.getTime();
        this.level = resultOfTest.getLevel();
        this.worker = resultOfTest.getWorker().getNumberOperator();
        this.valueOhmeter = resultOfTest.getValueOhmeter();
        this.ohmeterRes = resultOfTest.getOhmeterRes();
        this.bubbleTest = resultOfTest.getBubbleTest();
        this.bendingTest = resultOfTest.getBendingTest();
        this.pullForce = resultOfTest.getPullForce();
        this.pullForceOs1 = resultOfTest.getPullForceOs1();
        this.pullForceOs2 = resultOfTest.getPullForceOs2();
        this.pullForceOs3 = resultOfTest.getPullForceOs3();
        this.pullForcePovz1 = resultOfTest.getPullForcePovz1();
        this.pullForcePovz2 = resultOfTest.getPullForcePovz2();
        this.pullForcePovz3 = resultOfTest.getPullForcePovz3();
        this.statusValidation = resultOfTest.getStatusValidation();
        this.timeValidation = resultOfTest.getTimeValidation();
    }
}
