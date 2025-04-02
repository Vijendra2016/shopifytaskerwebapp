
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center min-h-screen p-2 sm:p-2 gap-8">
  <main className="flex flex-col gap-8 w-full text-center sm:text-left">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center pl-20 pr-20">
        <div className="details">
      <h1 className="text-2xl md:text-6xl font-medium">Get up to 3.5x more data about them</h1>
      <p>At ShopifyTasker, we collaborate with brands to deliver outstanding results across our core service offerings. Our team of skilled developers and marketers work closely with you to ensure success in every possible way. We pride ourselves on providing exceptional outcomes tailored to your unique business needs.
    </p>
    </div>
    <Image
      className="dark:invert w-full h-auto"
      src="https://cdn.prod.website-files.com/66ffe2174aa8e8d5661c2708%2F67288b2fb22e7ee7c157fe73_home%205050%201-poster-00001.jpg"
      alt="Next.js logo"
      width={1080}
      height={58}
      priority
    />
            </div>
    </main>
    </div>
  );
}
