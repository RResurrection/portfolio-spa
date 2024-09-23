interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  styles?: string;
}

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  title: string;
  styles?: string;
  onClick?: () => void;
}

interface CardWrapperProps {
  children: React.ReactNode;
  styles: string;
}
