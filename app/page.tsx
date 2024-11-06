import TourPackages from "@/components/tour-packages";
import AboutUs from "@/components/about-us"
export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Explore curated travel packages for unforgettable experiences
          </p>
        </div>
      </section>
      <section>
        <AboutUs/>
      </section>
      <TourPackages />
    </main>
  );
}