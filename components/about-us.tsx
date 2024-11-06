import {TestimonialCard} from "./testimonialcard"
export default function AboutUs() {
  return (
    <>
      <div className="h-max">
        <div className="font-bold text-6xl text-blue-700 flex justify-center pt-20 pb-20">
          ABOUT US
        </div>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-around px-8 sm:px-12 py-4 sm:space-x-4">
          < TestimonialCard />
          < TestimonialCard />
          < TestimonialCard />
        </div>
      </div>
    </>
  );
}
