package com.example.customquery.Specification;

import com.example.customquery.entity.*;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.*;
import java.time.LocalDate;

public class EtbDataSpecefication implements Specification<EtbData> {

    private String value;
    private LinkedPredicate linkedPredicate;
    private EtbSearhTypeRequest typeRequest;
    private LocalDate date;
    private LocalDate dateFn;

    public EtbDataSpecefication(String value, LinkedPredicate linkedPredicate, EtbSearhTypeRequest typeRequest, LocalDate date, LocalDate dateFn) {
        this.value = value;
        this.linkedPredicate = linkedPredicate;
        this.typeRequest = typeRequest;
        this.date = date;
        this.dateFn = dateFn;
    }

    @Override
    public Predicate toPredicate(Root<EtbData> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {

//        Join<EtbData, Reference> referenceJoin = root.join("reference");
//        Join<EtbData, Collective> collectiveEtbJoin = root.join("colectivEtb");
//        Join<EtbData, Collective> collectiveLeakJoin = root.join("colectivPrePlug");
//        Join<EtbData, Etb> etbJoin = root.join("numberEtb");
//        Join<EtbData, Etb> leakJoin = root.join("numberMe");
//        Join<EtbData, Box> boxJoin = root.join("box");

        Predicate predicateEtbByDate;

        if (linkedPredicate == LinkedPredicate.OR){
            predicateEtbByDate = criteriaBuilder.or(criteriaBuilder.equal(root.get("dateEtb"), date),criteriaBuilder.equal(root.get("datePrePlug"), date));
            query.distinct(true);
        }else if ((linkedPredicate == LinkedPredicate.AND)){
            predicateEtbByDate = criteriaBuilder.or(criteriaBuilder.between(root.get("dateEtb"), date,dateFn),criteriaBuilder.between(root.get("datePrePlug"), date,dateFn));
            query.distinct(true);
        }else {predicateEtbByDate=null;}


        if (typeRequest == EtbSearhTypeRequest.ALL) {
            return predicateEtbByDate;
        } else if (typeRequest == EtbSearhTypeRequest.BOX) {
            Predicate predicateBox = criteriaBuilder.like(root.get("box").get("boxCode"), "%" + value + "%");
            query.distinct(true);
            return predicateBox;
        } else if (typeRequest == EtbSearhTypeRequest.ETBCOLLECTIVE) {
        Predicate predicateEtbCollective = criteriaBuilder.equal(root.get("colectivEtb").get("nameCollective"), value );
            query.distinct(true);
        return criteriaBuilder.and(predicateEtbCollective, predicateEtbByDate);
        }else if (typeRequest == EtbSearhTypeRequest.LEAKCOLLECTIVE) {
            Predicate predicateELeakCollective = criteriaBuilder.equal(root.get("colectivPrePlug").get("nameCollective"),  value );
            query.distinct(true);
            return criteriaBuilder.and(predicateELeakCollective, predicateEtbByDate);
        }else if (typeRequest == EtbSearhTypeRequest.ETB) {
        Predicate predicateEtb = criteriaBuilder.like(root.get("numberEtb").get("name"), "%" + value + "%");
            query.distinct(true);
        return criteriaBuilder.and(predicateEtb, predicateEtbByDate);
        }else if (typeRequest == EtbSearhTypeRequest.LEAKTEST) {
            Predicate predicateLeak = criteriaBuilder.like(root.get("numberMe").get("name"), "%" + value + "%");
            query.distinct(true);
            return criteriaBuilder.and(predicateLeak, predicateEtbByDate);
        }else if (typeRequest == EtbSearhTypeRequest.REFERENCE) {
            Predicate predicateReference = criteriaBuilder.like(root.get("reference").get("nameReference"), "%" + value + "%");
            query.distinct(true);
            return criteriaBuilder.and(predicateReference, predicateEtbByDate);
        }else if (typeRequest == EtbSearhTypeRequest.ETBCODE) {
            Predicate predicateEtbCode = criteriaBuilder.like(root.get("etbCode"), "%" + value + "%");
            query.distinct(true);
            return predicateEtbCode;
        }else if (typeRequest == EtbSearhTypeRequest.LEAKCODE) {
            Predicate predicateLeakCode = criteriaBuilder.like(root.get("prePlugCode"), "%" + value + "%");
            query.distinct(true);
            return predicateLeakCode;
        }else{throw new IllegalArgumentException("Specefications aren't correct");}






    }
}
