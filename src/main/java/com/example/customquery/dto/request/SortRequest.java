package com.example.customquery.dto.request;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.domain.Sort;

@Setter
@Getter
public class SortRequest {

    private String fieldName;

    private Sort.Direction direction;

}
