"use client"
export const getuser = async() =>{
    const getUserInfo = await localStorage.getItem("userInfo")
    const getOriginalUser = await JSON.parse(getUserInfo!);
    return getOriginalUser
}
export const setAndGetToken = async(token:string,userInfo:any) =>{
    const setToken = await localStorage.setItem("ACCESSTOKEN",token)
    const getToken = await localStorage.getItem("ACCESSTOKEN")
    const setUserInfo = await localStorage.setItem("userInfo",JSON.stringify(userInfo))
    return getToken;
}