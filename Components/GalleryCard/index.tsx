import React from "react";

type GalleryCardProps = {
  id: string;
  title: string;
  imageUrl: string;
};

const GalleryCard = ({ title, imageUrl }: GalleryCardProps) => {
  return (
    <div
      className="overflow-hidden bg-cover rounded-4xl cursor-pointer h-full min-h-96 group bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="flex justify-items-start items-end p-8 w-full h-full transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-primary/60 group-hover:opacity-100">
        <h2 className="mt-4 text-xl md:text-2xl font-semibold text-white capitalize">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default GalleryCard;
