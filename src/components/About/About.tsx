import CardWrapper from "../common/CardWrapper";
import ImageReuse from "../common/Image";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <main className="mt-14 max-w-[1400px]  mx-auto ">
      <CardWrapper styles=" flex flex-col gap-4 xl:flex-col xl:justify-center xl:items-center md:flex-col md:justify-center md:items-center sm:flex-col sm:justify-center sm:items-center 2xl:flex-row 2xl:justify-between 2xl:items-center">
        <div className="flex flex-col items-center  bg-red-500 rounded-sm  ">
          <ImageReuse
            styles="max-w-[200px] m-4 w-full  sm:w-1/1 sm:max-w-[400px] md:max-w-[500px] md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-full mx-auto "
            width={500}
            height={500}
            src="/About-img.png"
            alt="hero-image"
          />
        </div>
        <AboutContent />
      </CardWrapper>
    </main>
  );
};

export default About;
