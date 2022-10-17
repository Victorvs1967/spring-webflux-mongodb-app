package com.vvs.springwebfluxmongodbapp.service;

import java.time.Instant;
import java.util.Date;

import org.springframework.stereotype.Service;

import com.vvs.springwebfluxmongodbapp.dto.PostDto;
import com.vvs.springwebfluxmongodbapp.mapper.AppMapper;
import com.vvs.springwebfluxmongodbapp.model.Post;
import com.vvs.springwebfluxmongodbapp.repository.PostRepository;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {

  private PostRepository postRepository;
  private AppMapper postMapper;

  @Override
  public Flux<PostDto> getPosts() {
    return postRepository.findAll()
      .map(post -> postMapper.convert(post, PostDto.class));
  }

  @Override
  public Flux<PostDto> getPostsByAuthor(String author) {
    return postRepository.findByAuthor(author)
      .map(post -> postMapper.convert(post, PostDto.class));
  }

  @Override
  public Mono<PostDto> getPostById(String id) {
    return postRepository.findById(id)
      .map(post -> postMapper.convert(post, PostDto.class));
  }

  @Override
  public Mono<PostDto> createPost(PostDto postDto) {
    return Mono.just(postMapper.convert(postDto, Post.class))
      .flatMap(postRepository::save)
      .map(post -> postMapper.convert(post, PostDto.class));
  }

  @Override
  public Mono<PostDto> updatePost(PostDto postDto) {
    return postRepository.findById(postDto.getId())
      .map(post -> Post.builder()
        .id(post.getId())
        .title(post.getTitle())
        .image(post.getImage())
        .author(post.getAuthor())
        .content(post.getContent())
        .onCreate(post.getOnCreate())
        .onUpdate(Date.from(Instant.now()))
        .published(post.getPublished())
        .build())
      .flatMap(postRepository::save)
      .map(post -> postMapper.convert(post, PostDto.class));
  }

  @Override
  public Mono<Void> deletePost(String id) {
    return Mono.just(id)
      .flatMap(postRepository::deleteById);
  }
  
}
