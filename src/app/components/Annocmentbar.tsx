import Link from "next/link";

export default function Topbar() {
  return (
    <div className="text-sm text-gray-700">
      <h6>
        Get your Shopify tasks done with confidence – pay only after completion.{" "}
        <Link href="/" className="font-medium hover:text-black">
          Create your task now.
        </Link>
      </h6>
    </div>
  );
}
