package com.example.customquery.service;


import com.example.customquery.dto.request.LoginRequest;
import com.example.customquery.entity.Person;
import com.example.customquery.repository.PersonRepository;
import com.example.customquery.security.tokenUtils.TokenTools;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {


    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private TokenTools tokenTools;

    public String login(LoginRequest loginRequest){
        Person person = personRepository.findByLogin(loginRequest.getLogin());
        if(person != null){
            if(person.getPassword().equals(loginRequest.getPassword())){
                return tokenTools.tokenGenerator(person.getLogin(),person.getRole().name());
            }else{
                throw new IllegalArgumentException("Input data is not correct");
            }
        }else{
            throw new IllegalArgumentException("Input data is not correct");
        }

    }
}
