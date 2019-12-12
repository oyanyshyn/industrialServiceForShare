package com.example.customquery.repository;

import com.example.customquery.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Repository
public interface EtbDataRepository extends JpaRepository<EtbData,Long>,JpaSpecificationExecutor<EtbData> {

    List<EtbData> findByColectivEtbAndDateEtbAndStatusTestAndPlant(Collective collective, LocalDate dateEtb, StatusTest statusTest, Plant plant);

    List<EtbData> findByColectivEtbAndDateEtbAndStatusTestAndShiftEtbAndPlant(Collective collective, LocalDate dateEtb, StatusTest statusTest,Integer shift, Plant plant);

    List<EtbData> findByStatusTestAndPlant(StatusTest statusTest, Plant plant);

    List<EtbData> findByColectivEtbAndDateEtbAndStatusTestAndReferenceAndPlant(Collective collective, LocalDate dateEtb, StatusTest statusTest, Reference reference, Plant plant);

    List<EtbData> findByColectivEtbAndDateEtbAndTimeEtbIsBetweenAndStatusTestAndPlant(Collective collective, LocalDate dateBf, LocalTime timeBf, LocalTime timeAf,StatusTest statusTest, Plant plant);

    List<EtbData> findByColectivEtbAndDateEtbAfterAndTimeEtbBetweenAndStatusTestAndPlant(Collective collective, LocalDate dateAf, LocalTime before,LocalTime after, StatusTest statusTest, Plant plant );
    List<EtbData> findByBox (Box box);
}
