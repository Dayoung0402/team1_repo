package com.jiraynor.board_back.service;

import com.jiraynor.board_back.entity.FavoriteEntity;
import com.jiraynor.board_back.repository.FavoriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class FavoriteService {

    private final FavoriteRepository favoriteRepository;

    @Autowired
    public FavoriteService(FavoriteRepository favoriteRepository) {
        this.favoriteRepository = favoriteRepository;
    }

    /**
     * 새로운 평점을 추가하고 favoriteCount와 ratingCount를 업데이트하는 메서드
     *
     * @param userEmail   사용자의 이메일
     * @param boardNumber 게시글 번호
     * @param rating      추가할 평점 (1~5 범위의 값이어야 함)
     * @return 성공 메시지 또는 오류 메시지
     */
    @Transactional
    public String addRating(String userEmail, int boardNumber, int rating) {
        // 사용자가 이미 해당 게시글에 평점을 남겼는지 확인
        Optional<FavoriteEntity> optionalFavoriteEntity = favoriteRepository.findByBoardNumberAndUserEmail(boardNumber,
                userEmail);

        if (optionalFavoriteEntity.isPresent()) {
            return "User has already rated this board."; // 이미 평점을 남긴 경우
        }

        // 새로운 평점 엔티티 생성 및 저장
        FavoriteEntity favoriteEntity = new FavoriteEntity(userEmail, boardNumber, rating, 1);
        favoriteRepository.save(favoriteEntity);

        return "Rating added successfully";
    }

    /**
     * 특정 게시글의 모든 사용자 평점을 기반으로 평균 평점을 계산하는 메서드 (0.5 단위로 반올림)
     *
     * @param boardNumber 게시글 번호
     * @return 0.5 단위로 반올림된 평균 평점
     */
    @Transactional(readOnly = true)
    public double calculateAverageRatingForBoard(int boardNumber) {
        List<FavoriteEntity> favorites = favoriteRepository.findAllByBoardNumber(boardNumber);

        if (favorites.isEmpty()) {
            return 0.0; // 평점이 없을 경우 0.0 반환
        }

        // 전체 favoriteCount와 ratingCount 합산
        int totalFavoriteCount = favorites.stream().mapToInt(FavoriteEntity::getFavoriteCount).sum();
        int totalRatingCount = favorites.stream().mapToInt(FavoriteEntity::getRatingCount).sum();

        double average = (double) totalFavoriteCount / totalRatingCount;
        return Math.round(average * 2) / 2.0; // 0.5 단위로 반올림
    }
}
