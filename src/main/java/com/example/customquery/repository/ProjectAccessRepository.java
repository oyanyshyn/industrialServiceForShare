package com.example.customquery.repository;

import com.example.customquery.entity.Person;
import com.example.customquery.entity.Project;
import com.example.customquery.entity.ProjectAccess;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectAccessRepository extends JpaRepository<ProjectAccess,Long>,JpaSpecificationExecutor<ProjectAccess> {


    List<ProjectAccess> findByPerson (Person person);
    ProjectAccess findByProjectAndPerson (Project project, Person person);

}
