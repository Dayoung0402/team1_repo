import React, { useEffect, useState } from "react";
import './style.css';
import { top3BoardListMock } from "mocks";
import { BoardListItem } from "types/interface";
import Top3Item from 'components/Top3Item';
import Banner from "components/Banner";
import { bannerMock } from "mocks/bannerMock";

export default function Main() {

    const MainTop = () => {
        return (
            <div id='main-top-wrapper'>
                <div className='main-top-container'>
                    <div className='main-top-banner'>
                        <Banner data={bannerMock} />
                    </div>
                </div>
            </div>
        );
    };

    const MainBottom = () => {
        const [top3BoardList, setTop3List] = useState<BoardListItem[]>([]);

        useEffect(() => {
            setTop3List(top3BoardListMock);
        }, []);

        return (
            <div id='main-bottom-wrapper'>
                <div className='main-bottom-container'>
                    <div className='main-bottom-title'></div>
                    <div className='main-bottom-contents-box'>
                        {/*<div className='logo-left-icon'></div>*/}
                        <div className='main-bottom-contents-title'>오늘의 메뉴</div>
                        {/*<div className='logo-right-icon'></div>*/}
                        <div className='main-bottom-contents'>
                            {top3BoardList.map((top3ListItem, index) => (
                                <Top3Item key={index} top3ListItem={top3ListItem} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <MainTop />
            <MainBottom />
        </>
    );
}
