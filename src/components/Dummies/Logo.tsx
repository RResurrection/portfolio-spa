import Image from "next/image";

const Logo = ({ src, alt, width, height, styles }: ImageProps) => (
  <Image
    className={`${styles}`}
    src={src}
    alt={alt}
    width={width}
    height={height}
  />
);

export default Logo;
