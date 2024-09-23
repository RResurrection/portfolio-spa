import { ProjectCegoriesDataProps } from "@/models/types";
import Image from "next/image";

const ProjectsCard = ({ image, title, category }: ProjectCegoriesDataProps) => {
  return (
    <div className="max-w-[450px] max-h-[600px] cursor-pointer mb-14">
      <Image width={445} height={490} src={image} alt={title} />
      <p className=" text-[19px] mt-[37px] mb-[10px] text-[#FD6F00]  ">
        {category}
      </p>
      <p className="text-[15px] md:text-[19px] font-bold">{title}</p>
    </div>
  );
};

export default ProjectsCard;
