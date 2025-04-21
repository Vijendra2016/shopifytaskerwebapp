import Image from 'next/image';
import { TfiArrowTopRight } from 'react-icons/tfi';
import { TiLocation } from "react-icons/ti";


const testimonials = [
  {
    name: 'Lou Childs',
    role: 'COO at SlumberPod',
    quote:
      '“Excellent communication and dedication to the timeline—even over a holiday! Shopifytasker did a great job migrating our website from Squarespace to Shopify—going beyond expectations. Highly recommend!”',
    image:
      'https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6800863ad16a29c277021afe_1678553503844.jpeg',
    logo:
      'https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68008a90a4c1bef400fc2c2b_image%20(2).png',
    link: 'https://www.slumberpod.com/',
    service: 'Squarespace to Shopify Migration',
    location: 'USA'
  },
  {
    name: 'Kyle Colpack',
    role: 'Founder and CEO at Black Tie CBD',
    quote:
      '“Always a pleasure working with Shopify Tasker. Simply explain the issue and ShopifyTasker will promptly resolve it for you .”',
    image: 'https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67860b0fa33a316e9682321f_Entropy%20Team%20Images%2001.jpg',
    logo: 'https://cdn.prod.website-files.com/67860b0fa33a316e96823102/680098c193c3a69c8e3e2a3b_blacktie.png',
    link: 'https://www.blacktiecbd.net',
    service: 'Shopify On-going Support',
    location: 'USA'
  },
  {
    name:'Mads Crawford',
    role: 'Founder at SHOPBOXD',
    quote:
      '“Excellent job building my site and the ongoing support has been quick and to a high quality.”',
    image: 'https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6800a384fb924b0148b4d0d6_mad.jpeg',
    logo: 'https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6800a4dfa301a04d362e041b_shopboxuk.png',
    link: 'https://shopboxd.co.uk/',
    service: 'Shopify Development & Support',
    location: 'UK'
  },
];

const TestimonialCardGrid = () => {
  return (
    <div className="bg-black py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-6 shadow-xl flex flex-col items-center text-center space-y-4"
          >
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={120}
              height={120}
              className="rounded-full object-cover border border-black"
            />
            <p className="text-gray-800 text-lg">{testimonial.quote}</p>
            <div>
              <p className="text-black font-semibold">{testimonial.name}</p>
              <p className="text-sm text-black">{testimonial.role}</p>
            </div>
            {testimonial.logo && (
              <Image
                src={testimonial.logo}
                alt={`${testimonial.name} logo`}
                width={150}
                height={80}
              />
            )}
            <a
              href={testimonial.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-pink-300 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-400 transition"
            >
              {new URL(testimonial.link).host}
              <TfiArrowTopRight className="ml-2" />
            </a>
            <span className="inline-flex items-center bg-blue-100 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-400 transition">{testimonial.service}</span>
            <span className="inline-flex  ">
  <TiLocation className="mr-1" />
  {testimonial.location}
</span>

          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCardGrid;
