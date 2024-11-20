package com.jiraynor.board_back.dto.object;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

// 검색 게시물 리스트(혹시 몰라서 작성!)

@Getter
@NoArgsConstructor
@AllArgsConstructor

public class BoardListItem {
    private int boardNumber; 
    private String title;
    private String content;
    private String boardTitleImage;
    private String writeDatetime;
    private String writerEmail;
    private int price;
}
