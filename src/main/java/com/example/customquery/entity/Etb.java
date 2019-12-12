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
public class Etb {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(unique=true)
    private String name;
    private Project project;
    private String ip;

    @OneToMany(mappedBy = "etb")
    private List<ChangesValidation> changesValidations= new ArrayList<ChangesValidation>();

    @OneToMany(mappedBy = "numberMe")
    private List<EtbData> etbDatasMe= new ArrayList<EtbData>();

    @OneToMany(mappedBy = "numberEtb")
    private List<EtbData> etbDatasEtb= new ArrayList<EtbData>();

    @OneToMany(mappedBy = "numberShunk")
    private List<DcvPreparation> dcvPreparations = new ArrayList<DcvPreparation>();

    @OneToMany(mappedBy = "numberEtb")
    private List<Modules> modulesDescr= new ArrayList<Modules>();

}
