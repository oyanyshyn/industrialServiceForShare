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
public class Family {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(unique=true)
    private String nameFamily;

    @OneToMany(mappedBy = "family")
    private List<DcvPreparation> dcvPreparations= new ArrayList<DcvPreparation>();
}
