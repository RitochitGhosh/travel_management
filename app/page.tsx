"use client";

import React, { useEffect, useRef } from "react";
import TourPackages from "@/components/tour-packages";
import Typed from "typed.js";

const Home = () => {
  
  const isAuthorized = false;

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Choose the perfect travel package for you',
        'Get yourself going with Travelia',
        'Get 100+ customized tour packages',
        '50+ trusted travel agencies',
        'Travel anywhere with family'
      ],
      typeSpeed: 30,
      loop: true,
      backSpeed: 30,
      backDelay: 2000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <section className={`bg-gradient-to-r from-blue-600 to-blue-800 text-white ${isAuthorized ? "py-20" : "py-10"}`}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            <span ref={el} />
          </p>
        </div>
      </section>

      
      {
        isAuthorized ? <TourPackages /> : 
        <>
          <div className=""></div>
          
        </>
      }
    </main>
  );
};

export default Home;
