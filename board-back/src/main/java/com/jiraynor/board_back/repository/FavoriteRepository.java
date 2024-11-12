package com.jiraynor.board_back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jiraynor.board_back.entity.FavoriteEntity;
import com.jiraynor.board_back.entity.primaryKey.FavoritePk;

import java.util.List;
import java.util.Optional;

@Repository
public interface FavoriteRepository extends JpaRepository<FavoriteEntity, FavoritePk> {
    Optional<FavoriteEntity> findByBoardNumberAndUserEmail(Integer boardNumber, String userEmail);

    // 특정 게시글 번호에 해당하는 모든 FavoriteEntity 조회
    List<FavoriteEntity> findAllByBoardNumber(Integer boardNumber);
}
