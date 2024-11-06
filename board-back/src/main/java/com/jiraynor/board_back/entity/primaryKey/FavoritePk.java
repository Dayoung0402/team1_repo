package com.jiraynor.board_back.entity.primaryKey;

import java.io.Serializable;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FavoritePk implements Serializable {
    @Column(name = "user_email")
    private String userEmail;
<<<<<<< HEAD
    @Column(name = "board_number")
=======
    @Column(name="board_number")
>>>>>>> 3a736922e28d83e9ce09d83099efa299f1f91ed4
    private int boardNumber;

}
