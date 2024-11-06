package com.jiraynor.board_back.dto.object;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// 검색 게시물 리스트(혹시 몰라서 작성!)
@Getter
@NoArgsConstructor
@AllArgsConstructor

public class BoardListItem {
<<<<<<< HEAD
    private int board_number;
=======
    private int board_number; 
>>>>>>> 3a736922e28d83e9ce09d83099efa299f1f91ed4
    private String title;
    private String content;
    private String boardTitleImage;
    private int favoriteCount;
    private int commentCount;
    private int viewCount;
    private String writeDatetime;
    private String writerNickname;
}
