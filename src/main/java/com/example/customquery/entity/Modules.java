package com.example.customquery.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Modules {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private StatusTest staus;
    private String traceSai;
    private String description;
    private LocalDateTime timeOfReceive;
    @ManyToOne
    private Orders numbOrders;
    @ManyToOne
    private Etb numberEtb;
    @ManyToOne
    private ListOfModules numberOfModules;




}
