package com.example.customquery.dto.request;

import com.example.customquery.entity.LinkedPredicate;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SearchPersonRequest {
    private  String value;
    private Integer page;
    private  Integer size;
    private LinkedPredicate linkedPredicate;
    private SortRequest sortRequest;

}
