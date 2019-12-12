package com.example.customquery.repository;

import com.example.customquery.entity.Person;
import com.example.customquery.entity.Role;
import com.example.customquery.entity.Worker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends JpaRepository<Person,Long>,JpaSpecificationExecutor<Person> {


    //Person findByFirstnameAndLastname(String firstName,String lastName);

    Person findByLogin(String login);

    Person findById(long id);

    Person findByRole(Role role);

    Person findByPassword (String password);

    Person findByWorker (Worker worker);


}
