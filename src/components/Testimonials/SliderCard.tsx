import { TestimonialsDataProps } from "@/models/types";
import Image from "next/image";

const SliderCard = ({ descr, name, role, img }: TestimonialsDataProps) => {
  return (
    <div className=" max-w-[730px] m-[20px] max-h-[300px]  flex justify-center items-center  bg-[#101010]  text-white p-[48px]  rounded-[14px] ">
      <div className="flex items-center gap-4  ">
        <Image
          className="max-w-[105px] max-h-[105px]"
          width={235}
          height={235}
          src={img}
          alt="Avatar"
        />
        <div className="flex flex-col relative  ">
          <span className="absolute text-[32px] top-[-10px] left-[-10px] text-[#FD6F00]">
            "
          </span>
          <p className="text-[15px] mb-3">
            {descr}{" "}
            <span className=" absolute ml-[2px] mt-[10px]  text-[32px]    text-[#FD6F00]">
              "
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
