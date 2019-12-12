package com.example.customquery.dto.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter @Setter
public class LoginRequest {

    @NotNull
    private String login;

    @NotNull
    private String password;
}
