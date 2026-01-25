import Image from "next/image";

type HeroProps = {
  title: string;
  subtitle: string;
  image: string;
};

export default function Hero({ title, subtitle, image }: HeroProps) {
  return (
    <section className="py-16">
      {/* Page Container */}
      <div className=" mx-auto px-6">
        
        {/* Image Box */}
        <div className="relative h-[70vh]  overflow-hidden">
          
          {/* Image */}
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              {title}
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">
              {subtitle}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
