package com.project.blog.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.blog.backend.entity.PostCommentEntity;

public interface PostCommentRepository extends JpaRepository<PostCommentEntity, Long> {

    //post_id 기분으로 검색
    List<PostCommentEntity> findAllByPostId(Long id);
 
 }
