package com.jiraynor.board_back.entity;

import com.jiraynor.board_back.dto.request.board.PostCommentRequestDto;

import jakarta.annotation.Nullable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "comment")
@Table(name = "comment")
public class CommentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int commentNumber;
    private String content;
    private String userEmail;
    private int boardNumber;
    private int rating; 

    @Nullable
    private Double averageRating; // nullable로 설정 -> 추가


    public CommentEntity(PostCommentRequestDto dto, Integer boardNumber, String email) {

        this.content = dto.getComment();
        this.userEmail = email;
        this.boardNumber = boardNumber;
        this.averageRating = dto.getAverageRating(); //-> 추가
    }

    

}
