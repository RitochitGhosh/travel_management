"use client"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export const Social = () => {
    return (
        <div className="flex justify-center items-center w-full gap-x-2">
            <Button 
                size={"lg"}
                className="w-full"
                variant={"outline"}
                onClick={() => {
                    console.log("Google button Clicked", <FcGoogle />);
                    
                }}>
                    <FcGoogle />
                </Button>
                <Button 
                size={"lg"}
                className="w-full"
                variant={"outline"}
                onClick={() => {
                    console.log("GitHub button Clicked", <FaGithub />);
                    
                }}>
                    <FaGithub />
                </Button>
        </div>
    )
}