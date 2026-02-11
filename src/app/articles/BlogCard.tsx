import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  slug: string;
}

export default function ArticleCard({
  title,
  excerpt,
  image,
  author,
  date,
  slug,
}: ArticleCardProps) {
  return (
    <article className="py-18 border-b border-black/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* IMAGE */}
        <Link href={`/articles/${slug}`} className="block">
<div className="relative w-full aspect-[16/9] rounded-[2px] overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </Link>

        {/* CONTENT */}
        <div className="max-w-[520px]">

          <Link href={`/articles/${slug}`}>
            <h2 className="text-2xl leading-[1.15]  font-thin tracking-[-0.02em] text-black transition-opacity hover:opacity-70">
              {title}
            </h2>
          </Link>

          <p className="mt-3 text-sm leading-[1.75] text-black">
            {excerpt}
          </p>

          {/* AUTHOR + DATE */}
          <div className="mt-10 flex items-center gap-4 text-[14px] text-neutral-500">
            <span>By {author}</span>
            <span className="text-neutral-300">•</span>
            <span>{date}</span>
          </div>

          {/* READ ARTICLE */}
          <Link
            href={`/articles/${slug}`}
            className="mt-20 flex items-center gap-3 text-[14px] text-black"
          >
            <span className="w-[6px] h-[6px] bg-black rounded-full"></span>
            Read article
          </Link>
        </div>
      </div>
    </article>
  );
}
