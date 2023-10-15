"use client"
export const getuser = async() =>{
    const getUserInfo = await localStorage.getItem("userInfo")
    const getOriginalUser = await JSON.parse(getUserInfo!);
    return getOriginalUser
}