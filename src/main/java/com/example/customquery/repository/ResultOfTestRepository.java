package com.example.customquery.repository;

import com.example.customquery.entity.Person;
import com.example.customquery.entity.ResultOfTest;
import com.example.customquery.entity.Worker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface ResultOfTestRepository extends JpaRepository<ResultOfTest,Long>,JpaSpecificationExecutor<ResultOfTest> {
    ResultOfTest findByWorker (Worker worker);
    ResultOfTest findByQaOperator (Person person);
    ResultOfTest findById (long id);
}
