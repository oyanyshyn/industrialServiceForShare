package com.example.customquery.dto.response;

import com.example.customquery.entity.CriticalErrors;
import com.example.customquery.entity.EtbData;
import com.example.customquery.entity.Plant;
import com.example.customquery.entity.StatusTest;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class EtbDataResponse {
    private long id;
    private String numberMe;
    private String prePlugCode;
    private Integer colectivPrePlug;
    private LocalDate datePrePlug;
    private LocalTime timePrePlug;
    private Integer shiftPrePlug;
    private String reference;
    private StatusTest statusTest;
    private String numberEtb;
    private String etbCode;
    private Integer colectivEtb;
    private LocalDate dateEtb;
    private LocalTime timeEtb;
    private Integer shiftEtb;
    private Plant plant;
    private String box;
    private List<CriticalErrorResponce> criticalErrors= new ArrayList<>();

    public EtbDataResponse(EtbData etbData) {
        this.id = etbData.getId();
        if (etbData.getNumberMe()!= null) {
            this.numberMe = etbData.getNumberMe().getName();
        }
        if (etbData.getPrePlugCode()!= null) {
            this.prePlugCode = etbData.getPrePlugCode();
            this.colectivPrePlug = etbData.getColectivPrePlug().getNameCollective();
            this.datePrePlug = etbData.getDatePrePlug();
            this.timePrePlug = etbData.getTimePrePlug();
            this.shiftPrePlug = etbData.getShiftPrePlug();
        }
        if (etbData.getReference()!= null) {
            this.reference = etbData.getReference().getNameReference();
        }
        if (etbData.getEtbCode()!= null) {
            this.etbCode = etbData.getEtbCode();
            this.numberEtb = etbData.getNumberEtb().getName();
            this.colectivEtb = etbData.getColectivEtb().getNameCollective();
            this.dateEtb = etbData.getDateEtb();
            this.timeEtb = etbData.getTimeEtb();
            this.shiftEtb = etbData.getShiftEtb();
            this.box = etbData.getBox().getBoxCode();
        }


        this.statusTest = etbData.getStatusTest();
        this.plant = etbData.getPlant();

        for (CriticalErrors each: etbData.getCriticalErrors()) {
            criticalErrors.add(new CriticalErrorResponce(each));
        }


    }


}
