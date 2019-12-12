package com.example.customquery.Specification;

import com.example.customquery.entity.*;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

public class ChangesSpecefication implements Specification<ChangesValidation> {
    private String value;
    private LinkedPredicate linkedPredicate;
    private EtbSearhTypeRequest typeRequest;
    private LocalDate date;
    private LocalDate dateFn;

    public ChangesSpecefication (String value, LinkedPredicate linkedPredicate, EtbSearhTypeRequest typeRequest, LocalDate date, LocalDate dateFn) {
        this.value = value;
        this.linkedPredicate = linkedPredicate;
        this.typeRequest = typeRequest;
        this.date = date;
        this.dateFn = dateFn;
    }
    @Override
    public Predicate toPredicate(Root<ChangesValidation> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
        Join<ChangesValidation, Reference> referenceJoin = root.join("reference");
        Join<ChangesValidation, Etb> etbJoin = root.join("etb");
        Join<ChangesValidation, Person> personJoin = root.join("person");
        Join<Person, Worker> workerJoin = personJoin.join("worker");

        Predicate predicateValByDate;

        LocalDateTime dateSt = date.atStartOfDay();
        LocalDateTime dateSSt = date.atStartOfDay();
        dateSSt= dateSSt.withHour(23).withMinute(59);
        LocalDateTime dateFin = dateFn.atStartOfDay().withHour(23).withMinute(59);

        if (linkedPredicate == LinkedPredicate.OR) {
            predicateValByDate = criteriaBuilder.between(root.get("dateTime"), dateSt ,dateSSt );
            query.distinct(true);
        } else if ((linkedPredicate == LinkedPredicate.AND)) {
            predicateValByDate = criteriaBuilder.between(root.get("dateTime"), dateSt  , dateFin );
            query.distinct(true);
        } else {
            predicateValByDate = null;
        }


        if (typeRequest == EtbSearhTypeRequest.ALL) {
            return predicateValByDate;
        } else if (typeRequest == EtbSearhTypeRequest.REFERENCE) {
            Predicate predicateReference = criteriaBuilder.like(referenceJoin.get("nameReference"), "%" + value + "%");
            query.distinct(true);
            return predicateReference;
        } else if (typeRequest == EtbSearhTypeRequest.ETB) {
            Predicate predicateEtb = criteriaBuilder.like(etbJoin.get("name"), "%" + value + "%");
            query.distinct(true);
            predicateEtb = criteriaBuilder.and(predicateEtb,predicateValByDate);
            return predicateEtb;
        } else {
            Predicate predicateoperator = criteriaBuilder.like(workerJoin.get("numberOperator"), "%" + value + "%");
            query.distinct(true);
            predicateoperator = criteriaBuilder.and(predicateoperator,predicateValByDate);
            return predicateoperator;
        }
    }

    }
