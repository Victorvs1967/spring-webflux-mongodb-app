package com.vvs.springwebfluxmongodbapp.dto;

import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class PostForm {

  private String id;

  @NotEmpty(message = "Title is required.")
  @Size(min=4, max=255)
  private String title;
  
  @NotEmpty(message = "Author name is required.")
  @Size(min=4, max=128)
  private String author;
  
  private String image;
  private Object content;
  private Date onCreate;
  private Date onUpdate;
  private Boolean published;

}
