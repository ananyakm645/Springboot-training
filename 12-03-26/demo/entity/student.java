package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "student")
public class student {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private long id;

   @Column(name="username")
   private String name;

   @OneToOne
   @JoinColumn(name="register_id")
   private RegisterNumber registrationNumber;

   public long getId() {
      return id;
   }

   public void setId(long id) {
      this.id = id;
   }

   public String getName() {
      return name;
   }

   public void setName(String name) {
      this.name = name;
   }

   public RegisterNumber getRegistrationNumber() {
      return registrationNumber;
   }

   public void setRegisterNumber(RegisterNumber register) {
      this.registrationNumber = register;
   }
}