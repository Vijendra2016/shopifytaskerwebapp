import Link from "next/link";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  email: string;
  image?: string;
};

const team: TeamMember[] = [
  {
    name: "Antoine Stora",
    role: "Partner",
    email: "antoine@gunsmoke.fr",
    image: "/images/antoine.jpg",
  },
  {
    name: "Maxime Coisy",
    role: "Partner",
    email: "maxime@gunsmoke.fr",
  },
  {
    name: "Anastasia Sebban",
    role: "Brand content",
    email: "anastasia@gunsmoke.fr",
  },
  {
    name: "Christelle Lelievre",
    role: "Corporate & Live content",
    email: "christelle@gunsmoke.fr",
  },
  {
    name: "Angèle Lemaire",
    role: "Corporate & Live content",
    email: "angele@gunsmoke.fr",
  },
];

export default function ContactSection() {
  return (
    <section className="bg-black text-white px-6 md:px-14 py-20">
      {/* Top Info Bar */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-white/20 pb-6 mb-20 text-sm">
        <span className="opacity-70">Paris 6:11 AM</span>

        <div className="flex items-center gap-4">
          <span className="border border-white/40 px-5 py-2 rounded-full">
            contact@gunsmoke.fr
          </span>
          <button className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>

        <span className="opacity-70">1er rue Morère – Paris 14e</span>
      </div>

      {/* Title */}
      <h1 className="text-center text-[18vw] leading-none font-light tracking-tight mb-24">
        Contact
      </h1>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-14">
        {team.map((member) => (
          <div key={member.email} className="text-center">
            {member.image && (
              <div className="relative w-full h-72 mb-6 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}

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
