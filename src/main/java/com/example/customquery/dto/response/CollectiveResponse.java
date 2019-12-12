package com.example.customquery.dto.response;

import com.example.customquery.entity.Collective;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CollectiveResponse {
    private long id;
    private Integer nameTeam;

    public CollectiveResponse(Collective collective) {
        this.id = collective.getId();
        this.nameTeam = collective.getNameCollective();
    }
}
