package com.example.customquery.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Orders {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private StatusTest staus;
    @ManyToOne
    private Person ingineerReq;
    @ManyToOne
    private Person creatorOrder;
    private Project project;
    private String aem;
    private String pathToAem;
    private String order;
    private String pathToOrder;
    private LocalDateTime timeOfRequest;
    private LocalDateTime closeOfRequest;
    private LocalDateTime dateOfReceive;
    private String description;
    private Integer po;

    @OneToMany(mappedBy = "numbOrders")
    private List<Modules> modulesDescr= new ArrayList<Modules>();



}
