import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <div className="hero max-h-72 border border-gray-500 rounded-b-md">
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="xs:text-2xl mb-5 text-4xl font-bold text-white">
              Hi! I&apos;m Berwyn, software engineer.
            </h1>
            <p className="mb-5 text-gray-50">
              Welcome to my portfolio page. I create web
              applications and AI generated art.
            </p>
          </div>
        </div>
      </div>
      <Link href="https://www.instagram.com/avid.dreamscape" target="_blank">
        <div className="my-2 flex justify-center">
          <Image
            src="https://res.cloudinary.com/dkilrhnk7/image/upload/v1685354630/banner-R1_pxf0ip.png"
            alt="banner"
            width={1500}
            height={800}
            className="border-0 rounded-md"
          />
        </div>
      </Link>
    </>
  );
};
