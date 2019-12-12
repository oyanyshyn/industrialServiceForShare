package com.example.customquery.dto.response;


import com.example.customquery.entity.DcvPreparation;
import com.example.customquery.entity.ResultOfTest;
import com.example.customquery.entity.ResultTest;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@ToString
@Getter
@Setter
@NoArgsConstructor
public class PreparationResponse {

 private long hp;

 private String subcomponent;
 private Integer quantityStart;
 private Integer quantityEnd;

 private String numberShunk;
 private Float minDos;
 private Float minDpovz;
 private Integer step;
 private String family;
 private Integer energy;
 private Float pressure;
 private Integer amplitude;
 private Integer temperature;
 private Integer numProgram;
 private Float processTime;

 private ResultTest length;
 private ResultTest missWire;
 private  ResultTest views;
 private List<ResultOfTestResponse> resultOfTests = new ArrayList<>();


 public PreparationResponse(DcvPreparation dcvPreparation) {
  this.hp = dcvPreparation.getHp();
  this.subcomponent = dcvPreparation.getSubcomponent().getNameSub();
  this.quantityStart = dcvPreparation.getQuantityStart();
  this.quantityEnd = dcvPreparation.getQuantityEnd();
  this.numberShunk = dcvPreparation.getNumberShunk().getName();
  this.minDos = dcvPreparation.getMinDos();
  this.minDpovz = dcvPreparation.getMinDpovz();
  this.step = dcvPreparation.getStep();
  this.family = dcvPreparation.getFamily().getNameFamily();
  this.energy = dcvPreparation.getEnergy();
  this.pressure = dcvPreparation.getPressure();
  this.amplitude = dcvPreparation.getAmplitude();
  this.temperature = dcvPreparation.getTemperature();
  this.numProgram = dcvPreparation.getNumProgram();
  this.processTime = dcvPreparation.getProcessTime();
  this.length = dcvPreparation.getLength();
  this.missWire = dcvPreparation.getMissWire();
  this.views = dcvPreparation.getViews();
  for (ResultOfTest resultOfTest: dcvPreparation.getResultOfTests()) {
   resultOfTests.add(new ResultOfTestResponse(resultOfTest));
 }
}


}
