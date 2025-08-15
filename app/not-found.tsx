import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-black flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-5xl md:text-5xl font-semibold text-gray-100">
        Publish Digitally | 404
      </h1>
      <Link href={"/"}>
        <Image
          src="/assets/logo/Author-Logo1.png"
          alt="Logo"
          width={110}
          height={32}
          className="cursor-pointer mt-10"
        />
      </Link>
      <h1 className="text-2xl md:text-3xl font-semibold mt-6 text-white/40">
        This page has not been generated
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-gray-500">
        Tell me what you would like on this page
      </p>
    </div>
  );
}
