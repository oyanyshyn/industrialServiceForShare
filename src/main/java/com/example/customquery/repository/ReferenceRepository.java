package com.example.customquery.repository;

import com.example.customquery.entity.Reference;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface ReferenceRepository extends JpaRepository<Reference,Long>,JpaSpecificationExecutor<Reference> {
    Reference findByNameReference (String string);
}
