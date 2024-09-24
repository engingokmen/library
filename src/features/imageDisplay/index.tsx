import React, { useEffect, useState } from "react";
import { setImage, useAppData, useAppDipatch } from "../../context";

export const ImageDisplay = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { input, image } = useAppData();
  const dispatch = useAppDipatch();

  const imageNumber = input.startsWith("/image ") ? input.split(" ")[1] : "";

  useEffect(() => {
    const fetchImage = async () => {
      dispatch(setImage(""));
      setLoading(true);
      const response: Response = await fetch(
        `https://picsum.photos/id/${imageNumber}/150/150`
      );
      const data = await response.blob();
      const image = URL.createObjectURL(data);
      dispatch(setImage(image));
      setLoading(false);
    };

    if (imageNumber) {
      fetchImage();
    }
  }, [imageNumber]);

  if (loading) {
    return <span>...loading</span>;
  }

  return imageNumber ? (
    <img width={150} height={150} src={image} alt={imageNumber} />
  ) : null;
};
