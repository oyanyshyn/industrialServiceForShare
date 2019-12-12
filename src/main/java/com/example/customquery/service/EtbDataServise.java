package com.example.customquery.service;

import com.example.customquery.Specification.EtbDataSpecefication;
import com.example.customquery.dto.DataResponse;
import com.example.customquery.dto.request.EfficiencyRequest;
import com.example.customquery.dto.request.SearhEtbDadaRequest;
import com.example.customquery.dto.request.SortRequest;
import com.example.customquery.dto.response.AbsenteeismResponse;
import com.example.customquery.dto.response.ChangeValidationResponse;
import com.example.customquery.dto.response.EtbDataResponse;
import com.example.customquery.entity.*;
import com.example.customquery.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EtbDataServise {

    @Autowired
    private EtbDataRepository etbDataRepository;
    @Autowired
    private CollectiveRepository collectiveRepository;
    @Autowired
    private AbsenteismRepository absenteismRepository;
    @Autowired
    private ChangesValidationRepository changesValidationRepository;
    @Autowired
    private ReferenceRepository referenceRepository;

    public DataResponse<EtbDataResponse> findAll(SearhEtbDadaRequest searhEtbDadaRequest){
        SortRequest sortRequest = searhEtbDadaRequest.getSortRequest();
        Sort sort = Sort.by(sortRequest.getDirection(), sortRequest.getFieldName());
        PageRequest pageRequest = PageRequest.of(searhEtbDadaRequest.getPage(),searhEtbDadaRequest.getSize(),sort);
        EtbDataSpecefication etbDataSpecefication = new EtbDataSpecefication(searhEtbDadaRequest.getSearhRequest(),searhEtbDadaRequest.getLinkedPredicate(),searhEtbDadaRequest.getTypeRequest(),searhEtbDadaRequest.getDate(),searhEtbDadaRequest.getDateFn());
        Page<EtbData> etbDataPage;

            etbDataPage = etbDataRepository.findAll(etbDataSpecefication, pageRequest);

        return new DataResponse<EtbDataResponse>(etbDataPage.getContent().stream().map(EtbDataResponse::new).collect(Collectors.toList()), etbDataPage);
    }

    public List<String> findRequest (){
        EtbSearhTypeRequest[] requestArr = EtbSearhTypeRequest.values();
        List<String> request = new ArrayList<>();

        for (EtbSearhTypeRequest each : requestArr) {
            request.add(each.name());
        }

        return request;
    }

    public List<AbsenteeismResponse> findWorker (EfficiencyRequest efficiencyRequest){
        Collective collective = collectiveRepository.findByNameCollective(efficiencyRequest.getCollective());
        if (collective != null) {
            List<Absenteeism> absenteeisms = absenteismRepository.findByCollectiveAndDate(collective, efficiencyRequest.getDate());
           if (absenteeisms != null){

               return  absenteeisms.stream().map(AbsenteeismResponse::new).collect(Collectors.toList());
           }else {
               throw new IllegalArgumentException("absienteism is empty");
           }
        }else {
            throw new IllegalArgumentException("Collective is null");
        }

    }


    public List<ChangeValidationResponse> findValidation (SearhEtbDadaRequest searhEtbDadaRequest){
        Reference reference = referenceRepository.findByNameReference(searhEtbDadaRequest.getSearhRequest());
        if (reference != null) {
        List<ChangesValidation> changes = changesValidationRepository.findByReferenceAndCategoryWork(reference,CategoryWork.VALIDATION);
        if (changes != null) {

         return  changes.stream().map(ChangeValidationResponse::new).collect(Collectors.toList());

        }else {
            throw new IllegalArgumentException("Validations rows is null");
        }
        }else {
            throw new IllegalArgumentException("Reference is null");
        }
    }

}
