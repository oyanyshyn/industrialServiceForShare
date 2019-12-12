package com.example.customquery.repository;

import com.example.customquery.entity.Errors;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface ErrorsRepository extends JpaRepository<Errors,Long>,JpaSpecificationExecutor<Errors> {
}
