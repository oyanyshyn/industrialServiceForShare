package com.example.customquery.controller;

import com.example.customquery.dto.DataResponse;
import com.example.customquery.dto.request.SearhDcvRequest;
import com.example.customquery.dto.response.PreparationResponse;
import com.example.customquery.service.PreparationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/preparation")
public class PreparationController {

    @Autowired
    private PreparationService preparationService;

    @PostMapping("/dcv")
    public DataResponse<PreparationResponse> findSomeSearh(@RequestBody SearhDcvRequest searhDcvRequest){
        return preparationService.findSomeSearh(searhDcvRequest);
    }

}
