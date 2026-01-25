// components/industry/SplitSection.tsx
import Image from "next/image";

type SplitProps = {
  title: string;
  text: string;
  image: string;
  reverse?: boolean;
};

export default function SplitSection({
  title,
  text,
  image,
  reverse = false,
}: SplitProps) {
  return (
    <section className="py-20 px-6">
      <div className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
        <div>
          <h3 className="text-3xl font-semibold">{title}</h3>
          <p className="mt-4 text-gray-600">{text}</p>
        </div>
        <Image
          src={image}
          alt={title}
          width={600}
          height={500}
          className="rounded-xl"
        />
      </div>
    </section>
  );
}
