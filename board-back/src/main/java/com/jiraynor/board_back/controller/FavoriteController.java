package com.jiraynor.board_back.controller;

import com.jiraynor.board_back.service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/favorites")
public class FavoriteController {

    private final FavoriteService favoriteService;

    @Autowired
    public FavoriteController(FavoriteService favoriteService) {
        this.favoriteService = favoriteService;
    }

    /**
     * 새로운 평점을 추가하는 엔드포인트
     *
     * @param userEmail   사용자의 이메일
     * @param boardNumber 게시글 번호
     * @param rating      추가할 평점 (1~5 범위의 값이어야 함)
     * @return 성공 메시지 또는 오류 메시지
     */
    @PostMapping("/rate")
    public ResponseEntity<String> addRating(
            @RequestParam String userEmail,
            @RequestParam int boardNumber,
            @RequestParam int rating) {

        // rating 값이 1에서 5 사이의 유효한 평점인지 확인
        if (rating < 1 || rating > 5) {
            return ResponseEntity.badRequest().body("Rating must be between 1 and 5.");
        }

        // 평점 추가 시도
        String result = favoriteService.addRating(userEmail, boardNumber, rating);
        if (result.equals("User has already rated this board.")) {
            return ResponseEntity.badRequest().body(result);
        }

        return ResponseEntity.ok(result);
    }

    /**
     * 특정 게시글의 평균 평점을 조회하는 엔드포인트
     *
     * @param boardNumber 게시글 번호
     * @return 0.5 단위로 반올림된 평균 평점
     */
    @GetMapping("/averageRating")
    public ResponseEntity<Double> getAverageRating(
            @RequestParam int boardNumber) {

        double averageRating = favoriteService.calculateAverageRatingForBoard(boardNumber);
        return ResponseEntity.ok(averageRating);
    }
}
