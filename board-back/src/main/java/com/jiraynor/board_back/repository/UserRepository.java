package com.jiraynor.board_back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jiraynor.board_back.entity.UserEntity;


@Repository
public interface UserRepository extends JpaRepository<UserEntity, String>{
    
    boolean existsByEmail(String email);
    boolean existsByNickname(String nickname);

    UserEntity findByEmail(String email);
    
}
