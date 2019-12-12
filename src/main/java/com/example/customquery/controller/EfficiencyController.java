package com.example.customquery.controller;


import com.example.customquery.dto.request.EfficiencyRequest;
import com.example.customquery.dto.response.CollectiveResponse;
import com.example.customquery.dto.response.EfficiencyResponse;
import com.example.customquery.service.EfficiencyServise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin//крос доменні запити
@RequestMapping("/efficiency")
public class EfficiencyController {

    @Autowired
    private EfficiencyServise efficiencyServise;

    @PostMapping("/efficiency")
    public EfficiencyResponse efficiencyByDayAndTeam(@RequestBody @Valid EfficiencyRequest efficiencyRequest){
        return efficiencyServise.efficiencyByDayAndTeam(efficiencyRequest);
    }

    @PostMapping("/efficiencyPeriod")
    public List<EfficiencyResponse> efficiencyByPeriodAndTeam(@RequestBody @Valid EfficiencyRequest efficiencyRequest){
        return efficiencyServise.efficiencyByPeriodAndTeam(efficiencyRequest);
    }

    @GetMapping("/all")
    public List<CollectiveResponse> get() {return efficiencyServise.get(); }

}
