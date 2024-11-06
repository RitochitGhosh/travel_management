import React from "react";
import { BackgroundBeams } from "../../components/ui/background-beams";


export default function AuthPage() {


  return (
    <div className="h-[calc(100vh-6rem)] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          About Us
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to Travelia, We provide you customized tour plans designed by tour agencies. Out of the thousands of tour plans with proper iterinary find the one which suits you & your family the most. 
        </p>
        <input
          type="text"
          placeholder="feedback"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}