package com.example.customquery.repository;

import com.example.customquery.entity.Box;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface BoxRepository extends JpaRepository<Box,Long>,JpaSpecificationExecutor<Box> {

    Box findBoxByBoxCode (String boxCode);
    Box findBoxById (long id);
}
