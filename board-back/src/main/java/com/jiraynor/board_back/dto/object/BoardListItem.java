package com.jiraynor.board_back.dto.object;

import java.util.List;
import java.util.stream.Collectors;

import com.jiraynor.board_back.entity.BoardListViewEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class BoardListItem {
    private int boardNumber; 
    private String title;
    private String content;
    private String boardTitleImage;
    private String writeDatetime;
    private String writerNickname;
    private int price;

    // BoardListViewEntity 리스트를 BoardListItem 리스트로 변환하는 메서드 추가
    public static List<BoardListItem> getList(List<BoardListViewEntity> entities) {
        if (entities == null || entities.isEmpty()) {
            return List.of(); // 빈 리스트 반환
        }
        return entities.stream()
                       .map(entity -> new BoardListItem(
                           entity.getBoardNumber(),
                           entity.getTitle(),
                           entity.getContent(),
                           entity.getTitleImage(),
                           entity.getWriteDatetime(),
                           entity.getWriterNickname(),
                           entity.getPrice()
                       ))
                       .collect(Collectors.toList());
    }
}
