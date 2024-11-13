package com.jiraynor.board_back.controller;

import com.jiraynor.board_back.dto.request.board.PostCommentRequestDto;
import com.jiraynor.board_back.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/board/{boardNumber}")
public class CommentController {

    @Autowired
    @Qualifier("commentServiceImplement") // 또는 실제 Bean 이름
    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    

    @PostMapping("/comment")
    public ResponseEntity<?> postComment(
            @PathVariable Integer boardNumber,
            @Valid @RequestBody PostCommentRequestDto dto,
            BindingResult bindingResult) {

        // 유효성 검사 실패 시 오류 반환
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body(bindingResult.getAllErrors());
        }

        // 유효성 검사를 통과한 경우 서비스 로직 처리
        return commentService.addComment(boardNumber, dto);
    }
}
