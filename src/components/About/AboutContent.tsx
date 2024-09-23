import { Slider } from "../ui/slider";

const AboutContent = () => {
  return (
    <div className="max-w-[700px]  mb-10 flex flex-col sm:items-center sm:max-w-[700px] ">
      <h1 className="font-bold text-6xl text-black mb-4">About Me</h1>

      <p className="text-[21px] -tracking-tighter pb-2 py-2 pr-2 max-w-[650px]">
        Skilled in modern web development with expertise in Next.js, Redux,
        TypeScript, and Tailwind CSS. My goal is to create seamless user
        experiences while ensuring scalability and maintainability.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-[600px]">
        <span>Next.js</span>
        <Slider
          className="animate-fill-left-to-right-Next delay-5000"
          defaultValue={[65]}
          disabled
          step={1}
        />
        <span>Redux</span>
        <Slider
          className="animate-fill-left-to-right-Redux delay-5000"
          defaultValue={[33]}
          disabled
        />
        <span>Typescript</span>
        <Slider
          className="animate-fill-left-to-right-Typescript delay-5000"
          defaultValue={[55]}
          disabled
        />
        <span>Tailwind</span>
        <Slider
          className="animate-fill-left-to-right-Tailwind delay-5000"
          defaultValue={[77]}
          disabled
        />
      </div>
    </div>
  );
};

export default AboutContent;
