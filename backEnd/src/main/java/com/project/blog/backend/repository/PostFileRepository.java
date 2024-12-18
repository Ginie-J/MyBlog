package com.project.blog.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.blog.backend.entity.PostFileEntity;

public interface PostFileRepository extends JpaRepository<PostFileEntity, Long>{
    List<PostFileEntity> findAllByNtime(Long ntime);
    void deleteFileByNtime(Long ntime);

    //첫번째 이미지만 가져오기
    @Query(value="SELECT * FROM post_file WHERE ntime=:ntime AND nfilename NOT LIKE 'file_%' ORDER BY id ASC LIMIT 1", nativeQuery = true)
    Optional<PostFileEntity> findFirstImageByNtime(@Param("ntime") Long ntime);
}
