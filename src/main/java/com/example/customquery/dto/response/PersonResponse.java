package com.example.customquery.dto.response;


import com.example.customquery.entity.Person;
import com.example.customquery.entity.Project;
import com.example.customquery.entity.ProjectAccess;
import com.example.customquery.entity.Role;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class PersonResponse {

    private long id;

    private String firstName;

    private String lastName;

    private String login;

    private Role role;

    private String numOperator;

    private long cardId;
    private String password;

    private List<Project> projects = new ArrayList<>();;

    public PersonResponse(Person person){
        this.id = person.getId();
        this.firstName = person.getFirstName();
        this.lastName = person.getLastName();
        this.login = person.getLogin();
        this.role = person.getRole();
        this.password = person.getPassword();
        this.numOperator = person.getWorker().getNumberOperator() ;
        this.cardId = person.getWorker().getCardId();
        if (person.getProjectAccesses()!=null) {
            for (ProjectAccess each : person.getProjectAccesses()) {
                System.out.println(each.getProject());
              projects.add(each.getProject());

            }
        }
     }


}
