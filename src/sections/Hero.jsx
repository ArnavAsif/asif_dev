import HeroText from "../components/HeroText";
import ImageSection from "../components/ImageSection";
import ParallaxBackground from "../components/parallaxBackground";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-center min-h-screen overflow-hidden c-space">
      {/* Text first */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <HeroText />
      </div>

      {/* Image on top for mobile, right for desktop */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
        <ImageSection />
      </div>

      <ParallaxBackground />
    </section>
  );
};

export default Hero;
