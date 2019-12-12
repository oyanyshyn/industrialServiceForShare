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
public class ChangesValidation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    private Reference reference;
    @ManyToOne
    private Etb etb;
    private LocalDateTime dateTime;
    private CategoryWork categoryWork;
    private String description;
    private StatusTest status;
    private LocalDateTime timeRequest;
    @ManyToOne
    private Person person;



}
