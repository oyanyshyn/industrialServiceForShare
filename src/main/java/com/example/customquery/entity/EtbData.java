package com.example.customquery.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class EtbData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    private Etb numberMe;
    private String prePlugCode;
    @ManyToOne
    private Collective colectivPrePlug;
    private LocalDate datePrePlug;
    private LocalTime timePrePlug;
    private Integer shiftPrePlug;
    @ManyToOne
    private Reference reference;
    private StatusTest statusTest;
    @ManyToOne
    private Etb numberEtb;
    private String etbCode;
    @ManyToOne
    private Collective colectivEtb;
    private LocalDate dateEtb;
    private LocalTime timeEtb;
    private Integer shiftEtb;
    private Plant plant;
    @ManyToOne
    private Box box;
    private StatusTest statusCheck;
    private LocalDate dateCheck;

    @OneToMany(mappedBy = "etbData")
    private List<CriticalErrors> criticalErrors= new ArrayList<CriticalErrors>();

    @OneToMany(mappedBy = "etbData")
    private List<Rework> reworks = new ArrayList<Rework>();









}
