package com.example.customquery.Specification;


import com.example.customquery.entity.*;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.*;
import java.time.LocalDate;

public class BoxSpecification implements Specification<Box> {



    private String value;
    private LinkedPredicate linkedPredicate;
    private EtbSearhTypeRequest typeRequest;
    private LocalDate date;
    private LocalDate dateFn;

    public BoxSpecification(String value, LinkedPredicate linkedPredicate, EtbSearhTypeRequest typeRequest, LocalDate date, LocalDate dateFn) {
        this.value = value;
        this.linkedPredicate = linkedPredicate;
        this.typeRequest = typeRequest;
        this.date = date;
        this.dateFn = dateFn;
    }

@Override
public Predicate toPredicate(Root<Box> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {

    Join<EtbData, Box> etbDataBoxJoin = root.join("etbData");

    Predicate predicate=null;
    if (typeRequest==EtbSearhTypeRequest.ALL) {
    if (linkedPredicate == LinkedPredicate.OR){
        predicate = criteriaBuilder.equal(etbDataBoxJoin.get("dateEtb"), date);
        query.distinct(true);
    }else if (linkedPredicate == LinkedPredicate.AND) {
        predicate = criteriaBuilder.between(etbDataBoxJoin.get("dateEtb"), date, dateFn);
        query.distinct(true);
    }
    }else if (typeRequest==EtbSearhTypeRequest.ETBCODE){
        predicate = criteriaBuilder.like(etbDataBoxJoin.get("etbCode"), "%" + value + "%");
        query.distinct(true);
    }else if (typeRequest==EtbSearhTypeRequest.BOX) {
        predicate = criteriaBuilder.like(etbDataBoxJoin.get("box").get("boxCode"), "%" + value + "%");
        query.distinct(true);
    }else {throw new IllegalArgumentException("Specefications aren't correct");}
    query.distinct(true);
    return predicate;
        }
}
