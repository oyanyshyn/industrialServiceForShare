package com.example.customquery.dto.request;


import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class AbsenteeismRequest {

    private LocalDate date;
}
