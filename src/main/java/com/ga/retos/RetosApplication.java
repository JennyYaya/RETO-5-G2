package com.ga.retos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication
@EntityScan("com.ga.retos.entidades")
public class RetosApplication {

    public static void main(String[] args) {
        SpringApplication.run(RetosApplication.class, args);
    }

}
