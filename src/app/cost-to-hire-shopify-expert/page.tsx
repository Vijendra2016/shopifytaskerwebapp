import { Metadata } from "next";
import CenteredSlider from "../components/CenteredSlider";
export const metadata: Metadata = {
  title: "Cost to hire shopify expert",
  description:
    "our pricing is start from $20/H we will be give you fix cost , once task done pay ",
};

export default function pricing() {
  return (
    <main className="container mx-auto px-4 py-10 text-center pt-20">
<CenteredSlider/>
<br>
</br>

        <h1 className="text-3xl md:text-6xl font-regular">Honest Pricing for Every Task & project </h1>
        <p>Consistent and predictable rates across our team of in-house Shopify experts. Whether it a quick fix or a full-scale project, you always get transparent, reliable pricing. Request free quotes anytime or choose pre-paid hourly bundles to save and stay in control of your budget.

</p>
<h2>$20

per hour 

Best for small and large project needs without an urgent deadline.</h2>
<h2>$30

per hour 

Best for small and large project needs  an urgent deadline.</h2>
    </main>
  );
}
