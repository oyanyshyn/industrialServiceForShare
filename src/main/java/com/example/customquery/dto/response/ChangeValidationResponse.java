package com.example.customquery.dto.response;


import com.example.customquery.entity.CategoryWork;
import com.example.customquery.entity.ChangesValidation;
import com.example.customquery.entity.StatusTest;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ChangeValidationResponse {

    private long id;
    private String reference;
    private String etb;
    private LocalDateTime dateTime;
    private CategoryWork categoryWork;
    private String description;
    private StatusTest status;
    private LocalDateTime timeRequest;
    private String firstName;
    private String lastName;
    private String numOperator;

    public ChangeValidationResponse(ChangesValidation changesValidation) {
        this.id = changesValidation.getId();
        if (changesValidation.getReference()!= null) {this.reference = changesValidation.getReference().getNameReference();}
        if (changesValidation.getEtb()!= null) {this.etb = changesValidation.getEtb().getName();}
        this.dateTime = changesValidation.getDateTime();
        this.categoryWork = changesValidation.getCategoryWork();
        this.description = changesValidation.getDescription();
        if (changesValidation.getStatus()!= null) {this.status = changesValidation.getStatus();}
        if (changesValidation.getTimeRequest()!= null) {this.timeRequest = changesValidation.getTimeRequest();}
        if (changesValidation.getPerson()!= null) {
            this.firstName = changesValidation.getPerson().getFirstName();
            this.lastName = changesValidation.getPerson().getLastName();
            this.numOperator = changesValidation.getPerson().getWorker().getNumberOperator();
        }
    }
}
