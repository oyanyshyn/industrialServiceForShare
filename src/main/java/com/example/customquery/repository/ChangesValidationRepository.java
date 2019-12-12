package com.example.customquery.repository;

import com.example.customquery.entity.CategoryWork;
import com.example.customquery.entity.ChangesValidation;
import com.example.customquery.entity.Reference;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChangesValidationRepository extends JpaRepository<ChangesValidation,Long>,JpaSpecificationExecutor<ChangesValidation> {

    List<ChangesValidation> findByReference (Reference reference);
    List<ChangesValidation> findByReferenceAndCategoryWork (Reference reference, CategoryWork categoryWork);

}
