package com.example.customquery.repository;

import com.example.customquery.entity.Subcomponent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface SubcomponentRepository extends JpaRepository<Subcomponent,Long>,JpaSpecificationExecutor<Subcomponent> {

}
