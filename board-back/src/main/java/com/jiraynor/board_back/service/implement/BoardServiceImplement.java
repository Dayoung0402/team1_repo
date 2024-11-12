package com.jiraynor.board_back.service.implement;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.jiraynor.board_back.dto.request.board.PostBoardRequestDto;
import com.jiraynor.board_back.dto.response.ResponseDto;
import com.jiraynor.board_back.dto.response.board.GetBoardResponseDto;
import com.jiraynor.board_back.dto.response.board.PostBoardResponseDto;
import com.jiraynor.board_back.dto.response.board.PutFavoriteResponseDto;
import com.jiraynor.board_back.entity.BoardEntity;
import com.jiraynor.board_back.entity.FavoriteEntity;
import com.jiraynor.board_back.entity.ImageEntity;
import com.jiraynor.board_back.repository.BoardRepository;
import com.jiraynor.board_back.repository.FavoriteRepository;
import com.jiraynor.board_back.repository.ImageRepository;
import com.jiraynor.board_back.repository.UserRepository;
import com.jiraynor.board_back.repository.resultSet.GetBoardResultSet;
import com.jiraynor.board_back.service.BoardService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardServiceImplement implements BoardService {

    private final BoardRepository boardRepository;
    private final ImageRepository imageRepository;
    private final UserRepository userRepository;
    private final FavoriteRepository favoriteRepository;

    @Override
    public ResponseEntity<? super GetBoardResponseDto> getBoard(Integer boardNumber) {
        GetBoardResultSet resultSet = null;
        List<ImageEntity> imageEntities = new ArrayList<>();
        double averageRating = 0.0;

        try {
            resultSet = boardRepository.getBoard(boardNumber);
            if (resultSet == null)
                return ResponseEntity.status(404).body(null);

            imageEntities = imageRepository.findByBoardNumber(boardNumber);
            averageRating = calculateAverageRatingForBoard(boardNumber); // 평균 평점 계산

        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }

        return GetBoardResponseDto.success(resultSet, imageEntities, averageRating);
    }

    @Override
    public ResponseEntity<? super PostBoardResponseDto> postBoard(PostBoardRequestDto dto, String email) {
        try {
            boolean existedEmail = userRepository.existsByEmail(email);
            if (!existedEmail)
                return PostBoardResponseDto.notExistUser();

            BoardEntity boardEntity = new BoardEntity(dto, email);
            boardRepository.save(boardEntity);

            int boardNumber = boardEntity.getBoardNumber();
            List<String> boardImageList = dto.getBoardImageList();
            List<ImageEntity> imageEntities = new ArrayList<>();

            for (String image : boardImageList) {
                ImageEntity imageEntity = new ImageEntity(boardNumber, image);
                imageEntities.add(imageEntity);
            }
            imageRepository.saveAll(imageEntities);

        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }

        return PostBoardResponseDto.success();
    }

    @Override
    public ResponseEntity<? super PutFavoriteResponseDto> putFavorite(Integer boardNumber, String email) {
        try {
            boolean existedUser = userRepository.existsByEmail(email);
            if (!existedUser)
                return PutFavoriteResponseDto.noExistUser();

            BoardEntity boardEntity = boardRepository.findByBoardNumber(boardNumber);
            if (boardEntity == null)
                return PutFavoriteResponseDto.noExistBoard();

            Optional<FavoriteEntity> optionalFavoriteEntity = favoriteRepository
                    .findByBoardNumberAndUserEmail(boardNumber, email);
            if (optionalFavoriteEntity.isEmpty()) {
                FavoriteEntity favoriteEntity = new FavoriteEntity(email, boardNumber);
                favoriteRepository.save(favoriteEntity);
                boardEntity.increaseFavoriteCount();
            } else {
                favoriteRepository.delete(optionalFavoriteEntity.get());
                boardEntity.decreaseFavoriteCount();
            }

            boardRepository.save(boardEntity);

        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }

        return PutFavoriteResponseDto.success();
    }

    @Override
    public boolean boardExists(Integer boardNumber) {
        return boardRepository.existsById(boardNumber);
    }

    private double calculateAverageRatingForBoard(Integer boardNumber) {
        List<FavoriteEntity> favorites = favoriteRepository.findAllByBoardNumber(boardNumber);

        if (favorites.isEmpty()) {
            return 0.0;
        }

        int totalFavoriteCount = favorites.stream().mapToInt(FavoriteEntity::getFavoriteCount).sum();
        int totalRatingCount = favorites.stream().mapToInt(FavoriteEntity::getRatingCount).sum();

        return totalRatingCount == 0 ? 0.0 : Math.round((double) totalFavoriteCount / totalRatingCount * 2) / 2.0;
    }
}
