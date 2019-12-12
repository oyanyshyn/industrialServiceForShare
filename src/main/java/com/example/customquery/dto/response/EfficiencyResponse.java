package com.example.customquery.dto.response;


import com.example.customquery.entity.Plant;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@ToString
@Getter
@Setter
@NoArgsConstructor
public class EfficiencyResponse {
    private Plant plant;
    private LocalDate date;
    private Integer collective;
    private Integer quantWorkers;
    private Float efficiency;
    private Integer totalByShift;
    private Integer totalByDay;
    private List<String> references =new ArrayList<>();




}
