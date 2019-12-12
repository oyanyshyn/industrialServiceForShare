package com.example.customquery.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class DcvPreparation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private long hp;
    @ManyToOne
    private Subcomponent subcomponent;
    private Integer quantityStart; // початкова кількість
    private Integer quantityEnd;   // кінцева кількість
    @ManyToOne
    private Etb numberShunk;
    private Float minDos;     // мінімальна  сила зриву
    private Float minDpovz;   // мінімальна сила повздовжнього зриву
    @ManyToOne
    private Reference reference;
    @ManyToOne
    private Family family;
    private Integer energy;
    private Float pressure;
    private Integer amplitude;
    private Integer temperature;
    private Integer numProgram;
    private Float processTime;

    private ResultTest length;
    private ResultTest missWire;
    private ResultTest views;


    @OneToMany(mappedBy = "dcvHp")
    private List<ResultOfTest> resultOfTests = new ArrayList<ResultOfTest>();

    private Integer step;





}
