package com.example.customquery.service;

import com.example.customquery.Specification.BoxSpecification;
import com.example.customquery.dto.DataResponse;
import com.example.customquery.dto.request.SearhEtbDadaRequest;
import com.example.customquery.dto.request.SortRequest;
import com.example.customquery.dto.response.BoxResponse;
import com.example.customquery.entity.Box;
import com.example.customquery.entity.LinkedPredicate;
import com.example.customquery.entity.StatusTest;
import com.example.customquery.repository.BoxRepository;
import com.example.customquery.repository.EtbDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BoxServise {
    @Autowired
    private BoxRepository boxRepository;
    @Autowired
    private EtbDataRepository etbDataRepository;

    public DataResponse<BoxResponse> findRequest(SearhEtbDadaRequest searhEtbDadaRequest){
        SortRequest sortRequest = searhEtbDadaRequest.getSortRequest();
        Sort sort = Sort.by(sortRequest.getDirection(), sortRequest.getFieldName());
        PageRequest pageRequest = PageRequest.of(searhEtbDadaRequest.getPage(),searhEtbDadaRequest.getSize(),sort);
        BoxSpecification boxSpecefication = new BoxSpecification(searhEtbDadaRequest.getSearhRequest(),searhEtbDadaRequest.getLinkedPredicate(),searhEtbDadaRequest.getTypeRequest(),searhEtbDadaRequest.getDate(),searhEtbDadaRequest.getDateFn());
        Page<Box> boxPage;

        boxPage = boxRepository.findAll(boxSpecefication, pageRequest);


        List<BoxResponse> responsrPage = boxPage.getContent().stream().map(BoxResponse::new).collect(Collectors.toList());

        for (BoxResponse each: responsrPage){

            each.setQuantity(etbDataRepository.findByBox(boxRepository.findBoxById(each.getId())).size());
        }

        //DataResponse <BoxResponse> response = new DataResponse<BoxResponse>(boxPage.getContent().stream().map(BoxResponse::new).collect(Collectors.toList()), boxPage);
        //response.setContent();
        return new DataResponse<BoxResponse>(responsrPage, boxPage);
    }


    public void changeStatusBox (SearhEtbDadaRequest searhEtbDadaRequest) {

        Box box = boxRepository.findBoxByBoxCode(searhEtbDadaRequest.getSearhRequest());
        if (box!= null){
            if (searhEtbDadaRequest.getLinkedPredicate().equals(LinkedPredicate.AND)){
                box.setStatus(StatusTest.CLOSEDBOX);
            }else {
                box.setStatus(StatusTest.PATRIALBOX);
            }
            boxRepository.save(box);
        }else {throw new IllegalArgumentException("Box not found");}

    }
}
