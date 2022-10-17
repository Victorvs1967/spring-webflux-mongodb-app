package com.vvs.springwebfluxmongodbapp.model;

import java.time.Instant;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
@Document("posts")
public class Post {
  @Id
  private String id;
  private String title;
  private String image;
  private String author;
  private Date onCreate;
  private Date onUpdate;
  private Boolean published;
  private String content;

  public Post() {
    onCreate = Date.from(Instant.now());
    onUpdate = onCreate;
    published = true;
  }

}
