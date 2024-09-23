import Button from "../common/Button";
import ImageReuse from "../common/Image";

const HeroAboutContent = () => {
  return (
    <div className="max-w-[700px]">
      <h2 className="font-bold">Hi I am</h2>
      <h2 className="text-[#FD6F00] text-[32px] font-semibold animate-pulse">
        Grekul Myroslav
      </h2>
      <p className="font-bold  animate-pulse sm:text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-6xl">
        Backend &
      </p>
      <p className="flex justify-center font-bold  animate-pulse sm:text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-6xl">
        Frontend Developer
      </p>
      <p className="p-4 -tracking-tighter leading-8">
        with a strong focus on building scalable, user-friendly applications.
        With expertise in modern web technologies and a deep understanding of
        both server-side and client-side development, I strive to deliver
        efficient and seamless digital experiences. Whether it's crafting clean,
        maintainable code or optimizing performance, I’m always eager to take on
        new challenges and grow as a developer.
      </p>
      <Button
        styles="bg-[#FD6F00] rounded-sm text-white w-[188px] mt-6 flex mx-auto justify-center items-center h-[52px]  mb-[20px]"
        title="Hire Me"
      />
    </div>
  );
};

export default HeroAboutContent;
