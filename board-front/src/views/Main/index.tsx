import React, { useEffect, useState } from "react";
import './style.css';
import { top3BoardListMock } from "mocks";
import { BoardListItem } from "types/interface";
import Top3Item from 'components/Top3Item';


//             component: 메인 화면 컴포넌트          //
export default function Main() {

    //          componenet: 메인 화면 상단 컴포넌트          //
    const MainTop = () => {
        //          render: 메인 화면 상단 컴포넌트 렌더링          //
        return (
            <>
            </>
        )
    }
    //          componenet: 메인 화면 하단 컴포넌트          //
    const MainBottom = () => {

        //          state: 주간 top3 게시물 리스트 상태          //
        const [top3BoardList, setTop3List] = useState <BoardListItem[]>([]);

        //          effect: 첫 마운트 시 실행될 함수          //
        useEffect(() => {
            setTop3List(top3BoardListMock);
        }, []);
        //          render: 메인 화면 하단 컴포넌트 렌더링(주간 Top3 List)          //
        return (
            <div id='main-bottom-wrapper'>
                <div className='main-bottom-container'>
                    <div className='main-bottom-intro'></div>
                    <div className='main-bottom-contents-box'>
                        <div className='main-bottom-contens-title'>{'오늘의 메뉴'}</div>
                        <div className='main-bottom-contents'>
                            {top3BoardList.map(top3ListItem => <Top3Item top3ListItem={top3ListItem} />)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    //          render: 메인 화면 컴포넌트 렌더링          //
    return (
        <>
            <MainTop />
            <MainBottom />
        </>
    )

}