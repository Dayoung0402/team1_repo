package com.jiraynor.board_back.dto.request.board;

import jakarta.annotation.Nullable;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PostCommentRequestDto {

    @NotBlank
    private String comment;

    // 우리팀 따로 추가 부분! -> 평균 평점!
    @Nullable
    private Double averageRating; //double을 Double로 변경(Double이 참조형으로 널을 허용하는 것)

    
}
