package com.example.customquery.service;

import com.example.customquery.Specification.ChangesSpecefication;
import com.example.customquery.dto.DataResponse;
import com.example.customquery.dto.request.SearhEtbDadaRequest;
import com.example.customquery.dto.request.SortRequest;
import com.example.customquery.dto.response.ChangeValidationResponse;
import com.example.customquery.entity.ChangesValidation;
import com.example.customquery.repository.ChangesValidationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
public class ChangeValidationService {
    @Autowired
    private ChangesValidationRepository changesValidationRepository;

    public DataResponse<ChangeValidationResponse> findAllValid (SearhEtbDadaRequest searhEtbDadaRequest){
        SortRequest sortRequest = searhEtbDadaRequest.getSortRequest();
        Sort sort = Sort.by(sortRequest.getDirection(), sortRequest.getFieldName());
        PageRequest pageRequest = PageRequest.of(searhEtbDadaRequest.getPage(),searhEtbDadaRequest.getSize(),sort);
        ChangesSpecefication changesSpecefication = new ChangesSpecefication(searhEtbDadaRequest.getSearhRequest(),searhEtbDadaRequest.getLinkedPredicate(),searhEtbDadaRequest.getTypeRequest(),searhEtbDadaRequest.getDate(),searhEtbDadaRequest.getDateFn());
        Page<ChangesValidation> changesPage = changesValidationRepository.findAll(changesSpecefication, pageRequest);

        return new DataResponse<ChangeValidationResponse>(changesPage.getContent().stream().map(ChangeValidationResponse::new).collect(Collectors.toList()), changesPage);
    }


}
