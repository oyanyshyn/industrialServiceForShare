package com.example.customquery.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class ResultOfTest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private LocalDate date;
    private LocalTime time;
    private LevelProcess level;
    @ManyToOne
    private Worker worker;
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
    @ManyToOne
    private Person qaOperator;

    @ManyToOne
    private DcvPreparation dcvHp;


}
