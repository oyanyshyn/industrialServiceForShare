package com.example.customquery;

import com.example.customquery.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

import javax.annotation.PostConstruct;

@SpringBootApplication
public class CustomqueryApplication extends SpringBootServletInitializer {



    @Autowired
    private PersonRepository personRepository;


    public static void main(String[] args) {
        SpringApplication.run(CustomqueryApplication.class, args);
    }

    @PostConstruct
    public void postMain(){
//
//        Person person1 = new Person();
//        person1.setFirstName("Yarik");
//        person1.setLastName("Vadila");
//
//        Person person2 = new Person();
//        person2.setFirstName("Anton");
//        person2.setLastName("Spenash");
//
//        personRepository.save(person1);
//        personRepository.save(person2);
//
//        Car car1 = new Car("BMW","e32",260);
//        Car car2 = new Car("BMW","f15",326);
//        car1.setPerson(person1);
//        car2.setPerson(person1);
//
//        Car car3 = new Car("Audi","rs7",560);
//        Car car4 = new Car("MB","s-coupe",420);
//        car3.setPerson(person2);
//        car4.setPerson(person2);
//
//        carRepository.save(car1);
//        carRepository.save(car2);
//        carRepository.save(car3);
//        carRepository.save(car4);


//        List<Person> personList = personRepository.findByMarkaAuto("BMW");
//        personList.stream().forEach( p ->{
//            System.out.println(p.getFirstName());
//        });

    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(CustomqueryApplication.class);
    }
}
