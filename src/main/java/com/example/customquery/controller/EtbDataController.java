package com.example.customquery.controller;

import com.example.customquery.dto.DataResponse;
import com.example.customquery.dto.request.EfficiencyRequest;
import com.example.customquery.dto.request.SearhEtbDadaRequest;
import com.example.customquery.dto.response.AbsenteeismResponse;
import com.example.customquery.dto.response.ChangeValidationResponse;
import com.example.customquery.dto.response.EtbDataResponse;
import com.example.customquery.service.ChangeValidationService;
import com.example.customquery.service.EtbDataServise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/etbData")
public class EtbDataController {
    @Autowired
    private EtbDataServise etbDataServise;
    @Autowired
    private ChangeValidationService changeValidationService;

    @PostMapping("/all")
    public DataResponse<EtbDataResponse> findAllEtbData(@RequestBody SearhEtbDadaRequest searhEtbDadaRequest){
        return etbDataServise.findAll(searhEtbDadaRequest);
    }

    @PostMapping("/findRequest")
    public List<String> findAllRequest () {
        return etbDataServise.findRequest();
    }

    @PostMapping("/findWorker")
    public List<AbsenteeismResponse> findWorkerToHarnes (@RequestBody EfficiencyRequest efficiencyRequest) {
        return etbDataServise.findWorker(efficiencyRequest);
    }
    @PostMapping("/findValidation")
    public List<ChangeValidationResponse> findValidations (@RequestBody SearhEtbDadaRequest searhEtbDadaRequest) {
        return etbDataServise.findValidation(searhEtbDadaRequest);
    }

    @PostMapping("/findAllValidation")
    public DataResponse<ChangeValidationResponse> findAllValidation (@RequestBody SearhEtbDadaRequest searhEtbDadaRequest) {
        return changeValidationService.findAllValid(searhEtbDadaRequest);
    }

}
