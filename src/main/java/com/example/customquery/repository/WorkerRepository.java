package com.example.customquery.repository;

import com.example.customquery.entity.Worker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkerRepository extends JpaRepository<Worker,Long>,JpaSpecificationExecutor<Worker> {

    Worker findByNumberOperator(String numOperator);
    Worker findByCardId (long id);

}
