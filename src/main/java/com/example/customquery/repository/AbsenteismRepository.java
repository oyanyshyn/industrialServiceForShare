package com.example.customquery.repository;

import com.example.customquery.entity.Absenteeism;
import com.example.customquery.entity.Collective;
import com.example.customquery.entity.Worker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface AbsenteismRepository extends JpaRepository<Absenteeism,Long>,JpaSpecificationExecutor<Absenteeism> {
    List<Absenteeism> findByCollectiveAndDate(Collective collective,LocalDate date);
    List<Absenteeism> findByCollectiveAndDateAndWorker(Collective collective, LocalDate localDate, Worker worker);
}
