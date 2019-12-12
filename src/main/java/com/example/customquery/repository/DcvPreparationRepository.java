package com.example.customquery.repository;

import com.example.customquery.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface DcvPreparationRepository extends JpaRepository<DcvPreparation,Long>,JpaSpecificationExecutor<DcvPreparation> {
    DcvPreparation findByHp (long hp);
    DcvPreparation findBySubcomponent (Subcomponent subcomponent);
    DcvPreparation findByReference (Reference reference);
   // DcvPreparation findByEtb (Etb etb);
    DcvPreparation findByFamily (Family family);
}
