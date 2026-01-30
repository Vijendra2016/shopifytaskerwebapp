import Link from "next/link";

type TeamMember = {
  name: string;
  role: string;
  email: string;
 
};

const team: TeamMember[] = [
  
  {
    name: "Support",
    role: "Any issue you facing Please email us",
    email: "support@shopifytasker.com",
  },
  {
    name: "Sale",
    role: "New project/ task",
    email: "sales@shopifytasker.com",
  },
  {
    name: "WhatsApp",
    role: "For Quick Chat",
    email: "+91-7014716631",
  },
  
];

export default function ContactSection() {
  return (
    <section className="bg-black text-white px-6 md:px-14 py-20">
      {/* Top Info Bar */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-white/20 pb-6 mb-20 text-sm">
        <span className="opacity-70">On demand Shopify Developer / Designer </span>

        <div className="flex items-center gap-4">
          <span className="border border-white/40 px-5 py-2 rounded-full">
           support@shopifytasker.com
          </span>
          <button className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>

        
      </div>

      {/* Title */}
      <h1 className="text-center text-[18vw] leading-none font-light tracking-tight mb-24">
        Contact
      </h1>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {team.map((member) => (
          <div key={member.email} className="text-center">
            

            <p className="font-medium">{member.name}</p>
            <p className="text-sm opacity-70 mb-2">{member.role}</p>

            <Link
              href={`mailto:${member.email}`}
              className="text-sm underline underline-offset-4 opacity-80 hover:opacity-100"
            >
              {member.email}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
