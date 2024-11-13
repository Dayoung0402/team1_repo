package com.jiraynor.board_back.service.implement;

import com.jiraynor.board_back.dto.request.board.PostCommentRequestDto;
import com.jiraynor.board_back.dto.response.ResponseDto;
import com.jiraynor.board_back.dto.response.board.PostCommentResponseDto;
import com.jiraynor.board_back.entity.BoardEntity;
import com.jiraynor.board_back.entity.CommentEntity;
import com.jiraynor.board_back.repository.BoardRepository;
import com.jiraynor.board_back.repository.CommentRepository;
import com.jiraynor.board_back.service.CommentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class CommentServiceImplement implements CommentService {

    private final BoardRepository boardRepository;
    private final CommentRepository commentRepository;

    @Autowired
    public CommentServiceImplement(BoardRepository boardRepository, CommentRepository commentRepository) {
        this.boardRepository = boardRepository;
        this.commentRepository = commentRepository;
    }

    @Override
    public ResponseEntity<?> addComment(Integer boardNumber, PostCommentRequestDto dto) {
        try {
            // 게시글이 존재하는지 확인
            BoardEntity boardEntity = boardRepository.findByBoardNumber(boardNumber);
            if (boardEntity == null) {
                return PostCommentResponseDto.noExistBoard();
            }

            // 댓글 저장
            CommentEntity commentEntity = new CommentEntity(dto, boardNumber, dto.getComment());
            commentRepository.save(commentEntity);

            // 성공 응답 반환
            return PostCommentResponseDto.success();
        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }
    }
}
