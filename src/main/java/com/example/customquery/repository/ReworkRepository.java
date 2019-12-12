package com.example.customquery.repository;

import com.example.customquery.entity.Rework;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface ReworkRepository extends JpaRepository<Rework,Long>,JpaSpecificationExecutor<Rework> {
}
