import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create a Shopify Task | Get Expert Help Fast | ShopifyTasker",
  description:
    "Describe your Shopify task and get matched with a top-rated Shopify expert in minutes. From quick fixes to full projects — pay only after the work is done.",
};

export default function CreateTaskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
