package com.project.blog.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.blog.backend.entity.PostEntity;
import com.project.blog.backend.entity.PostFileEntity;
import com.project.blog.backend.repository.PostFileRepository;
import com.project.blog.backend.repository.PostRepository;

@Service
public class PostService {

   @Autowired 
   private PostRepository postRepository;

   @Autowired
   private PostFileRepository postFileRepository;

   //crud
   public List<PostEntity> getAllPosts(){
      List<PostEntity> posts = postRepository.findAll();
      posts.forEach(post->{
         Optional<PostFileEntity> firstImg = postFileRepository.findFirstImageByNtime(post.getNtime());
         post.setFirstImg(firstImg.map(PostFileEntity::getNfilename).orElse(null));
      });
      return null;
   }

   public Optional<PostEntity> getPostByPost(String post){
      return postRepository.findByPost(post);
   }

   public PostEntity createPost(PostEntity post){
       return postRepository.save(post);
   }

   public void deletePost(Long id) {
      postRepository.deleteById(id);
   }

   public PostEntity updatePost(Long id, PostEntity updatePost){
      return postRepository.findById(id).map(existingPost -> {
          existingPost.setPost(updatePost.getPost());
          existingPost.setCategory(updatePost.getCategory());
          existingPost.setTitle(updatePost.getTitle());
          existingPost.setContent(updatePost.getContent());
          existingPost.setHashtag(updatePost.getHashtag());
          return postRepository.save(existingPost);
      }).orElseThrow(()-> new RuntimeException(id +"번 업데이트 에러"));
   }

}

