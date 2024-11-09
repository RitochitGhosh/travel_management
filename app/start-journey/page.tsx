"use client"
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";

const font = Poppins({
    subsets: ["latin"],
    weight:["600", "200"]
});

const StartJourney = () => {
    
    
    return ( 
        <div className="h-[calc(100vh-6rem)] w-full flex justify-center items-center shadow-md">
            <div className={cn("w-[500px] border-2 rounded-md px-10 py-6", font.className)}>
                <h1 className="text-4xl font-semibold">Choose an action: ✈️</h1>
                <div className="flex flex-col gap-y-4 mt-6 items-center">
                    <Link href={"/auth/sign-up"} className="w-full">
                        <button className="w-full flex flex-col px-6 py-3 border-2 rounded-sm hover:border-black dark:hover:border-white ease-out">
                            <h1 className="text-2xl font-semibold">Sign Up</h1>
                            <p className="text-muted-foreground">Don't have an account?</p>

                        </button>
                    </Link>
                    <Link href={"/auth/log-in"} className="w-full">
                        <button className="w-full flex flex-col px-6 py-3 border-2 rounded-sm hover:border-black dark:hover:border-white ease-out">
                            <h1 className="text-2xl font-semibold">Login</h1>
                            <p className="text-muted-foreground">Already have an account?</p>

                        </button>
                    </Link>
                    <Link href={"/"} className="text-muted-foreground dark:hover:text-white  mt-2 hover:underline ease-out hover:text-black"> Go back to home screen </Link>
                </div>
            </div>
        </div>
     );
}
 
export default StartJourney;