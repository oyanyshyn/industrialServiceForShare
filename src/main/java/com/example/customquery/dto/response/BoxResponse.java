package com.example.customquery.dto.response;


import com.example.customquery.entity.Box;
import com.example.customquery.entity.StatusTest;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoxResponse {

    private long id;
    private String boxCode;
    private StatusTest status;
    private Integer quantity;

    public BoxResponse(Box box) {
        this.id = box.getId();
        this.boxCode = box.getBoxCode();
        this.status = box.getStatus();

    }
}
