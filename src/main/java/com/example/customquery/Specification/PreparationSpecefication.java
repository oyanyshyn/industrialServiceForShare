package com.example.customquery.Specification;

import com.example.customquery.entity.*;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.*;
import java.time.LocalDate;

public class PreparationSpecefication implements Specification<DcvPreparation> {

    private String value;
    private LinkedPredicate linkedPredicate;
    private DcvSearhTypeRequest typeRequest;
    private LocalDate date;
    private LocalDate dateFn;

    public PreparationSpecefication(String value, LinkedPredicate linkedPredicate, DcvSearhTypeRequest typeRequest, LocalDate date, LocalDate dateFn) {
        this.value = value;
        this.linkedPredicate = linkedPredicate;
        this.typeRequest = typeRequest;
        this.date = date;
        this.dateFn = dateFn;
    }

    @Override
    public Predicate toPredicate(Root<DcvPreparation> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {

        Join<DcvPreparation, ResultOfTest> dcvPreparationResultOfTestJoin = root.join("resultOfTests");

        Predicate predicateDcvByDate;
        if (linkedPredicate == LinkedPredicate.OR){
            predicateDcvByDate = criteriaBuilder.equal(dcvPreparationResultOfTestJoin.get("date"), date);
            query.distinct(true);
        }else {
            predicateDcvByDate = criteriaBuilder.between(dcvPreparationResultOfTestJoin.get("date"), date,dateFn);
            query.distinct(true);
        }


        if (typeRequest == DcvSearhTypeRequest.OPERATOR) {
            Predicate predicateDcvByWorker = criteriaBuilder.like(dcvPreparationResultOfTestJoin.get("worker").get("numberOperator"), "%" + value);
            query.distinct(true);
            return criteriaBuilder.and(predicateDcvByWorker, predicateDcvByDate);
        } else if (typeRequest == DcvSearhTypeRequest.QUALITY) {
            Predicate predicateDcvByQality = criteriaBuilder.like(dcvPreparationResultOfTestJoin.get("qaOperator").get("worker").get("numberOperator"), "%" + value);
            query.distinct(true);
            return criteriaBuilder.and(predicateDcvByQality, predicateDcvByDate);
        }  else if (typeRequest == DcvSearhTypeRequest.MACHINE) {
            Predicate predicateDcvByMachine = criteriaBuilder.equal(root.get("numberShunk").get("name"),  value);
            query.distinct(true);
            return criteriaBuilder.and(predicateDcvByMachine, predicateDcvByDate);
        }else if (typeRequest == DcvSearhTypeRequest.HP) {
            System.out.println(criteriaBuilder.equal(root.get("hp"),  value).toString());
            query.distinct(true);
              return criteriaBuilder.equal(root.get("hp"),  value);
        }else if (typeRequest == DcvSearhTypeRequest.SUBCOMPONENT) {
            Predicate predicateDcvBySubcomponent = criteriaBuilder.equal(root.get("subcomponent").get("nameSub"),  value);
            query.distinct(true);
            return criteriaBuilder.and(predicateDcvBySubcomponent, predicateDcvByDate);
        }else if (typeRequest == DcvSearhTypeRequest.FAMILY) {
            Predicate predicateDcvByFamily = criteriaBuilder.equal(root.get("family").get("nameFamily"),  value);
            query.distinct(true);
            return criteriaBuilder.and(predicateDcvByFamily, predicateDcvByDate);
        }else if (typeRequest == DcvSearhTypeRequest.REFERENCE) {
            Predicate predicateDcvByReference = criteriaBuilder.equal(root.get("reference").get("nameReference"),  value);
            query.distinct(true);
            return criteriaBuilder.and(predicateDcvByReference, predicateDcvByDate);
        }
        else {

            return predicateDcvByDate;
        }

    }
}