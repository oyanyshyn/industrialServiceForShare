package com.example.customquery.dto.request;

import com.example.customquery.entity.Project;
import com.example.customquery.entity.Role;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
@Setter
public class PersonRequest {

    private long id;
    @NotNull
    private String firstName;

    @NotNull
    private String lastName;
    private String newLastName;

    @NotNull
    private String login;
    private String newLogin;

    @NotNull
    private  String password;
    private  String newPassword;


    private  long rfId;
    private  long newRfId;


    private  String numOpertor;

    private Role role;

    private List<Project> projects;


}
