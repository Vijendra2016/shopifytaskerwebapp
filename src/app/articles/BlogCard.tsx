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
    <article className="py-28 border-b border-neutral-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        
        {/* IMAGE */}
        <Link href={`/articles/${slug}`} className="block">
          <div className="relative w-full h-half  overflow-hidden">
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
            <h2 className="text-[46px] leading-[1.15] font-serif font-normal tracking-[-0.02em] text-neutral-900 transition-opacity hover:opacity-70">
              {title}
            </h2>
          </Link>

          <p className="mt-6 text-[18px] leading-[1.75] text-neutral-500">
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
            className="mt-10 flex items-center gap-3 text-[14px] text-black"
          >
            <span className="w-[6px] h-[6px] bg-black rounded-full"></span>
            Read article
          </Link>
        </div>
      </div>
    </article>
  );
}
