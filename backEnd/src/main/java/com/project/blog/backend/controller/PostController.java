package com.project.blog.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.blog.backend.entity.PostEntity;
import com.project.blog.backend.service.PostService;

@RestController
@RequestMapping("/api/posts")
public class PostController {

   @Autowired 
   private PostService postService;

   //목록보기
   @GetMapping
   public List<PostEntity> getAllPosts(){
      return postService.getAllPosts();
   }

   //세부내용보기
   @GetMapping("/{post}")
   public PostEntity getPostByPost(@PathVariable String post){
      return postService.getPostByPost(post).orElseThrow(()->new RuntimeException("내용이 없습니다."));
   }
   
   //쓰기
   @PostMapping
   public PostEntity createPost(@RequestBody PostEntity post) {
      return postService.createPost(post);
   }

}
