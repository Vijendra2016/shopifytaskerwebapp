// components/industry/Intro.tsx
type IntroProps = {
  heading: string;
  text: string;
};

export default function Intro({ heading, text }: IntroProps) {
  return (
    <section className="py-20 px-6 max-w-9xl mx-auto text-center">
      <h2 className="text-5xl  Text-black font-semibold">{heading}</h2>
      <p className="mt-6 text-gray-600 text-lg">{text}</p>
    </section>
  );
}
