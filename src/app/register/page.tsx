import Image from "next/image";
import loginphoto from "../../images/login.png"
import Link from "next/link";

const page = () => {
    return (
        <div className="px-2 my-10">
            <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-6">
                <div></div>
                <div className="col-span-0 lg:col-span-4 md:col-span-4  rounded-md  bg-gray-200 shadow-xl">
                    <h1 className="font-semibold text-center text-3xl mt-10">Register</h1>
                    <div className="grid grid-cols-2 lg:grid-cols-2 px-2 lg:px-5 md:px-4">
                        <div className=" py-28 col-span-1 lg:col-span-0">
                            <form>
                                <input type="text" placeholder="name" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2" name="name"></input>
                                <input type="email" placeholder="type email" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2" name="email"></input>
                               
                                <input type="password" placeholder="password" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2" name="password"></input><br></br>
                                <input type="password" placeholder="again" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2" name="cpassword"></input><br></br>
                               <div className="text-center">
                               <Link href="/login" className=" underline text-center">Login now</Link>
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

export default page;