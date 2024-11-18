/*
import axios from 'axios';
import { SignInRequestDto, SignUpRequestDto } from "./ju/auth";
import { ResponseDto } from './response';
import SignInResponseDto from './ju/auth/sign-in.response.dto';

const DOMAIN = 'http://localhost:4000';

const API_DOMAIN = `${DOMAIN}/api/v1`;

const SIGN_IN_URL = () => `${API_DOMAIN}/auth/sign-in`;
const SIGN_UP_URL = () => `${API_DOMAIN}/auth/sign-up`;

export const signInRequest = async(requestBody: SignInRequestDto) => {
    const result = await axios.post(SIGN_IN_URL(), requestBody)
        .then(response => {
            const responseBody: SignInResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response.data) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        })
    return result;
}

export const signUpReques = async(requestBody:SignUpRequestDto) => {

import { PostBoardRequestDto } from './request/board';
import { PostBoardResponseDto } from './response/board';
import { ResponseDto } from './response';

export const tmp= '';

// 파일 업로드 부분 //
const FILE_DOMAIN = '${DOMAIN}/file';

const FILE_UPLOAD_URL = () => '${FILE_DOMAIN}/upload';

const multipartFormData = {headers: {'Content-Type': 'multipart/form-data'}};

export const fileUploadRequest = async (data: FormData) => {
    const result = await axios.post(FILE_UPLOAD_URL(), data, multipartFormData)
    .then(response => {
        const responseBody: string = response.data;
        return responseBody;
    })
    .catch(error => {
        return null;
    })
    return result;    

}
*/

/*
const POST_BOARD_URL = () => '${API_DOMAIN}/board'; // 주소 다른 것 같은데 일단 해보기 

export const postBoardRequest = async (requestBody: PostBoardRequestDto, accessToken: string) => {
    const result = await axios.post(POST_BOARD_URL(), requestBody, /*authorization(accessToken)
    .then(response => {
        const responseBody: PostBoardResponseDto = response.data;
        return responseBody;
    })
    .catch(error => {
        if (!error.response) return null;
        const responseBody: ResponseDto = error.response.data;
        return responseBody;
    })
    return result;
}

*/
