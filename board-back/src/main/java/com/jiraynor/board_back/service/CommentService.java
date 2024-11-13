package com.jiraynor.board_back.service;

import com.jiraynor.board_back.dto.request.board.PostCommentRequestDto;
import org.springframework.http.ResponseEntity;

public interface CommentService {
    ResponseEntity<?> addComment(Integer boardNumber, PostCommentRequestDto dto);
}
