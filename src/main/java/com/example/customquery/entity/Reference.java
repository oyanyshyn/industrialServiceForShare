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
public class Reference {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(unique=true)
    private String nameReference;
    private Float timeDmh;



    @OneToMany(mappedBy = "reference")
    private List<EtbData> etbDatas= new ArrayList<EtbData>();

    @OneToMany(mappedBy = "reference")
    private List<Rework> reworks= new ArrayList<Rework>();

    @OneToMany(mappedBy = "reference")
    private List<DcvPreparation> dcvPreparations= new ArrayList<DcvPreparation>();
}
