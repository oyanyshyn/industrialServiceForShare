package com.example.customquery.controller;


import com.example.customquery.dto.request.LoginRequest;
import com.example.customquery.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/public")
public class PublicController {



    @Autowired
    private LoginService loginService;


    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest){
        return loginService.login(loginRequest);
    }




}


