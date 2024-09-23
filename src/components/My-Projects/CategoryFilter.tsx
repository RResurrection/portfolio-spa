import { ProjectCegories } from "@/utils/utils";
import Button from "../common/Button";

const CategoryFilter = ({
  category,
  setCategory,
  filterProjects,
}: {
  category: string;
  setCategory: (category: string) => void;
  filterProjects: (category: string) => void;
}) => {
  return (
    <div className="flex justify-center mb-[110px]">
      {ProjectCegories.map(({ categoty }) => (
        <Button
          onClick={() => filterProjects(categoty)}
          styles={`w-auto bg-[#F8F8F8] border-2 mx-4 px-[20px] py-[10px] rounded-[12px] ${
            category === categoty
              ? "bg-[#000] text-white"
              : "text-black bg-[#fff]"
          }`}
          key={categoty}
          title={categoty}
        />
      ))}
    </div>
  );
};

export default CategoryFilter;
