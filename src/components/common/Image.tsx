import Image from "next/image";
import { ImageProps } from "@/models/dummies-types";

const ImageReuse = ({ src, alt, width, height, styles }: ImageProps) => {
  return (
    <div>
      <Image
        className={`${styles}`}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
};

export default ImageReuse;
