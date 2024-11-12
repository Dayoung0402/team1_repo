package com.jiraynor.board_back.entity;

import com.jiraynor.board_back.entity.primaryKey.FavoritePk;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "favorite")
@Table(name = "favorite")
@IdClass(FavoritePk.class)
public class FavoriteEntity {

    public FavoriteEntity(String userEmail, int boardNumber) {
        this.userEmail = userEmail;
        this.boardNumber = boardNumber;
        this.favoriteCount = 0; // 초기값 0 설정
        this.ratingCount = 0; // 초기값 0 설정
    }

    @Id
    private String userEmail;

    @Id
    private int boardNumber;

    private int favoriteCount; // 평점 총합
    private int ratingCount; // 평점 횟수
}
