package com.example.customquery.security.tokenUtils;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.log4j.Log4j2;
import com.example.customquery.security.dto.TokenUser;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Log4j2
@Component
public class TokenTools {

//    private final static Logger LOGGER = Logger.getLogger(TokenTools.class);


    @Value("10000")
    private Integer expirationTime;

    @Value("FujiLviv")
    private String tokenSecret;

    public String tokenGenerator(String login,String role){
//        LOGGER.info("Creating time slot for token");
        Date createdAt = new Date();
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(createdAt);
        calendar.add(Calendar.SECOND,expirationTime);
        Date validTo = calendar.getTime();
        String token = null;
//        LOGGER.info("Creating token");
        try {
              token = Jwts.builder().setIssuer("Automotive")
                    .claim("login",login)
                    .claim("role",role)
                    .setIssuedAt(createdAt)
                    .setExpiration(validTo)
                    .signWith(SignatureAlgorithm.HS256, getTokenSecret())
                    .compact();
        } catch (Exception e) {

        }
        return  token;
    }

    public boolean isTokenValid(String token){
        boolean valid  = false;
        try{
            Jwts.parser().setSigningKey(getTokenSecret()).parseClaimsJws(token);
            valid = true;
        }catch (Exception e){

        }
        return valid;
    }

    public boolean isTokenExpired(String authToken) {
        boolean expired = true;
        try {
            Date date = Jwts.parser().setSigningKey(getTokenSecret()).parseClaimsJws(authToken).getBody().getExpiration();
            expired = false;
        } catch (ExpiredJwtException e) {
            System.out.println("Token is expired " );
        } catch (Exception e) {
//            LOGGER.error("Token validation failed");
        }

        return (expired);
    }

    public UserDetails getUserByToken(String token){
        Claims claims = Jwts.parser().setSigningKey(getTokenSecret()).parseClaimsJws(token).getBody();

//        LOGGER.info("Get roles from token");
        String role = (String) claims.get("role");
        log.info("ROLE - > "+ role);
        GrantedAuthority authority = new SimpleGrantedAuthority(role);
        List<GrantedAuthority> roles = new ArrayList<>();
        roles.add(authority);
//        LOGGER.info("Get other info from token");
        String login = (String) claims.get("login");

        return new TokenUser(login,roles);
    }



    private byte[] getTokenSecret() {
        return tokenSecret.getBytes();
    }

}
