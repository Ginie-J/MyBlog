package com.project.blog.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.blog.backend.entity.PostEntity;

public interface PostRepository extends JpaRepository<PostEntity, Long>{
    //post 기준으로 검색
    Optional<PostEntity> findByPost(String post);
}
