package com.example.customquery.controller;

import com.example.customquery.dto.DataResponse;
import com.example.customquery.dto.request.PersonRequest;
import com.example.customquery.dto.request.SearchPersonRequest;
import com.example.customquery.dto.response.PersonResponse;
import com.example.customquery.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin//крос доменні запити
@RequestMapping("/person")
public class PersonController {

    @Autowired
    private PersonService personService;

    @PostMapping("/login")
    public PersonResponse check(@RequestBody PersonRequest personRequest){
        return personService.check(personRequest);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @PostMapping("/save")
    public void savePerson (@RequestBody @Valid PersonRequest personRequest) {
        personService.createPerson(personRequest);
    }
    //@PreAuthorize("hasAnyAuthority('ADMIN','QUALITY')")
    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @PostMapping("/all")
    public DataResponse<PersonResponse> findAllPerson(@RequestBody SearchPersonRequest searchPersonRequest){
        return personService.findAll(searchPersonRequest);
    }

    @PostMapping("/key")
    public String checkKey (){
        return "success";
    }


    @PostMapping("/chpw")
    public void changePassw (@RequestBody  PersonRequest personRequest) {
        personService.changePassword(personRequest);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @PostMapping("/chrf")
    public void changeRfId (@RequestBody PersonRequest personRequest) {
        personService.changeRFID(personRequest);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @PostMapping("/chlg")
    public void changeLogin (@RequestBody PersonRequest personRequest) {
        personService.changelogin(personRequest);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @PostMapping("/chln")
    public void changeLastName (@RequestBody PersonRequest personRequest) {
        personService.changeLastName(personRequest);
    }
    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @PostMapping("/chRl")
    public void changeRole (@RequestBody PersonRequest personRequest) {
        personService.changeRole(personRequest);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @PostMapping("/delPers")
    public void delete (@RequestBody PersonRequest personRequest) {
        personService.deletePerson(personRequest);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @PostMapping("/updateProgAcc")
    public void updateProjectAccess (@RequestBody PersonRequest personRequest) {
        personService.addDelProgectAccess(personRequest);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @PostMapping("/findOne")
    public PersonResponse findOneByNumber (@RequestBody PersonRequest personRequest) {
       return personService.findOneByNumber(personRequest);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @PostMapping("/findAllRole")
    public List<String> findAllRole () {
        return personService.findRole();
    }

    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @PostMapping("/findAllProject")
    public List<String> findAllProject () {
        return personService.findProject();
    }

}