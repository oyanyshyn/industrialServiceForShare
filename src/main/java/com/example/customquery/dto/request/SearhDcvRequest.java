package com.example.customquery.dto.request;


import com.example.customquery.entity.DcvSearhTypeRequest;
import com.example.customquery.entity.LinkedPredicate;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class SearhDcvRequest {

    private String searhRequest;
    private DcvSearhTypeRequest typeRequest;
    private LocalDate date;
    private LocalDate dateFn;
    private Integer page;
    private Integer size;
    private LinkedPredicate linkedPredicate;
    private SortRequest sortRequest;
}
