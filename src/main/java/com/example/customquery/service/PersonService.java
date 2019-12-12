package com.example.customquery.service;


import com.example.customquery.Specification.PersonSpecification;
import com.example.customquery.dto.DataResponse;
import com.example.customquery.dto.request.PersonRequest;
import com.example.customquery.dto.request.SearchPersonRequest;
import com.example.customquery.dto.request.SortRequest;
import com.example.customquery.dto.response.PersonResponse;
import com.example.customquery.entity.*;
import com.example.customquery.repository.PersonRepository;
import com.example.customquery.repository.ProjectAccessRepository;
import com.example.customquery.repository.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;
    @Autowired
    private WorkerRepository workerRepository;
    @Autowired
    private ProjectAccessRepository projectAccessRepository;


    public PersonResponse check(PersonRequest personRequest){

        Person personFromDB =personRepository.findByLogin(personRequest.getLogin());
        if (personFromDB.getLogin().isEmpty()){
            throw new IllegalArgumentException("Person login is empty");
        }
        if (personFromDB.getPassword().equals(personRequest.getPassword())){
            System.out.println("Pasword correct");
            PersonResponse personresp =  new PersonResponse(personFromDB);
            return personresp;


        } else {
            throw new IllegalArgumentException("Pasword is wrong");
        }
    }

    public DataResponse<PersonResponse> findAll(SearchPersonRequest searchPersonRequest){
        SortRequest sortRequest = searchPersonRequest.getSortRequest();
        Sort sort = Sort.by(sortRequest.getDirection(), sortRequest.getFieldName());
        PageRequest pageRequest = PageRequest.of(searchPersonRequest.getPage(),searchPersonRequest.getSize(),sort);
        PersonSpecification personSpecification = new PersonSpecification(searchPersonRequest.getValue(),searchPersonRequest.getLinkedPredicate());
        Page<Person> personPage;
        if (searchPersonRequest.getLinkedPredicate()==LinkedPredicate.AND){
            personPage = personRepository.findAll(pageRequest);
        }else {
            personPage = personRepository.findAll(personSpecification, pageRequest);
        }
        return new DataResponse<PersonResponse>(personPage.getContent().stream().map(PersonResponse::new).collect(Collectors.toList()), personPage);
    }

    public void createPerson (PersonRequest personRequest) {

        Worker worker = saveWorker(personRequest);
        if (worker.getNumberOperator().isEmpty()){
            throw new IllegalArgumentException("RFID code is incorrect");
        }else {
            Person personName= personRepository.findByLogin(personRequest.getLogin());
            if(personName == null) {
                Person personPasw= personRepository.findByPassword(personRequest.getPassword());
                 if(personPasw == null) {
                     savePerson(personRequest);
                 }else {
                     throw new IllegalArgumentException("Password still is incorrect");
                 }

            }else {
                throw new IllegalArgumentException("Login is used");
            }

        }

    }

    private Worker  saveWorker (PersonRequest personRequest){
    Worker workerNum = workerRepository.findByNumberOperator(personRequest.getNumOpertor());
    Worker worker = new Worker();
    if(workerNum == null) {
        Worker workerId = workerRepository.findByCardId(personRequest.getRfId());
        if(workerId == null) {
            worker.setCardId(personRequest.getRfId());
            worker.setNumberOperator(personRequest.getNumOpertor());
            workerRepository.save(worker);
        }else {
            throw new IllegalArgumentException("RFID code is incorrect");
        }
    }else {
        worker = workerNum;
    }
    return worker;
}

    private void savePerson (PersonRequest personRequest) {
        Person person = new Person();
        person.setFirstName(personRequest.getFirstName());
        person.setLastName(personRequest.getLastName());
        person.setLogin(personRequest.getLogin());
        person.setPassword(personRequest.getPassword());
        person.setRole(personRequest.getRole());
        person.setWorker(workerRepository.findByNumberOperator(personRequest.getNumOpertor()));
        personRepository.save(person);

        List<Project> access = personRequest.getProjects();
        for (Project each: access) {
           projectAccessRepository.save(new ProjectAccess(each,person));
        }

    }

    public void  changePassword (PersonRequest personRequest){
       Person person = personRepository.findByLogin(personRequest.getLogin());
        if(person!=null) {

       if (person.getPassword().equals(personRequest.getPassword())){

           if(personRequest.getNewPassword()!=null) {

               Person person1=personRepository.findByPassword(personRequest.getNewPassword());
               if(person1==null) {

                   person.setPassword(personRequest.getNewPassword());
                   personRepository.save(person);
               }else {

                   throw new IllegalArgumentException("New passwords isn't correct ");
               }
           }else {
               throw new IllegalArgumentException("New passwords isn't equals ");
           }
       }else {
           throw new IllegalArgumentException("Wrong current password");
       }
        }else {
            throw new IllegalArgumentException("login isn't correct");
        }
    }

    public void  changeRFID (PersonRequest personRequest){
        Person person = personRepository.findByLogin(personRequest.getLogin());
        if(person!=null) {
        if (person.getWorker().getCardId()==personRequest.getRfId()){
            String parslong = Long.toString(personRequest.getNewRfId());
            if( parslong != null) {
                Worker worker = person.getWorker();
              worker.setCardId(personRequest.getNewRfId());
              workerRepository.save(worker);
            }else {
                throw new IllegalArgumentException("New RFID isn't correct ");
            }
        }else {
            throw new IllegalArgumentException("Wrong current RFID");
        }
    }else {
            throw new IllegalArgumentException("Login isn't correct ");
        }
}

    public void  changelogin (PersonRequest personRequest){
        Person person = personRepository.findByLogin(personRequest.getLogin());
        if(person!=null) {
            if(personRequest.getNewLogin()!=null) {
                Person person1=personRepository.findByLogin(personRequest.getNewLogin());
                if(person1==null) {
                    person.setLogin(personRequest.getNewLogin());
                    personRepository.save(person);
                }else {
                    throw new IllegalArgumentException("New login already use");
                }
            }else {
                throw new IllegalArgumentException("New login is empty");
            }
        }else {
            throw new IllegalArgumentException("login isn't correct");
        }
    }

    public void  changeLastName (PersonRequest personRequest){
        Person person = personRepository.findByLogin(personRequest.getLogin());
        if(person!=null) {
        if(personRequest.getNewLastName()!=null) {
                person.setLastName(personRequest.getNewLastName());
                personRepository.save(person);
        }else {
            throw new IllegalArgumentException("New Last name is Empty");
        }
    }else {
        throw new IllegalArgumentException("login isn't correct");
    }

    }

    public void  changeRole (PersonRequest personRequest){
        Person person = personRepository.findByLogin(personRequest.getLogin());
        if(person!=null) {
            person.setRole(personRequest.getRole());
            personRepository.save(person);
        }else {
            throw new IllegalArgumentException("login isn't correct");
        }

    }

    public void  deletePerson (PersonRequest personRequest){
        Person person = personRepository.findByLogin(personRequest.getLogin());
        if(person!=null) {
            List<ProjectAccess> projectAccesses =projectAccessRepository.findByPerson(person);
            if(projectAccesses!=null) {
                for (ProjectAccess each : projectAccesses) {
                    ProjectAccess projectAccess = projectAccessRepository.findByProjectAndPerson(each.getProject(), person);
                    projectAccessRepository.delete(projectAccess);
                    }
                }
                person.setRole(Role.NOTACTIVE);
        personRepository.save(person);
    }else {
            throw new IllegalArgumentException("login isn't correct");
    }

    }

    public void  addDelProgectAccess (PersonRequest personRequest){
        Person person = personRepository.findByLogin(personRequest.getLogin());
        if(person!=null) {
        List<ProjectAccess> projectAccesses =projectAccessRepository.findByPerson(person);
        List<Project> access = personRequest.getProjects();
        List<Project> addAccess = new ArrayList<>();

            if(projectAccesses!=null) {
                for (ProjectAccess each : projectAccesses) {
                    int k = 0;
                    for (Project eachpr : access) {
                        if (eachpr == each.getProject()) {
                            k = 1;
                        }
                    }
                    if (k == 0) {
                        ProjectAccess projectAccess = projectAccessRepository.findByProjectAndPerson(each.getProject(), person);
                        if(projectAccess !=null) {
                            projectAccessRepository.delete(projectAccess);
                        }else {
                            throw new IllegalArgumentException("project access error");
                        }
                    }
                }
            }

        for (Project each: access) {
            int k2 = 0;
            if(projectAccesses!=null) {
                for (ProjectAccess eachAc : projectAccesses) {
                    if (each == eachAc.getProject()) {
                        k2 = 1;
                    }
                }
            }
            if (k2 == 0) {
                projectAccessRepository.save(new ProjectAccess(each, person));
            }
        }

        }else {
            throw new IllegalArgumentException("login isn't correct");
        }
    }

    public PersonResponse  findOneByNumber (PersonRequest personRequest){
        Worker worker = workerRepository.findByNumberOperator(personRequest.getNumOpertor());
        if (worker != null){
        Person person = personRepository.findByWorker(worker);
        if (person != null){
            PersonResponse personResponse = new PersonResponse(person);
            return personResponse;
        }else {
            throw new IllegalArgumentException("Person not found");
        }
        }else{
            throw new IllegalArgumentException("Operator's number missing");
        }

    }

    public List<String>  findRole (){
        Role[] rolesArr = Role.values();
        List<String> roles = new ArrayList<>();

        for (Role each : rolesArr) {
         roles.add(each.name());
        }

      return roles;
    }

    public List<String>  findProject (){
        Project[] projectsArr = Project.values();
        List<String> project = new ArrayList<>();

        for (Project each : projectsArr) {
            project.add(each.name());
        }

        return project;
    }

}