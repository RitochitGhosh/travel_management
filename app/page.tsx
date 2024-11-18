"use client";
import React, { useEffect, useRef } from "react";
import TourPackages from "@/components/tour-packages";
import Typed from "typed.js";
import Link from "next/link";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { FocusCards } from "@/components/ui/focus-card";
import ExploreModal from "@/components/exploremodal";
import { AnimatedTestimonialsDemo } from "@/components/animatedtestimonials";
import FAQ from "@/components/faq";
import ContactUs from "@/components/contactus";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import  Image  from "next/image";


const FocusCardsDemo = () => {
  const cards = [
    {
      title: "Forest Adventure",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "This is a beautiful description of this place",
    },
    {
      title: "Valley of life",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "This is a beautiful description of this place",
    },
    {
      title: "Sala behta hi jayega",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "This is a beautiful description of this place",
    },
    {
      title: "Camping is for pros",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "This is a beautiful description of this place",
    },
    {
      title: "The road not taken",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "This is a beautiful description of this place",
    },
    {
      title: "The First Rule",
      src: "https://assets.aceternity.com/the-first-rule.png",
      description: "This is a beautiful description of this place",
    },
  ];

  return <FocusCards cards={cards} />;
};

const Background = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Choose the perfect travel package for you",
        "Get yourself going with Travelia",
        "Get 100+ customized tour packages",
        "50+ trusted travel agencies",
        "Travel anywhere with family",
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
    <div className="w-full">
      <section className="mx-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32 ">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl md:text-2xl mb-8 h-6">
            <span ref={el} />
          </p>
        </div>
      </section>
    </div>
  );
};

const Home = () => {
  const isAuthorized = false;

  return (
    <main>
      <Background />

      {isAuthorized ? (
        <TourPackages />
      ) : (
        <>
          <div className="flex gap-32 xl:gap-44 justify-center items-center mt-[-90px]">
              <HoverBorderGradient
                containerClassName="rounded-3xl"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-2xl font-semibold px-8"
              >
                <span>
                  <ExploreModal />
                </span>
              </HoverBorderGradient>

            <Link href="/start-journey">
              <HoverBorderGradient
                containerClassName="rounded-3xl"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-2xl font-semibold px-8"
              >
                <span>Start Journey</span>
              </HoverBorderGradient>
            </Link>
            <Link href="/info">
              <HoverBorderGradient
                containerClassName="rounded-3xl"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-2xl font-semibold px-8"
              >
                <span>About Us</span>
              </HoverBorderGradient>
            </Link>
          </div>
          <div className="mx-10 flex mt-16 ">
            <div className="basis-1/3 flex flex-col gap-12 max-xl:gap-9 xl:mt-2">
              <div className="w-[0px] hover:-translate-y-[0px]"></div>
              <div className="w-[85%] xl:w-[65%] transition-all duration-200 -translate-y-[-2px] hover:translate-y-0 hover:shadow-lg cursor-pointer ">
                <BackgroundGradient>
                  <div className="bg-white p-4 rounded-md">
                    <h2 className="font-bold mb-1">Package Comparison</h2>
                    <p className="mb-2">
                      Compare multiple travel packages side-by-side with our
                      intuitive comparison tool. View detailed breakdowns of
                      inclusions, pricing, itineraries, and user ratings.
                    </p>
                  </div>
                </BackgroundGradient>
              </div>

              <div className="ml-12 xl:ml-32 2xl:ml-40 w-[85%] xl:w-[65%] transition-all duration-200 -translate-y-[-2px] hover:translate-y-0 hover:shadow-lg cursor-pointer ">
                <BackgroundGradient>
                  <div className="bg-white p-4 rounded-md">
                    <h2 className="font-bold mb-1">Real-time Availability</h2>
                    <p className="mb-2">
                      Never miss out on your perfect vacation with our real-time
                      availability tracker. Get instant notifications when
                      prices drop or seats become available.
                    </p>
                  </div>
                </BackgroundGradient>
              </div>

              <div className="w-[85%] xl:w-[65%] transition-all duration-200 -translate-y-[-2px] hover:translate-y-0 hover:shadow-lg cursor-pointer ">
                <BackgroundGradient>
                  <div className="bg-white p-4 rounded-md">
                    <h2 className="font-bold mb-1">
                      Secure Booking and 24/7 support
                    </h2>
                    <p className="mb-2">
                      End-to-end encrypted booking process with instant
                      confirmation and Access round-the-clock assistance from
                      our experienced travel support team.
                    </p>
                  </div>
                </BackgroundGradient>
              </div>
            </div>

            <div className="basis-2/3 flex mt-4">
              <FocusCardsDemo />
            </div>
          </div>
          <div className="mt-10">
            <div className="mx-10 flex-col gap-x-2 bg-blue-600 rounded-3xl">
              <div className="text-5xl font-bold pt-12 mb-4 flex justify-center text-white">
                Testimonials
              </div>
              <div className="flex justify-center pb-16 pt-8">
                <div className="">
                  <AnimatedTestimonialsDemo />
                </div>
              </div>
            </div>
          </div>
          <div className="mx-10 mt-10 flex justify-center  items-center gap-x-8">
            <div className="w-2/5 xl:w-1/3">
            <Image src="https://images.unsplash.com/photo-1537996194471-e657df975ab4" alt="FaqsecImage" width={450} height={450}/>
            </div>
            <div className="w-3/5 xl:w-2/3 pl-4">
              <FAQ />
            </div>
          </div>
          <div className="pt-10 mx-10" id="Contact-us">
            <ContactUs />
          </div>
        </>
      )}
    </main>
  );
};

export default Home;
