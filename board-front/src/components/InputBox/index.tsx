import {forwardRef} from 'react';
import './style.css';
import React from 'react';
import eyeLightOff from '../../assets/ju/eye-light-off.png'; // 상대 경로로 수정
interface Props {

}


const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {

    return(
        <div className='inputbox'>
            <div className='inputbox-label'>{'비밀번호'}</div>
            <div className='inputbox-container'>
                <input className='input' />
                <div className='icon-button'>
                    <img className="icon" src={eyeLightOff} alt="Eye Light On" />
                </div>
            </div>
            <div className='inputbox-message'>{'이용약관에 동의합니다.'}</div>
        </div>
    )

});

export default InputBox;