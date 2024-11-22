package com.jiraynor.board_back.dto.object;

<<<<<<< HEAD
import java.util.List;
import java.util.stream.Collectors;
=======
import java.util.ArrayList;
import java.util.List;
>>>>>>> back2

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

<<<<<<< HEAD
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
=======
    public BoardListItem(BoardListViewEntity boardListViewEntity) {
        this.boardNumber = boardListViewEntity.getBoardNumber();
        this.title = boardListViewEntity.getTitle();
        this.content = boardListViewEntity.getContent();
        this.boardTitleImage = boardListViewEntity.getTitleImage();
        this.writeDatetime = boardListViewEntity.getWriteDatetime();
        this.writerNickname = boardListViewEntity.getWriterNickname();
        this.price = boardListViewEntity.getPrice();
    }

    public static List<BoardListItem> getList(List<BoardListViewEntity> boardListViewEntities) {
        List<BoardListItem> list = new ArrayList<>();
        for (BoardListViewEntity boardListViewEntity : boardListViewEntities) {
            BoardListItem boardListItem = new BoardListItem(boardListViewEntity);
            list.add(boardListItem);
        }
        return list;
>>>>>>> back2
    }
}
