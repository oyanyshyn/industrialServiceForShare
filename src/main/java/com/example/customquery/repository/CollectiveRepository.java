package com.example.customquery.repository;

import com.example.customquery.entity.Collective;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface CollectiveRepository  extends JpaRepository<Collective,Long>,JpaSpecificationExecutor<Collective> {
        Collective findByNameCollective (Integer name);
        Collective findById (long nameCollective);
    }
