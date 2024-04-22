import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./AuthContext";

const AuthRequired = ({children})=>{
    const {user} = useContext(AuthContext);

    // 로그인 하지 않은 경우 로그인 페이지로 이동시킨다.
    if(!user){
        return <Navigate to="/accounts/login" replace={true} />
    }

    return children;
}

export default AuthRequired;