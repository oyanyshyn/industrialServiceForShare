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
public class Collective {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(unique=true)
    private Integer nameCollective;
    @OneToMany (mappedBy = "collective")
    private List<Absenteeism> absenteeisms = new ArrayList<Absenteeism>();

    @OneToMany(mappedBy = "colectivPrePlug")
    private List<EtbData> etbDatasMe= new ArrayList<EtbData>();

    @OneToMany(mappedBy = "colectivEtb")
    private List<EtbData> etbDatasEtb= new ArrayList<EtbData>();

}
