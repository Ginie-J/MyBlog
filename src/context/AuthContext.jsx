import React, {createContext, useContext, useState, useEffect} from 'react'

//AuthContext 생성
const AuthContext = createContext(null);

//AuthContext 구현
const AuthProvider = ({children})=>{
    const [userAuth, setUserAuth] = useState(null); //사용자정보
    const [isLogged, setIsLogged] = useState(null); //로그인상태
    const [role, setRole] = useState('guest'); //기본권한=guest guest, user, admin

    //로그인 상태 구현
    useEffect(()=>{
        const storedUser = localStorage.getItem('userAuth');
        if(storedUser){
            const parsedUser = JSON.parse(storedUser);
            setUserAuth(parsedUser);
            setIsLogged(true);
            setRole(parsedUser.email === 'myemail@gmail.com' ? 'admin' : 'user'); //본인 이메일로 접속하면 관리자 권한
        }
    }, []);

    const login = (user) =>{
        setUserAuth(user);
        setIsLogged(true);
        setRole(user.email === 'myemail@gmail.com' ? 'admin' : 'user');
        localStorage.setItem('userAuth', JSON.stringify(user)); //로컬스토리지에 저장
    }

    const logout = () =>{
        setUserAuth(null);
        setIsLogged(false);
        setRole('guest');
        localStorage.removeItem('userAuth');
    }

    return (
        <AuthContext.Provider value={{userAuth, isLogged, role, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

//custom hook
const useAuthValue = () =>{
    return useContext(AuthContext);
}

export {AuthProvider, useAuthValue};