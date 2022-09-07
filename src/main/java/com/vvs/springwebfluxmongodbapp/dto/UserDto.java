package com.vvs.springwebfluxmongodbapp.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.vvs.springwebfluxmongodbapp.model.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserDto {
  
  private String id;
  private String username;
  private String password;
  private String email;

  private String firstName;
  private String lastName;

  private Role role;

  public String fullName() {
    return firstName != null ? firstName.concat(" ").concat(lastName) : "";
  }
}
