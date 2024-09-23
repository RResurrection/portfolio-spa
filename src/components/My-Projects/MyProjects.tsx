"use client";

import { useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import { ProjectCegoriesData } from "@/utils/db";
import { ProjectCegoriesDataProps } from "@/models/types";
import ProjectsCard from "./ProjectsCard";
import { useFilterProjects } from "@/hooks/useProjectList";

const MyProjects = () => {
  const { category, projects, filterProjects, setCategory } =
    useFilterProjects();

  return (
    <div id="projects" className="text-black mt-[120px] ">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl font-semibold">My Projects</h1>
        <p className="text-xl mt-[22px] mb-[59px]">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
          mauris est risus lectus. Phasellus consequat urna tellus
        </p>
      </div>

      <CategoryFilter
        filterProjects={filterProjects}
        category={category}
        setCategory={setCategory}
      />
      <div className=" flex flex-wrap justify-center items-center gap-6">
        {projects.map((project) => (
          <ProjectsCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
