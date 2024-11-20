export default interface BoardListItem {
    // 특정 유저 게시물 리스트임! -> 우리거에서는 유저 게시물 리스트가 필요없는뎅 BoardListItem이거가 계속 필요할 거 같아서 넣어놈
    boardNumber:number;
    title: string;
    content: string;
    boardTitleImage: string | null;
    favoriteCount: string; /*우리 이 기능 안 하기로 했으니까 그냥 사진 넣으려고 number에서 string으로 바꿈*/
    commentCount: number; 
    writeDateTime: string;
    writerNickname: string;
    price: number; //가격 추가함
}
