package com.example.customquery.service;


import com.example.customquery.Specification.PreparationSpecefication;
import com.example.customquery.dto.DataResponse;
import com.example.customquery.dto.request.SearhDcvRequest;
import com.example.customquery.dto.request.SortRequest;
import com.example.customquery.dto.response.PreparationResponse;
import com.example.customquery.entity.DcvPreparation;
import com.example.customquery.repository.DcvPreparationRepository;
import com.example.customquery.repository.ResultOfTestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
public class PreparationService {

    @Autowired
    private DcvPreparationRepository dcvPreparationRepository;

    @Autowired
    private ResultOfTestRepository resultOfTestRepository;


    public DataResponse<PreparationResponse> findSomeSearh(SearhDcvRequest searhDcvRequest){
        SortRequest sortRequest = searhDcvRequest.getSortRequest();
        Sort sort = Sort.by(sortRequest.getDirection(), sortRequest.getFieldName());
        PageRequest pageRequest = PageRequest.of(searhDcvRequest.getPage(),searhDcvRequest.getSize(),sort);
        PreparationSpecefication preparationSpecefication = new PreparationSpecefication(searhDcvRequest.getSearhRequest(), searhDcvRequest.getLinkedPredicate(),searhDcvRequest.getTypeRequest(),searhDcvRequest.getDate(),searhDcvRequest.getDateFn());
        Page<DcvPreparation> dcvPreparationsPage = dcvPreparationRepository.findAll(preparationSpecefication,pageRequest);
        return new DataResponse<PreparationResponse>(dcvPreparationsPage.getContent().stream().map(PreparationResponse::new).collect(Collectors.toList()), dcvPreparationsPage);
    }

}
