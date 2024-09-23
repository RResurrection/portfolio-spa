export interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  styles?: string;
}

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  title: string;
  styles?: string;
  onClick?: () => void;
}
