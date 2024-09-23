import { ProjectCegoriesDataProps } from "@/models/types";
import { ProjectCegoriesData } from "@/utils/db";
import { useState } from "react";

export const useFilterProjects = () => {
  const [category, setCategory] = useState<string>("All");
  const [projects, setProjects] =
    useState<ProjectCegoriesDataProps[]>(ProjectCegoriesData);

  const filterProjects = (category: string) => {
    setCategory(category);
    if (category === "All") return setProjects(ProjectCegoriesData);

    setProjects(
      ProjectCegoriesData.filter((project) => project.category === category)
    );
  };

  return { category, projects, setCategory, filterProjects };
};
