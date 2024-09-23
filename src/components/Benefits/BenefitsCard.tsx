import { CodeIcon, DessertIcon } from "lucide-react";

const BenefitsCard = ({ title, descr }: { title: string; descr: string }) => {
  return (
    <div className="w-[330px] h-[300px] bg-[#101010] flex flex-col justify-between items-center text-white rounded-[14px] p-[18px]">
      <CodeIcon width={70} height={70} />
      <p className="p-2 text-[32px] font-semibold">{title}</p>
      <p className="text-[19px]">{descr}</p>
    </div>
  );
};

export default BenefitsCard;
