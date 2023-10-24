"use client"

export const setAndGetToken = async(token:string) =>{
    
    const setToken = await localStorage.setItem("ACCESSTOKEN",token)
    
}