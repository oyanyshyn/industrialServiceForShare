package com.example.customquery.dto.response;

import com.example.customquery.entity.CriticalErrors;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CriticalErrorResponce {

    private String errors;


    public CriticalErrorResponce(CriticalErrors criticalErrors) {
        this.errors = criticalErrors.getErrors();
    }
}
