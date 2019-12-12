package com.example.customquery.dto.request;

import com.example.customquery.entity.Plant;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;

@ToString
@Getter
@Setter
public class EfficiencyRequest {
    private Integer collective;
    private LocalDate date;
    private LocalDate dateFn;
    private Plant plant;
}
