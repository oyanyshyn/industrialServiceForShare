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
public class Rework {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    private Reference reference;
    @ManyToOne
    private EtbData etbData;
    private String reworkCode;
    private LocalDate dateRework;
    private LocalTime timeRework;
    private StatusTest statusRework;
    @ManyToOne
    private Errors errors;
    private String comentsProductions;
    private LocalDateTime timeFix;
    @ManyToOne
    private Person lider;
    private String comentsQuality;
    private LocalDateTime timeVerif;
    @ManyToOne
    private Person auditorQa;





}
