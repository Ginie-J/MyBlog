import React from 'react'
import { AuthContext } from '../context/AuthContext'

import { useGoogleLogin } from '@react-oauth/google'
import KakaoLogin from 'react-kakao-login'
import NaverLogin from 'react-naver-login'


const login = () => {
    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try{
                const res = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
                    headers : {
                        'Authorization' : `Bearer ${tokenResponse.access_token}`
                    }
                });
                const profile = await res.json();
    
                // userInfo 객체
                const userInfo = {
                    email: profile.email,
                    name: profile.name,
                    social: 'google',
                    picture: profile.picture,
                    role: profile.email === 'musecom@gmail.com' ? 'admin' : 'user' // 역할 설정
                };
                login({ userInfo, token: tokenResponse.access_token});
            
            }catch(error){
                console.error(error);
            }
         },
         onError: (error) => {
            console.error('구글로그인 에러 : ', error);
         }
    });

    const handleNaverSuccess = (naverUser) => {
        //email, name, id, nickname, profile_image, accesstoken
        const userInfo = {
            email: naverUser.email,
            name: naverUser.name,
            picture: naverUser.profile_image
        };
        login({userInfo, token : naverUser.accessToken});
    }

    const handleNaverFailure = (error) => {
        console.error("네이버 로그인 에러", error);
    }

    const handleKakaoSuccess = (response) => {
        //profile{id, kakao_account{email, profile{nickname, ...}}}
        const {kakao_account} = response.profile;
        const {email} = kakao_account;
        const name = kakao_account.profile?.nickname;
        const picture = kakao_account.profile?.profile_image_url;
        const accessToken = response.response.access_token;
        const userInfo = {
            email, 
            name,
            picture
        };
        login({userInfo, token: accessToken});
    }

    const handleKakaoFailure = (error) => {
        console.error("카카오 로그인 에러", error);
    }
  return (
    <>
        <button onClick={()=>googleLogin()}>구글로그인</button>
        <NaverLogin
            clientId={process.env.REACT_APP_NAVER_CLIENT_ID}
            callbackUrl="http://localhost:3000"
            onSuccess={handleNaverSuccess}
            onFailure={handleNaverFailure}
            render={(props)=>(
              <button onClick={()=>{
                 window.open(props.loginUrl, "_blank", "width=400, height=500");
              }}>네이버로그인</button>
           )}
        />
        <KakaoLogin  
            token={process.env.REACT_APP_KAKAO_CLIENT_ID}
            onSuccess={handleKakaoSuccess}
            onFail={handleKakaoFailure}
            onLogout={console.info}
            render={(props)=><button onClick={props.onClick}>카카오로그인</button>}
        />

    </>
  )
}

export default login