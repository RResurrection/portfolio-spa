import Image from "next/image";
import Link from "next/link";

const Logo = ({ src, alt, width, height, styles }: ImageProps) => (
  <Link href="/">
    <Image
      className={`${styles}`}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  </Link>
);

export default Logo;
