export default interface BoardListItem {

    // 특정 유저 게시물 리스트 -> 우리거에서는 유저 게시물 리스트가 필요없는데 BoardListItem이거가 계속 필요할 거 같아서 넣어놈
    boardNumber:number;
    title: string;
    content: string;
    boardTitleImage: string | null;
    favoriteCount: number;
    commentCount: number;
    writeDateTime: string;
    writerNickname: string;

}