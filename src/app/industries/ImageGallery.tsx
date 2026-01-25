// components/industry/ImageGallery.tsx
import Image from "next/image";

type GalleryProps = {
  images: string[];
};

export default function ImageGallery({ images }: GalleryProps) {
  return (
    <section className="py-10 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
      {images.map((img, i) => (
        <div key={i} className="overflow-hidden rounded-xl">
          <Image
            src={img}
            alt="Project image"
            width={600}
            height={400}
            className="object-cover w-full h-full hover:scale-105 transition"
          />
        </div>
      ))}
    </section>
  );
}
