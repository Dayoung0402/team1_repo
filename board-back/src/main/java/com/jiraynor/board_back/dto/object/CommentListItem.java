package com.jiraynor.board_back.dto.object;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

// 댓글 리스트
@Getter
@NoArgsConstructor
@AllArgsConstructor

public class CommentListItem {
    private String nickname;
    private String content;
}
