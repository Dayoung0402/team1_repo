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
    }
        
    
    @Id
    private String userEmail;

    @Id
    private int boardNumber;

    private int favoriteCount;
    
    private int ratingCount;
}
