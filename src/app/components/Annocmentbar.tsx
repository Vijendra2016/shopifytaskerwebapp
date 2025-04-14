import Link from "next/link";

export default function Topbar() {
  return (
    <div className=" bg-[#a5f1cb] ">
      <h6>
      Pay only after your task is completed to your satisfaction.
        <Link href="/" className="font-medium hover:text-black">
          Create your task now.
        </Link>
      </h6>
    </div>
  );
}
