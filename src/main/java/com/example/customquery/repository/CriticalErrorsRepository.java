package com.example.customquery.repository;

import com.example.customquery.entity.CriticalErrors;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface CriticalErrorsRepository extends JpaRepository<CriticalErrors,Long>,JpaSpecificationExecutor<CriticalErrors> {
}
