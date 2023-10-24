"use client"
import Image from "next/image";
import loginphoto from "../../images/login.png"
import Link from "next/link";
import { useGetUserMutation} from "@/redux/AuthApi/AuthApi";
import { setAndGetToken } from "@/utility/SetUserLocalHelper/SetUserLocalHelper";
import Loading from "../Loading/Loading";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { authContext } from "../hooks/userHooks";



export interface Loginuser {
    data : {
        ACCESSTOKEN :string,
        others : {
            role :string
        }

    }
}
const Login = () => {
    //@ts-ignore
   const {user,setUser} = useContext(authContext);
   
    const[loading,setLoading] = useState(false)
    
    const router = useRouter()
    const [loginUser,{isError,isLoading,isSuccess}] = useGetUserMutation();
    const loginhadler = async(e : any) =>{
        setLoading(true)
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const data = {
            email,password
        }
        const response = await loginUser(data);
       
        if ("data" in response) {
            
            const logined: Loginuser = response.data;
            console.log('ami',logined)
            //@ts-ignore
            if (logined.others) {
                console.log('tomi')
                //@ts-ignore
                setUser(logined.others)
                  //@ts-ignore
                localStorage.setItem('userInfo',JSON.stringify(logined.others))
                //@ts-ignore
                const setItem = await setAndGetToken(logined?.ACCESSTOKEN);
                console.log(setItem,'setting')
                //@ts-ignore
                router.push(`/${logined.others.role}/profile`);
            } else {
                // Handle the case where 'data' is missing in the response
                
            }
        } else {
            // Handle the error case
           
        }
    
        setLoading(false);

    }
    if(isLoading || loading){
        return <Loading></Loading>
    }
    return (
        <div className="px-2 my-10">
            <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-6">
                <div></div>
                <div className="col-span-0 lg:col-span-4 md:col-span-4  rounded-md  bg-gray-200 shadow-xl">
                    <h1 className="font-semibold text-center text-3xl mt-10">Login</h1>
                    <div className="grid grid-cols-2 lg:grid-cols-2 px-2 lg:px-5 md:px-4">
                        <div className=" py-28 col-span-1 lg:col-span-0">
                            <form onSubmit={loginhadler}>
                                <input type="email" placeholder="type email" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2" name="email"></input>
                                <input type="password" placeholder="password" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2" name="password"></input><br></br>
                                <div className="text-center">
                                <Link href="/register" className=" underline text-center">Register now</Link>
                                </div>
                                <div className="text-center py-5">
                                <button type="submit" className="  bg-red-500 text-white py-2 px-10 rounded-md">Login</button>
                                </div>
                            </form>
                        </div>
                        <div className="">
                            <Image src={loginphoto} alt="login" className= " w-full py-20  lg:py-5 md:py-3 md:w-80 lg:w-full"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;