package com.vvs.springwebfluxmongodbapp.dto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserForm {
  
  private String id;

  @NotEmpty(message = "Username is required.")
  @Size(min = 6, max = 16)
  private String username;

  @NotEmpty(message = "Password is required.")
  @Size(min = 6)
  private String password;

  @NotEmpty(message = "Email is required.")
  @Size(min = 6)
  private String email;

  private String firstName;
  private String lastName;
}
