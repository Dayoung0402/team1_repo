package com.jiraynor.board_back.entity;

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
@Entity(name="board")
@Table(name="board")
public class BoardEntity {

    @Id @GeneratedValue(strategy=GenerationType.IDENTITY )

    private int boardNumber; // 레시피 게시판에는 필요하지 않지만 자유게시판에는 존재
    private String title; 
    private String content;
    private String writeDatetime;
    private String writerEmail;
    private int favoriteCount;
    private int commentCount;
    private int price;
    




}
