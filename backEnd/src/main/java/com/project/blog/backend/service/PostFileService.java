package com.project.blog.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.project.blog.backend.entity.PostFileEntity;
import com.project.blog.backend.repository.PostFileRepository;

public class PostFileService {
    @Autowired 
   private PostFileRepository postFileRepository;

   //전체파일
   public List<PostFileEntity> getFilesByNtime(Long ntime) {
      return postFileRepository.findAllByNtime(ntime);
   }

   //저장
   public PostFileEntity saveFile(PostFileEntity file) {
       return postFileRepository.save(file);
   }

   //수정을 위한 파일 가져오기
   public Optional<PostFileEntity> getFileById(Long id){
       return postFileRepository.findById(id);
   }

   //삭제
   public void deleteFileById(Long id) {
      postFileRepository.deleteById(id);
   }

   //목록삭제
   public void deleteFileByNtime(Long ntime){
      postFileRepository.deleteFileByNtime(ntime);
   }
}
