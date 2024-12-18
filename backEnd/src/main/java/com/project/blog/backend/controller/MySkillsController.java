package com.project.blog.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.blog.backend.entity.MySkills;
import com.project.blog.backend.service.MySkillsService;

@RestController
@RequestMapping("/api/myskills")
public class MySkillsController {
    @Autowired
    private MySkillsService mySkillsService;

    @GetMapping
    public ResponseEntity<List<MySkills>> getAllMySkills(){
        List<MySkills> mySkills = mySkillsService.getAllMySkills();
        return ResponseEntity.ok(mySkills);
    }
}
