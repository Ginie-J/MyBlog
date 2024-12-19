package com.project.blog.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.blog.backend.entity.PostCommentEntity;
import com.project.blog.backend.repository.PostCommentRepository;

@RestController
@RequestMapping("/api/posts/commend")
public class PostCommentController {
 
    private PostCommentRepository postCommentRepository;

    //목록
    @GetMapping("{postId}")
    public List<PostCommentEntity> getAllPostsComments(@PathVariable long postId){
        return postCommentRepository.findAllByPostId(postId);
    }

    //삭제


    //쓰기
    @PostMapping
    public PostCommentEntity createPostComment(@RequestBody PostCommentEntity postComment) {
        return postCommentRepository.save(postComment);
    }
}

