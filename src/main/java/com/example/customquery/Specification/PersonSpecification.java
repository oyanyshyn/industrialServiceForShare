package com.example.customquery.Specification;

import com.example.customquery.entity.LinkedPredicate;
import com.example.customquery.entity.Person;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.*;


public class PersonSpecification implements Specification<Person> {

    private  String value;

    private LinkedPredicate linkedPredicate;

    public PersonSpecification(String value, LinkedPredicate linkedPredicate) {
        this.value = value;
        this.linkedPredicate = linkedPredicate;
    }

        @Override
    public Predicate toPredicate(Root<Person> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {

//    Join<Person,Car> joinPersonCar = root.join("cars");
//    Predicate predicate = criteriaBuilder.like(joinPersonCar.get("marka"),"%"+value+"%");
//            query.distinct(true);
//return predicate;
//    @Override
//    public Predicate toPredicate(Root<Person> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {

        Predicate predicateByFirstName = criteriaBuilder.like(root.get("firstName"), "%"+value+"%");
        Predicate predicateByLastName = criteriaBuilder.like(root.get("lastName"), "%"+value+"%");
            Predicate predicateByLogin = criteriaBuilder.like(root.get("login"), "%"+value+"%");

            query.distinct(true);

           return  criteriaBuilder.or(predicateByFirstName,predicateByLastName,predicateByLogin);

    }
}
