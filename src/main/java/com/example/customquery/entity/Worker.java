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
public class Worker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private long cardId;
    private  String numberOperator;

    @OneToOne  (mappedBy = "worker")
    private Person person;

    @OneToMany(mappedBy = "worker")
    private List<Absenteeism> absenteeisms = new ArrayList<Absenteeism>();

    @OneToMany(mappedBy = "worker")
    private List<ResultOfTest> resultOfTestsW = new ArrayList<ResultOfTest>();





}

