
import axios from 'axios';
import { SignInRequestDto, SignUpRequestDto } from "./ju/auth";
import { ResponseDto } from './response';
import SignInResponseDto from './ju/auth/sign-in.response.dto';
import { PostBoardRequestDto } from './request/board';
import { PostBoardResponseDto, GetBoardResponseDto, GetLatestBoardListReponseDto, GetTop3BoardListResponseDto } from './response/board';
import { GetSignInUserResponseDto } from './response/user';
import SignUpResponseDto from './ju/auth/sign-up.response.dto';


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
};

export const signUpRequest = async(requestBody:SignUpRequestDto) => {
    const result = await axios.post(SIGN_UP_URL(),requestBody)
        .then(response => {
            const responseBody: SignUpResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response.data) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;


};


export const tmp= '';

// 파일 업로드 부분(파일 도메인) //
const FILE_DOMAIN = `${DOMAIN}/file`;

const FILE_UPLOAD_URL = () => `${FILE_DOMAIN}/upload`; 

const multipartFormData = {headers: {'Content-Type': 'multipart/form-data'}};

const authorization = (accessToken : string ) => { 
    return { headers: { Authorization : `Bearer ${accessToken}`}}
};



export const fileUploadRequest = async (data: FormData, accessToken: string) => {
    const config = {
        headers: {
            ...multipartFormData.headers, // 기존 Content-Type 헤더 유지
            Authorization: `Bearer ${accessToken}`, // Authorization 헤더 추가
        },
    };

    try {
        const response = await axios.post(FILE_UPLOAD_URL(), data, config);
        console.log('File Upload Response:', response.data); // 성공 시 로그
        const responseBody: string = response.data; // 업로드된 파일 URL
        return responseBody; 
    } catch (error) {
        const err = error as any; // 또는 AxiosError
        console.error('File Upload Error:', err.response || err.message);
        return null;
    } 

};

const GET_BOARD_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}`;
const POST_BOARD_URL = () => `${API_DOMAIN}/board`; // 주소 다른 것 같은데 일단 해보기 
const GET_LATEST_BOARD_LIST_URL = () => `${API_DOMAIN}/board/latest-list`;
const GET_TOP_3_BOARD_LIST_URL = () => `${API_DOMAIN}/board/top-3`;

export const getBoardRequest = async (boardNumber: number | string) => {
    const result = await axios.get(GET_BOARD_URL(boardNumber))
        .then(response => {
            const responseBody: GetBoardResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if(!error.response) return null;
            const responseBody: ResponseDto = error.reponse.data;
            return responseBody;
        })
        return result;
}; 


export const postBoardRequest = async (requestBody: PostBoardRequestDto, accessToken: string) => {
    const result = await axios.post(POST_BOARD_URL(), requestBody, authorization(accessToken)) // 현재로는 authorization 함수를 찾을 수 없음 (3번) //
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
};



export const getLatestBoardListRequest = async () => {
    const result = await axios.get(GET_LATEST_BOARD_LIST_URL())
    .then(response => {
        const responseBody: GetLatestBoardListReponseDto = response.data;
        return responseBody;
    })
    .catch(error => {
        if (!error.response) return null;
        const responseBody: ResponseDto = error.response.data;
        return responseBody;
    });
    return result;
};

export const getTop3BoardListRequest = async () => {
    const result = await axios.get(GET_TOP_3_BOARD_LIST_URL())
    .then(response => {
        const responseBody: GetTop3BoardListResponseDto = response.data;
        return responseBody;
    })
    .catch(error => {
        if (!error.response) return null;
        const responseBody: ResponseDto = error.response.data;
        return responseBody;
    });
    return result;
};

const GET_SIGN_IN_USER_URL = () => `${API_DOMAIN}/user`;

export const getSignInUserRequest = async (accessToken: string) => {
    const result = await axios.get(GET_SIGN_IN_USER_URL(), authorization(accessToken))

        .then(response => {
            const responseBody: GetSignInUserResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });

        return result; 
};

