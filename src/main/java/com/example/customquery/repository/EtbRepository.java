package com.example.customquery.repository;

import com.example.customquery.entity.Etb;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface EtbRepository extends JpaRepository<Etb,Long>,JpaSpecificationExecutor<Etb> {
}
