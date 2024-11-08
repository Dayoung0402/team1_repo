package com.jiraynor.board_back.dto.object;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

// 검색 게시물 리스트(혹시 몰라서 작성!)
@Getter
@NoArgsConstructor
@AllArgsConstructor

public class BoardListItem {
    private int board_number;
    private String title;
    private String content;
    private String boardTitleImage;
    private int favoriteCount;
    private int commentCount;
    private int viewCount;
    private String writeDatetime;
    private String writerNickname;
}
