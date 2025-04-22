import Image from "next/image";

type PromoItem = {
  title: string;
  subtitle: string;
  smalldetails: string;
  buttonText: string;
  imageUrl: string;
  bgColor: string;
};

const PromoGrid = () => {
  const promos: PromoItem[] = [
    {
      title: "Setup Shopify Store",
      subtitle: "We work on the shopify storeScore exclusive offers, the latest drops, and early access to limited releases! develoment Score exclusive offers, the latest drops, and early access to limited releases!",
      smalldetails: "We can create your Shopify store using custom or premium themes. We've built and set up over 350 Shopify stores. Hire an experienced Shopify web developer from ShopifyTasker today",
      buttonText: "SHOP NOW",
      imageUrl: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67860b0fa33a316e968231bd_Stack%20Images%2003.jpg",
      bgColor: "bg-sky-400",
    },
    {
      title: "THE EVERYWHERE BACKPACK",
      subtitle: "Now in Beige",
      smalldetails:"We provide fully customized Shopify solutions tailored to your business goals. Whether you need a bespoke theme, unique store functionality, or seamless third-party integrations, our team ensures your store operates smoothly and efficiently.",
      buttonText: "SHOP NOW",
      imageUrl: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67860b0fa33a316e968231bd_Stack%20Images%2003.jpg",
      bgColor: "bg-[rgb(208,188,155)]",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {promos.map((promo, index) => (
        <div
          key={index}
          className={`${promo.bgColor} relative h-[400px] w-full rounded-xl overflow-hidden`}
        >
          {/* Background Image */}
          <Image
            src={promo.imageUrl}
            alt={promo.title}
            fill
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 text-white">
            <h2 className="text-3xl font-bold mb-2">{promo.title}</h2>
            <p className="mb-4 text-lg">{promo.subtitle}</p>
            <p className="mb-4 text-sm">{promo.smalldetails}</p>
            <button className="bg-white text-black font-bold px-6 py-3 rounded-full shadow-md hover:scale-105 transition">
              {promo.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PromoGrid;
