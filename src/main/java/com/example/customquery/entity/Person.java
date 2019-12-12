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
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique=true)
    private String login;
    private String password;

    private String firstName;

    private String lastName;

    private Role role;
    @OneToOne
    private Worker worker;


    @OneToMany(mappedBy = "lider")
    private List<Rework> reworksLiders = new ArrayList<Rework>();

    @OneToMany(mappedBy = "auditorQa")
    private List<Rework> reworksAuditors = new ArrayList<Rework>();

    @OneToMany(mappedBy = "person")
    private List<ChangesValidation> changesValidations = new ArrayList<ChangesValidation>();

    @OneToMany(mappedBy = "person")
    private List<ProjectAccess> projectAccesses = new ArrayList<ProjectAccess>();

    @OneToMany(mappedBy = "qaOperator")
    private List<ResultOfTest> resultOfTests = new ArrayList<ResultOfTest>();

    @OneToMany(mappedBy = "ingineerReq")
    private List<Orders> ingineerReqs = new ArrayList<Orders>();

    @OneToMany(mappedBy = "creatorOrder")
    private List<Orders> creatorOrders = new ArrayList<Orders>();
}
