import { Image, ImageProps } from "tamagui";
import { ImageName } from "assets/images";
import { getImageSource } from "../utils";

type BaseImageProps = Omit<ImageProps, "src"> & {
  imageName: ImageName;
};

const BaseImage = ({ imageName, ...props }: BaseImageProps) => {
  const src = getImageSource(imageName);

  return <Image {...props} src={src} />;
};

export { BaseImage };
export type { BaseImageProps };
