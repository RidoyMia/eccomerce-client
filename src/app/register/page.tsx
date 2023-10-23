import Image from "next/image";
import loginphoto from "../../images/login.png"
import Link from "next/link";
import Registers from "@/components/Registers/Registers";



const page = () => {
    return (
        <div className="px-2 my-10">
            <Registers></Registers>
        </div>
    );
};

export default page;