import React from "react";
import GalleryCard from "@/Components/galleryCard";

type GalleryProps = {
  card: {
    id: string;
    title: string;
    imageUrl: string;
  }[];
};

const customClass = (id: number) => {
  switch (id) {
    case 0:
      return "col-span-3 md:col-span-2";
    case 1:
      return "col-span-3 row-span-1 md:row-span-2 md:col-span-1";
    case 5:
      return "col-span-3 md:col-span-2";
    case 6:
      return "col-span-3 md:col-span-2";
    default:
      return "col-span-3 md:col-span-1";
  }
};

const Gallery = ({ card }: GalleryProps) => {
  return (
    <section className="w-full flex justify-center items-center p-4 md:p-24 relative">
      <div className="grid grid-cols-3 gap-4 w-full">
        {card.map((item, idx) => (
          <div key={item.id} className={customClass(idx)}>
            <GalleryCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
