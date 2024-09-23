export interface ProjectCegoriesDataProps {
  id: number;
  image: string;
  name: string;
  category: string;
  title: string;
}
[];

export interface TestimonialsDataProps {
  img: string;
  id: number;
  descr: string;
  name: string;
  role: string;
}

export interface CategotyProps {
  category: string;

  filterProjects: (category: string) => void;
}
