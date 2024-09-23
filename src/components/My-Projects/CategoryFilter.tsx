import { ProjectCegories } from "@/utils/utils";
import Button from "../common/Button";

const CategoryFilter = ({
  category,
  filterProjects,
}: {
  category: string;
  filterProjects: (itemCategory: string) => void;
}) => {
  return (
    <div className="flex justify-center mb-[110px]">
      {ProjectCegories.map(({ itemCategory }) => (
        <Button
          onClick={() => filterProjects(itemCategory)}
          styles={`w-auto bg-[#F8F8F8] border-2 mx-4 px-[20px] py-[10px] rounded-[12px] ${
            category === itemCategory
              ? "bg-[#000] text-white"
              : "text-black bg-[#fff]"
          }`}
          key={itemCategory}
          title={itemCategory}
        />
      ))}
    </div>
  );
};

export default CategoryFilter;
