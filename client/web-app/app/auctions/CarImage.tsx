"use client";

import React from "react";
import Image from "next/image";

type CarImageProps = {
  imageUrl: string;
};

export default function CarImage({ imageUrl }: CarImageProps) {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <Image
      src={imageUrl}
      alt="image"
      fill
      className={`object-cover group-hover:opacity-75 duration-700 ease-in-out ${
        isLoading
          ? "grayscale blur-2xl scale-110"
          : "grayscale-0 blur-0 scale-100"
      }`}
      sizes="(max-widgth:768px) 100vw, (max-width: 1200px) 50vm, 25vw"
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
}
