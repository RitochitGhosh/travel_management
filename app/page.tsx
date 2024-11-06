"use client";
import React, { useEffect, useRef } from "react";
import TourPackages from "@/components/tour-packages";
import Typed from "typed.js";
import Link from "next/link";
import TestimonialCard from "@/components/testimonial-card";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { FocusCards } from "@/components/ui/focus-card";


const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
  {
    id: 7,
    name: "Swapnoneel",
    designation: "Developer",
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQGIgRVml1UrIw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1701028870741?e=1736380800&v=beta&t=ACfvwRU50ZZ8cO9VaQmnk0aCgriElhON7yaoBcSB1L8'
  },
  {
    id: 8,
    name: "Ritochit",
    designation: "Programmar",
    image: 'https://media.licdn.com/dms/image/v2/D5603AQHcTCkUIn4LGA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707224860185?e=1736380800&v=beta&t=jC5bzyFRaOtQ__-bhU7AxVt-LEKbs8KIMFXAh_rd2RQ'
  }

];


const testimonials = [
  {
    imgSrc: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    name: 'Robert Johnson',
    position: 'Product Manager',
    text: "I enjoyed an amazing family trip to Kailash with Travelia, services were top-notch. Recommend it.",
  },
  {
    imgSrc: 'https://media.licdn.com/dms/image/v2/D4D03AQGIgRVml1UrIw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1701028870741?e=1736380800&v=beta&t=ACfvwRU50ZZ8cO9VaQmnk0aCgriElhON7yaoBcSB1L8',
    name: 'Swapnoneel Saha',
    position: 'DevRel Intern, Keploy',
    text: "I enjoyed an amazing family trip to Kailash with Travelia, services were top-notch. Recommend it.",
  },
  {
    imgSrc: 'https://media.licdn.com/dms/image/v2/D4D03AQGIgRVml1UrIw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1701028870741?e=1736380800&v=beta&t=ACfvwRU50ZZ8cO9VaQmnk0aCgriElhON7yaoBcSB1L8',
    name: 'Swapnoneel Saha',
    position: 'DevRel Intern, Keploy',
    text: "I enjoyed an amazing family trip to Kailash with Travelia, services were top-notch. Recommend it.",
  }
];

const FocusCardsDemo = () => {
  const cards = [
    {
      title: "Forest Adventure",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "This is a beautiful description of this place"
    },
    {
      title: "Valley of life",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "This is a beautiful description of this place"
    },
    {
      title: "Sala behta hi jayega",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "This is a beautiful description of this place"
    },
    {
      title: "Camping is for pros",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "This is a beautiful description of this place"
    },
    {
      title: "The road not taken",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "This is a beautiful description of this place"
    },
    {
      title: "The First Rule",
      src: "https://assets.aceternity.com/the-first-rule.png",
      description: "This is a beautiful description of this place"
    },
  ];
 
  return <FocusCards cards={cards} />;
}

const Background = () => {
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
    <div className="">
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
  )
}

const Home = () => {
  const isAuthorized = false;

  

  return (
    <main>
      <Background />

      {isAuthorized ? (
        <TourPackages />
      ) : (
        <>
          <div className="flex gap-44 justify-center items-center mt-[-90px]">
            <Link href="">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-2xl font-semibold px-8"
              >
                <span>Explore Packages</span>
              </HoverBorderGradient>
            </Link>
            <Link href="">
              <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-2xl font-semibold px-8"
                >
                <span>Start Journey</span>
              </HoverBorderGradient>
            </Link>
            <Link href="/info">
            <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-2xl font-semibold px-8"
              >
                <span>About Us</span>
              </HoverBorderGradient>
            </Link>
          </div>

          <div className="w-[90%] mx-auto flex mt-16 ">
            <div className="flex flex-col basis-1/3 gap-16">
              <div className="flex flex-col flex-wrap gap-10 ">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                  >
                    <TestimonialCard
                      imgSrc={testimonial.imgSrc}
                      name={testimonial.name}
                      position={testimonial.position}
                      text={testimonial.text}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={people} />
              </div>

            </div>
            
            <div className="basis-2/3 flex ">
              <FocusCardsDemo />
            </div>
          </div>

          
        </>
      )}
    </main>
  );
};


export default Home;
