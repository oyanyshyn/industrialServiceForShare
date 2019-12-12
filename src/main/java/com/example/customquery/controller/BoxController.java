package com.example.customquery.controller;

import com.example.customquery.dto.DataResponse;
import com.example.customquery.dto.request.SearhEtbDadaRequest;
import com.example.customquery.dto.response.BoxResponse;
import com.example.customquery.service.BoxServise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/box")
public class BoxController {

    @Autowired
    private BoxServise boxServise;

    @PostMapping("/findRequest")
    public DataResponse<BoxResponse> findAllRequest (@RequestBody SearhEtbDadaRequest searhEtbDadaRequest) {
        return boxServise.findRequest(searhEtbDadaRequest);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN','ETBTEH')")
    @PostMapping("/changeStatus")
    public void changeStatusBox (@RequestBody SearhEtbDadaRequest searhEtbDadaRequest) {
        boxServise.changeStatusBox(searhEtbDadaRequest);
    }

}
